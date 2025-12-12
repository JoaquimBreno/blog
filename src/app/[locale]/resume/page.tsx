import { Resume } from "@/components/Resume";
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
    title: 'Resume - Joaquim Breno',
    description: 'Professional resume of Joaquim Breno Brito Cavalcante',
    alternates: {
      canonical: `https://joaquimbreno.com/${locale}/resume`,
      languages: {
        'pt': 'https://joaquimbreno.com/pt/resume',
        'en': 'https://joaquimbreno.com/en/resume',
        'x-default': 'https://joaquimbreno.com/pt/resume',
      },
    },
  };
}

export default async function ResumePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="flex-1 p-4 lg:p-8 bg-white">
      <Resume locale={locale} />
    </div>
  );
}


