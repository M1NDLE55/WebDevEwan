import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="flex w-full justify-center px-4 pb-20 sm:px-8 md:pb-60"
    >
      <div className="w-full max-w-7xl">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-3xl font-bold text-transparent md:text-7xl">
          My Story
        </h2>
        <div className="grid w-full grid-cols-1 gap-4 text-neutral-50 sm:gap-8 lg:grid-cols-5">
          <div className="rounded-xl border border-neutral-700 bg-neutral-950 p-4 lg:col-span-3">
            <h3 className="text-xl font-bold md:text-3xl">Who Am I</h3>
            <p className="mt-2 md:text-lg">
              My journey into the world of programming began in 2019 during high
              school. Introduced to the fundamentals through Delphi and data
              management with SQL using Access, I discovered a passion for
              coding that has only grown since. Now, as a senior BSc. IT student
              at the North-West University (NWU), my academic focus has expanded
              significantly. While the university curriculum emphasized C#, I
              have also developed skills in Python, C++, and Java, and utilized
              SQL Server and Oracle for data management. For more information,
              check out my{" "}
              <Link
                href="/ewan_trollip_cv.pdf"
                className="underline underline-offset-2"
              >
                CV
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border  border-neutral-700 bg-neutral-950 p-4 lg:col-span-2">
            <h3 className="text-xl font-bold md:text-3xl">My Skills</h3>
            <ul className="mt-2 md:text-lg">
              <li>
                Programming Languages: C#, Python, C++, Java, Delphi,
                JavaScript, TypeScript
              </li>
              <li>
                Web Development: HTML, CSS, React, Next.js, Tailwind, ASP.NET
              </li>
              <li>Data Management: SQL Server, Oracle, Access, Supabase</li>
              <li>Tools & Technologies: Resend</li>
              <li>Other: WordPress, Shopify</li>
            </ul>
          </div>
          <div className="rounded-xl border  border-neutral-700 bg-neutral-950 p-4 lg:col-span-2">
            <h3 className="text-xl font-bold md:text-3xl">
              What I Aspire to Be
            </h3>
            <p className="mt-2 md:text-lg">
              My long-term goal is to become a backend developer, a role that
              aligns with my passion for creating efficient and robust
              server-side applications. However, I&apos;m committed to expanding
              my capabilities as a full stack developer to ensure I have a
              well-rounded skill set.
            </p>
          </div>
          <div className="rounded-xl border  border-neutral-700 bg-neutral-950 p-4 lg:col-span-3">
            <h3 className="text-xl font-bold md:text-3xl">
              What I&apos;m Working On Now
            </h3>
            <p className="mt-2 md:text-lg">
              Currently, my interests have shifted towards web development. Over
              the past year, I&apos;ve immersed myself in HTML, CSS, and
              JavaScript, and have been diving deeper into modern frameworks
              like React, Next.js, and Tailwind. To manage storage and
              communication for web projects, I&apos;ve utilized Supabase and
              Resend. Alongside my studies, I&apos;m working on a hobby project
              called EFT Toolset, a tool designed to assist players in the game
              Escape From Tarkov.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
