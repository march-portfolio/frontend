import ProjectGallery from "@/components/ProjectGallery";
import { aiProjects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/ai-systems");

export default function GalleryPage() {
  return <ProjectGallery discipline="ai-systems" title="AI & Intelligent Systems" lead="Desktop assistants, gesture interaction, document tools and audio recognition. These projects include active development and local prototypes." projects={aiProjects} />;
}
