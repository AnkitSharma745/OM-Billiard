"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import PoolTableData from "../Data/poolTable";
import { formatPrice } from "../lib/price";
import OptimizedImage from "./OptimizedImage";
import { ButtonLink } from "./ui/Button";

const journeys = [
  { label: "Pool", heading: "A room built around the next game.", text: "Explore the American Pool Table, then ask us about dimensions, finish and installation for your space.", productId: 2 },
  { label: "Snooker", heading: "Give every frame its stage.", text: "See the Snooker Pool Table and discuss its recorded size and setup requirements with our team.", productId: 5 },
  { label: "Multi-use", heading: "More ways to use one space.", text: "Discover our table tennis combination listing and ask which configurations are currently available.", productId: 6 },
] as const;

export default function TableDiscovery() {
  const [selected, setSelected] = useState(0);
  const journey = journeys[selected];
  const product = PoolTableData.find((item) => item.id === journey.productId)!;

  return (
    <section className="section-space" aria-labelledby="discovery-heading">
      <div className="page-shell">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">Find your direction</p><h2 id="discovery-heading" className="mt-3 font-display text-heading-lg font-semibold text-ink">What would you like to play?</h2></div>
          <p className="max-w-sm text-sm leading-6 text-muted">Three ways into our table collection. Choose a game to explore a current listing.</p>
        </div>
        <div className="grid overflow-hidden rounded-xl border border-line bg-surface shadow-card lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10">
            <div>
              <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Choose a game">
                {journeys.map((item, index) => <button key={item.label} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors ${selected === index ? "border-ink bg-ink text-surface" : "border-line bg-bg text-ink hover:border-sand"}`}>{item.label}</button>)}
              </div>
              <div key={journey.label} className="animate-enter mt-8 lg:mt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sage-dark">{product.name} · {product.details.size.join(" · ")}</p>
                <h3 className="mt-3 max-w-md font-display text-heading-md font-semibold text-ink">{journey.heading}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted">{journey.text}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
              <span className="text-sm text-muted">Listed at <strong className="ml-1 text-lg text-ink">{formatPrice(product.details.price.current)}</strong></span>
              <ButtonLink href={`/pool-table/${product.id}`} size="sm">View this table <ArrowRightIcon className="h-4 w-4" /></ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[17rem] overflow-hidden bg-surface-2 sm:min-h-[24rem] lg:min-h-[31rem]">
            <OptimizedImage key={product.id} src={product.img} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 55vw" className="hero-image h-full w-full object-contain p-4 sm:p-8" />
            <div className="absolute bottom-4 right-4 rounded-full border border-line bg-surface/90 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur">0{selected + 1} / 03</div>
          </div>
        </div>
      </div>
    </section>
  );
}
