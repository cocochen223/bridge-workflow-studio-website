import { site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function StructuredData({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bridge Workflow Studio",
    url: site.baseUrl,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oakville",
      addressRegion: "Ontario",
      addressCountry: "CA"
    },
    areaServed: ["GTA", "Ontario", "Canada"],
    availableLanguage: locale === "en" ? ["English", "Simplified Chinese"] : ["简体中文", "英语"],
    serviceType: [
      "Workflow Automation",
      "AI Business Assistants",
      "CRM Systems",
      "Digital Transformation Consulting",
      "Business Websites"
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
