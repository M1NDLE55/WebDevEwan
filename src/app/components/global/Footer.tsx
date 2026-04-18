import { Github, Linkedin, Music2 } from "lucide-react";
import Link from "next/link";

const socialLinkClass =
  "notch-plate-sm inline-flex items-center justify-center p-2 text-amber-100/90 transition hover:text-amber-100";

export default function Footer() {
  return (
    <footer className="border-t border-amber-500/40 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 px-4 py-4 md:flex-row-reverse md:justify-between md:gap-0 md:px-6">
        <div className="flex flex-row gap-2">
          <a
            href="https://github.com/M1NDLE55"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ewan-trollip/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://open.spotify.com/user/3c15qroehhkyoyupsozfvk2z1?si=R-qwomAPSGeFsRqn8nqeCA"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
            aria-label="Spotify profile"
            title="Spotify"
          >
            <Music2 className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-amber-100/90">
          <span className="opacity-70">&copy; {new Date().getFullYear()}</span>{" "}
          <Link
            href="/"
            className="font-bold text-amber-200 transition hover:text-amber-100"
          >
            WebDev<span className="text-amber-400">/</span>Ewan
          </Link>
        </p>
      </div>
    </footer>
  );
}
