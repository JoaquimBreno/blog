import SubscribeForm from "@/components/Subscribe";
import dynamic from 'next/dynamic';
import { getAllPosts } from "@/lib/getcachedposts";
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { generateRssFeed } from '@/lib/rss';
import Footer  from '@/components/FooterRSS';
import { Suspense } from "react";
import Loader from '@/components/ui/loader';

const BlogList = dynamic(() => import('@/components/BlogLists'), {
  ssr: true
});

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts',
};


async function BlogContent() {
  try{
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 5);
  try {
    generateRssFeed(posts);
  } catch (rssError) {
    console.error('Error generating RSS feed:', rssError);
  }
    return (
      <div className="flex-1 p-4 lg:p-8">
        <Suspense fallback={<Loader />}>
        {/* Sections can also be individual components if they grow in complexity */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Latest Posts</h2>
            
              <BlogList posts={latestPosts} />
            
            <div className="mt-4">
              <Link href="/archive" passHref>
                <Button type="submit">View Full Archive</Button>
              </Link>
            </div>
            {/* Iterate over data and render BlogPost components */}
          </section>
          {/* SubscribeForm Component */}
          <SubscribeForm />
        </Suspense>
        <Footer />
      </div>
      
    );
  } catch (error) {
    console.error('Error in BlogPage:', error);
    return <div className="text-center py-10">An error occurred while loading the blog page. Please try again later.</div>;
  }
}

export default BlogContent;