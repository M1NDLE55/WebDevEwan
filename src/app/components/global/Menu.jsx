import Link from "next/link";
import { usePathname } from "next/navigation";

export function MenuIcon({ isOpen, setOpen }) {
  return (
    <div className="p-2 sm:invisible" onClick={() => setOpen((open) => !open)}>
      <div
        className={`h-[2px] w-[20px] rounded-full bg-black transition-all duration-300 ${isOpen ? "translate-y-[5px] rotate-45" : ""}`}
      />
      <div
        className={`mt-2 h-[2px] w-[20px] rounded-full bg-black transition-all duration-300 ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
      />
    </div>
  );
}

export function MenuLinks({ isOpen, setOpen }) {
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Home" },
    { href: "/about-me", text: "About Me" },
    { href: "/quote", text: "Quote" },
  ];

  return (
    <nav
      className={`sm:effect-none absolute left-0 top-0 z-10 flex w-full flex-col p-4 pt-16 opacity-0 transition-all duration-300 sm:visible sm:static sm:flex sm:w-fit sm:flex-row sm:gap-4 sm:pt-4 sm:opacity-100 ${isOpen ? "effect-glass-2 rounded-b-xl opacity-100" : "invisible"}`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`py-2 text-lg sm:p-0 sm:transition-all sm:duration-300 ${pathname === link.href ? "font-bold" : ""}`}
          onClick={() => setOpen(false)}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
