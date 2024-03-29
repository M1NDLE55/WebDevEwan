import Link from "next/link";

export default function Services() {
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

  const colors = [
    "border-[#2d00f7]",
    "border-[#8900f2]",
    "border-[#b100e8]",
    "border-[#d100d1]",
    "border-[#e500a4]",
  ];

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
          href={{ pathname: "/quote", query: { ref: result.tag } }}
          className={`flex w-full max-w-[700px] flex-col rounded-md border p-4 shadow transition-all hover:pl-5 lg:h-28 ${result.color}`}
        >
          <h3 className="text-xl">{result.service}</h3>
          <p>{result.description}</p>
        </Link>
      ))}
    </div>
  );
}
