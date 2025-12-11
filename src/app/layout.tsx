import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sidebar } from "@/components/Sidebar";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import Head from "next/head";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://joaquimbreno.com'),
  title: {
    default: 'Joaquim Breno',
    template: '%s | Joaquim Breno',
  },
  description: 'Blog sobre Machine Learning, tecnologia e desenvolvimento de software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://joaquimbreno.com",
    "name": "Joaquim Breno",
    "description": "An unconventional blog exploring tech adventures and personal insights, through the unique lens of Joaquim Breno.",
    "author": {
      "@type": "Person",
      "name": "Joaquim Breno"
    }
  };

  return (
    <html lang="pt">
      <head>
        <title>Joaquim Breno</title>
        <meta name="description" content="An unconventional blog exploring tech adventures and personal insights, through the unique lens of Joaquim Breno." />
        
        {/* SEO - Hreflang and Canonical */}
        <link rel="alternate" hrefLang="pt" href="https://joaquimbreno.com/pt" />
        <link rel="alternate" hrefLang="en" href="https://joaquimbreno.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://joaquimbreno.com/pt" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joaquimbreno.com" />
        <meta property="og:title" content="Joaquim Breno" />
        <meta property="og:description" content="An unconventional blog exploring tech adventures and personal insights, through the unique lens of Joaquim Breno." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="en_US" />
        
        <meta name="google-site-verification" content="Af4coKDHkz3c1dZuVrD0QaPW_EgObxDq46jsvM6F4eA" />
        
        {/* RSS Feeds */}
        <link rel="alternate" type="application/rss+xml" title="RSS Feed (PT)" href="/rss-pt.xml" />
        <link rel="alternate" type="application/rss+xml" title="RSS Feed (EN)" href="/rss-en.xml" />
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <div className="lg:flex min-h-screen bg-white">
          <Sidebar className="w-48 border-r border-gray-300" ></Sidebar>
          <main className="flex-1" style={{ fontFamily: "var(--font-geist-mono)", lineHeight: "150%" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
