import fallbackImg from "@/assets/march_project_logo.png";
import type { StaticImageData } from "next/image";
import { softwareProjects, actingProjects, hostingProjects } from "./portfolio";

export interface Project {
  label: string;
  img: StaticImageData | string;
  type: "Code" | "StartUp" | "MC" | "Actor" | "TikTok" | "Gym" | "University" | "Design";
  description: string;
  tags?: string[];
  link?: string;
}

export const projectsData: Project[] = [
  ...softwareProjects.map((project): Project => ({
    label: project.title, img: fallbackImg,
    type: project.id === "kindee" || project.id === "stagelink" ? "StartUp" : "Code",
    description: project.description,
    tags: [project.status, ...project.techPills].filter(Boolean),
    link: project.primaryLink?.href
  })),
  ...actingProjects.map((project): Project => ({ label: project.title, img: fallbackImg, type: "Actor", description: project.description, tags: project.techPills, link: project.primaryLink?.href })),
  ...hostingProjects.map((project): Project => ({ label: project.title, img: fallbackImg, type: "MC", description: project.description, tags: project.techPills, link: project.primaryLink?.href }))
];
