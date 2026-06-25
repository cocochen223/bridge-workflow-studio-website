export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  tone = "white"
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "white" | "mist";
}) {
  return (
    <section className={tone === "mist" ? "bg-mist py-8" : "bg-white py-8"}>
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-wide text-teal">{eyebrow}</p> : null}
          <h2 className="mt-1 text-3xl font-bold leading-tight text-ink sm:text-[2.2rem]">{title}</h2>
          {subtitle ? <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p> : null}
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}
