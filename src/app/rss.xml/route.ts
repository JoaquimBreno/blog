import { getAllPosts } from '@/lib/getcachedposts';
import RSS from 'rss';

export const revalidate = 300; // Revalidate every 5 minutes

export async function GET() {
  const siteUrl = 'https://joaquimbreno.com';
  const locale = 'pt'; // Default to Portuguese
  const posts = await getAllPosts(locale);

  const feed = new RSS({
    title: 'Joaquim Breno Blog',
    description: 'Blog sobre Machine Learning, tecnologia e desenvolvimento de software',
    site_url: `${siteUrl}/pt`,
    feed_url: `${siteUrl}/rss.xml`,
    image_url: `${siteUrl}/icon.png`,
    pubDate: new Date().toUTCString(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Joaquim Breno`,
    language: 'pt-BR',
    ttl: 60,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/pt/blog/${post.slug}`,
      guid: `${siteUrl}/pt/blog/${post.slug}`,
      date: new Date(post.date).toUTCString(),
      author: post.author,
      categories: post.tags || [],
      enclosure: post.coverImage ? {
        url: post.coverImage,
        type: 'image/png',
      } : undefined,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}


