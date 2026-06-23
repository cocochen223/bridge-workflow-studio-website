import { CardGrid, TrustCards } from "@/components/CardGrid";
import { Section } from "@/components/Section";
import { copy } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f8fbfd_0%,#ffffff_48%,#e7f4f2_100%)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-teal">Bridge Workflow Studio</p>
            <h1 className="mt-2 max-w-4xl text-4xl font-bold leading-tight text-ink sm:text-[2.8rem]">{t.about.title}</h1>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">{t.about.body}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10">
            <p className="text-sm font-bold uppercase tracking-wide text-teal">{locale === "en" ? "Founder focus" : "创始人关注"}</p>
            <div className="mt-4 grid gap-3">
              {t.about.experience.slice(0, 4).map((item) => (
                <div key={item} className="rounded-lg bg-mist p-4 text-sm font-bold text-ocean">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Section title={locale === "en" ? "Experience That Supports Practical Implementation" : "支持实际落地的经验"}>
        <CardGrid items={t.about.experience} />
      </Section>
      <Section title={t.home.trustTitle} tone="mist">
        <TrustCards items={t.trust} />
      </Section>
    </>
  );
}
