import { ServiceCards } from "@/components/CardGrid";
import { Section } from "@/components/Section";
import { copy } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "services");
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f8fbfd_0%,#ffffff_48%,#e7f4f2_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-teal">Bridge Workflow Studio</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-[2.8rem]">{t.services.title}</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">{t.services.subtitle}</p>
        </div>
      </section>
      <Section title={locale === "en" ? "Digital systems that support daily work" : "真正支持日常工作的数字化系统"}>
        <ServiceCards items={t.services.items} locale={locale} learnMore={t.common.learnMore} />
      </Section>
      <section className="bg-mist py-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm shadow-slate-900/5 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">{locale === "en" ? "How we choose tools" : "我们如何选择工具"}</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">
                {locale === "en" ? "Simple first, then automate what matters." : "先把流程理清，再自动化真正重要的部分。"}
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-700">
              {locale === "en"
                ? "The goal is not to add more software. The goal is to reduce confusion, improve follow-up, and create systems that business owners and staff can maintain after launch."
                : "目标不是增加更多软件，而是减少混乱、提升客户跟进，并建立老板和员工上线后也能持续使用的系统。"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
