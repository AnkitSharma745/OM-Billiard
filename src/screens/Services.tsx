import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Instalation from "../assets/Services/2024-04-12-11_3437am-Set_3__png.webp";
import Maintenance from "../assets/Services/maintenance.png";
import Custom from "../assets/Services/pool-table-repair-service-1000x1000.webp";
import OptimizedImage from "../components/OptimizedImage";
import PageIntro from "../components/ui/PageIntro";
import { ButtonLink } from "../components/ui/Button";

const services = [
  { id: "installation", number: "01", title: "Installation & setup", detail: "Our team handles pool and foosball table assembly and leveling, with attention to the placement and setup of your table.", image: Instalation, note: "From assembly to a level playing surface" },
  { id: "maintenance", number: "02", title: "Maintenance & repairs", detail: "Keep your table in playing condition with maintenance options such as felt replacement and pocket repairs.", image: Maintenance, note: "Care for the parts that keep the game true" },
  { id: "custom-design", number: "03", title: "Custom design", detail: "Discuss a custom pool or foosball table design, including the style and specifications for your room.", image: Custom, note: "A table shaped around your space" },
];

const checkpoints = [
  { n: "01", title: "Tell us about your room", text: "Share the space, access and the kind of game you have in mind." },
  { n: "02", title: "Explore the right options", text: "We can discuss tables, dimensions, setup and service needs." },
  { n: "03", title: "Plan the next step", text: "Contact us to confirm availability, delivery and installation arrangements." },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-bg">
      <PageIntro eyebrow="Beyond the product" title="A better game starts with the right support." description="From choosing a table through installation and upkeep, talk to our team about the services that keep your game room moving." />

      <section className="page-shell pb-12 sm:pb-16" aria-label="Service offerings">
        <div className="grid gap-5">
          {services.map((service, index) => (
            <article key={service.id} id={service.id} style={{ animationDelay: `${index * 100}ms` }} className={`group animate-enter grid overflow-hidden rounded-xl border border-line bg-surface transition-shadow duration-normal hover:shadow-card md:min-h-[22rem] md:grid-cols-2 ${index % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative min-h-64 overflow-hidden bg-surface-2 md:min-h-full">
                <OptimizedImage src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-[1.035]" />
                <span className="absolute left-5 top-5 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur">Service {service.number}</span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sage-dark">{service.note}</p>
                <h2 className="mt-3 font-display text-heading-md font-semibold text-ink">{service.title}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{service.detail}</p>
                <a href="/#contact" className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink underline decoration-sand underline-offset-4 transition-colors hover:text-sage-dark">Discuss this service <ArrowRightIcon className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-editorial-dark px-gutter py-14 text-editorial-text sm:py-20" aria-labelledby="service-journey-title">
        <div className="page-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">The way forward</p><h2 id="service-journey-title" className="mt-3 font-display text-heading-lg font-semibold">From first thought to first break.</h2></div><p className="max-w-md text-sm leading-6 text-editorial-muted">Every room and table is different. Start with a conversation about what you need.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {checkpoints.map((point, index) => <article key={point.n} className="relative rounded-lg border border-editorial-muted/20 bg-editorial-mid/35 p-6 transition-colors hover:bg-editorial-mid/60 sm:p-7"><div className="flex items-center justify-between"><span className="font-display text-3xl font-semibold text-gold">{point.n}</span>{index < checkpoints.length - 1 && <ArrowDownIcon className="h-4 w-4 text-editorial-muted md:hidden" aria-hidden="true" />}</div><h3 className="mt-6 font-display text-lg font-semibold">{point.title}</h3><p className="mt-2 text-sm leading-6 text-editorial-muted">{point.text}</p></article>)}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-editorial-muted/20 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7"><div><p className="font-display text-lg font-semibold">Looking for a refurbished table?</p><p className="mt-1 text-sm text-editorial-muted">Ask our team about current availability and condition.</p></div><ButtonLink href="/#contact" variant="secondary" className="border-editorial-muted/40 bg-transparent text-editorial-text hover:bg-editorial-mid">Ask about availability <ArrowRightIcon className="h-4 w-4" /></ButtonLink></div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-20" aria-labelledby="service-help-title">
        <div className="grid gap-6 rounded-xl border border-line bg-surface p-6 sm:p-9 md:grid-cols-[1fr_auto] md:items-center lg:p-12"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Let's make a plan</p><h2 id="service-help-title" className="mt-3 font-display text-heading-md font-semibold">Not sure where to start?</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-muted">Tell us about your space and the kind of game you want to play. We’ll help you explore the available options.</p></div><ButtonLink href="/#contact" size="lg">Talk to our team <ArrowRightIcon className="h-4 w-4" /></ButtonLink></div>
      </section>
    </main>
  );
}
