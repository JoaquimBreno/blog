import { Metadata } from 'next';

export async function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'pt' ? 'Inscrever-se' : 'Subscribe',
    description: locale === 'pt' ? 'Inscreva-se para receber novos posts' : 'Subscribe to receive new posts',
  };
}

export default async function Subscribe({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="flex-1 p-4 lg:p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-8" style={{ fontFamily: "Geist Mono, monospace" }}>
          {locale === 'pt' ? 'Inscrever-se' : 'Subscribe'}
        </h1>
        <p style={{ fontFamily: "Geist Mono, monospace", lineHeight: "150%" }}>
          {locale === 'pt' ? 'Recurso de inscrição em breve...' : 'Subscribe feature coming soon...'}
        </p>
        {/* TODO: Uncomment when Subscribe feature is ready */}
        {/* <SubscribeForm locale={locale} /> */}
      </div>
    </div>
  );
}


