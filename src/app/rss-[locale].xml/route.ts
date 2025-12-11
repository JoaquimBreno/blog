import { getAllPosts } from '@/lib/getcachedposts';
import RSS from 'rss';
import { NextRequest } from 'next/server';

export const revalidate = 300; // Revalidate every 5 minutes

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ locale: string }> }
) {
  const params = await context.params;
  const locale = params?.locale || 'pt';
  
  if (!['pt', 'en'].includes(locale)) {
    return new Response('Invalid locale', { status: 404 });
  }

  const siteUrl = 'https://joaquimbreno.com';
  const posts = await getAllPosts(locale);

  const feed = new RSS({
    title: locale === 'pt' 
      ? 'Joaquim Breno Blog - Posts em Português' 
      : 'Joaquim Breno Blog - Posts in English',
    description: locale === 'pt'
      ? 'Blog sobre Machine Learning, tecnologia e desenvolvimento de software'
      : 'Blog about Machine Learning, technology and software development',
    site_url: `${siteUrl}/${locale}`,
    feed_url: `${siteUrl}/rss-${locale}.xml`,
    image_url: `${siteUrl}/icon.png`,
    pubDate: new Date().toUTCString(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Joaquim Breno`,
    language: locale === 'pt' ? 'pt-BR' : 'en-US',
    ttl: 60,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      guid: `${siteUrl}/${locale}/blog/${post.slug}`,
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

