import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-16 flex-row items-center justify-between p-4">
      <Link href="/">LOGO</Link>
      <Menu />
    </header>
  );
}

function Menu() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/quote", text: "Quote" },
  ];

  return (
    <div className="flex flex-row gap-2">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="">
          {link.text}
        </Link>
      ))}
    </div>
  );
}
