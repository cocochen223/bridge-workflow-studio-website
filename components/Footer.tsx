import Link from "next/link";
import { copy, nav, site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const services = t.services.items.slice(0, 6);
  const industries = t.industries.items.slice(0, 6);

  return (
    <footer className="border-t border-slate-200 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-bold">Bridge Workflow Studio</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            {locale === "en"
              ? "Practical AI workflow automation, CRM, websites, and digital transformation support for Ontario small businesses."
              : "为安省及加拿大中小企业提供实用的 AI 流程自动化、CRM、网站和数字化转型支持。"}
          </p>
          <p className="mt-4 text-sm text-slate-300">{site.location}</p>
          <a className="mt-1 block text-sm text-slate-300 hover:text-white" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">{locale === "en" ? "Pages" : "页面"}</p>
          <div className="mt-4 grid gap-3 text-sm">
            {nav[locale].map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">{t.services.title}</p>
          <div className="mt-4 grid gap-3 text-sm">
            {services.map((item) => (
              <Link key={item.title} href={`/${locale}/services`} className="text-slate-300 hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">{t.industries.title}</p>
          <div className="mt-4 grid gap-3 text-sm">
            {industries.map((item) => (
              <Link key={item.title} href={`/${locale}/industries`} className="text-slate-300 hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Bridge Workflow Studio. All rights reserved.
      </div>
    </footer>
  );
}
