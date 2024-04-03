import Link from "next/link";

export default function Services() {
  const blocks = [
    {
      title: "Website Development and Management",
      services: ["Website Development", "Domain, Email and Hosting Management"],
      color: "border-[#fb5607]",
      href: "/quote?ref=dev",
    },
    {
      title: "Optimization and Engagement",
      services: ["SEO", "Mobile Optimization", "Social Media Integration"],
      color: "border-[#ff006e]",
      href: "/quote?ref=opt",
    },
    {
      title: "Content Creation and Analysis",
      services: ["Content Creation", "Analytics and Reporting"],
      color: "border-[#8338ec]",
      href: "/quote?ref=con",
    },
    {
      title: "E-commerce and Security",
      services: ["E-commerce Solutions", "Robust Security Measures"],
      color: "border-[#3a86ff]",
      href: "/quote?ref=ecomm",
    },
  ];

  return (
    <div className="center-div grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {blocks.map((block) => (
        <Link
          key={block.title}
          href={block.href}
          className={`group flex flex-col rounded-md border p-4 text-center shadow-md sm:h-52 ${block.color}`}
        >
          <h3 className="text-xl transition-transform duration-300 lg:translate-y-[calc((174px-100%)/2)] lg:group-hover:translate-y-0">
            {block.title}
          </h3>
          <ul className="mt-4 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
            {block.services.map((service) => (
              <li key={service} className="text-base sm:text-lg">
                {service}
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
}
