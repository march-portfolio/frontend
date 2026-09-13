"use client";

import React from "react";
import "./mockups.scss";

export default function ActorModelMockup() {
  return (
    <div className="apple-mockup-window actor-model-mockup">
      {/* Agency Window Header */}
      <div className="window-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="window-tab">
          <i className="bi bi-person-badge"></i>
          <span>Me Mind Y Studio &bull; Talent Roster &amp; Model Portfolio</span>
        </div>
        <div className="window-actions">
          <span className="badge-status">
            <span className="status-indicator active-acting"></span>
            <span>Agency Active &bull; Series Production</span>
          </span>
        </div>
      </div>

      {/* Talent Spotlight Board */}
      <div className="talent-board-body">
        {/* Talent Hero Header */}
        <div className="talent-hero">
          <div className="talent-avatar-badge">
            <span className="avatar-initials">TS</span>
            <span className="verified-check">
              <i className="bi bi-patch-check-fill"></i>
            </span>
          </div>

          <div className="talent-headline-info">
            <div className="name-row">
              <h3 className="talent-name">Tanuphat Sojindamanee</h3>
              <span className="stage-name-pill">March</span>
            </div>
            <p className="talent-title">Actor &bull; Me Mind Y Studio &bull; Fashion &amp; Commercial Model</p>
            <div className="talent-attributes">
              <span className="attr-pill"><i className="bi bi-geo-alt"></i> Bangkok, Thailand</span>
              <span className="attr-pill"><i className="bi bi-arrows-vertical"></i> 175 cm</span>
              <span className="attr-pill"><i className="bi bi-heart-pulse"></i> 80 kg Athletic</span>
              <span className="attr-pill"><i className="bi bi-translate"></i> Thai &amp; English (IELTS 6.5)</span>
            </div>
          </div>
        </div>

        {/* Portfolio Feature Cards */}
        <div className="talent-disciplines-grid">
          {/* Card 1: Dramatic Acting */}
          <div className="discipline-card active-series">
            <div className="card-top">
              <div className="discipline-icon acting">
                <i className="bi bi-camera-reels-fill"></i>
              </div>
              <span className="card-badge">Me Mind Y</span>
            </div>
            <h4 className="discipline-title">Dramatic Series Acting</h4>
            <p className="discipline-desc">
              Professional acting in drama and romance series. Script interpretation, character arc development, action choreography, and intense emotional scenes.
            </p>
            <div className="discipline-footer">
              <span className="queue-status"><i className="bi bi-broadcast"></i> Shooting Queue Active</span>
            </div>
          </div>

          {/* Card 2: Fashion & Commercial Modeling */}
          <div className="discipline-card">
            <div className="card-top">
              <div className="discipline-icon modeling">
                <i className="bi bi-person-bounding-box"></i>
              </div>
              <span className="card-badge">Editorial</span>
            </div>
            <h4 className="discipline-title">Fashion &amp; Commercial Modeling</h4>
            <p className="discipline-desc">
              Studio strobe photography, brand lookbooks, contemporary streetwear, and formal tailored menswear with high camera confidence and athletic poise.
            </p>
            <div className="discipline-footer">
              <span className="queue-status"><i className="bi bi-camera"></i> Studio &amp; Runway Ready</span>
            </div>
          </div>

          {/* Card 3: Brand Representation */}
          <div className="discipline-card">
            <div className="card-top">
              <div className="discipline-icon brand">
                <i className="bi bi-star-fill"></i>
              </div>
              <span className="card-badge">Commercial</span>
            </div>
            <h4 className="discipline-title">Brand Ambassadorship &amp; PR</h4>
            <p className="discipline-desc">
              Brand partnership integrations, press appearances, audience engagement campaigns, and digital media presence across Instagram and TikTok.
            </p>
            <div className="discipline-footer">
              <span className="queue-status"><i className="bi bi-instagram"></i> @marchtanu</span>
            </div>
          </div>
        </div>

        {/* Production Slate Footer */}
        <div className="production-slate-strip">
          <div className="slate-item">
            <span className="slate-label">AGENCY</span>
            <span className="slate-val">Me Mind Y Studio</span>
          </div>
          <div className="slate-divider"></div>
          <div className="slate-item">
            <span className="slate-label">DISCIPLINE</span>
            <span className="slate-val">Acting &amp; Modeling</span>
          </div>
          <div className="slate-divider"></div>
          <div className="slate-item">
            <span className="slate-label">STATUS</span>
            <span className="slate-val highlight">Active Representation</span>
          </div>
          <div className="slate-divider"></div>
          <div className="slate-item">
            <span className="slate-label">CASTING</span>
            <span className="slate-val">Open for Bookings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
