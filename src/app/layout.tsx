import { Cinzel } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "./components/global/Footer";
import React from "react";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MedievalNavbar from "./components/ui/MedievalNavbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // normal, bold, extra bold
});

export const metadata: Metadata = {
  title: "Software Developer Based in South Africa | WebDevEwan",
  description:
    "Hey there! I'm Ewan, a software developer based in South Africa.",
  openGraph: {
    title: "Software Developer Based in South Africa | WebDevEwan",
    description:
      "Hey there! I'm Ewan, a software developer based in South Africa.",
    type: "website",
  },
  metadataBase: new URL("https://www.webdevewan.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-[url('/black-stone.jpg')] bg-cover bg-zinc-800 bg-fixed bg-center font-serif text-amber-50 mt-28"
    >
      <body className={`${cinzel.className} min-h-[calc(100vh-112px)] flex flex-col`}>
        <MedievalNavbar />
        {children}
        <Toaster position="bottom-right" />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
