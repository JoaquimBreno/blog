import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { SidebarContent } from "./SidebarContent";
import { Ellipsis } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <>
      {/* Mobile Toggle Button */}
      <label htmlFor="sidebar-toggle" className="flex justify-center lg:hidden m-2 top-4 left-4 z-50 cursor-pointer ">
        <Ellipsis className="h-6 w-6" />
        <span className="sr-only">Toggle Sidebar</span>
      </label>

      {/* Hidden Checkbox for Toggle */}
      <input
        type="checkbox"
        id="sidebar-toggle"
        className="peer hidden"
        aria-label="Toggle Sidebar"
      />

      {/* Mobile/Tablet Sidebar */}
      <div className="inset-0 z-40 bg-white/80 backdrop-blur-sm transition-all duration-100 
                    data-[state=closed]:animate-out data-[state=closed]:fade-out 
                    peer-checked:block lg:hidden hidden">
        <nav className="lg:hidden left-0 top-0 h-full border-r border-gray-300 bg-white p-6">
          <SidebarContent />
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <nav className={cn("hidden lg:flex flex-col gap-4 p-8 bg-white", className)}>
        <SidebarContent />
      </nav>
    </>
  );
}