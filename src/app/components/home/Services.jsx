import { LaptopMinimal, AppWindowMac, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Websites",
      content:
        "I create custom websites tailored to your specific needs. Using Next.js, I build fast, secure, and scalable websites that offer a seamless user experience. If you prefer, I can also work with WordPress or Shopify for e-commerce solutions, making it easy to manage your online store.",

      icon: <LaptopMinimal />,
    },
    {
      title: "Web Apps",
      content:
        "Web applications are interactive websites that function like software on your computer or phone. I develop web apps using Next.js, ensuring they are efficient, user-friendly, and designed to meet your business goals. Whether it's a custom dashboard, a booking system, or any other web-based tool, I’ve got you covered.",

      icon: <AppWindowMac />,
    },
    {
      title: "Mobile Apps",
      content:
        "Using Expo, I create mobile apps that work on both iOS and Android devices. These apps are designed to be intuitive and engaging, providing your users with a smooth and enjoyable experience. Whether you need an app for your business, an event, or a new product, I can help bring your vision to life.",

      icon: <Smartphone />,
    },
  ];

  return (
    <div id="services" className="center-div relative">
      <div className="absolute top-0 h-full w-full">
        <div className="h-[calc(40%)] w-full bg-white"></div>
        <div className="w-full overflow-hidden">
          <svg
            className="relative block h-32 w-[calc(150%)]"
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
      </div>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 px-4 pt-8 md:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className={`relative flex flex-col rounded-md border border-red-500 bg-white p-4 text-center shadow-lg shadow-red-200`}
          >
            <div
              className={`center-div absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500 bg-white shadow-md shadow-red-200`}
            >
              {service.icon}
            </div>
            <h3 className="mb-2 mt-5 text-xl sm:text-2xl">{service.title}</h3>
            <p className="sm:text-lg">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
