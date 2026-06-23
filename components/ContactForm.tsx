import { copy, site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function ContactForm({ locale, title }: { locale: Locale; title: string }) {
  const form = copy[locale].form;
  const trust = copy[locale].trust.slice(0, 3);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-teal">Bridge Workflow Studio</p>
        <h1 className="mt-2 whitespace-nowrap text-3xl font-bold leading-tight text-ink lg:text-[2.2rem]">{title}</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">{form.intro}</p>
        <div className="mt-5 grid gap-3">
          {trust.map(([heading, body]) => (
            <div key={heading} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5">
              <p className="font-bold text-ocean">{heading}</p>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-ink p-4 text-white">
          <p className="font-semibold">{site.location}</p>
          <a className="mt-2 block text-sm font-bold text-teal-200 hover:text-white" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
      <form className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {form.fields.slice(0, 6).map((field, index) => (
            <label key={field} className="text-sm font-semibold text-slate-700">
              {field}
              <input
                type={index === 1 ? "email" : "text"}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base font-normal text-ink shadow-sm"
                name={field}
              />
            </label>
          ))}
        </div>
        <label className="mt-4 block text-sm font-semibold text-slate-700">
          {form.fields[6]}
          <textarea className="mt-1.5 min-h-28 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base font-normal text-ink shadow-sm" name="message" />
        </label>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal px-5 py-3 text-base font-bold text-white shadow-lg shadow-teal/20 hover:bg-ocean sm:w-auto"
        >
          {form.submit}
        </a>
      </form>
    </div>
  );
}
