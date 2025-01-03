import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
    <div className="flex flex-col lg:flex-row">
      <MainContent />
    </div>
      <Footer />
    </div>
  );
}
