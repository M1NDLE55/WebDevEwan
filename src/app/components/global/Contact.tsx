import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex w-full justify-center px-4 pb-20 md:pb-60">
      <div className="w-full max-w-7xl text-center">
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-8xl">
          Get in Touch
        </h2>
        <p className="mt-4 px-5 text-center text-lg font-normal text-neutral-300 md:text-xl">
          Want to work with me? I&apos;m just a message away.
        </p>
        <Link
          href={{ pathname: "/contact" }}
          className="mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-50 bg-[linear-gradient(110deg,#000103,45%,#4c1d95,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50"
        >
          Let&apos;s chat
        </Link>
      </div>
    </div>
  );
}
