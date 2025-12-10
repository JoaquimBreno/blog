"use client";

import { usePathname } from 'next/navigation';

interface SEOHeadProps {
  locale: string;
}

export function SEOHead({ locale }: SEOHeadProps) {
  const pathname = usePathname();
  const baseUrl = 'https://joaquimbreno.com';
  
  // Remove locale from pathname to get the base path
  const currentLocale = pathname.split('/')[1];
  const basePath = ['pt', 'en'].includes(currentLocale) 
    ? pathname.replace(`/${currentLocale}`, '') || '/'
    : pathname;

  return (
    <>
      {/* Hreflang tags for SEO */}
      <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt${basePath}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${basePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/pt${basePath}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}/${locale}${basePath}`} />
      
      {/* Language tag */}
      <meta httpEquiv="content-language" content={locale} />
    </>
  );
}

