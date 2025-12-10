// src/app/[locale]/blog/[slug]/page.tsx
import { BlogPostProps } from '@/lib/getposts';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/getcachedposts';
import Loader from '@/components/ui/loader';
import { Suspense } from 'react';

const BlogPost = dynamic(() => import('@/components/BlogPosts'), {
  ssr: true,
});

let cachedPosts: { [key: string]: BlogPostProps[] } = {};

// Revalidate every hour for better performance
export const revalidate = 3600;

export async function generateStaticParams() {
  const locales = ['pt', 'en'];
  const params = [];
  
  for (const locale of locales) {
    try {
      const posts = await getAllPosts(locale);
      for (const post of posts) {
        params.push({ locale, slug: post.slug });
      }
    } catch (error) {
      console.error(`Error generating params for ${locale}:`, error);
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;
  
  if (!cachedPosts[locale]) {
    cachedPosts[locale] = await getAllPosts(locale);
  }

  const post = cachedPosts[locale]?.find((p) => p.slug === slug) ?? null;

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = 'https://joaquimbreno.com';
  const postUrl = `${baseUrl}/${locale}/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
      languages: {
        'pt': `${baseUrl}/pt/blog/${slug}`,
        'en': `${baseUrl}/en/blog/${slug}`,
        'x-default': `${baseUrl}/pt/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: 'Joaquim Breno Blog',
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      alternateLocale: locale === 'pt' ? ['en_US'] : ['pt_BR'],
      images: post.coverImage ? [{
        url: post.coverImage,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : undefined,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    robots: 'index, follow',
  };
}

const getRelatedPosts = (currentPost: BlogPostProps, allPosts: BlogPostProps[], limit = 3): BlogPostProps[] => {
  return allPosts
    .filter((p) => p.slug !== currentPost.slug)
    .sort((a, b) => {
      const aCommonTags = a.tags?.filter((tag) => currentPost.tags?.includes(tag)).length ?? 0;
      const bCommonTags = b.tags?.filter((tag) => currentPost.tags?.includes(tag)).length ?? 0;
      return bCommonTags - aCommonTags;
    })
    .slice(0, limit);
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  
  if (!cachedPosts[locale]) {
    cachedPosts[locale] = await getAllPosts(locale);
  }

  const post = cachedPosts[locale]?.find((p) => p.slug === slug) ?? null;

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, cachedPosts[locale]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "image": post.coverImage,
    "url": `https://joaquimbreno.com/${locale}/blog/${slug}`,
    "inLanguage": locale === 'pt' ? 'pt-BR' : 'en-US',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Suspense fallback={<Loader />}>
        <BlogPost post={post} relatedPosts={relatedPosts} locale={locale} />
      </Suspense>
    </>
  );
}

