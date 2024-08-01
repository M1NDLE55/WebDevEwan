import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Student and Freelance Web Developer Based in South Africa | WebDevEwan",
  description:
    "Hey there! I'm Ewan, a student and freelance web developer based in South Africa.",
  openGraph: {
    title:
      "Student and Freelance Web Developer Based in South Africa | WebDevEwan",
    description:
      "Hey there! I'm Ewan, a student and freelance web developer based in South Africa.",
    type: "website",
  },
  metadataBase: new URL("https://www.webdevewan.com/"),
};

export default function RootLayout({ children }) {
  const links = [
    { name: "Home", link: "/", icon: null },
    { name: "About", link: "/#about", icon: null },
    { name: "Projects", link: "/#projects", icon: null },
  ];

  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body className={inter.className}>
        <FloatingNav
          navItems={links}
          button={{ name: "Contact", link: "/contact" }}
        />
        {children}
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
