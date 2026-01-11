import { Github, Linkedin, Music2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center border-t border-white/[0.2] p-4 text-neutral-50">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-3 md:flex-row-reverse md:justify-between md:gap-0">
        <div className="flex flex-row gap-2">
          <a
            href="https://github.com/M1NDLE55"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-amber-400/40 bg-neutral-900/60 p-2 text-amber-200 transition hover:border-amber-400 hover:text-amber-100"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ewan-trollip/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-amber-400/40 bg-neutral-900/60 p-2 text-amber-200 transition hover:border-amber-400 hover:text-amber-100"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://open.spotify.com/user/3c15qroehhkyoyupsozfvk2z1?si=R-qwomAPSGeFsRqn8nqeCA"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-amber-400/40 bg-neutral-900/60 p-2 text-amber-200 transition hover:border-amber-400 hover:text-amber-100"
            aria-label="Spotify profile"
            title="Spotify"
          >
            <Music2 />
          </a>
        </div>
        <p className="text-lg text-amber-200">
          &copy; {new Date().getFullYear()} <Link href="/">WebDevEwan</Link>
        </p>
      </div>
    </footer>
  );
}
