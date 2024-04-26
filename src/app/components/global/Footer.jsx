import { Github, Linkedin } from "lucide-react";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <footer className="center-div mt-14 flex flex-row border-t p-4 sm:mt-20">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-3 md:flex-row-reverse md:justify-between md:gap-0">
        <FooterMenu />
        <div className="flex flex-row gap-4">
          <a href="https://github.com/M1NDLE55">
            <Github />
          </a>
          <a href="/">
            <Linkedin />
          </a>
        </div>
        <p className="text-lg">
          &copy; {new Date().getFullYear()} | WebDevEwan
        </p>
      </div>
    </footer>
  );
}
