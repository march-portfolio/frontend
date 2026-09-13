import React from "react";
import "./mockups.scss";

export function MediaMockup() {
  return (
    <div className="apple-mockup-window media-mockup">
      <div className="cinema-monitor-header">
        <div className="monitor-meta">
          <span className="rec-dot"></span>
          <span className="meta-text">4K DCI &bull; 24.000 FPS &bull; 10-BIT 4:2:2</span>
        </div>
        <div className="timecode-display">
          <span>01:24:18:04</span>
        </div>
        <div className="audiovisual-lead-badge">
          <i className="bi bi-camera-reels-fill"></i>
          <span>Audiovisual Lead</span>
        </div>
      </div>

      <div className="cinema-canvas">
        <div className="letterbox-guide top"></div>
        <div className="center-reticle">
          <div className="crosshair"></div>
          <span className="shot-label">SCENE 04 &bull; TAKE 02 &bull; 50mm f/1.8</span>
        </div>
        <div className="letterbox-guide bottom"></div>

        {/* Audio Waveform Overlays */}
        <div className="audio-meter-bar">
          <div className="vu-meter">
            <span className="vu-fill" style={{ width: "78%" }}></span>
          </div>
          <div className="vu-meter">
            <span className="vu-fill" style={{ width: "82%" }}></span>
          </div>
        </div>
      </div>

      <div className="timeline-strip">
        <div className="timeline-track video">
          <span className="track-id">V1</span>
          <div className="clip video-clip">A-Roll Cinematic Master</div>
          <div className="clip video-clip b-roll">B-Roll Cutaway</div>
          <div className="clip video-clip grade">Graded Shot</div>
        </div>
        <div className="timeline-track audio">
          <span className="track-id">A1</span>
          <div className="clip audio-clip">Dialogue / Sound Design (Master Stereo)</div>
        </div>
      </div>
    </div>
  );
}

export default MediaMockup;
