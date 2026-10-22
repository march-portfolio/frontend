import type { Metadata } from "next";

export const siteOrigin = "https://marchtanu.site";
export const siteName = "Marsh Me — Tanuphat Sojindamanee";

export const publicPages = [
  { path: "/", title: "Tanuphat Sojindamanee (March) | Software Engineer — Marsh Me", description: "Tanuphat Sojindamanee (March), software developer behind Marsh Me. Explore client web development, AUHIP and personal engineering projects." },
  { path: "/software", title: "Software & Web Development Projects", description: "Explore March's client web development and personal software projects, with clear roles, technology choices and current development stages." },
  { path: "/ai-systems", title: "AI & Automation Projects", description: "AUHIP desktop assistant, gesture interaction, PDF tools and audio recognition projects by March, with implementation details and honest project stages." },
  { path: "/pages/works", title: "Work & Project Portfolio", description: "Explore Tanuphat Sojindamanee's engineering work, AI tools, acting and stage hosting. Engineering is presented as Marsh Me; artist work as marchtanu." },
  { path: "/pages/about", title: "About Tanuphat Sojindamanee (March)", description: "Meet March: software developer, Mahidol ICT student and actor. Learn about Marsh Me, current professional work and personal engineering projects." },
  { path: "/pages/contact", title: "Contact March", description: "Contact Tanuphat Sojindamanee about software development, freelance projects, internship opportunities, acting or event hosting." },
  { path: "/acting-modeling", title: "Acting & Creative Work | marchtanu", description: "Acting and creative work by Tanuphat Sojindamanee, known as marchtanu. Contact March about casting and creative collaborations." },
  { path: "/mc-hosting", title: "MC & Stage Hosting | March", description: "Discuss event hosting and presentation opportunities with March. Send your event format, language, date and location to confirm the scope and availability." }
] as const;

export function pageMetadata(path: (typeof publicPages)[number]["path"]): Metadata {
  const page = publicPages.find((entry) => entry.path === path)!;
  const url = `${siteOrigin}${path}`;
  return {
    title: { absolute: page.title.includes("Tanuphat") ? page.title : `${page.title} | Marsh Me` },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", url, siteName, title: page.title, description: page.description, locale: "en_US",
      images: [{ url: `${siteOrigin}/profile.jpg`, alt: "Tanuphat Sojindamanee (March)" }]
    },
    twitter: { card: "summary", title: page.title, description: page.description, images: [`${siteOrigin}/profile.jpg`] }
  };
}
