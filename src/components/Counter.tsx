"use client";

import { useEffect, useRef, useState } from "react";

const counters = [
  { value: 700, label: "Happy customers" },
  { value: 50, label: "Products available" },
  { value: 25, label: "Years experience" },
];

function Counter({ value, label }: (typeof counters)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        setCount(value);
      } else {
        setCount(0);
        const start = performance.now();
        const duration = 1400;
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setCount(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        observer.disconnect();
      }
      observer.disconnect();
    }, { threshold: 0.4 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref} className="group relative overflow-hidden rounded-lg border border-editorial-muted/20 bg-editorial-mid/40 p-5 transition-transform duration-normal hover:-translate-y-1 sm:p-7">
      <span className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-none tracking-tight text-editorial-text tabular-nums">{count}<span className="text-gold">+</span></span>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-editorial-muted">{label}</p>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-slow group-hover:w-full" aria-hidden="true" />
    </div>
  );
}

export default function CounterShow() {
  return (
    <section className="relative overflow-hidden bg-editorial-dark py-14 text-editorial-text sm:py-20" aria-labelledby="proof-title">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">A little perspective</p>
            <h2 id="proof-title" className="mt-3 max-w-md font-display text-heading-lg font-semibold">Built around the game.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-editorial-muted">A snapshot of the experience and selection OM Billiard brings to cue sports.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {counters.map((counter) => <Counter key={counter.label} {...counter} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
