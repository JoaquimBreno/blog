import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Joaquim Breno - ML Engineer & Computer Engineer',
  description: 'Blog pessoal sobre Machine Learning, tecnologia e desenvolvimento de software.',
  alternates: {
    canonical: 'https://joaquimbreno.com',
    languages: {
      'pt': 'https://joaquimbreno.com/pt',
      'en': 'https://joaquimbreno.com/en',
    },
  },
};

export default function RootPage() {
  // Redirect root to /pt/ - middleware will handle this
  redirect('/pt');
}
