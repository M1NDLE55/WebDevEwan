import { LaptopMinimal, AppWindowMac, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Websites",
      content:
        "Using a suite of tools such as Next.js or popular website builders like Wix, Squarespace, and WordPress, I build fast, secure, and visually appealing websites. Whether you need a landing page, portfolio, or an informational site, I ensure that your online presence is professional and engaging.",

      icon: <LaptopMinimal />,
    },
    {
      title: "Web Apps",
      content:
        "Web applications are interactive websites that function like software on your computer or phone. I develop web apps using Next.js, ensuring they are efficient, user-friendly, and designed to meet your business goals. If you prefer, I can also work with website builders or Shopify for e-commerce solutions, making it easy to manage your online store.",

      icon: <AppWindowMac />,
    },
    {
      title: "Mobile Apps",
      content:
        "Using Expo, I create mobile apps that work on both iOS and Android devices. These apps are designed to be intuitive and engaging, providing your users with a smooth and enjoyable experience. Whether you need an app for your business, an event, or a new product, I got you covered.",

      icon: <Smartphone />,
    },
  ];

  return (
    <div id="services" className="center-div relative">
      <div className="absolute top-0 h-full w-full">
        <div className="h-full w-full bg-white lg:h-[calc(50%+16px)]"></div>
        {/* <div className="h-[calc(50%-48px)] w-full bg-white"></div>
         <div className="w-full overflow-hidden">
          SVG (h-16)
        </div>  */}
      </div>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 px-4 pb-12 pt-8 lg:grid-cols-3 lg:pb-0">
        {services.map((service, i) => (
          <div
            key={i}
            className={`relative flex flex-col rounded-md border border-red-500 bg-white p-4 text-center shadow-md shadow-red-200`}
          >
            <div
              className={`center-div absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500 bg-white shadow-md shadow-red-200`}
            >
              {service.icon}
            </div>
            <h3 className="mb-2 mt-5 text-xl sm:text-2xl">{service.title}</h3>
            <p className="text-lg">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
