export default function About() {
  return (
    <>
      {/* <svg
        className="h-16 w-full"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-720.1 -76.144 720.2 76.24"
      >
        <path
          d="M-63.2985-69.37C-49.9434-63.68-38.324-54.582-29.6081-42.9899L0 0-720 0C-720 0-709.99-12.9202-690.075-16.4792L-105.5-75.5C-91.2745-77.1415-76.654-75.06-63.2985-69.37Z"
          fill="white"
        />
      </svg> */}
      <div className="w-full overflow-hidden">
        <svg
          className="h-32 w-[calc(175%)] rotate-180 scale-x-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <div
        id="about"
        className="center-div text-pretty bg-white py-12 text-center"
      >
        <div className="w-full max-w-4xl px-4">
          <h2 className="text-3xl sm:text-5xl">About Me</h2>
          <p className="mt-4 text-xl sm:text-2xl">
            I&apos;m a freelance developer dedicated to crafting killer web and
            mobile apps. I value integrity, continuous learning, and a
            user-first approach, ensuring every project is not only modern but
            also makes your visitors feel at home. I love developing websites
            because I believe each one provides a unique experience and leaves a
            lasting impression on your customer base. My journey began with a
            Bachelor&apos;s degree in IT, and since then, I&apos;ve continually
            honed my skills through hands-on experience and self-improvement.
          </p>
        </div>
      </div>
    </>
  );
}
