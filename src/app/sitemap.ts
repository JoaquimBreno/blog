import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/getcachedposts';

export const revalidate = 300; // Revalidate every 5 minutes

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://joaquimbreno.com';
  const locales = ['pt', 'en'];
  
  // Static pages for each locale
  const staticPages = ['', '/blog', '/archive', '/resume', '/subscribe'];
  
  const routes = staticPages.flatMap(route => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          pt: `${baseUrl}/pt${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    }))
  );

  // Dynamic blog posts for each locale
  const postEntries = await Promise.all(
    locales.map(async locale => {
      try {
        const posts = await getAllPosts(locale);
        return posts.map(post => ({
          url: `${baseUrl}/${locale}/blog/${post.slug}`,
          lastModified: new Date(post.date),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
          alternates: {
            languages: {
              pt: `${baseUrl}/pt/blog/${post.slug}`,
              en: `${baseUrl}/en/blog/${post.slug}`,
            },
          },
        }));
      } catch (error) {
        console.error(`Error fetching posts for ${locale}:`, error);
        return [];
      }
    })
  );

  return [...routes, ...postEntries.flat()];
}


