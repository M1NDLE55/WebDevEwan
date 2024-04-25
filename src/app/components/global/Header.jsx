"use client";

import Link from "next/link";
import { MenuIcon, MenuLinks } from "./Menu";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex-row items-center justify-between sm:flex">
      <div
        className={`relative z-20 flex h-16 flex-row items-center justify-between px-4 py-4`}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Website logo"
            className=""
          />
        </Link>
        <MenuIcon isOpen={isOpen} setOpen={setOpen} />
      </div>
      <MenuLinks isOpen={isOpen} setOpen={setOpen} />
    </header>
  );
}
