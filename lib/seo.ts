import type { Metadata } from "next";
import { site } from "./content";
import type { Locale } from "./i18n";

const titles: Record<string, Record<Locale, string>> = {
  "": {
    en: "Bridge Workflow Studio | AI Workflow Automation & Digital Transformation",
    zh: "Bridge Workflow Studio | AI 流程自动化与数字化转型"
  },
  services: { en: "Services", zh: "服务" },
  industries: { en: "Industries", zh: "服务行业" },
  resources: { en: "Resources", zh: "资源" },
  about: { en: "About", zh: "关于我们" },
  book: { en: "Book a Consultation", zh: "预约咨询" },
  contact: { en: "Contact", zh: "联系" }
};

const descriptions: Record<Locale, string> = {
  en: "Bridge Workflow Studio helps growing businesses adopt AI, automate workflows, improve customer follow-up, and implement practical digital systems.",
  zh: "Bridge Workflow Studio 帮助加拿大中小企业应用 AI、自动化流程、优化客户跟进，并建立实用的数字化系统。"
};

export function pageMetadata(locale: Locale, route = ""): Metadata {
  const path = route ? `/${locale}/${route}` : `/${locale}`;
  const canonical = `${site.baseUrl}${path}`;

  return {
    title: titles[route][locale],
    description: descriptions[locale],
    alternates: {
      canonical,
      languages: {
        en: `${site.baseUrl}/en${route ? `/${route}` : ""}`,
        "zh-CN": `${site.baseUrl}/zh${route ? `/${route}` : ""}`
      }
    },
    openGraph: {
      title: titles[route][locale],
      description: descriptions[locale],
      url: canonical,
      siteName: "Bridge Workflow Studio",
      type: "website"
    }
  };
}
