import dynamic from 'next/dynamic';
import { getAllPosts } from "@/lib/getcachedposts";
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from '@/components/FooterRSS';
import { Suspense } from "react";
import Loader from '@/components/ui/loader';

const BlogList = dynamic(() => import('@/components/BlogLists'), {
  ssr: true
});

// Revalidate every 5 minutes (or use API route for instant updates)
export const revalidate = 300;

export async function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'pt' ? 'Blog' : 'Blog',
    description: locale === 'pt' 
      ? 'Leia os últimos posts do blog' 
      : 'Read our latest blog posts',
    alternates: {
      canonical: `https://joaquimbreno.com/${locale}/blog`,
      languages: {
        'pt': 'https://joaquimbreno.com/pt/blog',
        'en': 'https://joaquimbreno.com/en/blog',
        'x-default': 'https://joaquimbreno.com/pt/blog',
      },
    },
    openGraph: {
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      alternateLocale: locale === 'pt' ? ['en_US'] : ['pt_BR'],
    },
  };
}

export default async function BlogContent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  try {
    const posts = await getAllPosts(locale);
    const latestPosts = posts.slice(0, 5);
    
    return (
      <div className="flex-1 p-4 lg:p-8 bg-white">
        <Suspense fallback={<Loader />}>
          <section className="mb-8 max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8" style={{ fontFamily: "Geist Mono, monospace" }}>
              {locale === 'pt' ? 'Posts Recentes' : 'Latest Posts'}
            </h2>
            
            <BlogList posts={latestPosts} />
            
            <div className="mt-8">
              <Link href={`/${locale}/archive`} passHref>
                <Button type="submit" className="bg-black text-white hover:bg-gray-800" style={{ fontFamily: "Geist Mono, monospace" }}>
                  {locale === 'pt' ? 'Ver Arquivo Completo' : 'View Full Archive'}
                </Button>
              </Link>
            </div>
          </section>
        </Suspense>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error in BlogPage:', error);
    const errorMsg = locale === 'pt'
      ? 'Ocorreu um erro ao carregar os posts.'
      : 'An error occurred while loading posts.';
    return <div className="text-center py-10">{errorMsg}</div>;
  }
}

