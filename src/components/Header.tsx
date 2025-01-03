
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="lg:hidden flex justify-between items-center p-4 border-b">
      <h1 className="text-2xl font-semibold">Your Name</h1>
    </header>
  );
}

export default Header;