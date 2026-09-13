import React from "react";
import "./mockups.scss";

export function ModelMockup() {
  return (
    <div className="apple-mockup-window model-mockup">
      <div className="window-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="window-tab">
          <i className="bi bi-box"></i>
          <span>Blender 3D &bull; SpatialEnvironment.blend</span>
        </div>
        <div className="window-actions">
          <span className="badge-status render">
            <span className="status-indicator active-render"></span> Cycles GPU &bull; 1024 Samples
          </span>
        </div>
      </div>

      <div className="viewport-3d-canvas">
        <div className="viewport-hud top-left">
          <span className="hud-line">Perspective &bull; Focal Length 85mm</span>
          <span className="hud-line">Vertices: 48,210 &bull; Faces: 24,105</span>
        </div>

        <div className="viewport-hud top-right">
          <span className="hud-badge active">Rendered</span>
          <span className="hud-badge">Solid</span>
          <span className="hud-badge">Wireframe</span>
        </div>

        {/* 3D Geometry Wireframe Graphic Representation */}
        <div className="geometry-showcase">
          <div className="cube-3d">
            <div className="face front"><span>UI / UX</span></div>
            <div className="face back"><span>Figma</span></div>
            <div className="face right"><span>Blender</span></div>
            <div className="face left"><span>Shaders</span></div>
            <div className="face top"><span>3D Asset</span></div>
            <div className="face bottom"><span>Cycles</span></div>
          </div>
          <div className="grid-floor"></div>
        </div>

        <div className="viewport-hud bottom-bar">
          <span>Transform: [0.0, 0.0, 0.0]</span>
          <span>Principled BSDF &bull; Metallic 0.8 &bull; Roughness 0.2</span>
        </div>
      </div>
    </div>
  );
}

export default ModelMockup;
