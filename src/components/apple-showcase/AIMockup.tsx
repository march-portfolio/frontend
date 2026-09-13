import React from "react";
import "./mockups.scss";

export function AIMockup() {
  return (
    <div className="apple-mockup-window ai-mockup">
      <div className="window-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="window-tab">
          <i className="bi bi-cpu"></i>
          <span>Jarvis.ecosystem &bull; Auhip Platform</span>
        </div>
        <div className="window-actions">
          <span className="badge-status ai">
            <span className="status-indicator active-ai"></span> Autonomous Loop
          </span>
        </div>
      </div>

      <div className="ai-interface-body">
        <div className="ai-agent-chain">
          <div className="chain-node active">
            <div className="node-icon"><i className="bi bi-mic-fill"></i></div>
            <div className="node-info">
              <span className="node-title">Acoustic Snap &amp; Vosk STT</span>
              <span className="node-detail">Energy-based double-snap trigger &amp; offline speech</span>
            </div>
            <span className="node-metric">12ms</span>
          </div>

          <div className="chain-connector"></div>

          <div className="chain-node active">
            <div className="node-icon"><i className="bi bi-camera-video-fill"></i></div>
            <div className="node-info">
              <span className="node-title">MediaPipe Vision &amp; Gestures</span>
              <span className="node-detail">OpenCV real-time hand tracking &amp; camera gestures</span>
            </div>
            <span className="node-metric">30fps</span>
          </div>

          <div className="chain-connector"></div>

          <div className="chain-node complete">
            <div className="node-icon"><i className="bi bi-cpu-fill"></i></div>
            <div className="node-info">
              <span className="node-title">Ollama + Gemini Hybrid</span>
              <span className="node-detail">Local fast intent routing with cloud escalation</span>
            </div>
            <span className="node-metric">qasync</span>
          </div>
        </div>

        <div className="ai-terminal-log">
          <p><span className="log-prompt">&gt; python auhip_main.py</span> --engine=asyncio --audio=vosk</p>
          <p className="log-success">[AUDIO] Acoustic double-snap detected (threshold 0.84) &rarr; AWAKE</p>
          <p className="log-muted">[ROUTING] Local Ollama intent parsed &bull; MediaPipe gesture active &bull; Cloud ready</p>
        </div>
      </div>
    </div>
  );
}

export default AIMockup;
