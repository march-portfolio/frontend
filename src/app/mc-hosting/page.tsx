"use client";

import React, { useState } from "react";
import AppleGalleryLayout from "@/components/apple-gallery/AppleGalleryLayout";
import AppleGalleryCard, { GalleryProject } from "@/components/apple-gallery/AppleGalleryCard";

const mcProjects: GalleryProject[] = [
  {
    id: "bilingual-moderation",
    title: "Bilingual Keynote Moderation & Stage Hosting",
    category: "Keynote Moderation",
    role: "Bilingual MC & Moderator",
    tagline: "Fluent Thai & English Academic & Industry Hosting",
    description:
      "Professional stage host and keynote presenter fluent in Thai and English (IELTS Academic 6.5, Speaking 7.0). Delivers articulated speaker introductions, intellectual discussions, and international audience engagement.",
    bullets: [
      "Certified English fluency (IELTS Academic Overall 6.5, Speaking 7.0, Reading 7.0).",
      "Clear articulation of technical, academic, and business concepts for diverse audiences.",
      "Seamless live speaker transitions, panel introductions, and improvisational stage bridging.",
      "Poised stage presence maintaining intellectual momentum and audience rapport.",
    ],
    techPills: [
      "Bilingual Hosting",
      "IELTS 7.0 Speaking",
      "Keynote Moderation",
      "Panel Discussion",
      "Audience Rapport",
      "Stage Poise",
    ],
    primaryLink: {
      label: "Inquire for Booking",
      href: "/pages/contact",
    },
    specs: [
      { key: "Languages", value: "Thai (Native) & English (IELTS Academic 6.5 — Speaking 7.0)" },
      { key: "Formats", value: "Keynotes, technical conferences, academic symposiums, panel moderation" },
      { key: "Delivery", value: "Articulate, engaging, culturally adaptive bilingual speech" },
      { key: "Availability", value: "Available for campus, corporate, and private event bookings" },
    ],
  },
  {
    id: "live-stage-presentation",
    title: "Live Stage Presentation & Crowd Calibration",
    category: "Live Presentation",
    role: "Lead Stage Presenter",
    tagline: "Arena & Auditorium Audience Engagement",
    description:
      "High-presence stage hosting commanding auditorium assemblies and multi-hour agendas, ensuring high audience attentiveness, tight timekeeper management, and spontaneous crowd engagement.",
    bullets: [
      "Commanding acoustic vocal projection and dynamic microphone technique.",
      "Strict teleprompter, stage timing, and technical cue synchronization.",
      "Spontaneous audience engagement, live Q&A facilitation, and improvisational bridging during technical delays.",
      "Sustained high energy and composure across demanding full-day programs.",
    ],
    techPills: [
      "Crowd Calibration",
      "Stage Timing",
      "Teleprompter Mastery",
      "Live Improvisation",
      "Vocal Projection",
      "Audience Engagement",
    ],
    primaryLink: {
      label: "Inquire for Booking",
      href: "/pages/contact",
    },
    specs: [
      { key: "Stage Tasks", value: "Event opening, speaker transitions, live Q&A, agenda timekeeping" },
      { key: "Tooling", value: "Teleprompter, ear-prompter (IFB), cue cards, wireless handheld mics" },
      { key: "Venue Types", value: "Auditoriums, conference halls, campus main stages, live broadcast studios" },
      { key: "Resilience", value: "Unflappable composure during technical glitches or agenda shifts" },
    ],
  },
  {
    id: "audiovisual-tech-lead",
    title: "Audiovisual & Technical Stage Lead",
    category: "Technical Stage Lead",
    role: "AV Tech Lead & Stage Host",
    tagline: "Bridging Production Audio, Livestreaming & Stage Cues",
    description:
      "Drawing upon hands-on background as Audiovisual Department Tech Lead (2024), bridging the gap between stage presentation and technical backstage production teams.",
    bullets: [
      "Technical stage leadership rooted in Audiovisual Department Lead experience (2024).",
      "Real-time communication with soundboard engineers, lighting directors, and livestream video operators.",
      "Deep understanding of microphone polar patterns, acoustic feedback mitigation, and monitor mixes.",
      "Flawless countdown cues, speaker walk-on stings, and multi-camera livestream handoffs.",
    ],
    techPills: [
      "AV Tech Lead 2024",
      "Soundboard Coordination",
      "Livestream Audio",
      "Lighting Cues",
      "Mic Feedback Control",
      "Backstage Comms",
    ],
    primaryLink: {
      label: "Inquire for Booking",
      href: "/pages/contact",
    },
    specs: [
      { key: "Technical Background", value: "Audiovisual Department Tech Lead (2024)" },
      { key: "Production Systems", value: "Digital mixers, wireless frequency management, broadcast switchers" },
      { key: "Communication", value: "Two-way headset comms, live director cue execution" },
      { key: "Synergy", value: "Host who speaks the technical language of the production crew" },
    ],
  },
  {
    id: "booking-inquiries",
    title: "Professional Booking & Event Collaboration",
    category: "Booking & Inquiries",
    role: "Event Presenter & Moderator",
    tagline: "Bilingual Emcee Services for Academic, Tech & Commercial Events",
    description:
      "Open for bookings across university symposiums, tech product showcases, corporate galas, and bilingual ceremonies. Direct coordination from script review to stage execution.",
    bullets: [
      "Pre-event script consultation, pronunciation verification for dignitary names, and agenda optimization.",
      "Bilingual slide review and speech coordination in English and Thai.",
      "Tailored attire conforming strictly to event dress codes (black tie, modern formal, smart casual).",
      "Professional conduct, punctuality, and collaborative backstage attitude.",
    ],
    techPills: [
      "Script Consultation",
      "Bilingual Review",
      "Corporate Booking",
      "Academic Forums",
      "Professional Etiquette",
      "Stage Poise",
    ],
    primaryLink: {
      label: "Book an Event",
      href: "/pages/contact",
    },
    specs: [
      { key: "Consultation", value: "Pre-event briefing, agenda pacing review, script translation checking" },
      { key: "Height & Posture", value: "175 cm, poised upright posture, polished camera-ready styling" },
      { key: "Booking Channel", value: "Direct via Portfolio Contact Form or Instagram @marchtanu" },
      { key: "Geographic Scope", value: "Bangkok metropolitan area, Mahidol Salaya, and regional assignments" },
    ],
  },
];

export default function MCHostingGalleryPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "Keynote Moderation",
    "Live Presentation",
    "Technical Stage Lead",
    "Booking & Inquiries",
  ];

  const filteredProjects =
    filter === "All" ? mcProjects : mcProjects.filter((p) => p.category === filter);

  return (
    <AppleGalleryLayout
      currentDiscipline="mc-hosting"
      eyebrow="March Creative &bull; Deep-Dive Gallery"
      title="Master of Ceremonies & Stage Hosting"
      lead="Bilingual stage hosting, keynote moderation, and live crowd calibration delivered with fluent Thai and English eloquence (IELTS Speaking 7.0) and Audiovisual Tech Lead background."
      stats={[
        { icon: "translate", label: "Bilingual TH & EN (IELTS 6.5)" },
        { icon: "mic-fill", label: "IELTS Speaking 7.0 Eloquence" },
        { icon: "broadcast-pin", label: "AV Tech Lead Background (2024)" },
        { icon: "people-fill", label: "Live Stage Crowd Calibration" },
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
