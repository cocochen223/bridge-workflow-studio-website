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
    <div className="mx-auto w-full max-w-[760px]">
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
      ? ["Bilingual Service", "Small Business Focused", "Ontario & GTA Focused", "Practical Implementation", "Long-Term Partnership"]
      : ["中英双语服务", "专注中小企业", "服务安省与大多地区", "重视落地执行", "长期合作支持"];

  return (
    <section className="bg-[#102A43] py-5 text-white">
      <div className="mx-auto grid max-w-[1480px] gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5">
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
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(([number, title, body]) => (
          <div key={title} className="reveal-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg hover:shadow-slate-900/10">
            <p className="text-3xl font-black leading-none text-teal">{number}</p>
            <h3 className="mt-2.5 text-base font-bold text-ink">{title}</h3>
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
              <Link href={`/${locale}/book`} className="mt-5 inline-flex text-sm font-bold text-teal hover:text-ocean">
                {locale === "en" ? "Discuss a similar workflow" : "咨询类似流程"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function WhyWorkWithBridge({ locale }: { locale: Locale }) {
  const items =
    locale === "en"
      ? [
          ["Bilingual Communication", "Clear support for Chinese and English-speaking business owners."],
          ["Ontario & GTA Focus", "Local context for service businesses, operators, and growing teams."],
          ["Small Business Friendly", "Practical scope, budget awareness, and systems your team can use."],
          ["Practical Implementation", "Support that moves from advice into usable workflow improvements."],
          ["Long-Term Partnership", "Systems designed to improve over time as your business grows."]
        ]
      : [
          ["??????", "??????????????????????"],
          ["?????????", "?????????????????????????"],
          ["??????", "?????????????????"],
          ["??????", "????????????????????????"],
          ["??????", "??????????????????"]
        ];

  return (
    <Section
      title={locale === "en" ? "Why Work With Bridge Workflow Studio" : "????? Bridge Workflow Studio"}
      subtitle={
        locale === "en"
          ? "Practical support for owners who need clearer systems, better follow-up, and realistic digital improvements."
          : "????????????????????????????????"
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {items.map(([title, body]) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 text-sm font-black text-teal ring-1 ring-teal/20">?</div>
            <h3 className="mt-4 text-base font-bold leading-snug text-ocean">{title}</h3>
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
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#102A43] text-white shadow-2xl shadow-slate-900/20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-wide text-teal-100">Book a Free Consultation</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{t.home.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">{t.home.ctaBody}</p>
            <p className="mt-3 text-sm text-slate-200">{locale === "en" ? "Calendly-ready consultation section with email fallback." : "可接入 Calendly，也支持邮件咨询预约。"}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/book`} className="rounded-md bg-teal px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-ocean">
                {locale === "en" ? "Book Now" : "立即预约"}
              </Link>
              <a href={`mailto:${site.email}`} className="rounded-md border border-white/30 px-6 py-3 text-center font-bold text-white hover:bg-white/10">
                {site.email}
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-300">Oakville, Ontario · {locale === "en" ? "Serving GTA & Ontario" : "服务大多地区与安省"}</p>
          </div>
          <div className="relative min-h-[320px]">
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
          subtitle: "Helping Ontario businesses automate follow-ups, streamline operations, and build practical digital systems.",
          note: "Helping business owners improve follow-up, reduce repetitive work, and build practical digital operations."
        }
      : {
          eyebrow: "AI - 自动化 - 数字化转型",
          title: "为成长型企业打造 AI 流程自动化解决方案",
          subtitle: "帮助安省企业自动化客户跟进、优化日常运营，并建立真正实用的数字化系统。",
          note: "面向加拿大中小企业主，重视落地、效率和长期可维护性。"
        };

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_48%,#eaf7fb_100%)]">
        <div className="mx-auto grid max-w-[1480px] items-center gap-10 px-5 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:px-6 lg:py-14">
          <div className="reveal-card max-w-[600px]">
            <p className="text-[15px] font-black uppercase tracking-[0.18em] text-teal">{hero.eyebrow}</p>
            <h1 className="mt-4 max-w-[580px] text-[clamp(38px,3.8vw,56px)] font-black leading-[1.06] text-[#0D1B2A]">{hero.title}</h1>
            <p className="mt-5 max-w-[540px] text-lg leading-[1.55] text-slate-700">{hero.subtitle}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {t.home.badges.map((badge) => (
                <div key={badge} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[11px] font-black text-teal ring-1 ring-teal/20">✓</span>
                  <span className="text-[13px] font-bold leading-5 text-ocean">{badge}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/book`} className="rounded-md bg-teal px-6 py-3 text-center font-black text-white shadow-lg shadow-teal/15 hover:bg-ocean">
                {locale === "en" ? "Book Free Consultation" : "预约免费咨询"}
              </Link>
              <Link href={`/${locale}/services`} className="rounded-md border border-[#086fd6] bg-white px-6 py-3 text-center font-black text-[#086fd6] shadow-sm hover:border-teal hover:text-teal">
                {t.common.explore}
              </Link>
            </div>
          </div>
          <div className="reveal-card">
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

      <section className="bg-[#EEF4F7] py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-[2.25rem]">{t.home.problemsTitle}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{t.home.problemsSubtitle}</p>
          </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {t.home.problems.map((problem, index) => (
            <article key={problem} className="reveal-card rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg hover:shadow-slate-900/10">
              <span className="text-sm font-black text-teal">0{index + 1}</span>
              <p className="mt-3 text-[15px] font-bold leading-6 text-ink">{problem}</p>
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
