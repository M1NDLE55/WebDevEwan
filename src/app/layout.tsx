import { Cinzel } from "next/font/google";
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
  title: "Full-stack dev. Conservation tech. South Africa. | WebDevEwan",
  description:
    "Hey! I'm Ewan, a full-stack developer from Johannesburg who builds web apps, AI tools, and conservation tech.",
  openGraph: {
    title: "Full-stack dev. Conservation tech. South Africa. | WebDevEwan",
    description:
      "Hey! I'm Ewan, a full-stack developer from Johannesburg who builds web apps, AI tools, and conservation tech.",
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
      className="scroll-smooth bg-neutral-950 font-serif text-amber-50"
    >
      <body className={`${cinzel.className} flex min-h-screen flex-col`}>
        <div
          aria-hidden
          className="pointer-events-none fixed -left-[5vw] -top-[5lvh] -z-10 h-[110lvh] w-[110vw] bg-[url('/polygon-bg.svg')] bg-cover bg-center"
        />
        <MedievalNavbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
