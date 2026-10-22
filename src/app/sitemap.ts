import type { MetadataRoute } from "next";
import { publicPages, siteOrigin } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map(({ path }) => ({ url: `${siteOrigin}${path}` }));
}
