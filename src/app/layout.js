import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Freelance Web Developer | WebDevEwan",
  description:
    "Hey there! I'm Ewan, a freelance web developer based in South Africa.",
  openGraph: {
    title: "Freelance Web Developer | WebDevEwan",
    description:
      "Hey there! I'm Ewan, a freelance web developer based in South Africa.",
    type: "website",
  },
  metadataBase: new URL("https://www.webdevewan.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
