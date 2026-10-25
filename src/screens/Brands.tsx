import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Aramith from "../assets/Brands/Aramith_Logo_Brand.avif";
import Wiraka from "../assets/Brands/Wiraka_Image.png";
import Talisman from "../assets/Brands/TalisMan.jpeg";
import OptimizedImage from "../components/OptimizedImage";
import PageIntro from "../components/ui/PageIntro";
import { ButtonLink } from "../components/ui/Button";
import EditorialImageSection from "../components/EditorialImageSection";
import BallImage from "../assets/Balls/JBB.jpg";

const brands = [
  { name: "Aramith", description: "Billiard balls", detail: "Discover Aramith balls listed in the current catalog.", logo: Aramith, number: "01" },
  { name: "Wiraka", description: "Billiards · Snooker · Pool", detail: "A cue-sports name represented in the current brand collection.", logo: Wiraka, number: "02" },
  { name: "Talisman", description: "Cue tips", detail: "Explore Talisman cue-tip products through our team.", logo: Talisman, number: "03" },
];

export default function Brands() {
  return (
    <main className="min-h-screen bg-bg">
      <PageIntro eyebrow="The names behind the game" title="Craft, character & cue sports." description="Explore selected billiards names represented in the OM Billiard catalog—each with its own place in the game." />

      <section className="page-shell pb-12 sm:pb-16" aria-label="Featured billiards brands">
        <div className="grid gap-4 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <article key={brand.name} style={{ animationDelay: `${index * 100}ms` }} className={`group animate-enter relative flex min-h-[27rem] flex-col overflow-hidden rounded-xl border border-line bg-surface p-5 transition-all duration-normal hover:-translate-y-1 hover:shadow-card sm:p-7 ${index === 1 ? "lg:translate-y-8" : ""}`}>
              <div className="flex items-center justify-between"><span className="font-display text-sm font-semibold tracking-[0.12em] text-sand">{brand.number}</span><span className="rounded-full bg-bg px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sage-dark">{brand.description}</span></div>
              <div className="mt-8 grid flex-1 place-items-center overflow-hidden rounded-lg bg-bg p-8 transition-colors group-hover:bg-surface-2/60"><OptimizedImage src={brand.logo} alt={`${brand.name} logo`} className="max-h-36 w-auto max-w-full object-contain transition-transform duration-slow group-hover:scale-105" sizes="(max-width: 768px) 80vw, 26vw" /></div>
              <h2 className="mt-6 font-display text-heading-md font-semibold text-ink">{brand.name}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{brand.detail}</p>
              <a href="/#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-sand underline-offset-4 hover:text-sage-dark">Ask about this brand <ArrowUpRightIcon className="h-4 w-4" /></a>
            </article>
          ))}
        </div>
      </section>

      <EditorialImageSection eyebrow="From brand to game" title="See where the equipment comes together." description="Explore the ball sets and cue equipment in our catalog. If a brand or specification matters to you, ask us about the current selection." image={BallImage} alt="Billiard ball set from the current catalog" href="/billiard-balls" action="Explore ball sets" />

      <section className="bg-editorial-dark py-14 text-editorial-text sm:py-20" aria-labelledby="brand-collection-title">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Find your next favourite</p><h2 id="brand-collection-title" className="mt-3 font-display text-heading-lg font-semibold">The right gear makes every frame feel better.</h2><p className="mt-4 max-w-lg text-sm leading-6 text-editorial-muted">From billiard balls to cue tips, ask our team about products from the brands shown here and what is currently available.</p><ButtonLink href="/products" variant="inverse" className="mt-7">Explore equipment <ArrowRightIcon className="h-4 w-4" /></ButtonLink></div>
          <div className="grid grid-cols-3 gap-3 sm:gap-5">{brands.map((brand) => <div key={brand.name} className="grid min-h-24 place-items-center rounded-lg border border-editorial-muted/20 bg-editorial-mid/50 p-3 sm:min-h-36 sm:p-5"><OptimizedImage src={brand.logo} alt={`${brand.name} logo`} className="max-h-16 w-auto max-w-full object-contain sm:max-h-24" sizes="(max-width: 640px) 30vw, 18vw" /></div>)}</div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-20" aria-labelledby="brand-help-title">
        <div className="grid gap-6 rounded-xl border border-line bg-surface p-6 sm:p-9 md:grid-cols-[1fr_auto] md:items-center lg:p-12"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Need a recommendation?</p><h2 id="brand-help-title" className="mt-3 font-display text-heading-md font-semibold">Tell us what you play.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-muted">We can help you explore cue-sports equipment and the brands represented in our current selection.</p></div><ButtonLink href="/#contact" size="lg">Talk to us <ArrowRightIcon className="h-4 w-4" /></ButtonLink></div>
      </section>
    </main>
  );
}
