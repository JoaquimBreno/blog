import { UserRound, FolderIcon, UsersIcon, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const navItems = [
  { name: "About", icon: UserRound, href: "/" },
  { name: "Blog", icon: BookText, href: "/blog" },
  { name: "Archive", icon: FolderIcon, href: "/archive" },
  { name: "Subscribe", icon: UsersIcon, href: "/subscribe" },
];

export function NavItems() {
  return (
    <div className="flex justify-center lg:justify-start lg:block lg:space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link href={item.href} key={item.name} passHref>
            <Button
              variant="ghost"
              className="w-full justify-center lg:justify-start px-3 font-medium text-center gap-2 text-base md:text-lg lg:text-xl"
            >
              <Icon className="hidden sm:block" />
              {item.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}