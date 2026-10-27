import type { MetadataRoute } from "next";
import { getIndex } from "@/lib/data";
import { getAllBlogSlugs } from "@/lib/blog";

const BASE = "https://fedtalentusa.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const index = await getIndex();
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1.0 },
    { url: `${BASE}/contractors`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/tools/contractor-finder`, lastModified: now, priority: 0.7 },
    ...getAllBlogSlugs().map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      priority: 0.6,
    })),
    { url: `${BASE}/about`, lastModified: now, priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.5 },
    ...index.map((e) => ({
      url: `${BASE}/contractors/${e.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
