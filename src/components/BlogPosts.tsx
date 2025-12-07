import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/dateformat";
import { BlogPostProps } from "@/lib/getposts";
import { Github, Twitter, Linkedin } from "lucide-react";
import RelatedPosts from "@/components/RelatedPosts";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SocialShare from "@/components/SocialShare";
import Image from "next/image";

const BlogPost: React.FC<{
  post: BlogPostProps;
  relatedPosts: BlogPostProps[];
}> = ({ post, relatedPosts }) => {
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Error: Post data is missing
      </div>
    );
  }

  const renderHTMLContent = () => {
    if (!post.htmlContent) {
      return <div className="text-red-500">Error: HTML content is missing</div>;
    }

    return (
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />
    );
  };

  return (
    <div className="bg-white text-black font-sans leading-normal tracking-normal" style={{ fontFamily: "Geist Mono, monospace" }}>
      <header className="fixed w-full z-10 top-0 bg-white bg-opacity-95 backdrop-blur-md transition duration-300 border-b border-gray-300">
        <ScrollProgressBar />
        <nav className="container mx-auto px-4 py-2">
          <Link href="/blog">
            <span className="hover:underline" style={{ fontFamily: "Geist Mono, monospace" }}>← Back to Blog</span>
          </Link>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl pt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {post.authorImage ? (
              <Image
                src={post.authorImage}
                alt={`Profile picture of ${post.author}`}
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600">?</span>
              </div>
            )}
            <div>
            {post.author && (
              <p style={{ fontFamily: "Geist Mono, monospace" }}>{post.author}</p>
            )}
            {post.date && (
              <p className="text-sm" style={{ fontFamily: "Geist Mono, monospace" }}>
                {formatDate(post.date)}
              </p>
            )}
            </div>
          </div>
          {post.readingTime && (
            <p className="text-sm" style={{ fontFamily: "Geist Mono, monospace" }}>{post.readingTime}</p>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl mb-8" style={{ fontFamily: "Geist Mono, monospace" }}>
          {post.title || "Untitled Post"}
        </h1>

        <SocialShare title={post.title || "Untitled Post"} />

        {renderHTMLContent()}

        {post.author && (
          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="flex items-center mb-4">
              {post.authorImage ? (
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="mr-4"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-300 mr-4 flex items-center justify-center">
                  <span className="text-gray-600">?</span>
                </div>
              )}
              <div>
                <h3 className="text-xl" style={{ fontFamily: "Geist Mono, monospace" }}>{post.author}</h3>
                {post.authorBio && (
                  <p style={{ fontFamily: "Geist Mono, monospace", lineHeight: "150%" }}>{post.authorBio}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {relatedPosts && relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} />
        )}
      </div>

      <footer className="bg-white border-t border-gray-300 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p style={{ fontFamily: "Geist Mono, monospace" }}>
            Built with Cavalcante's GitHub Markdown Blog System 
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/JoaquimBreno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/joaquimbreno/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;