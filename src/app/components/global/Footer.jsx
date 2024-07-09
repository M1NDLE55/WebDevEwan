import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="center-div flex flex-row border-t bg-neutral-100 p-4">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-3 md:flex-row-reverse md:justify-between md:gap-0">
        <div className="flex flex-row">
          <a href="https://github.com/M1NDLE55" className="px-2 py-1">
            <Github />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/ewan-trollip/"
            className="px-2 py-1"
          >
            <Linkedin />
          </a> */}
        </div>
        <p className="text-lg">
          &copy; {new Date().getFullYear()} | WebDevEwan
        </p>
      </div>
    </footer>
  );
}
