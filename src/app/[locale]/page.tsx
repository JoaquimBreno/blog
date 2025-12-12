import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' },
  ];
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex flex-col lg:flex-row">
        <MainContent locale={locale} />
      </div>
      <Footer />
    </div>
  );
}


