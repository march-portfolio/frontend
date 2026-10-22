import ProjectGallery from "@/components/ProjectGallery";
import { hostingProjects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/mc-hosting");

export default function GalleryPage() {
  return <ProjectGallery discipline="mc-hosting" title="MC & Stage Hosting" lead="Event hosting and presentation inquiries. Share the brief, language, date and location to discuss the role and confirm availability." projects={hostingProjects} />;
}
