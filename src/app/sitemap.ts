import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const currentDate = new Date().toISOString();

  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Portfolio projects
  const projects = [
    {
      id: "modern-minimalist",
      lastModified: currentDate,
    },
    {
      id: "contemporary-office",
      lastModified: currentDate,
    },
    {
      id: "luxury-bedroom",
      lastModified: currentDate,
    },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: project.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPosts = [
    {
      id: "incorporating-Abrens",
      lastModified: "2025-11-01T00:00:00+00:00",
    },
    {
      id: "kitchen-Abrens",
      lastModified: "2025-10-15T00:00:00+00:00",
    },
    {
      id: "color-psychology",
      lastModified: "2025-09-10T00:00:00+00:00",
    },
    {
      id: "sustainable-materials",
      lastModified: "2025-08-05T00:00:00+00:00",
    },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}

