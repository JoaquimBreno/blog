// TODO: Uncomment when Subscribe feature is ready
// import SubscribeForm from "@/components/Subscribe";
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
      <div className="flex-1 p-4 lg:p-8 bg-white">
        <Suspense fallback={<Loader />}>
          <section className="mb-8 max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8" style={{ fontFamily: "Geist Mono, monospace" }}>Latest Posts</h2>
            
              <BlogList posts={latestPosts} />
            
            <div className="mt-8">
              <Link href="/archive" passHref>
                <Button type="submit" className="bg-black text-white hover:bg-gray-800" style={{ fontFamily: "Geist Mono, monospace" }}>
                  View Full Archive
                </Button>
              </Link>
            </div>
          </section>
          {/* TODO: Uncomment when Subscribe feature is ready */}
          {/* <div className="max-w-4xl mx-auto">
            <SubscribeForm />
          </div> */}
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