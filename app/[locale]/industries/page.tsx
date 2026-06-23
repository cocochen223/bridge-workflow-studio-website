import { IndustryCards } from "@/components/CardGrid";
import { Section } from "@/components/Section";
import { copy } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "industries");
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale].industries;

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f8fbfd_0%,#ffffff_48%,#e7f4f2_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-teal">Bridge Workflow Studio</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-[2.8rem]">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">{t.subtitle}</p>
        </div>
      </section>
      <Section title={locale === "en" ? "Common issues and practical solutions" : "常见问题与实用方案"}>
        <IndustryCards
          items={t.items}
          painLabel={locale === "en" ? "Pain points" : "常见痛点"}
          solutionLabel={locale === "en" ? "Solutions" : "示例方案"}
        />
      </Section>
    </>
  );
}
