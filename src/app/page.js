import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 pb-4">
      <div className="absolute left-0 top-0 -z-10 h-dvh w-full bg-gradient-to-b from-rose-50 via-red-200 to-white p-0" />
      <div className="h-section-1 center-div flex-col ">
        <h1 className="text-balance text-center text-5xl font-bold leading-snug sm:text-6xl">
          It&apos;s Not <span className="text-[#8338ec]">Just a Website</span>,
          <br />
          It&apos;s an{" "}
          <span className="text-[#fb5607]">Unforgettable Experience</span>
        </h1>
        <Link
          href="/quote"
          className="effect-glass mt-10 flex w-fit rounded-md px-6 py-4 transition-all hover:scale-105"
        >
          <span className="text-2xl">Get a Quote</span>
        </Link>
      </div>
      <div className="center-div">
        <p className="text-xl sm:w-[700px] sm:text-2xl">
          Hey there, welcome to COMPANY. So, here&apos;s the deal &ndash; not
          having a killer website is like being invisible to potential
          customers. You&apos;re missing out on opportunities left, right, and
          center! But don&apos;t sweat it, because that&apos;s where I come in.
          I specialize in solving the whole &apos;invisible&apos; problem by
          creating websites that not only show off your brand but also hook
          visitors and turn them into loyal fans.
        </p>
      </div>
      <div className="center-div mt-10 flex-col">
        <h2 className="mb-10 w-full max-w-[700px] text-xl sm:text-2xl">
          So, if you&apos;re ready to take your online presence to the{" "}
          <span className="font-bold text-[#fb5607]">next level</span>,
          here&apos;s how I can help:
        </h2>
        <Services />
      </div>
    </main>
  );
}

function Services() {
  const services = [
    {
      service: "Website Development",
      description:
        "Designing and building custom websites tailored to your needs",
      tag: "dev",
    },
    {
      service: "Domain, Email, and Hosting Management",
      description:
        "Registering and managing domain names, setting up professional email addresses, and handling website hosting",
      tag: "hosting",
    },
    {
      service: "SEO Optimization",
      description:
        "Optimizing your website to improve its visibility and ranking in search engine results",
      tag: "seo",
    },
    {
      service: "Content Creation",
      description:
        "Crafting engaging content for your website, including text, images, and multimedia elements",
      tag: "content",
    },
    {
      service: "Social Media Integration",
      description:
        "Seamlessly connecting your website with social media platforms to enhance engagement and reach",
      tag: "social",
    },
    {
      service: "E-commerce Solutions",
      description:
        "Setting up online stores and integrating secure payment gateways for e-commerce functionality",
      tag: "ecom",
    },
    {
      service: "Analytics and Reporting",
      description:
        "Implementing tools to track website performance and user behavior, and providing insightful reports",
      tag: "report",
    },
    // {
    //   service: "Security Measures",
    //   description:
    //     "Implementing measures to protect your website from security threats and ensuring data safety",
    // },
    {
      service: "Mobile First Design",
      description:
        "Optimizing your website for seamless viewing and usability on mobile devices",
      tag: "mfd",
    },
    // {
    //   service: "Conversion Rate Optimization (CRO)",
    //   description:
    //     "Analyzing user behavior and implementing strategies to improve your website's conversion rate",
    // },
  ];

  const colors = ["#2d00f7", "#8900f2", "#b100e8", "#d100d1", "#e500a4"];

  const results = [];

  services.forEach((service, i) => {
    let index = Math.floor(Math.random() * 5);

    if (i === 0) {
      results.push({ ...service, color: colors[index] });
      return;
    }

    while (i === 1) {
      if (colors[index] !== results[0].color) {
        results.push({ ...service, color: colors[index] });
        return;
      }
      index = Math.floor(Math.random() * 5);
    }

    while (i > 1) {
      if (
        colors[index] !== results[i - 1].color &&
        colors[index] !== results[i - 2].color
      ) {
        results.push({ ...service, color: colors[index] });
        return;
      }
      index = Math.floor(Math.random() * 5);
    }
  });

  return (
    <div className="center-div grid grid-cols-1 gap-4 lg:grid-cols-2">
      {results.map((result, i) => (
        <Link
          key={i}
          href={`/quote?ref=${result.tag}`}
          className="hover: flex w-full max-w-[700px] flex-col rounded-md border p-4 shadow lg:h-28"
          style={{ borderColor: result.color }}
        >
          <h3 className="text-xl">{result.service}</h3>
          <p>{result.description}</p>
        </Link>
      ))}
    </div>
  );
}
