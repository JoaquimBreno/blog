import { Twitter } from 'lucide-react';
import { Rss } from 'lucide-react';
function Footer() {
  return (
    <footer className="border-t p-4 text-center text-sm text-muted-foreground">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" className="hover:text-foreground"><Twitter size={20} /></a>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <Rss size={24} />
          <span>RSS Feed</span>
        </a>
      </div>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
