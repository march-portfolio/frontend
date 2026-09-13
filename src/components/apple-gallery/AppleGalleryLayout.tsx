"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./apple-gallery.scss";

export interface StatItem {
  icon: string;
  label: string;
}

interface AppleGalleryLayoutProps {
  currentDiscipline: "software" | "ai-systems" | "mc-hosting" | "acting-modeling";
  eyebrow: string;
  title: string;
  lead: string;
  stats?: StatItem[];
  filterCategories?: string[];
  onFilterChange?: (category: string) => void;
  children: React.ReactNode;
}

const disciplines = [
  { id: "software", label: "Software Systems", href: "/software" },
  { id: "ai-systems", label: "AI Systems", href: "/ai-systems" },
  { id: "mc-hosting", label: "MC & Hosting", href: "/mc-hosting" },
  { id: "acting-modeling", label: "Acting & Modeling", href: "/acting-modeling" },
];

export default function AppleGalleryLayout({
  currentDiscipline,
  eyebrow,
  title,
  lead,
  stats = [],
  filterCategories = [],
  onFilterChange,
  children,
}: AppleGalleryLayoutProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (onFilterChange) {
      onFilterChange(category);
    }
  };

  return (
    <div className="apple-gallery-page">
      {/* Apple-style Persistent Frosted Sub-Navigation */}
      <nav className="gallery-subnav" aria-label="Gallery Navigation">
        <div className="subnav-inner">
          <Link href="/pages/works" className="back-link">
            <i className="bi bi-chevron-left"></i>
            <span>All Disciplines</span>
          </Link>

          <div className="discipline-switcher">
            {disciplines.map((d) => (
              <Link
                key={d.id}
                href={d.href}
                className={`switcher-pill ${currentDiscipline === d.id ? "active" : ""}`}
              >
                {d.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="gallery-hero">
        <span className="hero-eyebrow">{eyebrow}</span>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-lead">{lead}</p>

        {stats.length > 0 && (
          <div className="hero-stats-strip">
            {stats.map((stat, idx) => (
              <span key={idx} className="stat-pill">
                <i className={`bi ${stat.icon}`}></i>
                <span>{stat.label}</span>
              </span>
            ))}
          </div>
        )}

        {filterCategories.length > 0 && (
          <div className="filter-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "All"}
              className={`filter-tab ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => handleCategoryClick("All")}
            >
              All Works
            </button>
            {filterCategories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`filter-tab ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Gallery Grid */}
      <main className="gallery-container">
        <div className="gallery-grid">
          {children}
        </div>
      </main>

      {/* Apple-style Ending Call-To-Action Ribbon */}
      <footer className="gallery-ending-ribbon">
        <div className="ribbon-inner">
          <span className="ribbon-eyebrow">Collaboration &amp; Bookings</span>
          <h3>Looking to partner with March?</h3>
          <p>
            Whether building a high-performance software system, deploying custom AI pipelines, or booking stage hosting and screen talent, let&apos;s create something remarkable.
          </p>
          <div className="ribbon-ctas">
            <Link href="/pages/contact" className="btn-primary">
              <span>Start a Conversation</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
            <Link href="/pages/works" className="btn-secondary">
              <span>Back to All Works</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
