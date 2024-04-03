"use client";

import Link from "next/link";
import { MenuIcon, MenuLinks } from "./Menu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex-row items-center justify-between sm:flex">
      <div
        className={`relative flex h-16 flex-row items-center justify-between py-4 pl-5 pr-4 transition-all duration-300 ${isOpen ? "effect-glass-plain" : ""}`}
      >
        <Link href="/">LOGO</Link>
        <MenuIcon isOpen={isOpen} setOpen={setOpen} />
      </div>
      <MenuLinks isOpen={isOpen} />
    </header>
  );
}
