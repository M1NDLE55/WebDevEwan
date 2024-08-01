export default function About() {
  return (
    <div id="about" className="flex w-full justify-center px-4 pb-60">
      <div className="w-full max-w-7xl">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-7xl font-bold text-transparent">
          My Story
        </h2>
        <div className="grid w-full grid-cols-5 gap-8 text-neutral-50">
          <div className="col-span-3 rounded-xl border border-neutral-700 bg-neutral-950 p-4">
            <h3 className="text-3xl font-bold">Who Am I</h3>
            <p className="mt-2 text-lg">
              My journey into the world of programming began in 2019 during high
              school. Introduced to the fundamentals through Delphi and data
              management with SQL using Access, I discovered a passion for
              coding that has only grown since. Now, as a senior BSc. IT student
              at the North-West University (NWU), my academic focus has expanded
              significantly. While the university curriculum emphasized C#, I
              have also honed my skills in Python, C++, and Java, and utilized
              SQL Server and Oracle for data management.
            </p>
          </div>
          <div className="col-span-2 rounded-xl  border border-neutral-700 bg-neutral-950 p-4">
            <h3 className="text-3xl font-bold">My Skills</h3>
            <ul className="mt-2 text-lg ">
              <li>Programming Languages: C#, Python, C++, Java, Delphi</li>
              <li>
                Web Development: HTML, CSS, JavaScript, React, Next.js, Tailwind
              </li>
              <li>Data Management: SQL Server, Oracle, Access, Supabase</li>
              <li>Tools & Technologies: Resend for email communication</li>
            </ul>
          </div>
          <div className="col-span-2 rounded-xl  border border-neutral-700 bg-neutral-950 p-4">
            <h3 className="text-3xl font-bold">What I Aspire to Be</h3>
            <p className="mt-2 text-lg">
              My long-term goal is to become a backend developer, a role that
              aligns with my passion for creating efficient and robust
              server-side applications. However, I&apos;m committed to expanding
              my capabilities as a full stack developer to ensure I have a
              well-rounded skill set.
            </p>
          </div>
          <div className="col-span-3 rounded-xl  border border-neutral-700 bg-neutral-950 p-4">
            <h3 className="text-3xl font-bold">What I&apos;m Working On Now</h3>
            <p className="mt-2 text-lg">
              Currently, my interests have shifted towards web development. Over
              the past year, I&apos;ve immersed myself in HTML, CSS, and
              JavaScript, and have been diving deeper into modern frameworks
              like React, Next.js, and Tailwind. To manage storage and
              communication for web projects, I&apos;ve utilized Supabase and
              Resend. Alongside my studies, I&apos;m working on a hobby project
              called EFT-Toolset, a tool designed to assist players in the game
              Escape From Tarkov.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}