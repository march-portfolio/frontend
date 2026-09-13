import { NavBar } from "@/components/NavBar";
import "./globals.scss";
import { Montserrat, Prompt, IBM_Plex_Sans_Thai } from "next/font/google";
import type { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  variable: "--font-prompt",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-ibm-plex-sans-thai",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tanuphat Sojindamanee (March) | Portfolio",
  description: "Multidisciplinary portfolio of Tanuphat Sojindamanee (March) - Software Engineer, Startup Founder, Actor, and Stage Host.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${prompt.variable} ${ibmPlexSansThai.variable}`}>
      <body className="layout">
        <header><NavBar /></header>
        <div className="content-root">{children}</div>
      </body>
    </html>
  );
}
