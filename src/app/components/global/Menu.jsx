import Link from "next/link";

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

export function MenuLinks({ isOpen }) {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about-me", text: "About Me" },
    { href: "/quote", text: "Quote" },
  ];

  return (
    <div
      className={`effect-glass-plain sm:effect-none absolute left-0 top-16 flex w-full flex-col gap-2 p-4 opacity-0 transition-all duration-300 sm:visible sm:static sm:flex sm:w-fit sm:flex-row sm:opacity-100 ${isOpen ? "visible opacity-100" : "invisible"}`}
    >
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="">
          {link.text}
        </Link>
      ))}
    </div>
  );
}
