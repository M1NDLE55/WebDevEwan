export default function Page() {
  return (
    <main>
      <div className="min-h-section-1 flex justify-center">
        <div className="my-4 h-fit w-full max-w-3xl rounded-md px-4">
          <h1 className="mb-4 text-3xl sm:text-4xl">About Me</h1>
          <div className="flex flex-row justify-between border-b border-[#fb5607] pb-2 sm:text-lg">
            <h2>Ewan Trollip</h2>
            <h2>2024</h2>
          </div>
          <P>
            While studying Information Technology, I became frustrated with not
            learning how to create a production-ready app and deliver it to
            users. Despite dedicating considerable time to studying various
            development topics, I had little to show for it.
          </P>
          <P>
            It was during this period of frustration that I discovered web
            development. Web development not only offered solutions to my
            problems but did so in an incredibly accessible and dynamic manner.
            The field is continually evolving, creating new opportunities for
            growth and learning each day.
          </P>
          <P>
            However, amidst my excitement, I encountered numerous websites that
            could significantly improve their user experience with minimal
            effort. These websites lacked attention to detail, which sparked my
            passion for meticulousness. I pride myself on paying attention to
            the small stuff - the details that users may overlook but ultimately
            contribute to the overall narrative told by a website.
          </P>
          <P>
            I firmly believe in the importance of crafting an experience, rather
            than just building a functional website. With this in mind, I
            approach each project with a holistic perspective, ensuring that
            every element, from the underlying code to the visual aesthetics,
            contributes to a seamless and engaging user experience. I strive to
            create websites that not only function flawlessly but also tell a
            compelling story.
          </P>
        </div>
      </div>
    </main>
  );
}

function P({ children }) {
  return <p className="mt-2 text-lg sm:text-xl">{children}</p>;
}
