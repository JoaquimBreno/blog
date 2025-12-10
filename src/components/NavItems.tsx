"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const navItems = [
  { name: "About", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Posts", href: "/blog" },
  { name: "Archive", href: "/archive" },
  // TODO: Uncomment when Subscribe feature is ready
  // { name: "Subscribe", href: "/subscribe" },
];

export function NavItems() {
  const pathname = usePathname();
  const [locale, setLocale] = useState('pt');

  useEffect(() => {
    const currentLocale = pathname.split('/')[1];
    if (['pt', 'en'].includes(currentLocale)) {
      setLocale(currentLocale);
    }
  }, [pathname]);

  return (
    <nav className="flex justify-center lg:justify-start gap-4 lg:gap-0 lg:flex-col">
      {navItems.map((item) => {
        return (
          <Link 
            href={`/${locale}${item.href}`}
            key={item.name}
            className="hover:underline text-sm lg:text-base transition-opacity hover:opacity-70"
            style={{ fontFamily: "Geist Mono, monospace" }}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}