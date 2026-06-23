import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const routes = ["", "/services", "/industries", "/resources", "/about", "/book", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => [
    {
      url: `${site.baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    },
    {
      url: `${site.baseUrl}/zh${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    }
  ]);
}
