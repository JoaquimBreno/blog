// pages/archive.tsx
import BlogList from '@/components/BlogLists';
import { Metadata } from 'next';
import React from 'react';
import Footer from '@/components/FooterRSS';
import { generateRssFeed } from '@/lib/rss';
import { getAllPosts } from '@/lib/getcachedposts';
import { Suspense } from 'react';
import Loader from '@/components/ui/loader';

export const metadata: Metadata = {
  title: 'Blog Archive - Your Blog Name',
  description: 'Browse all blog posts from Your Blog Name. Explore topics ranging from X to Y.',
  keywords: ['blog', 'archive', 'Your Blog Name', 'topics', 'X', 'Y'],
  robots: 'index,follow',
};

const ArchivePage: React.FC = async () => {
  try {
    const posts = await getAllPosts();
    try {
      generateRssFeed(posts);
    } catch (rssError) {
      console.error('Error generating RSS feed:', rssError);
    }
    return (
      <div className="flex-1 p-4 lg:p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl mb-8" style={{ fontFamily: "Geist Mono, monospace" }}>Archive</h1>
          <Suspense fallback={<Loader />}>
            <BlogList posts={posts} full={true} />
          </Suspense>
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error in ArchivePage:', error);
    return <div className="text-center py-10">An error occurred while loading the archive. Please try again later.</div>;
  }
};

export default ArchivePage;