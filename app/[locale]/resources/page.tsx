import { Section } from "@/components/Section";
import { copy } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "resources");
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale].resources;

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f8fbfd_0%,#ffffff_48%,#e7f4f2_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-teal">Bridge Workflow Studio</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-[2.8rem]">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">{t.subtitle}</p>
        </div>
      </section>
      <Section title={locale === "en" ? "Resource Categories" : "资源分类"}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.categories.map((item, index) => (
            <article key={item} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-sm font-black text-teal">0{index + 1}</div>
              <h2 className="mt-5 text-xl font-bold text-ocean">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {locale === "en"
                  ? "Practical guidance for business owners planning digital improvements."
                  : "为正在规划数字化提升的企业主准备的实用内容。"}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section title={locale === "en" ? "Planned Guides" : "计划中的指南"} tone="mist">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.future.map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 font-bold text-ocean shadow-sm shadow-slate-900/5">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
