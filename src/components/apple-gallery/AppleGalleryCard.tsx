"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface SpecItem {
  key: string;
  value: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  role: string;
  status?: string;
  tagline?: string;
  description: string;
  bullets: string[];
  techPills: string[];
  primaryLink?: {
    label: string;
    href: string;
    external?: boolean;
  };
  specs?: SpecItem[];
}

interface AppleGalleryCardProps {
  project: GalleryProject;
}

export default function AppleGalleryCard({ project }: AppleGalleryCardProps) {
  const [specsOpen, setSpecsOpen] = useState(false);

  return (
    <article id={project.id} className="gallery-card">
      <div className="card-top">
        <div className="card-meta-row">
          <span className="card-category">{project.category}{project.status ? ` · ${project.status}` : ""}</span>
          <span className="card-role">{project.role}</span>
        </div>

        <h2 className="card-title">{project.title}</h2>
        {project.tagline && <p className="card-tagline">{project.tagline}</p>}
        <p className="card-description">{project.description}</p>

        {project.bullets && project.bullets.length > 0 && (
          <ul className="card-bullets">
            {project.bullets.map((bullet, idx) => (
              <li key={idx}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {project.techPills && project.techPills.length > 0 && (
          <div className="card-tech-pills">
            {project.techPills.map((pill, idx) => (
              <span key={idx} className="tech-pill">
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="card-actions">
        {project.primaryLink ? (
          project.primaryLink.external ? (
            <a
              href={project.primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-card-primary"
            >
              <span>{project.primaryLink.label}</span>
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          ) : (
            <Link href={project.primaryLink.href} className="btn-card-primary">
              <span>{project.primaryLink.label}</span>
              <i className="bi bi-chevron-right"></i>
            </Link>
          )
        ) : (
          <span />
        )}

        {project.specs && project.specs.length > 0 && (
          <button
            type="button"
            onClick={() => setSpecsOpen(!specsOpen)}
            className={`btn-toggle-spec ${specsOpen ? "open" : ""}`}
            aria-expanded={specsOpen}
            aria-controls={`${project.id}-details`}
          >
            <span>{specsOpen ? "Hide details" : "Project details"}</span>
            <i className="bi bi-chevron-down"></i>
          </button>
        )}
      </div>

      {project.specs && project.specs.length > 0 && (
        <div id={`${project.id}-details`} className="card-spec-drawer" hidden={!specsOpen}>
          <div className="spec-drawer-heading">Project details</div>
          <div className="spec-grid">
            {project.specs.map((item, idx) => (
              <div key={idx} className="spec-item">
                <span className="spec-key">{item.key}</span>
                <span className="spec-val">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
