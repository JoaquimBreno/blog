import fs from 'fs';
import { BlogPostProps } from '@/lib/getposts';
import RSS from 'rss';

export async function generateRssFeed(allPosts: BlogPostProps[]) {
  const siteUrl = process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_SITE_URL || ''
    : 'http://localhost:3000';

  try {
    const feedOptions = {
      title: process.env.NEXT_PUBLIC_SITE_NAME || 'Blog posts | RSS Feed',
      description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Welcome to this blog posts!',
      site_url: siteUrl,
      feed_url: `${siteUrl}/rss.xml`,
      image_url: `${siteUrl}/logo.jpeg`,
      pubDate: new Date().toUTCString(),
      copyright: `All rights reserved ${new Date().getFullYear()}`,
    };

    const feed = new RSS(feedOptions);

    allPosts.forEach((post: BlogPostProps) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`;
      feed.item({
        title: post.title,
        description: post.excerpt ?? '',
        url: postUrl,
        date: new Date(post.date).toUTCString(),
        author: post.author ?? 'Unknown',
        categories: post.category ? [post.category] : [],
      });
    });

    if (!fs.existsSync('./public')) {
      fs.mkdirSync('./public');
    }

    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }), 'utf-8');
  } catch (error) {
    console.error('RSS feed generation error:', error);
  }
}