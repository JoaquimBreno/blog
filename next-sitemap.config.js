/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://joaquimbreno.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*'],
  
  // i18n configuration for SEO
  alternateRefs: [
    {
      href: 'https://joaquimbreno.com/pt',
      hreflang: 'pt',
    },
    {
      href: 'https://joaquimbreno.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://joaquimbreno.com',
      hreflang: 'x-default',
    },
  ],
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://joaquimbreno.com/sitemap.xml',
    ],
  },
};