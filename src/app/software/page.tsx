"use client";

import React, { useState } from "react";
import AppleGalleryLayout from "@/components/apple-gallery/AppleGalleryLayout";
import AppleGalleryCard, { GalleryProject } from "@/components/apple-gallery/AppleGalleryCard";

const softwareProjects: GalleryProject[] = [
  {
    id: "stagelink",
    title: "StageLink",
    category: "Startup Platform",
    role: "Co-Founder & Full-Stack Engineer",
    tagline: "Performer & Event Organizer Two-Sided Marketplace",
    description:
      "A production marketplace platform connecting live musicians, singers, actors, and MCs with event organizers and venues. Features semantic talent search, contract negotiation, and real-time collaboration.",
    bullets:
      [
        "Engineered with Next.js 15 App Router, React 19, TypeScript, and NestJS monorepo.",
        "Prisma ORM with PostgreSQL PGVector for AI-driven semantic talent discovery.",
        "Real-time messaging via Socket.io, Firebase Admin RBAC, and Omise payment gateway integration.",
        "High-performance serverless deployment architecture on Cloudflare Pages.",
      ],
    techPills: [
      "Next.js 15",
      "React 19",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "PGVector",
      "Cloudflare Pages",
      "Socket.io",
      "Omise",
      "Turborepo",
    ],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Architecture", value: "Turborepo Monorepo (Next.js 15 + NestJS REST & GraphQL)" },
      { key: "Vector Search", value: "PostgreSQL PGVector for semantic talent recommendation" },
      { key: "Auth & Security", value: "Firebase Admin SDK with Role-Based Access Control (RBAC)" },
      { key: "Payments", value: "Omise Payment Gateway webhook lifecycle" },
      { key: "Deployment", value: "Cloudflare Pages (Edge Frontend) + Dockerized Node.js" },
    ],
  },
  {
    id: "betterliving",
    title: "betterLiving",
    category: "Enterprise GIS",
    role: "Full-Stack Engineer",
    tagline: "Bilingual Real Estate Discovery & Spatial Intelligence",
    description:
      "High-scale property discovery portal featuring sub-100ms spatial radius clustering, boundary polygon rendering, and interactive vector maps built for premium residential properties.",
    bullets:
      [
        "Engineered a 260+ field normalized PostgreSQL database schema with spatial indexing.",
        "Integrated cube and earthdistance extensions for coordinate proximity queries.",
        "Custom Mapbox GL JS interactive vector maps with dynamic marker clustering.",
        "High-throughput REST API backend built on Fastify with strict TypeScript typing.",
      ],
    techPills: [
      "Next.js",
      "Fastify",
      "PostgreSQL",
      "Spatial GIS",
      "cube & earthdistance",
      "Mapbox GL JS",
      "TypeScript",
      "Docker",
    ],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Schema Scale", value: "260+ normalized relational fields across property contracts" },
      { key: "Spatial Engine", value: "PostgreSQL cube & earthdistance with GiST spatial indexing" },
      { key: "Map Layer", value: "Mapbox GL JS custom tile layers and polygon boundary clipping" },
      { key: "API Engine", value: "Fastify with TypeBox runtime schema validation" },
      { key: "Localization", value: "Bilingual Thai & English dynamic route structure" },
    ],
  },
  {
    id: "kindee",
    title: "Kindee Health Platform",
    category: "Health & Nutrition AI",
    role: "Founder & Lead Architect",
    tagline: "AI Biometric Intelligence & Micronutrient Engine",
    description:
      "Health intelligence ecosystem translating physical fitness metrics, wearable telemetry, and meal imagery into algorithmic allergen warnings and personalized macronutrient optimization.",
    bullets:
      [
        "Grounded in exercise physiology and macronutrient science from athletic bodybuilding.",
        "Multi-modal meal analysis engine evaluating protein bio-availability and calorie density.",
        "Real-time allergen safety detection algorithm cross-referencing ingredient profiles.",
        "Biometric telemetry ingestion pipeline tracking resting heart rate and lean muscle mass.",
      ],
    techPills: [
      "Next.js 15",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Computer Vision",
      "Biometrics",
      "Health Analytics",
    ],
    primaryLink: {
      label: "Inquire Architecture",
      href: "/pages/contact",
    },
    specs: [
      { key: "Domain Foundation", value: "Exercise physiology and macronutrient science" },
      { key: "Nutrition Logic", value: "Dynamic macronutrient partitioning for body composition" },
      { key: "Ingestion Engine", value: "Wearable biometric streaming & photographic meal parsing" },
      { key: "Core Stack", value: "Next.js 15 frontend, FastAPI microservice, PostgreSQL storage" },
    ],
  },
  {
    id: "thai-thai-thai",
    title: "THAI THAI THAI UNIVERSE",
    category: "Serverless Loyalty",
    role: "Systems Architect & Engineer",
    tagline: "Cloudflare Serverless Receipt Verification & Loyalty Platform",
    description:
      "High-concurrency receipt processing and consumer rewards platform designed to operate at sub-30ms global response time entirely on Cloudflare edge infrastructure.",
    bullets:
      [
        "Engineered on Astro and Hono.js running globally on Cloudflare Workers edge runtime.",
        "Edge database using Cloudflare D1 distributed serverless SQL with microsecond replication.",
        "High-volume proof-of-purchase receipt image asset storage on Cloudflare R2.",
        "Integrated with CBTA Turborepo monorepo connecting NestJS services and Next.js portals.",
      ],
    techPills: [
      "Astro",
      "Hono.js",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Cloudflare R2",
      "Turborepo",
      "NestJS",
    ],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Edge Runtime", value: "Cloudflare Workers with Hono.js ultra-lightweight routing" },
      { key: "Storage Architecture", value: "Cloudflare D1 (Serverless SQLite) + R2 Object Storage" },
      { key: "Monorepo Layout", value: "Turborepo uniting Astro edge portal with NestJS core backend" },
      { key: "Performance", value: "Sub-30ms global latency with zero cold-start overhead" },
    ],
  },
  {
    id: "mayclinic",
    title: "MayClinic",
    category: "Healthcare EMR",
    role: "Full-Stack Developer",
    tagline: "Bilingual Clinical Records & Practice Management",
    description:
      "Comprehensive medical clinic operational system managing appointment scheduling, physician patient charting, prescription tracking, and encrypted diagnostic records.",
    bullets:
      [
        "Implemented full internationalization (Thai / English) utilizing next-intl.",
        "Encrypted electronic medical record (EMR) document handling integrated with AWS S3.",
        "Relational clinical data models and audit logging engineered on MySQL.",
        "Distraction-free clinical UI designed for rapid physician charting during consultations.",
      ],
    techPills: [
      "Next.js",
      "React",
      "next-intl",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sass/SCSS",
    ],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Security", value: "Pre-signed AWS S3 URLs for patient imaging and diagnostic lab records" },
      { key: "Localization", value: "next-intl dynamic route prefixing and asynchronous translation" },
      { key: "Database", value: "MySQL with relational clinical logs, physician schedules, and patient history" },
      { key: "Access Roles", value: "Strict role boundaries for receptionists, nurses, and physicians" },
    ],
  },
  {
    id: "ts-printing",
    title: "T.S. Printing 2002",
    category: "Enterprise POS & ERP",
    role: "Software Engineer",
    tagline: "Industrial Printing ERP & Financial Analytics",
    description:
      "Production point-of-sale and enterprise resource planning software modernizing quotation generation, job tracking, paper inventory deduction, and revenue analytics.",
    bullets:
      [
        "Modular hybrid architecture engineered using Next.js, Angular, and Tailwind CSS.",
        "Financial data visualization and operational throughput charts powered by Recharts.",
        "RESTful business logic backends and job scheduling workflows engineered in Ruby on Rails.",
        "Dynamic print cost estimator factoring paper grammage, plate charges, and ink consumption.",
      ],
    techPills: [
      "Next.js",
      "Angular",
      "Ruby on Rails",
      "Tailwind CSS",
      "Recharts",
      "PostgreSQL",
    ],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Backend Engine", value: "Ruby on Rails REST API with ActiveRecord ORM" },
      { key: "Frontend Stack", value: "Next.js + Angular administrative client components" },
      { key: "Business Logic", value: "Automated paper stock deduction and multi-parameter quotation calculator" },
      { key: "Analytics", value: "Recharts interactive revenue breakdowns and daily order throughput" },
    ],
  },
  {
    id: "nud-channel",
    title: "NUD Channel",
    category: "Microservices",
    role: "Backend & Microservice Engineer",
    tagline: "Distributed Accounts & Media Message Architecture",
    description:
      "Scalable educational broadcasting and identity management microservice built for Naresuan University Demonstration School digital channel.",
    bullets:
      [
        "Accounts microservice built with NestJS exposing unified GraphQL and REST endpoints.",
        "Document data layer built on MongoDB with Mongoose schema modeling and query optimization.",
        "Asynchronous event distribution and job queues orchestrated with RabbitMQ message broker.",
        "Content curator management panel engineered in Nuxt.js (Vue.js) with role authentication.",
      ],
    techPills: [
      "NestJS",
      "GraphQL",
      "MongoDB",
      "Mongoose",
      "RabbitMQ",
      "Nuxt.js",
      "Vue.js",
      "Docker",
    ],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "API Paradigm", value: "GraphQL with Apollo Federation + RESTful microservice gateways" },
      { key: "Message Broker", value: "RabbitMQ topic exchange handling notification events and media queues" },
      { key: "Data Store", value: "MongoDB with Mongoose schema validation and indexed query paths" },
      { key: "Admin Client", value: "Nuxt.js / Vue 3 reactive administration dashboard" },
    ],
  },
];

export default function SoftwareGalleryPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "Startup Platform",
    "Enterprise GIS",
    "Health & Nutrition AI",
    "Serverless Loyalty",
    "Healthcare EMR",
    "Enterprise POS & ERP",
    "Microservices",
  ];

  const filteredProjects =
    filter === "All"
      ? softwareProjects
      : softwareProjects.filter((p) => p.category === filter);

  return (
    <AppleGalleryLayout
      currentDiscipline="software"
      eyebrow="March Creative &bull; Deep-Dive Gallery"
      title="Software Engineering & Startup Systems"
      lead="Production-grade full-stack systems, startup monorepos, distributed spatial backends, and serverless edge deployments engineered with modern TypeScript, Next.js 15, and NestJS."
      stats={[
        { icon: "layers-fill", label: "7 Verified Production Deployments" },
        { icon: "lightning-charge-fill", label: "Next.js 15 & React 19" },
        { icon: "database-fill-check", label: "Prisma, PostgreSQL & PGVector" },
        { icon: "cloud-check-fill", label: "Cloudflare Workers & Pages" },
      ]}
      filterCategories={categories}
      onFilterChange={setFilter}
    >
      {filteredProjects.map((project) => (
        <AppleGalleryCard key={project.id} project={project} />
      ))}
    </AppleGalleryLayout>
  );
}
