import { Twitter, Rss } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t border-gray-300 p-8 mt-12 text-center bg-white">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://twitter.com/JoaquimBreno" target="_blank" rel="noopener noreferrer" className="hover:underline transition-opacity hover:opacity-70" style={{ fontFamily: "Geist Mono, monospace" }}>
          <Twitter size={20} />
        </a>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline transition-opacity hover:opacity-70" style={{ fontFamily: "Geist Mono, monospace" }}>
          <Rss size={20} />
          <span>RSS</span>
        </a>
      </div>
      <p className="mb-2" style={{ fontFamily: "Geist Mono, monospace" }}>
        <Link href="/" className="hover:underline transition-opacity hover:opacity-70">Home</Link>
        {' / '}
        <Link href="/archive" className="hover:underline transition-opacity hover:opacity-70">Archive</Link>
        {' / '}
        <Link href="/rss.xml" className="hover:underline transition-opacity hover:opacity-70">RSS</Link>
        {' / '}
        <a href="https://twitter.com/JoaquimBreno" target="_blank" rel="noopener noreferrer" className="hover:underline transition-opacity hover:opacity-70">Twitter</a>
      </p>
      <p className="text-sm text-gray-500" style={{ fontFamily: "Geist Mono, monospace" }}>
        Last updated: Dec 2024
      </p>
    </footer>
  );
}

export default Footer;

