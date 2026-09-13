"use client";

import React from "react";
import AppleSection from "@/components/apple-showcase/AppleSection";
import CodeMockup from "@/components/apple-showcase/CodeMockup";
import AIMockup from "@/components/apple-showcase/AIMockup";
import MCMockup from "@/components/apple-showcase/MCMockup";
import ActorModelMockup from "@/components/apple-showcase/ActorModelMockup";
import Link from "next/link";
import "./work.scss";

export default function WorkPage() {
  return (
    <div className="apple-works-page">
      {/* Apple-style Persistent Frosted Sub-Navigation */}
      <div className="apple-subnav">
        <div className="subnav-inner">
          <span className="subnav-title">Highlight Disciplines</span>
          <div className="subnav-links">
            <a href="#code-engineering">Software</a>
            <a href="#ai-systems">AI Systems</a>
            <a href="#master-of-ceremonies">MC &amp; Hosting</a>
            <a href="#modeling-acting">Acting &amp; Modeling</a>
          </div>
        </div>
      </div>

      {/* SECTION 1: Software Engineering (Dark Apple Tile) */}
      <AppleSection
        id="code-engineering"
        theme="dark"
        eyebrow="Software Engineering &amp; Startup Architecture"
        headline="Engineered for performance. Built for scale."
        tagline="Co-founder &amp; Full-Stack Engineer at StageLink, plus enterprise client systems (betterLiving, MayClinic, TTT). Architecting monorepos with Next.js 15, NestJS, Prisma, and PostgreSQL with Vector search."
        specs={[
          "StageLink Monorepo",
          "Next.js 15 App Router",
          "NestJS REST & GraphQL",
          "Prisma & PGVector",
          "Cloudflare Pages & Workers",
          "TypeScript v5 Strict",
        ]}
        primaryCta={{
          label: "Explore Software Gallery",
          href: "/software",
        }}
        secondaryCta={{
          label: "View Code on GitHub",
          href: "https://github.com/marchtanu",
          external: true,
        }}
      >
        <CodeMockup />
      </AppleSection>

      {/* SECTION 2: AI & Intelligent Systems (Light Parchment Apple Tile) */}
      <AppleSection
        id="ai-systems"
        theme="light"
        eyebrow="Artificial Intelligence &amp; Autonomous Systems"
        headline="Intelligence at your fingertips. Automated by design."
        tagline="auhip and Jarvis personal AI ecosystem: acoustic double-snap voice activation, Vosk offline STT, MediaPipe hand gestures, and local Ollama routing with Gemini cloud escalation on a PyQt6 AsyncIO event loop."
        specs={[
          "Acoustic Snap Detection",
          "Vosk Offline STT",
          "MediaPipe Gesture Vision",
          "Ollama Local Intent Routing",
          "Gemini Cloud Escalation",
          "Python AsyncIO Engine",
        ]}
        primaryCta={{
          label: "Explore AI Systems Gallery",
          href: "/ai-systems",
        }}
        secondaryCta={{
          label: "View Code on GitHub",
          href: "https://github.com/marchtanu",
          external: true,
        }}
      >
        <AIMockup />
      </AppleSection>

      {/* SECTION 3: Master of Ceremonies & Live Stage Hosting (Dark Apple Tile) */}
      <AppleSection
        id="master-of-ceremonies"
        theme="dark"
        eyebrow="Master of Ceremonies (MC) &amp; Live Stage Hosting"
        headline="Commanding the stage. Connecting the crowd."
        tagline="Bilingual Master of Ceremonies and keynote presenter fluent in Thai and English (IELTS Academic 6.5, Speaking 7.0). Combining high-presence stage charisma with Audiovisual Tech Lead coordination."
        specs={[
          "Bilingual (TH & EN IELTS 6.5)",
          "IELTS Speaking 7.0 Fluency",
          "Keynote & Panel Moderation",
          "Live Crowd Calibration",
          "AV & Soundboard Coordination",
          "Stage Timing & Teleprompter",
        ]}
        primaryCta={{
          label: "Explore MC & Stage Gallery",
          href: "/mc-hosting",
        }}
        secondaryCta={{
          label: "Inquire for MC Booking",
          href: "/pages/contact",
        }}
      >
        <MCMockup />
      </AppleSection>

      {/* SECTION 4: Dramatic Acting, Modeling & Fitness (Light Parchment Apple Tile) */}
      <AppleSection
        id="modeling-acting"
        theme="light"
        eyebrow="Dramatic Acting, Modeling &amp; Athletic Discipline"
        headline="Presence on camera. Depth in performance."
        tagline="Actor under Me Mind Y Studio, commercial fashion model, and TikTok creator (@marchtanu). Combining disciplined athletic bodybuilding (80kg physique target) with on-screen character depth and digital audience reach."
        specs={[
          "Me Mind Y Studio Actor",
          "Commercial Fashion Modeling",
          "TikTok Creator @marchtanu",
          "80kg Athletic Physique",
          "Series Production Queues",
          "Script Analysis & Workshops",
        ]}
        primaryCta={{
          label: "Explore Acting & Modeling Gallery",
          href: "/acting-modeling",
        }}
        secondaryCta={{
          label: "Instagram @marchtanu",
          href: "https://www.instagram.com/marchtanu",
          external: true,
        }}
      >
        <ActorModelMockup />
      </AppleSection>

      {/* Apple-style Ending Call-To-Action Ribbon */}
      <section className="apple-ending-ribbon">
        <div className="ribbon-inner">
          <h3>Ready to build something extraordinary?</h3>
          <p>Explore full galleries of software engineering, custom AI pipelines, live stage hosting, or dramatic acting.</p>
          <div className="ribbon-ctas">
            <Link href="/pages/contact" className="ribbon-btn-primary">
              Contact March <i className="bi bi-arrow-right"></i>
            </Link>
            <Link href="/pages/about" className="ribbon-btn-secondary">
              View About &amp; Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
