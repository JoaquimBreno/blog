// Cache usando Map com suporte a idiomas
import { BlogPostProps } from "@/lib/getposts";
import { getBlogPosts } from "@/lib/getposts";
const cache = new Map<string, BlogPostProps[]>();

export async function getAllPosts(locale: string = 'pt') {
  const cacheKey = `posts-${locale}`;
  
  if (cache.has(cacheKey)) {
    console.log(`Returning posts from cache (${locale})`);
    return cache.get(cacheKey)!;
  }

  try {
    const posts = await getBlogPosts(locale);
    cache.set(cacheKey, posts); // Armazena no cache por idioma
    return posts;
  } catch (error) {
    console.error(`Error fetching blog posts (${locale}):`, error);
    return [];
  }
}
