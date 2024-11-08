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
              My programming journey began in high school, where I discovered a
              love for coding that led me to pursue a BSc in IT from North-West
              University (NWU). Along the way, I gained experience with
              languages like C#, Python, C++, and Java, and worked with SQL
              Server, Oracle and PostgreSQL for data management. Now, as a
              software developer, my focus is on building dynamic, user-centered
              applications with TypeScript and React, and I&apos;m excited to
              apply and expand my skills in modern web development technologies.
              For more information, check out my{" "}
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
                Programming Languages: TypeScript, JavaScript, C#, Python, C++,
                Java
              </li>
              <li>Frameworks: React, Next.js, Expo, Django, ASP.NET</li>
              <li>
                Data Management: PostgreSQL, Supabase, SQL Server, Oracle,
                Access
              </li>
              <li>Tools & Technologies: Resend, Zod, shadcn/ui, Tailwind</li>
              <li>Other: WordPress, Shopify</li>
            </ul>
          </div>
          <div className="rounded-xl border  border-neutral-700 bg-neutral-950 p-4 lg:col-span-2">
            <h3 className="text-xl font-bold md:text-3xl">
              What I Aspire to Be
            </h3>
            <p className="mt-2 md:text-lg">
              I aim to become a well-rounded full stack developer with a strong
              focus on the React ecosystem, combining dynamic front-end
              experiences with solid back-end functionality. My goal is to
              deepen my expertise across the spectrum, ensuring I can seamlessly
              navigate both client and server-side development to build
              efficient, cohesive applications.
            </p>
          </div>
          <div className="rounded-xl border  border-neutral-700 bg-neutral-950 p-4 lg:col-span-3">
            <h3 className="text-xl font-bold md:text-3xl">
              What I&apos;m Working On Now
            </h3>
            <p className="mt-2 md:text-lg">
              As a software developer, my current focus is on web development,
              with a particular interest in the React ecosystem. Over the past
              year, I&apos;ve expanded my skills in HTML, CSS, JavaScript and
              TypeScript, while diving deeper into frameworks like React and
              Next.js. I&apos;m also exploring tools like Supabase and Resend
              for handling storage and communication in web applications. In
              addition to my professional work, I&apos;m developing a hobby
              project called EFT Toolset, a tool designed to assist players of
              Escape From Tarkov.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
