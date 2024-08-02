import { Home, BookOpenText, LaptopMinimal } from "lucide-react";

export const navItems: { name: string; link: string; icon: JSX.Element }[] = [
  { name: "Home", link: "/", icon: <Home /> },
  { name: "About", link: "/#about", icon: <BookOpenText /> },
  { name: "Projects", link: "/#projects", icon: <LaptopMinimal /> },
];
