"use client";

import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import OptimizedImage from "../components/OptimizedImage";
import ProductCard from "../components/ProductCard";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import { ButtonLink } from "../components/ui/Button";
import { Link } from "../lib/navigation";
import { images, placeholderProduct } from "../Data/data";
import PoolTableData from "../Data/poolTable";
import WhyChooseUs from "../components/WhyChooseUs";
import CounterShow from "../components/Counter";
import Aramith from "../assets/Brands/Aramith_Logo_Brand.avif";
import Wiraka from "../assets/Brands/Wiraka_Image.png";
import Talisman from "../assets/Brands/TalisMan.jpeg";

const categoryDetails: Record<number, string> = {
  1: "Pool and snooker tables",
  2: "Billiard balls and sets",
  3: "Cue sticks for the game",
};

export default function Home() {
  const featuredTables = PoolTableData.slice(0, 3);

  return (
    <div className="pb-16 sm:pb-20">
      <section className="page-shell pt-5 sm:pt-8">
        <div className="relative isolate flex min-h-[34rem] items-end overflow-hidden rounded-xl bg-editorial-dark sm:min-h-[39rem] lg:min-h-[42rem]">
          <OptimizedImage
            src={images[0]}
            alt="Billiards equipment and table setting"
            fill
            preload
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-editorial-dark/90 via-editorial-dark/55 to-editorial-dark/10" />
          <div className="max-w-3xl px-6 pb-10 pt-20 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-editorial-muted sm:text-sm">Pool · Snooker · Cue sports</p>
            <h1 className="max-w-2xl font-display text-heading-xl font-semibold text-editorial-text">Find your place at the table.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-editorial-muted sm:text-lg">
              Explore tables, cues and equipment for the way you play.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pool-table" variant="secondary" size="lg" className="border-transparent bg-surface text-ink hover:bg-surface-2">Explore pool tables <ArrowRightIcon className="h-4 w-4" /></ButtonLink>
              <ButtonLink href="/products" variant="secondary" size="lg" className="border-editorial-muted/50 bg-editorial-dark/25 text-editorial-text hover:bg-editorial-dark/60">Browse all equipment</ButtonLink>
            </div>
          </div>
          <div className="absolute bottom-5 right-6 hidden text-xs tracking-wide text-editorial-text/80 sm:block">OM Billiard · Noida</div>
        </div>
      </section>

      <section className="page-shell section-space" aria-labelledby="categories-heading">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Explore the collection</p>
            <h2 id="categories-heading" className="font-display text-heading-lg font-semibold text-ink">Choose your game.</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-sand underline-offset-4 hover:text-sage-dark">View all products <ArrowUpRightIcon className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {placeholderProduct.map((category, index) => (
            <Link key={category.id} to={category.path} className="group overflow-hidden rounded-xl border border-line bg-surface transition-shadow duration-normal ease-standard hover:shadow-card">
              <div className={`relative aspect-[4/3] overflow-hidden bg-surface-2 ${index === 0 ? "sm:col-span-2 sm:aspect-[2/1] lg:col-span-1 lg:aspect-[4/3]" : ""}`}>
                <OptimizedImage src={category.imageSrc} alt={category.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="h-full w-full object-cover transition-transform duration-slow ease-standard group-hover:scale-[1.03]" />
              </div>
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3 className="font-display text-heading-sm font-semibold text-ink">{category.name}</h3>
                  <p className="mt-1 text-sm text-muted">{categoryDetails[category.id]}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors group-hover:border-sage-dark group-hover:bg-sage/30" aria-hidden="true"><ArrowUpRightIcon className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface-2/60 py-14 sm:py-20" aria-labelledby="featured-heading">
        <div className="page-shell">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Pool tables</p>
              <h2 id="featured-heading" className="font-display text-heading-lg font-semibold text-ink">A closer look at the tables.</h2>
            </div>
            <ButtonLink href="/pool-table" variant="secondary">See all tables</ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {featuredTables.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.img}
                alt={product.name}
                description={product.description}
                price={product.details.price.current}
                originalPrice={product.details.price.original}
                size={product.details.size.join(" · ")}
                href={`/pool-table/${product.id}`}
                imageRatio="3/2"
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CounterShow />

      <section className="page-shell py-14 sm:py-20" aria-labelledby="service-feature-heading">
        <div className="editorial-panel grid overflow-hidden rounded-xl md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-editorial-muted">Beyond the table</p>
            <h2 id="service-feature-heading" className="max-w-xl font-display text-heading-lg font-semibold">A little help getting set up.</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-editorial-muted sm:text-base">Ask about table installation, maintenance and custom design services.</p>
            <div className="mt-7">
              <ButtonLink href="/services" variant="secondary" className="border-editorial-muted/50 bg-transparent text-editorial-text hover:bg-editorial-dark/50">Explore services <ArrowRightIcon className="h-4 w-4" /></ButtonLink>
            </div>
          </div>
          <div className="relative min-h-64 md:min-h-full">
            <OptimizedImage src={placeholderProduct[0].imageSrc} alt="Pool table equipment" fill sizes="(max-width: 768px) 100vw, 45vw" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="page-shell py-10 sm:py-14" aria-labelledby="brand-story-title">
        <div className="grid gap-8 overflow-hidden rounded-xl border border-line bg-surface p-6 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">Equipment with a name behind it</p><h2 id="brand-story-title" className="mt-3 font-display text-heading-lg font-semibold">Good games start with trusted craft.</h2><p className="mt-4 max-w-lg text-sm leading-6 text-muted">Explore billiards brands represented in our catalog, from ball sets to cue equipment.</p><ButtonLink href="/brands" variant="quiet" className="mt-5 px-0">Meet the brands <ArrowRightIcon className="h-4 w-4" /></ButtonLink></div>
          <div className="grid grid-cols-3 items-center gap-3 sm:gap-5">
            {[{ src: Aramith, alt: "Aramith" }, { src: Wiraka, alt: "Wiraka" }, { src: Talisman, alt: "Talisman" }].map((brand) => <div key={brand.alt} className="grid h-28 place-items-center rounded-lg border border-line bg-bg p-3 sm:h-36 sm:p-5"><OptimizedImage src={brand.src} alt={brand.alt} className="max-h-full w-auto max-w-full object-contain" sizes="(max-width: 640px) 30vw, 15vw" /></div>)}
          </div>
        </div>
      </section>

      <section className="page-shell pb-12 sm:pb-16" aria-labelledby="refurb-title">
        <div className="relative isolate overflow-hidden rounded-xl bg-surface-2 p-6 sm:p-10 lg:p-14">
          <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full border border-sand/50" aria-hidden="true" />
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-dark">A second life for great tables</p><h2 id="refurb-title" className="mt-3 max-w-2xl font-display text-heading-lg font-semibold">Looking for a refurbished table?</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-muted">Refurbished items are part of our range. Availability and condition vary, so contact us to ask what is currently available.</p></div><ButtonLink href="/#contact" size="lg">Ask about availability <ArrowRightIcon className="h-4 w-4" /></ButtonLink></div>
        </div>
      </section>

      <ContactUs />
      <FAQ />
    </div>
  );
}
