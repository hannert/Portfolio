// The root layout component in Next JS

import { Montserrat } from "next/font/google"

import type { Metadata } from "next";
import "./globals.css";
import Scroll from "./scroll";

export const metadata: Metadata = {
  title: "pnutbutr",
  description: "page about pnutbutr",
};

const montserrat = Montserrat({ subsets: ['latin'] })

const tabs = ["about", "contact", "portfolio"]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Have a shared layout or template(?) here! */}
      <body>
        <Scroll tabs={tabs}></Scroll>
        {children}
      </body>
    </html>
  );
}
