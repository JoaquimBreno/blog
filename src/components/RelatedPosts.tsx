// src/components/RelatedPosts.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlogPostProps } from '@/lib/getposts';

const RelatedPosts: React.FC<{ posts: BlogPostProps[] }> = ({ posts }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'pt';

  return (
      <div className="mt-12 pt-8 border-t border-gray-300">
        <h2 className="text-xl mb-6" style={{ fontFamily: "Geist Mono, monospace" }}>
          {locale === 'pt' ? 'Mais sobre este tópico' : 'More on this topic'}
        </h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="block hover:underline">
              <div className="py-2">
                <h3 className="text-lg" style={{ fontFamily: "Geist Mono, monospace" }}>{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default RelatedPosts;

