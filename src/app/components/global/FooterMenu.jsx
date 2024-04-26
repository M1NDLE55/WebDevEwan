"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterMenu() {
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Home" },
    { href: "/about-me", text: "About Me" },
    { href: "/quote", text: "Quote" },
  ];

  return (
    <nav className="flex flex-col text-center text-lg sm:flex-row md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`p-1 md:p-0 ${pathname === link.href ? "font-bold" : ""}`}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
