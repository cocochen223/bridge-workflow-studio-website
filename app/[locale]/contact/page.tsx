import { ContactForm } from "@/components/ContactForm";
import { copy } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <section className="bg-mist py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContactForm locale={locale} title={copy[locale].form.contactTitle} />
      </div>
    </section>
  );
}
