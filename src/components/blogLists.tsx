import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use Next.js's built-in Image component for server-rendered images
import { BlogPostProps } from '@/lib/getposts';

const BlogList: React.FC<{ posts: BlogPostProps[]; full?: boolean  }> = ({ posts , full = false}) => {
  return (
    <div className="bg-gradient-to-b from-[var(--background)] to-white w-full text-xl md:text-2xl text-[var(--foreground)] leading-normal rounded-t">
      {posts.length === 0 ? (
        <div className="text-center py-10">No posts found</div>
      ) : 
      (full ? 
        (
        <div>
          {posts.map((post) => (
            <ResumedPost key={post.slug} post={post} />
          ))}
        </div>
        ) : 
        (
          <>
          {posts.length >0 && <FeaturedPost post={posts[0]} />}
          <div className="grid md:grid-cols-2 gap-4">
            {posts.slice(1).map((post) => (
              <RegularPost key={post.slug} post={post} />
            ))}
          </div>
          </>
        )
      )}
    </div>
  );
};

const FeaturedPost: React.FC<{ post: BlogPostProps }> = ({ post }) => (
  <div className="flex flex-col md:flex-row h-full bg-[var(--card)] rounded-lg overflow-hidden border mb-8">
    <Link href={`/blog/${post.slug}`} className="flex flex-wrap no-underline hover:no-underline w-full">
      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-[var(--card)] overflow-hidden">
          <p className="w-full text-[var(--muted-foreground)] text-xs md:text-sm pt-6 px-6">{post.category.toUpperCase()}</p>
          <div className="w-full font-bold text-xl text-[var(--secondary-foreground)] px-6 my-2">{post.title}</div>
          <p className="text-[var(--foreground)] font-serif text-base px-6 mb-5">{post.excerpt}</p>
        </div>
        <div className="flex-none mt-auto bg-[var(--card)] p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <p className="text-[var(--muted-foreground)] text-xs md:text-sm">
              {new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              }).format(new Date(post.date))}
            </p>
            </div>
            <p className="text-[var(--muted-foreground)] text-xs md:text-sm">{post.readingTime}</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
    </Link>
  </div>
);

const RegularPost: React.FC<{ post: BlogPostProps }> = ({ post }) => (
  <div className="bg-[var(--card)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border mb-4">
    <Link href={`/blog/${post.slug}`} className="flex flex-col no-underline hover:no-underline">
      <div className="relative h-48">
        <Image
          src={post.coverImage}
          alt={post.title}
          className="object-cover"
          layout="fill"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="p-4">
        <p className="text-[var(--muted-foreground)] text-xs md:text-sm">{post.category.toUpperCase()}</p>
        <h3 className="font-bold text-lg text-[var(--secondary-foreground)] my-2">{post.title}</h3>
        <p className="text-[var(--foreground)] text-sm">{post.excerpt}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-[var(--muted-foreground)] text-xs">
            {new Intl.DateTimeFormat('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }).format(new Date(post.date))}
          </span>
          <span className="text-[var(--muted-foreground)] text-xs">{post.readingTime}</span>
        </div>
      </div>
    </Link>
  </div>
);

const ResumedPost: React.FC<{ post: BlogPostProps }> = ({ post }) => (
  <div className="bg-[var(--card)] rounded-lg border mb-4 p-4">
    <Link href={`/blog/${post.slug}`} className="flex flex-col no-underline hover:no-underline">
      <p className="text-[var(--muted-foreground)] text-xs md:text-sm">{post.category.toUpperCase()}</p>
      <h3 className="font-bold text-lg text-[var(--secondary-foreground)] my-2">{post.title}</h3>
      <p className="text-[var(--foreground)] text-sm">{post.excerpt}</p>
    </Link>
  </div>
);

export default BlogList;