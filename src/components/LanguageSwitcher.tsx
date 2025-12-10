"use client";

import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<'pt' | 'en'>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get current locale from pathname
    const currentLocale = pathname.split('/')[1] as 'pt' | 'en';
    if (['pt', 'en'].includes(currentLocale)) {
      setLocale(currentLocale);
    }
  }, [pathname]);

  const switchLanguage = (newLocale: string) => {
    // Get current locale from pathname
    const currentLocale = pathname.split('/')[1];
    
    if (['pt', 'en'].includes(currentLocale)) {
      // Replace locale in path
      const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
      
      // Set cookie for persistence
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      
      router.push(newPath);
    } else {
      // If no locale in path, add it
      router.push(`/${newLocale}${pathname}`);
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-2 text-sm" style={{ fontFamily: "Geist Mono, monospace" }}>
        <Globe size={16} />
        <span className="px-2 py-1">PT</span>
        <span className="opacity-30">|</span>
        <span className="px-2 py-1">EN</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm" style={{ fontFamily: "Geist Mono, monospace" }} suppressHydrationWarning>
      <Globe size={16} />
      <button
        onClick={() => switchLanguage('pt')}
        className={`px-2 py-1 transition-opacity hover:opacity-70 ${
          locale === 'pt' ? 'font-bold underline' : 'opacity-50'
        }`}
        aria-label="Switch to Portuguese"
        suppressHydrationWarning
      >
        PT
      </button>
      <span className="opacity-30">|</span>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 transition-opacity hover:opacity-70 ${
          locale === 'en' ? 'font-bold underline' : 'opacity-50'
        }`}
        aria-label="Switch to English"
        suppressHydrationWarning
      >
        EN
      </button>
    </div>
  );
}


