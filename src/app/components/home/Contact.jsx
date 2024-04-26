import Link from "next/link";

export default function About() {
  return (
    <div className="center-div mt-14 flex-col px-4 sm:mt-20">
      <h1 className="text-3xl sm:text-4xl">Get in Touch</h1>
      <div className="center-div mt-5 w-full max-w-4xl flex-col gap-4 rounded-md px-4 text-center md:rounded-full md:border md:border-violet-500 md:bg-white md:py-10">
        <p className="w-full max-w-2xl text-xl sm:text-2xl">
          Don&apos;t leave your customers waiting - reach out today for a free
          quote. Let&apos;s work together to bring your dream website to life!
        </p>
        <Link
          href="/quote"
          className="w-fit rounded-md border border-orange-500 bg-white p-4 px-6 py-4 text-center text-xl shadow-md transition-colors hover:border-cyan-400 sm:text-2xl"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
