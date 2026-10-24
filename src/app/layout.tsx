import { NavBar } from "@/components/NavBar";
import "./globals.scss";
import { Montserrat, Prompt, IBM_Plex_Sans_Thai } from "next/font/google";
import type { Metadata } from "next";
import { pageMetadata, siteOrigin, siteName } from "@/lib/seo";

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
  ...pageMetadata("/"),
  metadataBase: new URL(siteOrigin),
  applicationName: siteName,
  authors: [{ name: "Tanuphat Sojindamanee", url: siteOrigin }],
  robots: { index: true, follow: true }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": siteOrigin + "/#website", url: siteOrigin, name: siteName, publisher: { "@id": siteOrigin + "/#person" } },
    { "@type": "Person", "@id": siteOrigin + "/#person", name: "Tanuphat Sojindamanee", alternateName: ["March", "MarchTanu"], url: siteOrigin, image: siteOrigin + "/profile.jpg", jobTitle: "Software developer", sameAs: ["https://github.com/marchtanu"] }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${prompt.variable} ${ibmPlexSansThai.variable}`}>
      <body className="layout">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\u003c") }} />
        <header><NavBar /></header>
        <div className="content-root">{children}</div>
      </body>
    </html>
  );
}
