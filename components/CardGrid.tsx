import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const industryImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
];

function ServiceIcon({ label }: { label: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  if (label === "AI") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path {...common} d="M8 10h8M8 14h5" />
        <path {...common} d="M7 18.5 4.5 21v-4.5A6.5 6.5 0 0 1 3 12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7 7 7 0 0 1-7 7h-4a8 8 0 0 1-3-.5Z" />
      </svg>
    );
  }

  if (label === "DT") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path {...common} d="M4 19V5M4 19h16" />
        <path {...common} d="m7 15 3.5-3.5 3 3L20 8" />
        <path {...common} d="M17 8h3v3" />
      </svg>
    );
  }

  if (label === "CRM") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path {...common} d="M16 19c0-2-1.8-3.5-4-3.5S8 17 8 19" />
        <path {...common} d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path {...common} d="M4.5 18c.2-1.5 1.2-2.7 2.6-3.3" />
        <path {...common} d="M19.5 18c-.2-1.5-1.2-2.7-2.6-3.3" />
      </svg>
    );
  }

  if (label === "WEB") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect {...common} x="4" y="5" width="16" height="13" rx="2" />
        <path {...common} d="M4 9h16M8 13h4M8 16h7" />
      </svg>
    );
  }

  if (label === "FD") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path {...common} d="M7 3.5h7l3 3V20a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
        <path {...common} d="M14 3.5V7h3M9 12h6M9 15h6M9 18h3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path {...common} d="M4 7h5v5H4zM15 4h5v5h-5zM15 15h5v5h-5z" />
      <path {...common} d="M9 9.5h3.5a3 3 0 0 0 3-3V6M9 9.5h3.5a3 3 0 0 1 3 3V15" />
    </svg>
  );
}

export function IconBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal ring-1 ring-teal/20">
      <ServiceIcon label={label} />
    </span>
  );
}

export function CardGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5">
          <p className="font-semibold text-ink">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function ServiceCards({
  items,
  locale,
  learnMore
}: {
  items: readonly {
    readonly icon: string;
    readonly title: string;
    readonly description: string;
    readonly points: readonly string[];
  }[];
  locale: Locale;
  learnMore: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="reveal-card group flex min-h-[320px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-slate-900/10"
        >
          <IconBadge label={item.icon} />
          <h3 className="mt-4 text-lg font-bold leading-snug text-ocean">{item.title}</h3>
          <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.description}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
            {item.points.slice(0, 3).map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link href={`/${locale}/services`} className="mt-auto inline-flex w-fit items-center gap-1 pt-5 text-sm font-bold text-teal group-hover:text-ocean">
            {learnMore}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function IndustryCards({
  items,
  locale,
  learnMore,
  painLabel = "Pain points",
  solutionLabel = "Solutions"
}: {
  items: readonly {
    readonly icon: string;
    readonly title: string;
    readonly intro: string;
    readonly pains: readonly string[];
    readonly solutions: readonly string[];
  }[];
  locale: Locale;
  learnMore: string;
  painLabel?: string;
  solutionLabel?: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="reveal-card group flex min-h-[390px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg hover:shadow-slate-900/10"
        >
          <div className="relative h-40 overflow-hidden bg-slate-100">
            <img
              src={industryImages[index % industryImages.length]}
              alt={item.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/20 via-transparent to-transparent" />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-bold leading-tight text-ocean">{item.title}</h3>
            <p className="mt-2 min-h-[48px] text-[13px] leading-6 text-slate-600">{item.intro}</p>
            <div className="mt-4 grid flex-1 border-t border-slate-200 pt-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-wide text-ocean">{solutionLabel}</p>
                <ul className="mt-2.5 space-y-2 text-[13px] leading-5 text-slate-700">
                  {item.solutions.slice(0, 3).map((solution) => (
                    <li key={solution} className="flex gap-2.5">
                      <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-teal/30 text-[9px] font-black text-teal">
                        ✓
                      </span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href={`/${locale}/industries`}
              className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-bold text-teal transition hover:text-ocean"
            >
              {learnMore}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function TrustCards({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map(([title, body], index) => (
        <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean text-sm font-black text-white">0{index + 1}</div>
          <h3 className="mt-5 text-lg font-bold text-ocean">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
        </article>
      ))}
    </div>
  );
}
