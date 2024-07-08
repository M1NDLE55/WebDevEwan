import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Developer | South Africa | WebDevEwan",
  description:
    "Hey there, I'm Ewan. Ready to stop being invisible to your customers? I specialize in crafting killer websites that showcase your brand, captivate visitors, and transform them into loyal fans.",
  openGraph: {
    title: "Web Developer | South Africa | WebDevEwan",
    description:
      "I specialize in crafting killer websites that showcase your brand, captivate visitors, and transform them into loyal fans.",
  },
  metadataBase: new URL("https://www.webdevewan.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-neutral-100 selection:bg-red-500 selection:text-white"
    >
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
