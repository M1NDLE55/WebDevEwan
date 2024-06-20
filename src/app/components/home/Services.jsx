import Link from "next/link";
import { LaptopMinimal, ShoppingCart, Globe, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Website Development",
      content:
        "From simple static websites to dynamic web applications with robust databases, I craft custom solutions to suit your unique needs.",
      border: "border-[#fb5607]",
      node: "bg-[#fb5607]",
      text: "text-[#fb5607]",
      href: "/quote?ref=dev",
      icon: <LaptopMinimal />,
    },
    {
      title: "E-commerce Solutions",
      content:
        "Dive into the world of e-commerce with confidence. I specialize in building secure, scalable, and feature-rich online stores that drive sales.",
      border: "border-[#ff006e]",
      node: "bg-[#ff006e]",
      text: "text-[#ff006e]",
      href: "/quote?ref=opt",
      icon: <ShoppingCart />,
    },
    {
      title: "Web Hosting and Domain Management",
      content:
        "Leave the technicalities to me! I offer reliable management of your website and email hosting, coupled with seamless domain management.",
      border: "border-[#8338ec]",
      node: "bg-[#8338ec]",
      text: "text-[#8338ec]",
      href: "/quote?ref=con",
      icon: <Globe />,
    },
    {
      title: "SEO Optimization",
      content:
        "I follow rigid design principles that not only ensure a seamless experience across various devices but also focus heavily on SEO optimization for a higher ranking in search results.",
      border: "border-[#3a86ff]",
      node: "bg-[#3a86ff]",
      text: "text-[#3a86ff]",
      href: "/quote?ref=ecomm",
      icon: <Zap />,
    },
  ];

  return (
    <div id="services" className="center-div mt-14 flex-col px-4 sm:mt-20">
      <h2 className="max-w-2xl text-balance text-center text-3xl sm:text-5xl">
        What I Do
      </h2>
      <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        {services.map((service, i) => (
          <Link
            href={service.href}
            key={i}
            className={`relative flex flex-col rounded-md border bg-white p-4 text-center shadow-md ${service.border}`}
          >
            <div
              className={`center-div absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-white shadow-md ${service.border}`}
            >
              {service.icon}
            </div>
            <h3 className="mb-2 mt-5 text-xl sm:text-2xl">{service.title}</h3>
            <p className="sm:text-lg">{service.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
