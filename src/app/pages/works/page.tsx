import AppleSection from "@/components/apple-showcase/AppleSection";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import "./work.scss";

export const metadata = pageMetadata("/pages/works");

export default function WorkPage() {
  return (
    <main id="main-content" tabIndex={-1} className="apple-works-page">
      <div className="apple-subnav">
        <div className="subnav-inner">
          <h1 className="subnav-title">Work &amp; projects</h1>
          <nav className="subnav-links" aria-label="Work disciplines">
            <a href="#code-engineering">Software</a><a href="#ai-systems">AI Systems</a><a href="#master-of-ceremonies">MC &amp; Hosting</a><a href="#modeling-acting">Acting</a>
          </nav>
        </div>
      </div>
      <AppleSection id="code-engineering" theme="dark" eyebrow="MarchTanu · Software engineering" headline="Web applications. Practical tools." tagline="Client web development for TTTuniverse, mayclinic and AXEAN, alongside personal engineering projects. Each project includes its role, technologies and current stage." specs={["Astro / Cloudflare", "Next.js / MySQL", "Nuxt / Vue / Go"]} primaryCta={{ label: "Explore software projects", href: "/software" }} />
      <AppleSection id="ai-systems" theme="light" eyebrow="MarchTanu · AI & automation" headline="Exploring useful AI systems." tagline="AUHIP is my desktop assistant project, combining Python, PyQt6, speech input and local model routing. Other experiments explore gesture interaction, PDF tools and audio recognition." specs={["Python", "PyQt6", "Ollama", "MCP"]} primaryCta={{ label: "Explore AI projects", href: "/ai-systems" }} secondaryCta={{ label: "AUHIP on GitHub", href: "https://github.com/marchtanu/auhip", external: true }} />
      <AppleSection id="master-of-ceremonies" theme="dark" eyebrow="marchtanu · Stage hosting" headline="A conversation about your event." tagline="For MC, presenting or hosting inquiries, send the event brief, language, date and location. We can discuss the role and confirm availability." primaryCta={{ label: "MC & hosting inquiries", href: "/mc-hosting" }} />
      <AppleSection id="modeling-acting" theme="light" eyebrow="marchtanu · Acting & creative work" headline="Acting. Performance. Creative work." tagline="Explore my acting and creative work as March (MarchTanu), or get in touch about a casting opportunity." primaryCta={{ label: "Acting & creative work", href: "/acting-modeling" }} />
      <section className="apple-ending-ribbon"><div className="ribbon-inner"><h3>Have a project in mind?</h3><p>Tell me about the work, your requirements and the next step.</p><div className="ribbon-ctas"><Link href="/pages/contact" className="ribbon-btn-primary">Contact March</Link><Link href="/pages/about" className="ribbon-btn-secondary">About &amp; experience</Link></div></div></section>
    </main>
  );
}
