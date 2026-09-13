"use client";

import React from "react";
import "./mockups.scss";

export default function MCMockup() {
  return (
    <div className="apple-mockup-window mc-mockup">
      {/* Window Header */}
      <div className="window-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="window-tab">
          <i className="bi bi-mic-fill"></i>
          <span>Stage Console &bull; Master of Ceremonies (MC) &amp; Live Hosting</span>
        </div>
        <div className="window-actions">
          <span className="badge-status">
            <span className="status-indicator live"></span>
            <span>Live Mic &bull; Main Stage Audio Active</span>
          </span>
        </div>
      </div>

      {/* Main Stage Board */}
      <div className="mc-board-body">
        {/* Stage Hero Banner */}
        <div className="stage-hero">
          <div className="stage-badge-icon">
            <i className="bi bi-broadcast-pin"></i>
          </div>
          <div className="stage-meta-info">
            <div className="event-headline-row">
              <span className="event-tag">Bilingual Stage Host</span>
              <span className="event-date">Live Events &bull; University &amp; Corporate</span>
            </div>
            <h3 className="stage-role-title">Master of Ceremonies &amp; Keynote Presenter</h3>
            <p className="stage-role-desc">
              Bilingual stage hosting, speaker introductions, live crowd engagement, and smooth ceremony pacing in English and Thai.
            </p>
          </div>
          <div className="audio-telemetry">
            <div className="telemetry-item">
              <span className="telemetry-label">MIC GAIN</span>
              <span className="telemetry-val">+4.5 dB</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">SAMPLE RATE</span>
              <span className="telemetry-val">48 kHz 24-Bit</span>
            </div>
            <div className="live-vu-mini">
              <span className="vu-led green"></span>
              <span className="vu-led green"></span>
              <span className="vu-led green"></span>
              <span className="vu-led yellow"></span>
              <span className="vu-led red"></span>
            </div>
          </div>
        </div>

        {/* Major MC Competencies Grid */}
        <div className="mc-events-grid">
          {/* Card 1: Keynote Moderation */}
          <div className="event-card active">
            <div className="event-card-top">
              <span className="event-card-badge red">Bilingual</span>
              <span className="event-status-tag">Keynote Stage</span>
            </div>
            <h4 className="event-name">Keynote &amp; Speaker Moderation</h4>
            <p className="event-desc">
              Facilitating speaker introductions, keynote transitions, panel Q&amp;A sessions, and dynamic onstage dialogues with conversational poise.
            </p>
            <div className="event-card-footer">
              <span className="event-metric"><i className="bi bi-translate"></i> IELTS 6.5 (Speaking 7.0)</span>
              <span className="event-lang">TH &bull; EN</span>
            </div>
          </div>

          {/* Card 2: Crowd Calibration */}
          <div className="event-card">
            <div className="event-card-top">
              <span className="event-card-badge blue">Live Stage</span>
              <span className="event-status-tag">Audience Command</span>
            </div>
            <h4 className="event-name">Crowd Calibration &amp; Pacing</h4>
            <p className="event-desc">
              High-energy audience calibration, spontaneous stage banter, handling unexpected delays, and keeping multi-hour programs running on cue.
            </p>
            <div className="event-card-footer">
              <span className="event-metric"><i className="bi bi-megaphone-fill"></i> Main Stage Lead</span>
              <span className="event-lang">High Energy</span>
            </div>
          </div>

          {/* Card 3: Audiovisual & Technical Lead */}
          <div className="event-card">
            <div className="event-card-top">
              <span className="event-card-badge gold">Technical</span>
              <span className="event-status-tag">AV &amp; Media</span>
            </div>
            <h4 className="event-name">Audiovisual Coordination</h4>
            <p className="event-desc">
              Technical stage foundation from Audiovisual Department leadership: live microphone technique, soundboard cues, and teleprompter coordination.
            </p>
            <div className="event-card-footer">
              <span className="event-metric"><i className="bi bi-broadcast"></i> AV Department Lead</span>
              <span className="event-lang">Pro Audio</span>
            </div>
          </div>
        </div>

        {/* Bottom MC Credentials Strip */}
        <div className="mc-credentials-strip">
          <div className="cred-chip">
            <i className="bi bi-translate"></i>
            <span>Bilingual (Thai &amp; English IELTS 6.5)</span>
          </div>
          <div className="cred-divider"></div>
          <div className="cred-chip">
            <i className="bi bi-person-video3"></i>
            <span>Live Broadcast &amp; Keynote Speaking</span>
          </div>
          <div className="cred-divider"></div>
          <div className="cred-chip">
            <i className="bi bi-check-circle-fill"></i>
            <span>Stage Presence &amp; Crowd Energy Control</span>
          </div>
        </div>
      </div>
    </div>
  );
}
