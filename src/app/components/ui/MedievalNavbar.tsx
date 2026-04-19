"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Home, ScrollText, Mail } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const EMAIL = "ewantrollip@webdevewan.com";

const links: NavLink[] = [
  { name: "Home", href: "/", icon: <Home size={16} /> },
  { name: "Projects", href: "/projects", icon: <ScrollText size={16} /> },
  { name: "Contact", href: `mailto:${EMAIL}`, icon: <Mail size={16} /> },
];

export default function MedievalNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (prev && y < 8) return false;
        if (!prev && y > 32) return true;
        return prev;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the user scrolls the page
  useEffect(() => {
    if (!open) return;
    const startY = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) > 8) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-[5000] w-full transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-amber-500/40 bg-neutral-950/90 shadow-[0_1px_0_0_rgba(251,191,36,0.15)] backdrop-blur-md"
          : "border-b border-transparent bg-neutral-950/30 backdrop-blur-sm"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-[padding] duration-300 md:px-6 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
        aria-label="Primary"
      >
        {/* Brand */}
        <Link
          href="/"
          className={`select-none font-bold uppercase tracking-[0.2em] text-amber-200 transition hover:text-amber-100 ${
            scrolled ? "text-sm" : "text-base"
          }`}
          aria-label="Go to home page"
        >
          WebDev<span className="text-amber-400">/</span>Ewan
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isExternal = link.href.startsWith("mailto:");
            const className =
              "inline-flex items-center gap-2 border border-transparent px-3 py-1.5 text-sm uppercase tracking-widest text-amber-100/90 transition hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-100";
            return isExternal ? (
              <a key={link.name} href={link.href} className={className}>
                <span className="opacity-80">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ) : (
              <Link key={link.name} href={link.href} className={className}>
                <span className="opacity-80">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="notch-plate-sm inline-flex items-center justify-center p-2 text-amber-100 transition md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu — drops below the nav bar */}
      {open && (
        <div className="border-t border-amber-500/30 bg-neutral-950/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col divide-y divide-amber-500/15 px-2 py-1">
            {links.map((link) => {
              const isExternal = link.href.startsWith("mailto:");
              const className =
                "flex items-center gap-3 px-4 py-3 uppercase tracking-widest text-amber-100 transition hover:bg-amber-500/10";
              return isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={className}
                  onClick={() => setOpen(false)}
                >
                  <span className="opacity-80">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={className}
                  onClick={() => setOpen(false)}
                >
                  <span className="opacity-80">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
