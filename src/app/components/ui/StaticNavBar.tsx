import Link from "next/link";

export function StaticNav({
  navItems,
  hasContact = false,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  hasContact?: true | false;
}) {
  return (
    <div
      className={`fixed inset-x-0  top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-white/[0.2] bg-black ${hasContact ? "pl-8 pr-2" : "px-8"} py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          title={navItem.name + " page"}
          key={`link=${idx}`}
          href={navItem.link}
          className="relative flex items-center space-x-1 py-2 text-neutral-50 hover:text-neutral-300"
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden text-sm sm:block">{navItem.name}</span>
        </Link>
      ))}
      {hasContact && (
        <Link
          href="/contact"
          className="relative rounded-full border border-white/[0.2] px-4 py-2 text-sm font-medium text-white"
        >
          <span>Contact</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
        </Link>
      )}
    </div>
  );
}
