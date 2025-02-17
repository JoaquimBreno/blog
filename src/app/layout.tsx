import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sidebar } from "@/components/Sidebar";
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
    <html lang="en">
      <head>
        <title>Joaquim Breno</title>
        <meta name="description" content="An unconventional blog exploring tech adventures and personal insights, through the unique lens of Joaquim Breno." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joaquimbreno.com" />
        <meta property="og:title" content="Joaquim Breno" />
        <meta property="og:description" content="An unconventional blog exploring tech adventures and personal insights, through the unique lens of Joaquim Breno." />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="lg:flex  min-h-screen">
          <Sidebar className="w-1/5 border-r" ></Sidebar>
          <main className="flex-1 leading-normal tracking-normal">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
