import { site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "book");
}

export default async function BookPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <section className="bg-mist py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-teal">Bridge Workflow Studio</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {locale === "en" ? "Book a Free 20-Minute Consultation" : "预约 20 分钟免费初步咨询"}
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {locale === "en"
              ? "Choose a time through Calendly to review your workflow, customer follow-up, and practical automation opportunities."
              : "请通过 Calendly 选择适合的时间，我们会一起了解你的业务流程、客户跟进和适合落地的自动化机会。"}
          </p>
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-md bg-teal px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal/20 hover:bg-ocean"
          >
            {locale === "en" ? "Open Calendly in a New Tab" : "在新标签打开 Calendly"}
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
          <iframe
            src={site.calendlyUrl}
            title="Bridge Workflow Studio Calendly booking"
            className="h-[760px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
