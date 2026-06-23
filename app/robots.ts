import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://bridgeworkflowstudio.com/sitemap.xml",
    host: "https://bridgeworkflowstudio.com"
  };
}
