import fallbackImg from "@/assets/march_project_logo.png";
import { StaticImageData } from "next/image";

export interface Project {
  label: string;
  img: StaticImageData | string;
  type: "Code" | "StartUp" | "MC" | "Actor" | "TikTok" | "Gym" | "University" | "Design";
  description: string;
  tags?: string[];
  link?: string;
}

export const projectsData: Project[] = [
  // --- UNIVERSITY ---
  {
    label: "Mahidol University - Digital Science & Technology (DST)",
    img: fallbackImg,
    type: "University",
    description: "Bachelor of Science in Digital Science and Technology at Mahidol University (Faculty of ICT). Advanced academic study in Software Engineering, Data Structures & Algorithms, Database Management Systems (DBMS under Aj. Preecha), and distributed system architecture.",
    tags: ["Mahidol DST", "Computer Science", "Algorithms", "DBMS", "System Architecture"],
    link: "https://www.ict.mahidol.ac.th/"
  },

  // --- GYM & ATHLETIC DISCIPLINE ---
  {
    label: "Athletic Discipline & 80kg Transformation",
    img: fallbackImg,
    type: "Gym",
    description: "Structured hypertrophy bodybuilding training pursuing an 80kg athletic physique target. Grounded in sports biomechanics and macronutrient science, which directly inspired the core data models and personalized nutrition algorithms of the Kindee platform.",
    tags: ["Bodybuilding", "80kg Target", "Sports Nutrition", "Biomechanics", "Kindee Engine"],
    link: "https://www.instagram.com/marchtanu"
  },
  // --- CODE & START-UP ---
  {
    label: "StageLink - Performer & Event Marketplace",
    img: fallbackImg,
    type: "StartUp",
    description: "Co-founded monorepo marketplace platform connecting performers and event organizers, featuring role-based access control, PostgreSQL vector search filtering, Omise payments, Socket.io chat, and Cloudflare Pages deployment.",
    tags: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL Vector", "Omise", "Cloudflare Pages"],
    link: "https://github.com/marchtanu"
  },
  {
    label: "Kindee - AI Health Intelligence Platform",
    img: fallbackImg,
    type: "StartUp",
    description: "Solo-founded digital health platform aggregating biometric, nutrition, and wearable data with custom allergen engines, nutrition intelligence, and personalized health recommendations.",
    tags: ["Health AI", "Mobile Platform", "Nutrition Engine", "Product Architecture"],
    link: "https://github.com/marchtanu"
  },
  {
    label: "betterLiving - Real Estate Search Platform",
    img: fallbackImg,
    type: "Code",
    description: "Bilingual real estate discovery platform built with Next.js and Fastify, powered by a 260+ field PostgreSQL schema with spatial indexing (cube/earthdistance) and Mapbox GL JS interactive maps.",
    tags: ["Next.js", "Fastify", "PostgreSQL", "Spatial GIS", "Mapbox GL JS"],
    link: "https://github.com/marchtanu"
  },
  {
    label: "auhip / Jarvis - Personal AI Assistant",
    img: fallbackImg,
    type: "Code",
    description: "Offline-first desktop AI assistant featuring acoustic double-snap voice activation, Vosk offline STT with Google fallback, MediaPipe hand gesture controls, and Ollama local-to-cloud intent routing on PyQt6 asyncio.",
    tags: ["Python AsyncIO", "Vosk Offline STT", "MediaPipe", "Ollama", "Gemini API"],
    link: "https://github.com/marchtanu"
  },
  {
    label: "MayClinic - Bilingual Clinic Management & EMR",
    img: fallbackImg,
    type: "Code",
    description: "Bilingual medical clinic platform engineered with Next.js, next-intl localization, MySQL adapter, and secure AWS S3 storage for patient electronic medical records.",
    tags: ["Next.js", "next-intl", "MySQL", "AWS S3", "Clinic CMS"],
    link: "https://gitlab.com/marchtanu"
  },
  {
    label: "THAI THAI THAI & CBTA Platform",
    img: fallbackImg,
    type: "Code",
    description: "Cloudflare serverless loyalty and brewing association monorepo leveraging Astro, Hono.js, D1 SQL, R2 object storage, Prisma ORM, and Resend transactional emails.",
    tags: ["Turborepo", "Astro", "Hono.js", "Cloudflare Workers", "D1 SQL", "Prisma"],
    link: "https://gitlab.com/marchtanu"
  },

  // --- MASTER OF CEREMONIES (MC) ---
  {
    label: "Bilingual Keynote Moderation & Stage Hosting",
    img: fallbackImg,
    type: "MC",
    description: "Charismatic bilingual stage host and keynote presenter fluent in Thai and English (IELTS Academic 6.5, Speaking 7.0), delivering clear speaker introductions and audience rapport.",
    tags: ["Bilingual MC", "Keynote Moderation", "Stage Host", "IELTS 7.0 Speaking"],
    link: "/pages/contact"
  },
  {
    label: "Live Stage Presentation & Crowd Pacing",
    img: fallbackImg,
    type: "MC",
    description: "High-presence stage hosting commanding auditorium assemblies, coordinating live agenda timing, dynamic audience engagement, and teleprompter synchronization.",
    tags: ["Stage Presentation", "Crowd Pacing", "Live Timing", "Teleprompter"],
    link: "/pages/contact"
  },
  {
    label: "Audiovisual & Technical Stage Lead",
    img: fallbackImg,
    type: "MC",
    description: "Technical stage leadership rooted in Audiovisual Department Lead experience (2024), bridging acoustic mic technique, livestreaming audio feeds, and live staging cues.",
    tags: ["AV Tech Lead", "Acoustic Projection", "Stage Cues", "Live Coordination"],
    link: "/pages/contact"
  },

  // --- ACTOR & MODELING ---
  {
    label: "Me Mind Y Studio - Dramatic Series Acting",
    img: fallbackImg,
    type: "Actor",
    description: "Professional series acting representation under Me Mind Y Studio. Active shooting queues, script analysis, character arc exploration, dramatic dialogues, and action workshops.",
    tags: ["Me Mind Y Studio", "Dramatic Acting", "Screen Presence", "Series Production"],
    link: "https://www.instagram.com/marchtanu"
  },
  {
    label: "Commercial & Fashion Modeling Portfolio",
    img: fallbackImg,
    type: "Actor",
    description: "Studio strobe and on-location editorial fashion modeling, tailored menswear, contemporary streetwear, and commercial brand lookbooks with athletic poise.",
    tags: ["Fashion Modeling", "Editorial", "Studio Shoots", "Lookbooks"],
    link: "https://www.instagram.com/marchtanu"
  },

  // --- TIKTOK & CONTENT ---
  {
    label: "TikTok Creator Channel (@marchtanu)",
    img: fallbackImg,
    type: "TikTok",
    description: "Lifestyle, tech, and fitness short-form content creator on TikTok and Instagram (@marchtanu), producing fast-paced video edits using Daydream NLE and custom Python tools.",
    tags: ["TikTok Creator", "@marchtanu", "Daydream NLE", "Short-Form Video"],
    link: "https://www.instagram.com/marchtanu"
  },

  // --- DESIGN ---
  {
    label: "Shopify Custom Theme Development (Liquid)",
    img: fallbackImg,
    type: "Design",
    description: "Specialized Shopify Liquid theme development, custom dynamic sections, metaobjects, and high-conversion e-commerce layouts for commercial brands.",
    tags: ["Shopify Liquid", "Theme Design", "Metaobjects", "E-Commerce"],
    link: "https://github.com/marchtanu"
  },
  {
    label: "Brand Identity & Figma Design Systems",
    img: fallbackImg,
    type: "Design",
    description: "Comprehensive visual branding, vector graphics, typography systems, and UI kits crafted in Figma and Procreate for modern digital products.",
    tags: ["Figma", "UI/UX", "Brand Systems", "Vector Graphics"],
    link: "https://github.com/marchtanu"
  }
];
