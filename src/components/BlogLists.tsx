"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlogPostProps } from '@/lib/getposts';

const BlogList: React.FC<{ posts: BlogPostProps[]; full?: boolean  }> = ({ posts , full = false}) => {
  return (
    <div className="bg-white w-full" style={{ fontFamily: "Geist Mono, monospace" }}>
      {posts.length === 0 ? (
        <div className="text-center py-10">No posts found</div>
      ) : 
      (full ? 
        (
        <div className="space-y-6">
          {posts.map((post) => (
            <ResumedPost key={post.slug} post={post} />
          ))}
        </div>
        ) : 
        (
          <div className="space-y-6">
            {posts.map((post) => (
              <ResumedPost key={post.slug} post={post} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

const ResumedPost: React.FC<{ post: BlogPostProps }> = ({ post }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'pt';

  return (
    <div className="pb-4 mb-4 border-b border-gray-200">
      <Link href={`/${locale}/blog/${post.slug}`} className="no-underline hover:no-underline">
        <p className="text-sm mb-2" style={{ fontFamily: "Geist Mono, monospace" }}>
          {new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }).format(new Date(post.date))}
        </p>
        <h3 className="text-lg hover:underline mb-2" style={{ fontFamily: "Geist Mono, monospace" }}>{post.title}</h3>
      </Link>
    </div>
  );
};

export default BlogList;