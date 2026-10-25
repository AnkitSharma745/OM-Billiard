"use client";

import PoolTable from "../../components/PoolTable";
import Balls from "../../components/Balls";
import Stick from "../../components/Stick";
import MoreProduct from "../../components/MoreProduct";
import ProductCard from "../../components/ProductCard";
import FoosBall from "../../assets/Product_Category/Foosball.jpg";
import PageIntro from "../../components/ui/PageIntro";
import { ButtonLink } from "../../components/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import EditorialImageSection from "../../components/EditorialImageSection";
import CollectionImage from "../../assets/Home_Page.jpg";

const categories = [
  { label: "Pool tables", href: "#pool-tables" },
  { label: "Billiard balls", href: "#billiard-balls" },
  { label: "Cues", href: "#cues" },
  { label: "Accessories", href: "#accessories" },
  { label: "Foosball", href: "#foosball" },
  { label: "Refurbished", href: "#refurbished" },
];

export default function Product() {
  return (
    <>
      <PageIntro
        eyebrow="The collection"
        title="Equipment for every table."
        description="Browse pool and snooker tables, billiard balls, cue sticks and accessories. Product information and prices reflect the current catalog."
      />
      <nav aria-label="Product categories" className="page-shell mb-4 flex gap-2 overflow-x-auto pb-3">
        {categories.map((category) => (
          <a key={category.href} href={category.href} className="shrink-0 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-2">{category.label}</a>
        ))}
      </nav>
      <EditorialImageSection eyebrow="Start with the table" title="Bring your game room into focus." description="Browse tables first, then build out your setup with cues, balls and accessories from the current catalog." image={CollectionImage} alt="Billiard balls on a pool table" href="/pool-table" action="Explore tables" />
      <div className="bg-surface py-5 sm:py-8">
        <div id="pool-tables" className="scroll-mt-28"><PoolTable showHeading title="Pool & snooker tables" /></div>
        <section id="refurbished" className="page-shell scroll-mt-28 border-t border-line py-10 sm:py-14" aria-labelledby="refurbished-catalog-title">
          <div className="grid gap-6 rounded-xl bg-editorial-dark p-6 text-editorial-text sm:p-9 md:grid-cols-[1fr_auto] md:items-center lg:p-12"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Pre-owned · Refurbished</p><h2 id="refurbished-catalog-title" className="mt-3 font-display text-heading-md font-semibold">A second life for a great table.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-editorial-muted">We also sell refurbished items. Availability and condition vary—contact us for current options, photos and pricing.</p></div><ButtonLink href="/#contact" variant="inverse">Ask about refurbished tables <ArrowRightIcon className="h-4 w-4" /></ButtonLink></div>
        </section>
        <div id="billiard-balls" className="scroll-mt-28 border-t border-line"><Balls showHeading /></div>
        <div id="cues" className="scroll-mt-28 border-t border-line"><Stick showHeading /></div>
        <div id="accessories" className="scroll-mt-28 border-t border-line"><MoreProduct showHeading /></div>
        <section id="foosball" aria-labelledby="foosball-heading" className="page-shell scroll-mt-28 border-t border-line py-12 sm:py-16">
          <div className="mb-7 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">More table games</p>
            <h2 id="foosball-heading" className="font-display text-heading-md font-semibold text-ink">Foosball</h2>
          </div>
          <div className="max-w-xl">
            <ProductCard name="Soker Foosball Table" image={FoosBall} alt="Soker foosball table" description="A foosball table for indoor play." price={29999} imageRatio="3/2" />
          </div>
        </section>
      </div>
    </>
  );
}
