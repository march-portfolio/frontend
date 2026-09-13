"use client";

import React, { useState } from "react";
import AppleGalleryLayout from "@/components/apple-gallery/AppleGalleryLayout";
import AppleGalleryCard, { GalleryProject } from "@/components/apple-gallery/AppleGalleryCard";

const creativeProjects: GalleryProject[] = [
  {
    id: "me-mind-y",
    title: "Me Mind Y Studio (Series Actor)",
    category: "Dramatic Television",
    role: "Signed Series Actor",
    tagline: "Screen Presence, Character Arc & Script Interpretation",
    description:
      "Professional series actor signed under Me Mind Y Studio (@marchtanu). Active in dramatic series production queues, rigorous script analysis, emotional character arc development, and collaborative multi-camera ensemble acting.",
    bullets:
      [
        "Series actor under Me Mind Y Studio participating in professional acting and dialogue workshops.",
        "Extensive screen training covering micro-expressions, emotional resonance, and camera blocking.",
        "Stage combat and action choreography preparation for dynamic series scene work.",
        "Disciplined stamina sustaining 14-hour production shoot days.",
      ],
    techPills: [
      "Me Mind Y Studio",
      "Script Analysis",
      "Scene Work",
      "Emotional Arc",
      "Action Choreography",
      "Camera Poise",
    ],
    primaryLink: {
      label: "Instagram @marchtanu",
      href: "https://www.instagram.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Studio", value: "Me Mind Y Studio" },
      { key: "Training", value: "Dialogue interpretation, character vulnerability, spatial camera awareness" },
      { key: "Production", value: "Active in television and digital series casting & production pipelines" },
      { key: "Physicality", value: "175 cm athletic build with camera-ready posture and poise" },
    ],
  },
  {
    id: "fashion-modeling",
    title: "Commercial & Fashion Modeling",
    category: "Fashion & Editorial",
    role: "Commercial Model",
    tagline: "Studio Strobe Photography & Tailored Lookbooks",
    description:
      "Commercial and editorial fashion modeling across studio strobe lighting setups, brand lookbooks, contemporary streetwear, and formal tailored menswear.",
    bullets:
      [
        "Experienced in commercial brand campaigns, editorial lookbooks, and high-fashion strobe shoots.",
        "Athletic physical poise (175 cm, 76-80kg aesthetic build) tailored for sharp menswear silhouettes.",
        "Versatile wardrobe range spanning modern luxury formalwear to athletic fitness apparel.",
        "Strong camera angle intuition, micro-posing adjustments, and seamless collaboration with creative directors.",
      ],
    techPills: [
      "Studio Strobe",
      "Men's Fashion",
      "Editorial Lookbook",
      "Commercial Posing",
      "Brand Campaign",
      "Menswear",
    ],
    primaryLink: {
      label: "Inquire for Booking",
      href: "/pages/contact",
    },
    specs: [
      { key: "Height & Build", value: "175 cm | 76-80 kg athletic lean physique" },
      { key: "Disciplines", value: "Formal menswear, urban streetwear, activewear, commercial lifestyle" },
      { key: "Collaboration", value: "Experienced working with agency photographers, stylists, and lighting grips" },
      { key: "Portfolio", value: "Published on Instagram @marchtanu" },
    ],
  },
  {
    id: "tiktok-creator",
    title: "Digital Content Creation & TikTok",
    category: "Digital Creator",
    role: "Creator & Producer (@marchtanu)",
    tagline: "Tech, Behind-The-Scenes & Lifestyle Video Storytelling",
    description:
      "Short-form digital creator on TikTok and Instagram (@marchtanu), sharing software engineering, startup building, Mahidol university life, acting behind-the-scenes, and fitness milestones.",
    bullets:
      [
        "Short-form video creator on TikTok and Instagram (@marchtanu) building an engaged creative community.",
        "High-retention storytelling pacing engineered with Daydream NLE and custom Python FFmpeg automated pipelines.",
        "Authentic balance of computer science, dramatic acting rehearsal, and athletic conditioning.",
        "Original sound design and visual color grading tailored for mobile viewports.",
      ],
    techPills: [
      "TikTok Creator",
      "Daydream NLE",
      "Python FFmpeg",
      "Sound Design",
      "Video Pacing",
      "Community Engagement",
    ],
    primaryLink: {
      label: "TikTok @marchtanu",
      href: "https://www.tiktok.com/@marchtanu",
      external: true,
    },
    specs: [
      { key: "Channel Handle", value: "@marchtanu (TikTok & Instagram)" },
      { key: "Content Verticals", value: "Full-stack startup builds, acting rehearsals, ICT university life, gym milestones" },
      { key: "Toolchain", value: "Daydream NLE, custom automated Python FFmpeg batch processors, Davinci Resolve" },
      { key: "Audience", value: "Tech enthusiasts, young creatives, prospective university students" },
    ],
  },
  {
    id: "athletic-conditioning",
    title: "Athletic Conditioning & Hypertrophy",
    category: "Athletic Discipline",
    role: "Competitive Conditioning",
    tagline: "80kg Lean Hypertrophy & Sports Biomechanics",
    description:
      "Rigorous athletic bodybuilding pursuing an 80kg aesthetic lean physique. Applying progressive overload principles, structured split routines, and macronutrient science that directly inspired the Kindee health intelligence architecture.",
    bullets:
      [
        "Targeted 80kg aesthetic athletic physique built on structured progressive overload.",
        "In-depth application of sports biomechanics, injury prevention, and cardiovascular conditioning.",
        "Hands-on macronutrient science that laid the algorithmic foundation for the Kindee health platform.",
        "Physical endurance powering high-intensity stage hosting and demanding series production shoots.",
      ],
    techPills: [
      "Hypertrophy Training",
      "Progressive Overload",
      "Biomechanics",
      "Macronutrient Science",
      "Stamina",
    ],
    primaryLink: {
      label: "Inquire Collaboration",
      href: "/pages/contact",
    },
    specs: [
      { key: "Target Physique", value: "80 kg lean aesthetic body composition" },
      { key: "Training Regime", value: "Structured hypertrophy splits, progressive overload, cardiovascular conditioning" },
      { key: "Science Cross-Over", value: "Direct domain expertise fueling the Kindee health intelligence platform" },
      { key: "Core Value", value: "Uncompromising physical discipline and self-mastery" },
    ],
  },
];

export default function ActingModelingGalleryPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "Dramatic Television",
    "Fashion & Editorial",
    "Digital Creator",
    "Athletic Discipline",
  ];

  const filteredProjects =
    filter === "All" ? creativeProjects : creativeProjects.filter((p) => p.category === filter);

  return (
    <AppleGalleryLayout
      currentDiscipline="acting-modeling"
      eyebrow="March Creative &bull; Deep-Dive Gallery"
      title="Dramatic Acting, Modeling & Creator"
      lead="Signed series actor with Me Mind Y Studio, commercial fashion model, TikTok storyteller (@marchtanu), and dedicated athlete pursuing an 80kg physique."
      stats={[
        { icon: "film", label: "Me Mind Y Studio Actor" },
        { icon: "camera-fill", label: "Commercial Fashion Lookbooks" },
        { icon: "play-btn-fill", label: "TikTok Creator @marchtanu" },
        { icon: "heart-pulse-fill", label: "80kg Athletic Conditioning" },
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
