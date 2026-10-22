import portfolio from "./portfolio.json";
import type { GalleryProject } from "@/components/apple-gallery/AppleGalleryCard";

export const softwareProjects: GalleryProject[] = portfolio.software;
export const actingProjects: GalleryProject[] = portfolio.acting;
export const hostingProjects: GalleryProject[] = portfolio.hosting;

const aiProjectIds = new Set(["auhip", "kinesisos", "openfeder", "blackbox"]);
export const aiProjects = softwareProjects.filter((project) => aiProjectIds.has(project.id));
