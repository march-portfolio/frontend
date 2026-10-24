"use client";

import { useState } from "react";
import AppleGalleryLayout from "@/components/apple-gallery/AppleGalleryLayout";
import AppleGalleryCard, { type GalleryProject } from "@/components/apple-gallery/AppleGalleryCard";

interface ProjectGalleryProps {
  discipline: "software" | "ai-systems" | "mc-hosting" | "acting-modeling";
  title: string;
  lead: string;
  projects: GalleryProject[];
}

export default function ProjectGallery({ discipline, title, lead, projects }: ProjectGalleryProps) {
  const [filter, setFilter] = useState("All");
  const categories = [...new Set(projects.map((project) => project.category))];
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <AppleGalleryLayout
      currentDiscipline={discipline}
      eyebrow={"March (MarchTanu)"}
      title={title}
      lead={lead}
      filterCategories={categories.length > 1 ? categories : []}
      onFilterChange={setFilter}
    >
      {visibleProjects.map((project) => <AppleGalleryCard key={project.id} project={project} />)}
    </AppleGalleryLayout>
  );
}
