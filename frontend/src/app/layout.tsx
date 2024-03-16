// The root layout component in Next JS

import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Menu from "./menu";
import { Navgroup } from "./navgroup";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import Socials from "@/components/socials";
import theme from "../theme";

export const metadata: Metadata = {
  title: "pnutbutr",
  description: "page about pnutbutr",
};

const montserrat = Montserrat({ subsets: ["latin"] });

const tabs = ["about", "portfolio", "contact"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Have a shared layout or template(?) here! */}
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Menu tabs={tabs}></Menu>
            <Navgroup></Navgroup>
            <Socials></Socials>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
