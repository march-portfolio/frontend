"use client";

import React, { useState } from "react";
import AppleGalleryLayout from "@/components/apple-gallery/AppleGalleryLayout";
import AppleGalleryCard, { GalleryProject } from "@/components/apple-gallery/AppleGalleryCard";

const aiProjects: GalleryProject[] = [
  {
    id: "auhip-core",
    title: "auhip (Jarvis AI Core)",
    category: "Autonomous AI Agent",
    role: "Lead Architect & Developer",
    tagline: "Desktop AI Assistant on PyQt6 AsyncIO Event Loop",
    description:
      "An autonomous desktop assistant built to execute operating system commands, system controls, and contextual AI interactions with zero cloud dependency for core local routines.",
    bullets:
      [
        "PyQt6 event loop seamlessly bridged with Python AsyncIO using qasync.",
        "Dynamic command registry pattern decoupling trigger listeners from system actions.",
        "Thread-safe event streaming for high-responsiveness audio and visual inputs.",
        "Local SQLite action memory and persistent preference indexing.",
      ],
    techPills: ["Python", "PyQt6", "AsyncIO", "qasync", "Threading", "SQLite", "Desktop Automation"],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Event Loop", value: "PyQt6 + Python asyncio synchronized via qasync" },
      { key: "Registry", value: "Pluggable command dispatcher decoupling intent from execution" },
      { key: "Memory", value: "Local SQLite persistent state and command telemetry" },
      { key: "Concurrency", value: "Background worker threads for non-blocking I/O" },
    ],
  },
  {
    id: "snap-detection",
    title: "Acoustic Snap Detection",
    category: "Edge Audio DSP",
    role: "Signal Processing Engineer",
    tagline: "Real-Time Dual-Transient Acoustic Frequency Trigger",
    description:
      "A zero-friction wake mechanism using transient acoustic analysis to trigger voice assistance upon hearing a double-snap, completely bypassing wake-word fatigue and always-on cloud listening.",
    bullets:
      [
        "High-frequency transient audio spike detection using NumPy and PyAudio streams.",
        "Dual-peak temporal coincidence windowing (120ms - 450ms) to reject false positives.",
        "Sub-15ms processing latency on local CPU with under 1% CPU utilization.",
        "Instantaneous wake event triggering the offline Vosk speech recognition pipeline.",
      ],
    techPills: ["Python", "PyAudio", "NumPy", "SciPy DSP", "Acoustics", "Low-Latency DSP"],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Trigger Mechanism", value: "Dual acoustic transient amplitude spike matching" },
      { key: "Window Threshold", value: "120ms to 450ms inter-snap interval validation" },
      { key: "Performance", value: "<15ms latency, <1% baseline CPU overhead" },
      { key: "Privacy", value: "100% offline audio buffer analysis without recording retention" },
    ],
  },
  {
    id: "vosk-stt",
    title: "Vosk Offline Neural STT",
    category: "On-Device Speech AI",
    role: "Speech Systems Engineer",
    tagline: "Low-Latency On-Device Neural Speech Recognition",
    description:
      "Privacy-first offline speech-to-text pipeline transcribing voice commands locally without internet connectivity, paired with an automatic cloud escalation fallback.",
    bullets:
      [
        "Kaldi-based small-footprint Vosk acoustic model running locally on disk.",
        "Dynamic audio streaming with silence detection and partial phrase decoding.",
        "Seamless automated fallback to Google Speech API if local acoustic confidence drops.",
        "Zero telemetry egress for sensitive local system command processing.",
      ],
    techPills: ["Vosk", "Kaldi", "Python", "PyAudio", "Google Speech API", "Edge AI"],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Engine", value: "Vosk lightweight Kaldi acoustic and language models" },
      { key: "Streaming", value: "Chunked PCM 16kHz mono audio ring buffer" },
      { key: "Fallback Protocol", value: "Dynamic fallback to Google Speech API when acoustic confidence < 0.72" },
      { key: "Privacy", value: "Air-gapped transcription for local OS automation" },
    ],
  },
  {
    id: "mediapipe-gestures",
    title: "MediaPipe Gesture Vision",
    category: "Computer Vision",
    role: "Computer Vision Engineer",
    tagline: "Real-Time 21-Point 3D Hand Tracking & Touchless Control",
    description:
      "Computer vision interface translating spatial hand geometry and palm orientations into desktop OS navigation, media playback, and window management commands.",
    bullets:
      [
        "Real-time 21 landmark 3D coordinate estimation using Google MediaPipe Hand solution.",
        "Euclidean distance heuristics and vector angle calculations for gesture classification.",
        "Smooth trajectory filtering and temporal debounce algorithms preventing accidental command firing.",
        "Touchless volume slider, tab switching, and window minimize/maximize controls.",
      ],
    techPills: ["MediaPipe", "OpenCV", "Python", "NumPy", "Vector Math", "Gesture Control"],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Tracking Points", value: "21 spatial 3D skeletal hand landmarks at 30+ FPS" },
      { key: "Gesture Heuristics", value: "Vector angle dot products and fingertip-to-palm Euclidean distances" },
      { key: "Debounce Filter", value: "300ms temporal smoothing to prevent false trigger jitter" },
      { key: "Use Cases", value: "Touchless desktop control, presentation slides, media volume" },
    ],
  },
  {
    id: "ollama-hybrid",
    title: "Ollama Local LLM Intent Router",
    category: "Hybrid LLM Architecture",
    role: "AI Systems Architect",
    tagline: "Edge-First Local Inference with Cloud Escalation",
    description:
      "A hybrid intent routing engine directing conversational queries between local quantized models running on Ollama and large-scale cloud models (Google Gemini) based on task complexity.",
    bullets:
      [
        "Local quantized model inference via Ollama local socket and REST API.",
        "Rule-based and semantic intent classifiers categorizing system tasks vs. open-ended queries.",
        "Dynamic cloud escalation to Google Gemini for complex reasoning and multi-modal tasks.",
        "Context preservation across the local-to-cloud handoff lifecycle.",
      ],
    techPills: ["Ollama", "Google Gemini API", "Python", "Quantization", "JSON Schema", "REST APIs"],
    primaryLink: {
      label: "GitHub Repository",
      href: "https://github.com/marchtanu",
      external: true,
    },
    specs: [
      { key: "Edge Engine", value: "Local quantized LLMs running via Ollama local socket" },
      { key: "Routing Heuristics", value: "Task taxonomy router separating deterministic actions from creative synthesis" },
      { key: "Cloud Tier", value: "Dynamic escalation to Google Gemini via async Python SDK" },
      { key: "Context Sync", value: "Structured chat history serialization across provider boundaries" },
    ],
  },
  {
    id: "biometric-engine",
    title: "Kindee Biometric & Nutrition Engine",
    category: "Biometric Data Science",
    role: "Lead Algorithm Designer",
    tagline: "Exercise Physiology & Biometric Macronutrient Partitioning",
    description:
      "Algorithmic health engine combining wearable telemetry, exercise biomechanics, and meal nutrition data to calculate accurate metabolic energy expenditure and dynamic macronutrient partitioning.",
    bullets:
      [
        "Formulated on exercise physiology principles from high-level athletic bodybuilding (80kg goal).",
        "Dynamic Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) calculation.",
        "Automated cross-referencing of allergen ingredient profiles against user health histories.",
        "Algorithmic macronutrient ratio adjustments based on workout intensity and recovery phases.",
      ],
    techPills: ["Python", "NumPy", "Pandas", "Health Analytics", "Exercise Physiology", "Algorithms"],
    primaryLink: {
      label: "Inquire Collaboration",
      href: "/pages/contact",
    },
    specs: [
      { key: "Science Base", value: "Sports biomechanics, hypertrophy training, and macronutrient pathways" },
      { key: "Algorithms", value: "Mifflin-St Jeor / Katch-McArdle dynamic expenditure + thermogenesis modeling" },
      { key: "Allergen Engine", value: "Graph-based ingredient taxonomy matching cross-reactive allergens" },
      { key: "Integration", value: "Direct algorithmic foundation for the Kindee consumer platform" },
    ],
  },
];

export default function AISystemsGalleryPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "Autonomous AI Agent",
    "Edge Audio DSP",
    "On-Device Speech AI",
    "Computer Vision",
    "Hybrid LLM Architecture",
    "Biometric Data Science",
  ];

  const filteredProjects =
    filter === "All" ? aiProjects : aiProjects.filter((p) => p.category === filter);

  return (
    <AppleGalleryLayout
      currentDiscipline="ai-systems"
      eyebrow="March Creative &bull; Deep-Dive Gallery"
      title="AI & Autonomous Systems"
      lead="Acoustic transient frequency detection, on-device neural speech recognition, real-time hand gesture vision, and hybrid local LLM routing on an asynchronous Python engine."
      stats={[
        { icon: "cpu-fill", label: "Edge-First Local Processing" },
        { icon: "soundwave", label: "Acoustic Snap Detection" },
        { icon: "mic-fill", label: "Offline Vosk Neural STT" },
        { icon: "hand-index-thumb-fill", label: "MediaPipe 21-Point Vision" },
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
