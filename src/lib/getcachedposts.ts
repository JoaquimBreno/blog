// Cache usando Map
import { BlogPostProps } from "@/lib/getposts";
import { getBlogPosts } from "@/lib/getposts";
const cache = new Map<string, BlogPostProps[]>();

export async function getAllPosts() {
  if (cache.has('posts')) {
    console.log('Returning posts from cache');
    return cache.get('posts')!;
  }

  try {
    const posts = await getBlogPosts();
    cache.set('posts', posts); // Armazena no cache
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
