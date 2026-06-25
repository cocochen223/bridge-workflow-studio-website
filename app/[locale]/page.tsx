import Link from "next/link";
import { IndustryCards, ServiceCards } from "@/components/CardGrid";
import { Section } from "@/components/Section";
import { copy, site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale);
}

function DashboardMockup({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto w-full max-w-[760px] lg:max-w-[900px] xl:max-w-[960px]">
      <img
        src="/hero-dashboard-laptop.png"
        alt={locale === "en" ? "Laptop showing Bridge Workflow Studio workflow dashboard" : "Bridge Workflow Studio workflow dashboard on a laptop"}
        className="h-auto w-full rounded-2xl object-contain shadow-lg shadow-[#0D1B2A]/12"
      />
    </div>
  );
}

function TrustStrip({ locale }: { locale: Locale }) {
  const items =
    locale === "en"
      ? ["Bilingual Service", "Small Business Focused", "Remote Collaboration", "Practical Implementation", "Long-Term Partnership"]
      : ["中英双语服务", "专注中小企业", "支持远程协作", "重视落地执行", "长期合作支持"];

  return (
    <section className="bg-[#102A43] py-5 text-white">
      <div className="mx-auto grid max-w-[1480px] gap-3 px-5 sm:grid-cols-2 sm:gap-4 sm:px-8 lg:grid-cols-5">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 text-xs font-black text-teal-100">
              {index + 1}
            </span>
            <p className="text-sm font-bold leading-5">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats({ locale }: { locale: Locale }) {
  const stats =
    locale === "en"
      ? [
          ["100+", "Hours Saved", "Through automation"],
          ["30%", "Faster Follow-up", "With better systems"],
          ["24/7", "Automation", "Works while you focus on growth"],
          ["2", "Languages", "EN / 中文"]
        ]
      : [
          ["100+", "节省工时", "通过自动化减少重复工作"],
          ["30%", "更快跟进", "用系统提升客户响应"],
          ["24/7", "自动运行", "让流程持续工作"],
          ["2", "双语服务", "EN / 中文"]
        ];

  return (
    <section className="bg-white py-7">
      <div className="mx-auto grid max-w-[1480px] gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(([number, title, body]) => (
          <div key={title} className="reveal-card rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg hover:shadow-slate-900/10 sm:p-5">
            <p className="text-2xl font-black leading-none text-teal sm:text-3xl">{number}</p>
            <h3 className="mt-2 text-base font-bold text-ink sm:mt-2.5">{title}</h3>
            <p className="mt-1.5 text-sm leading-5 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudies({ locale }: { locale: Locale }) {
  const cases =
    locale === "en"
      ? [
          ["Manufacturing Workflow Automation", "Quote tracking, customer follow-up, and internal task reminders for a growing workshop."],
          ["Logistics Operations System", "Permit tracking, dispatch notes, recruitment follow-up, and digital forms in one workflow."],
          ["Real Estate Follow-Up Engine", "Lead capture, CRM pipeline, appointment reminders, and practical AI content support."]
        ]
      : [
          ["制造业流程自动化", "为成长中的工厂设计报价追踪、客户跟进和内部任务提醒流程。"],
          ["物流运营系统", "把许可追踪、调度记录、招聘跟进和数字表单整合到清晰流程中。"],
          ["地产客户跟进系统", "支持线索收集、CRM 管道、预约提醒和实用 AI 内容辅助。"]
        ];
  const images = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80"
  ];

  return (
    <Section title={locale === "en" ? "Case Studies" : "客户案例"} subtitle={locale === "en" ? "Representative project concepts showing how practical systems can support real operations." : "以代表性项目场景展示系统如何支持真实业务运营。"} tone="mist">
      <div className="grid gap-5 md:grid-cols-3">
        {cases.map(([title, body], index) => (
          <article key={title} className="reveal-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-xl hover:shadow-slate-900/10">
            <div className="h-36 overflow-hidden">
              <img src={images[index]} alt={title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-6">
              <p className="text-xs font-black uppercase tracking-wide text-teal">Concept 0{index + 1}</p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-ocean">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-bold text-teal hover:text-ocean">
                {locale === "en" ? "Discuss a similar workflow" : "咨询类似流程"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function AdvantageIcon({ index }: { index: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  const icons = [
    <svg key="languages" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle {...common} cx="12" cy="12" r="8.5" />
      <path {...common} d="M3.5 12h17M12 3.5c2.2 2.4 3.3 5.2 3.3 8.5S14.2 18.1 12 20.5M12 3.5C9.8 5.9 8.7 8.7 8.7 12s1.1 6.1 3.3 8.5" />
    </svg>,
    <svg key="pin" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path {...common} d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle {...common} cx="12" cy="10" r="2.4" />
    </svg>,
    <svg key="business" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path {...common} d="M4 10h16l-1.2-5.5H5.2L4 10Z" />
      <path {...common} d="M5 10v9h14v-9M8 19v-5h4v5M15 14h2" />
    </svg>,
    <svg key="implementation" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle {...common} cx="12" cy="12" r="8.5" />
      <path {...common} d="m8.5 12.2 2.3 2.3 4.9-5" />
    </svg>,
    <svg key="partnership" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path {...common} d="M7.5 12.5 5 10l3.2-3.2a3 3 0 0 1 4.2 0l.6.6.6-.6a3 3 0 0 1 4.2 0L21 10l-2.5 2.5" />
      <path {...common} d="m8.5 13.5 2.2 2.2a1.5 1.5 0 0 0 2.1 0l2.7-2.7M10 16.8l1.2 1.2a1.5 1.5 0 0 0 2.1 0L17 14.3" />
    </svg>
  ];

  return icons[index] ?? icons[0];
}

function WhyWorkWithBridge({ locale }: { locale: Locale }) {
  const items =
    locale === "en"
      ? [
          ["Bilingual Communication", "Clear support for Chinese and English-speaking business owners."],
          ["Remote Collaboration Ready", "Clear communication and practical delivery for businesses working online or across locations."],
          ["Small Business Friendly", "Practical scope, budget awareness, and systems your team can use."],
          ["Practical Implementation", "Support that moves from advice into usable workflow improvements."],
          ["Long-Term Partnership", "Systems designed to improve over time as your business grows."]
        ]
      : [
          ["中英双语沟通", "为中文和英文企业主提供清晰、直接、容易理解的沟通支持。"],
          ["支持远程协作", "通过清晰沟通和线上协作，支持不同地区的企业推进项目。"],
          ["适合中小企业", "方案会考虑预算、人手、日常流程和团队实际使用能力。"],
          ["重视落地执行", "不只是给建议，而是帮助把想法变成可使用的业务流程。"],
          ["长期合作支持", "系统会随着业务成长持续优化，而不是一次性完成后就结束。"]
        ];

  return (
    <Section
      title={locale === "en" ? "Why Work With Bridge Workflow Studio" : "为什么选择 Bridge Workflow Studio"}
      subtitle={
        locale === "en"
          ? "Practical support for owners who need clearer systems, better follow-up, and realistic digital improvements."
          : "为需要更清晰系统、更稳定客户跟进和务实数字化改进的企业主提供落地支持。"
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {items.map(([title, body], index) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 sm:p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/10 text-teal ring-1 ring-teal/20 sm:h-10 sm:w-10">
              <AdvantageIcon index={index} />
            </div>
            <h3 className="mt-3 text-base font-bold leading-snug text-ocean sm:mt-4">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ConsultationCta({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1480px] overflow-hidden rounded-3xl bg-[#102A43] text-white shadow-2xl shadow-slate-900/20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 sm:p-9 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-teal-100">Book a Free Consultation</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{t.home.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">{t.home.ctaBody}</p>
            <p className="mt-3 text-sm text-slate-200">{locale === "en" ? "Calendly-ready consultation section with email fallback." : "可接入 Calendly，也支持邮件咨询预约。"}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-teal px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-ocean">
                {locale === "en" ? "Book Now" : "立即预约"}
              </a>
              <a href={`mailto:${site.email}`} className="break-all rounded-md border border-white/30 px-5 py-3 text-center text-sm font-bold text-white hover:bg-white/10 sm:px-6 sm:text-base">
                {site.email}
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=85"
              alt={locale === "en" ? "Consultation call" : "商务咨询预约"}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102A43]/20 to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = copy[locale];
  const hero =
    locale === "en"
      ? {
          eyebrow: "AI - AUTOMATION - DIGITAL TRANSFORMATION",
          title: "AI-Powered Workflow Solutions for Growing Businesses",
          subtitle: "Helping growing businesses automate follow-ups, streamline operations, and build practical digital systems.",
          note: "Helping business owners improve follow-up, reduce repetitive work, and build practical digital operations."
        }
      : {
          eyebrow: "AI - 自动化 - 数字化转型",
          title: "为成长型企业打造 AI 流程自动化解决方案",
          subtitle: "帮助成长型企业自动化客户跟进、优化日常运营，并建立真正实用的数字化系统。",
          note: "面向加拿大中小企业主，重视落地、效率和长期可维护性。"
        };

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_48%,#eaf7fb_100%)]">
        <div className="mx-auto grid max-w-[1640px] min-w-0 items-center gap-8 px-4 py-9 sm:px-5 sm:py-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14 lg:px-10 lg:py-14 xl:px-12">
          <div className="reveal-card min-w-0 max-w-[620px]">
            <p className="max-w-full text-[13px] font-black uppercase leading-6 tracking-[0.1em] text-teal sm:whitespace-nowrap sm:text-[15px] sm:tracking-[0.14em]">{hero.eyebrow}</p>
            <h1 className="mt-3 max-w-[580px] text-[clamp(34px,10vw,48px)] font-black leading-[1.08] text-[#0D1B2A] sm:mt-4 lg:text-[clamp(38px,3.8vw,56px)]">{hero.title}</h1>
            <p className="mt-4 max-w-[540px] text-base leading-[1.55] text-slate-700 sm:mt-5 sm:text-lg">{hero.subtitle}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {t.home.badges.map((badge) => (
                <div key={badge} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[11px] font-black text-teal ring-1 ring-teal/20">✓</span>
                  <span className="text-[13px] font-bold leading-5 text-ocean">{badge}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-teal px-6 py-3 text-center font-black text-white shadow-lg shadow-teal/15 hover:bg-ocean">
                {locale === "en" ? "Book Free Consultation" : "预约免费咨询"}
              </a>
              <Link href={`/${locale}/services`} className="rounded-md border border-[#086fd6] bg-white px-6 py-3 text-center font-black text-[#086fd6] shadow-sm hover:border-teal hover:text-teal">
                {t.common.explore}
              </Link>
            </div>
          </div>
          <div className="reveal-card min-w-0">
            <DashboardMockup locale={locale} />
          </div>
        </div>
      </section>

      <TrustStrip locale={locale} />
      <Stats locale={locale} />

      <Section title={t.home.whoTitle} subtitle={t.industries.subtitle} tone="mist">
        <IndustryCards
          items={t.industries.items.slice(0, 6)}
          locale={locale}
          learnMore={t.common.learnMore}
          painLabel={locale === "en" ? "Common issues" : "常见问题"}
          solutionLabel={locale === "en" ? "Popular Solutions" : "常用解决方案"}
        />
      </Section>

      <section className="bg-[#EEF4F7] py-6">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1100px]">
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-[2.25rem]">{t.home.problemsTitle}</h2>
            <p className="mt-3 max-w-[1100px] whitespace-normal text-xl leading-[1.5] text-slate-600">{t.home.problemsSubtitle}</p>
          </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {t.home.problems.map((problem, index) => (
          <article key={problem} className="reveal-card min-h-[118px] rounded-2xl border border-slate-200 bg-white px-7 py-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg hover:shadow-slate-900/10">
            <span className="text-lg font-black leading-none text-teal">0{index + 1}</span>
            <p className="mt-2 text-lg font-bold leading-snug text-ocean">{problem}</p>
          </article>
          ))}
        </div>
        </div>
      </section>

      <Section title={t.home.whatTitle} subtitle={t.services.subtitle} tone="mist">
        <ServiceCards items={t.services.items} locale={locale} learnMore={t.common.learnMore} />
      </Section>

      <CaseStudies locale={locale} />
      <WhyWorkWithBridge locale={locale} />
      <ConsultationCta locale={locale} />
    </>
  );
}
