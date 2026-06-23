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

export function IconBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-black text-teal shadow-lg ring-1 ring-slate-200">
      {label}
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
          className="group flex min-h-[380px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-2xl hover:shadow-slate-900/10"
        >
          <IconBadge label={item.icon} />
          <h3 className="mt-5 text-xl font-bold text-ocean">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            {item.points.slice(0, 4).map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link href={`/${locale}/services`} className="mt-auto pt-6 text-sm font-bold text-teal group-hover:text-ocean">
            {learnMore}
          </Link>
        </article>
      ))}
    </div>
  );
}

export function IndustryCards({
  items,
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
  painLabel?: string;
  solutionLabel?: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article key={item.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
          <div className="relative h-48 overflow-hidden bg-slate-100">
            <img
              src={industryImages[index % industryImages.length]}
              alt={item.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <IconBadge label={item.icon} />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-ocean">{item.title}</h3>
            <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">{item.intro}</p>
            <div className="mt-5 grid gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">{painLabel}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-700">
                {item.pains.map((pain) => (
                  <li key={pain} className="rounded-full bg-rose-50 px-3 py-1.5 font-semibold text-rose-800">
                    {pain}
                  </li>
                ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-teal">{solutionLabel}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-700">
                {item.solutions.map((solution) => (
                  <li key={solution} className="rounded-full bg-teal/10 px-3 py-1.5 font-semibold text-teal">
                    {solution}
                  </li>
                ))}
                </ul>
              </div>
            </div>
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
