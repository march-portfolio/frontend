import ProjectGallery from "@/components/ProjectGallery";
import { actingProjects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/acting-modeling");

export default function GalleryPage() {
  return <ProjectGallery discipline="acting-modeling" title="Acting & Creative Work" lead="marchtanu is my artist identity for acting, performance and creative content." projects={actingProjects} />;
}
