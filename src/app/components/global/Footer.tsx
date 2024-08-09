import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center border-t border-white/[0.2] p-4 text-neutral-50">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-3 md:flex-row-reverse md:justify-between md:gap-0">
        <div className="flex flex-row">
          <a
            title="GitHub account"
            href="https://github.com/M1NDLE55"
            className="px-2 py-1"
          >
            <Github />
          </a>
          <a
            title="LinkedIn account"
            href="https://www.linkedin.com/in/ewan-trollip/"
            className="px-2 py-1"
          >
            <Linkedin />
          </a>
        </div>
        <p className="text-lg">
          &copy; {new Date().getFullYear()} | <Link href="/">WebDevEwan</Link>
        </p>
      </div>
    </footer>
  );
}
