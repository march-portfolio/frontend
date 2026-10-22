import ProjectGallery from "@/components/ProjectGallery";
import { softwareProjects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/software");

export default function GalleryPage() {
  return <ProjectGallery discipline="software" title="Software & Web Development" lead="Client work and personal projects, with my role, the technology used and the current stage of each project." projects={softwareProjects} />;
}
