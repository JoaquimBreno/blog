// src/app/blog/[slug]/page.tsx
import { BlogPostProps } from '@/lib/getposts';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts } from '@/lib/getcachedposts';
import Loader from '@/components/ui/loader';
import { Suspense } from 'react';
// Dynamically import client components
const BlogPost = dynamic(() => import('@/components/BlogPosts'), {
  ssr: true,
});



// Cache the posts globally (outside the component)
let cachedPosts: BlogPostProps[] | null = null;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: {params: Promise<{ slug: string }>}): Promise<Metadata> {
  const { slug } = await params;
  cachedPosts = await getAllPosts();


  const post = cachedPosts?.find((p) => p.slug === slug) ?? null;

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
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

export default async function BlogPostPage({ params }: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  if(!cachedPosts){
    cachedPosts = await getAllPosts();
  }

  const post = cachedPosts?.find((p) => p.slug === slug) ?? null;

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, cachedPosts);

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
    "url": `https://joaquimbreno.com/blog/${slug}`
  };


  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Suspense fallback={<Loader />}>
      <BlogPost post={post} relatedPosts={relatedPosts} />
    </Suspense>
    </>
  );
}
