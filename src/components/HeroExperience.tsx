"use client";

import { useState } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import OptimizedImage from "./OptimizedImage";
import { ButtonLink } from "./ui/Button";
import GameImage from "../assets/Carousel_Images/Img1.jpg";
import TableImage from "../assets/Home_Page.jpg";
import DetailImage from "../assets/Products/AmericanPoolTable1.jpg";

const scenes = [
  { label: "The game", caption: "Every great room starts with a reason to gather.", image: GameImage, alt: "Billiard balls on a green pool table" },
  { label: "The table", caption: "Choose a table that belongs in your space.", image: TableImage, alt: "Pool balls spread across a billiard table" },
  { label: "The details", caption: "The small details shape every shot.", image: DetailImage, alt: "Cue, rack and billiard balls on a blue pool table" },
] as const;

export default function HeroExperience() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];

  return (
    <section className="page-shell pt-3 sm:pt-6" aria-labelledby="hero-heading">
      <div className="hero-stage relative isolate grid overflow-hidden rounded-[1.25rem] bg-editorial-dark text-editorial-text lg:min-h-[39rem] lg:grid-cols-[0.9fr_1.1fr] xl:min-h-[44rem]">
        <div className="hero-copy relative z-10 flex flex-col justify-center px-6 pb-7 pt-10 sm:px-10 sm:pb-10 sm:pt-14 lg:px-12 lg:py-16 xl:px-16">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-editorial-muted/25 bg-editorial-mid/40 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-editorial-muted sm:mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_14px_#CB913C]" />
            Pool · Snooker · The spaces between
          </div>
          <h1 id="hero-heading" className="hero-title max-w-[12ch] font-display text-[clamp(2.9rem,7.7vw,7.5rem)] font-semibold leading-[0.99] tracking-[-0.065em]">
            Make room for <span className="hero-highlight">the game.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-editorial-muted sm:text-base lg:text-lg">Explore pool tables, cues and equipment, then talk to our team about installation, care and the right fit for your space.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/pool-table" variant="secondary" size="lg" className="w-full sm:w-auto">Explore tables <ArrowRightIcon className="h-4 w-4" /></ButtonLink>
            <ButtonLink href="/services" variant="inverse" size="lg" className="w-full sm:w-auto">Explore services</ButtonLink>
          </div>
          <a href="#find-your-game" className="mt-9 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-editorial-muted transition-colors hover:text-editorial-text sm:mt-12">Find your game <ArrowDownIcon className="h-4 w-4" /></a>
        </div>

        <div className="hero-visual relative min-h-[21rem] overflow-hidden bg-editorial-mid sm:min-h-[26rem] lg:min-h-full" aria-live="polite">
          <OptimizedImage key={scene.label} src={scene.image} alt={scene.alt} fill preload={active === 0} sizes="(max-width: 1024px) 100vw, 55vw" className="hero-image h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-editorial-dark/75 via-transparent to-transparent lg:bg-gradient-to-r lg:from-editorial-dark/35 lg:via-transparent lg:to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
            <div className="max-w-sm rounded-xl border border-white/25 bg-editorial-dark/60 p-3 backdrop-blur-md sm:p-4">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">0{active + 1} / 03 · {scene.label}</span>
              <p className="mt-1 text-xs leading-5 text-editorial-text sm:text-sm">{scene.caption}</p>
            </div>
            <div className="flex shrink-0 gap-1.5 rounded-full border border-white/25 bg-editorial-dark/50 p-1.5 backdrop-blur-md" aria-label="Choose a hero image">
              {scenes.map((item, index) => <button key={item.label} type="button" onClick={() => setActive(index)} aria-label={`Show ${item.label.toLowerCase()} image`} aria-pressed={index === active} className={`h-10 min-w-10 rounded-full px-2 text-xs font-semibold transition-all duration-normal ${index === active ? "bg-gold text-ink" : "text-editorial-text hover:bg-white/20"}`}>{index + 1}</button>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
