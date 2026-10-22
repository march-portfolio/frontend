"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./apple-section.scss";

interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

interface AppleSectionProps {
  id?: string;
  theme?: "dark" | "light";
  eyebrow: string;
  headline: string;
  tagline: string;
  specs?: string[];
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  children?: React.ReactNode;
}

export function AppleSection({
  id,
  theme = "dark",
  eyebrow,
  headline,
  tagline,
  specs = [],
  primaryCta,
  secondaryCta,
  children,
}: AppleSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`apple-section ${theme}`}
      data-inview={isInView}
    >
      <div className="section-inner">
        {/* Top Header Content */}
        <div className="header-stack">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="headline">{headline}</h2>
          <p className="tagline">{tagline}</p>

          {/* Action CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="cta-row">
              {primaryCta && (
                primaryCta.external ? (
                  <a
                    href={primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {primaryCta.label}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                ) : (
                  <Link href={primaryCta.href} className="btn-primary">
                    {primaryCta.label}
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                )
              )}
              {secondaryCta && (
                secondaryCta.external ? (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link href={secondaryCta.href} className="btn-secondary">
                    {secondaryCta.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>

        {/* Centerpiece Visual Mockup */}
        {children && <div className="mockup-frame">{children}</div>}

        {/* Bottom Spec Pills */}
        {specs.length > 0 && (
          <div className="specs-stack">
            {specs.map((spec, idx) => (
              <span key={idx} className="spec-pill">
                {spec}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AppleSection;
