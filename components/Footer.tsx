import { site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const description =
    locale === "en"
      ? "Practical workflow automation, CRM, websites, and digital systems for growing service businesses and small teams."
      : "为成长型企业、服务型企业和中小团队提供实用的流程自动化、CRM、网站与数字化系统支持。";

  const location =
    locale === "en"
      ? "Based in Canada • Remote collaboration worldwide"
      : "位于加拿大 • 支持远程协作与全球合作";

  return (
    <footer className="border-t border-white/10 bg-[#102A43] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-2xl font-bold tracking-tight">Bridge Workflow Studio</p>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex text-sm font-semibold text-teal-100 transition hover:text-white sm:text-base"
          >
            {site.email}
          </a>
          <p className="mt-3 text-sm text-slate-300">{location}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Bridge Workflow Studio.
      </div>
    </footer>
  );
}
