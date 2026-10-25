"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqs = [
  { category: "Buying", question: "How do I choose the right table size?", answer: "Each listed table shows its recorded dimensions. Room size and access also matter—contact us with your room measurements and we can discuss a suitable option." },
  { category: "Buying", question: "Are the prices shown the final price?", answer: "Prices shown are from the current catalog. Ask us to confirm the latest price, availability, delivery and installation details before purchase." },
  { category: "Delivery", question: "Do you deliver across India?", answer: "Please share your delivery location with us so we can confirm the available delivery arrangements for your area." },
  { category: "Care & support", question: "Do you provide installation and maintenance?", answer: "Yes. Contact us to discuss table installation, maintenance and repair services for your requirements." },
  { category: "Pre-owned", question: "Do you have refurbished tables?", answer: "Refurbished items may be available. Their condition and availability vary, so contact us for current options." },
];

export default function FAQ() {
  return (
    <section className="section-space bg-bg" aria-labelledby="faq-title">
      <div className="page-shell grid gap-9 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">Before you make your shot</p>
          <h2 id="faq-title" className="mt-3 font-display text-heading-lg font-semibold">The details that make the difference.</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">A few helpful notes about choosing, buying and looking after your table.</p>
          <div className="mt-7 hidden h-1 w-20 rounded-full bg-gold lg:block" aria-hidden="true" />
        </div>
        <div className="grid gap-3 sm:gap-4">
          {faqs.map((faq, index) => (
            <Disclosure key={faq.question} as="div" style={{ animationDelay: `${index * 75}ms` }} className="group animate-enter overflow-hidden rounded-lg border border-line bg-surface shadow-soft transition-all duration-normal hover:border-sand hover:shadow-card">
              {({ open }) => (
                <>
                  <DisclosureButton className={`flex w-full items-center gap-4 p-4 text-left sm:p-5 ${open ? "bg-editorial-dark text-editorial-text" : "text-ink"}`}>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-semibold ${open ? "bg-gold text-ink" : "bg-surface-2 text-sage-dark"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1"><span className={`block text-[10px] font-semibold uppercase tracking-[0.14em] ${open ? "text-editorial-muted" : "text-sage-dark"}`}>{faq.category}</span><span className="mt-1 block font-display text-base font-semibold sm:text-lg">{faq.question}</span></span>
                    <ChevronDownIcon aria-hidden="true" className={`h-5 w-5 shrink-0 transition-transform duration-normal ${open ? "rotate-180 text-gold" : "text-muted"}`} />
                  </DisclosureButton>
                  <DisclosurePanel className="border-t border-line bg-surface-2/50 px-5 pb-5 pl-[4.5rem] pt-4 text-sm leading-6 text-muted sm:pl-[5.25rem]">{faq.answer}</DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
