import type { Metadata, Viewport } from "next";
import "./globals.css";

const baseUrl = "https://bridgeworkflowstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bridge Workflow Studio | AI Workflow Automation & Digital Transformation",
    template: "%s | Bridge Workflow Studio"
  },
  description:
    "Bridge Workflow Studio helps growing businesses adopt AI, automate workflows, improve customer follow-up, and implement practical digital systems.",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Bridge Workflow Studio",
    title: "Bridge Workflow Studio | AI Workflow Automation & Digital Transformation",
    description:
      "AI workflow automation, CRM, websites, and digital transformation support for growing service businesses.",
    images: [{ url: "/logo-bridge.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge Workflow Studio",
    description:
      "Practical AI workflow automation and digital transformation for small businesses."
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      en: `${baseUrl}/en`,
      "zh-CN": `${baseUrl}/zh`
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
