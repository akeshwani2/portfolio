"use client";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const links = [
    { name: "me", href: "/" },
    { name: "work", href: "/work" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <nav className="flex gap-8 text-sm">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <a
            key={link.name}
            href={link.href}
            className={`relative group transition-colors ${
              isActive ? "text-[#F5F5DC]" : "text-zinc-500 hover:text-[#F5F5DC]"
            }`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}
