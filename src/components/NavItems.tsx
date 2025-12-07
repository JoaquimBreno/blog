import Link from 'next/link';

export const navItems = [
  { name: "About", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Posts", href: "/blog" },
  { name: "Archive", href: "/archive" },
  // TODO: Uncomment when Subscribe feature is ready
  // { name: "Subscribe", href: "/subscribe" },
];

export function NavItems() {
  return (
    <nav className="flex justify-center lg:justify-start gap-4 lg:gap-0 lg:flex-col">
      {navItems.map((item) => {
        return (
          <Link 
            href={item.href} 
            key={item.name}
            className="hover:underline text-sm lg:text-base transition-opacity hover:opacity-70"
            style={{ fontFamily: "Geist Mono, monospace" }}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}