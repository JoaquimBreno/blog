export const translations = {
  pt: {
    nav: {
      about: 'About',
      posts: 'Posts',
      resume: 'Resume',
      archive: 'Archive',
      subscribe: 'Subscribe',
    },
    blog: {
      latestPosts: 'Posts Recentes',
      viewFullArchive: 'Ver Arquivo Completo',
      backToBlog: '← Voltar para Blog',
      readingTime: 'min de leitura',
      relatedPosts: 'Posts Relacionados',
      noPostsFound: 'Nenhum post encontrado',
    },
    footer: {
      lastUpdated: 'Última atualização',
    },
    subscribe: {
      title: 'Inscreva-se',
      description: 'Receba novos artigos por email',
      placeholder: 'Seu email',
      button: 'Inscrever',
    },
  },
  en: {
    nav: {
      about: 'About',
      posts: 'Posts',
      resume: 'Resume',
      archive: 'Archive',
      subscribe: 'Subscribe',
    },
    blog: {
      latestPosts: 'Latest Posts',
      viewFullArchive: 'View Full Archive',
      backToBlog: '← Back to Blog',
      readingTime: 'min read',
      relatedPosts: 'Related Posts',
      noPostsFound: 'No posts found',
    },
    footer: {
      lastUpdated: 'Last updated',
    },
    subscribe: {
      title: 'Subscribe',
      description: 'Get new essays sent to you',
      placeholder: 'Your email address',
      button: 'Subscribe',
    },
  },
};

export type Locale = 'pt' | 'en';

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.pt;
}

