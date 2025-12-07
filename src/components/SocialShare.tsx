// src/components/SocialShare.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

interface SocialShareProps {
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title }) => {
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const socialPlatforms: {
    name: string;
    icon: React.ReactNode;
    getShareUrl: (url: string, title: string) => string;
  }[] = [
    {
      name: 'twitter',
      icon: <Twitter size={24} />,
      getShareUrl: (url: string, title: string) =>
        `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: 'facebook',
      icon: <Facebook size={24} />,
      getShareUrl: (url: string) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: 'linkedin',
      icon: <Linkedin size={24} />,
      getShareUrl: (url: string, title: string) =>
        `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <div className="flex space-x-4 mb-8">
      {socialPlatforms.map(({ name, icon, getShareUrl }) => (
        <a
          key={name}
          href={getShareUrl(currentUrl, title)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-70 transition-opacity"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialShare;