import BlogList from '@/components/BlogLists';
import { Metadata } from 'next';
import React from 'react';
import Footer from '@/components/FooterRSS';
import { generateRssFeed } from '@/lib/rss';
import { getAllPosts } from '@/lib/getcachedposts';
import { Suspense } from 'react';
import Loader from '@/components/ui/loader';

// Revalidate every hour for better performance
export const revalidate = 3600;

export async function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'pt' ? 'Arquivo - Joaquim Breno' : 'Archive - Joaquim Breno',
    description: locale === 'pt' 
      ? 'Navegue por todos os posts do blog. Explore tópicos de ML, tech e IA.' 
      : 'Browse all blog posts. Explore topics on ML, tech and AI.',
    keywords: ['blog', 'archive', 'machine learning', 'tech', 'AI'],
    robots: 'index,follow',
    alternates: {
      canonical: `https://joaquimbreno.com/${locale}/archive`,
      languages: {
        'pt': 'https://joaquimbreno.com/pt/archive',
        'en': 'https://joaquimbreno.com/en/archive',
        'x-default': 'https://joaquimbreno.com/pt/archive',
      },
    },
    openGraph: {
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      alternateLocale: locale === 'pt' ? ['en_US'] : ['pt_BR'],
    },
  };
}

export default async function ArchivePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  try {
    const posts = await getAllPosts(locale);
    try {
      generateRssFeed(posts);
    } catch (rssError) {
      console.error('Error generating RSS feed:', rssError);
    }
    return (
      <div className="flex-1 p-4 lg:p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl mb-8" style={{ fontFamily: "Geist Mono, monospace" }}>
            {locale === 'pt' ? 'Arquivo' : 'Archive'}
          </h1>
          <Suspense fallback={<Loader />}>
            <BlogList posts={posts} full={true} />
          </Suspense>
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error in ArchivePage:', error);
    const errorMsg = locale === 'pt' 
      ? 'Ocorreu um erro ao carregar o arquivo. Tente novamente mais tarde.'
      : 'An error occurred while loading the archive. Please try again later.';
    return <div className="text-center py-10">{errorMsg}</div>;
  }
}

