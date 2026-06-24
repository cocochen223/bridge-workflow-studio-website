"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";
import { type Locale, oppositeLocale } from "@/lib/i18n";

const labels = {
  en: {
    home: "Home",
    services: "Services",
    industries: "Industries",
    resources: "Resources",
    about: "About",
    book: "Book a Consultation",
    contact: "Contact",
    switch: "中文"
  },
  zh: {
    home: "首页",
    services: "服务",
    industries: "行业",
    resources: "资源中心",
    about: "关于我们",
    book: "预约咨询",
    contact: "联系我们",
    switch: "EN"
  }
} as const;

export function Header({ locale }: { locale: Locale }) {
  const other = oppositeLocale(locale);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1480px] items-center justify-between gap-5 px-5 sm:px-8">
        <Link href={`/${locale}`} className="flex min-w-[150px] items-center">
          <Image src="/bridge-logo-new.png" alt="Bridge Workflow Studio" width={1000} height={660} className="h-[58px] w-auto object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-2 text-[16px] font-bold text-ink lg:flex">
          {nav[locale].map((item) => {
            const active = pathname === item.href;
            const isBook = item.key === "book";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isBook
                    ? "ml-2 rounded-md bg-teal px-5 py-2.5 text-center text-white shadow-lg shadow-teal/20 hover:bg-ocean"
                  : active
                      ? "rounded-md px-3 py-2 text-center text-[#086fd6]"
                      : "rounded-md px-3 py-2 text-center hover:bg-mist hover:text-[#086fd6]"
                }
              >
                {labels[locale][item.key]}
              </Link>
            );
          })}
        </nav>
        <Link
          href={`/${other}`}
          className="shrink-0 rounded-md border border-slate-300 px-4 py-2.5 text-base font-bold text-ocean hover:border-teal hover:bg-mist hover:text-teal"
        >
          {labels[locale].switch}
        </Link>
      </div>
      <nav className="flex gap-3 overflow-x-auto border-t border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 lg:hidden">
        {nav[locale].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={item.key === "book" ? "whitespace-nowrap rounded bg-teal px-3 py-2 text-white" : "whitespace-nowrap rounded px-2 py-2 hover:bg-mist hover:text-teal"}
          >
            {labels[locale][item.key]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
