"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, ScrollText, Mail } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const links: NavLink[] = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { name: "Projects", href: "/projects", icon: <ScrollText size={18} /> },
  { name: "Contact", href: "/contact", icon: <Mail size={18} /> },
];

export default function MedievalNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-4 z-[5000] flex justify-center px-4">
      <div className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border-4 border-amber-500 bg-gradient-to-r from-amber-900/90 via-amber-700/90 to-amber-900/90 px-4 py-2 shadow-lg backdrop-blur-md">
        {/* Brand */}
        <Link
          href="/"
          className="select-none text-lg font-bold tracking-wide text-amber-100 hover:text-amber-200"
          aria-label="Go to home page"
        >
          WebDevEwan
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-amber-100 transition hover:bg-amber-800/40 hover:text-amber-50"
            >
              <span className="opacity-80">{link.icon}</span>
              <span className="text-sm">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border-2 border-amber-400 p-2 text-amber-100 transition hover:bg-amber-800/40 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="pointer-events-auto absolute left-1/2 top-16 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-2xl border-4 border-amber-500 bg-gradient-to-b from-amber-900/95 to-amber-800/95 p-2 shadow-xl md:hidden">
          <div className="flex flex-col divide-y divide-amber-600/40">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 text-amber-100 hover:bg-amber-700/40"
                onClick={() => setOpen(false)}
              >
                <span className="opacity-80">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
