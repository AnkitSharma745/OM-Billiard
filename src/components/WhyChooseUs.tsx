import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { ButtonLink } from "./ui/Button";

const features = [
  { number: "01", title: "Find your fit", text: "Pool, snooker, American and table-tennis combinations sit alongside cues, balls and accessories.", tag: "Selection" },
  { number: "02", title: "Make it play right", text: "Talk with our team about table sizing, room planning, setup and installation.", tag: "Guidance" },
  { number: "03", title: "Keep the game going", text: "Ask about maintenance and care, including table upkeep and repairs.", tag: "Aftercare" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-space bg-surface" aria-labelledby="why-title">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">The OM Billiard difference</p>
            <h2 id="why-title" className="mt-3 max-w-xl font-display text-heading-lg font-semibold">More than a table. A partner for the whole game.</h2>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-muted">From choosing a table to caring for it over time, OM Billiard brings equipment and practical support together in one place.</p>
            <ButtonLink href="/services" variant="quiet" className="shrink-0 self-start sm:self-auto">Meet our services <ArrowRightIcon className="h-4 w-4" /></ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number} className="group relative min-h-64 overflow-hidden rounded-xl border border-line bg-bg p-6 transition-all duration-normal hover:-translate-y-1 hover:border-sand hover:shadow-card sm:p-8">
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl font-semibold text-sand/70 transition-colors group-hover:text-gold">{feature.number}</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sage-dark">{feature.tag}</span>
              </div>
              <h3 className="mt-10 font-display text-heading-sm font-semibold text-ink">{feature.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{feature.text}</p>
              <span className="mt-7 flex items-center gap-2" aria-hidden="true"><span className="h-0.5 w-10 rounded-full bg-gold transition-all duration-normal group-hover:w-16" /><span className="h-1.5 w-1.5 rounded-full bg-gold" /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
