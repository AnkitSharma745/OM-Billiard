import type { StaticImageData } from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import OptimizedImage from "./OptimizedImage";
import { ButtonLink } from "./ui/Button";

type EditorialImageSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  href: string;
  action: string;
  reverse?: boolean;
};

export default function EditorialImageSection({ eyebrow, title, description, image, alt, href, action, reverse = false }: EditorialImageSectionProps) {
  return (
    <section className="page-shell py-10 sm:py-16" aria-label={title}>
      <div className="grid overflow-hidden rounded-xl border border-line bg-surface shadow-soft md:grid-cols-2">
        <div className={`relative min-h-[17rem] overflow-hidden bg-surface-2 sm:min-h-[22rem] md:min-h-[27rem] ${reverse ? "md:order-2" : ""}`}>
          <OptimizedImage src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-cover transition-transform duration-slow hover:scale-[1.025]" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">{eyebrow}</p>
          <h2 className="mt-4 max-w-xl font-display text-heading-md font-semibold text-ink">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{description}</p>
          <ButtonLink href={href} variant="secondary" className="mt-7 w-fit">{action} <ArrowRightIcon className="h-4 w-4" /></ButtonLink>
        </div>
      </div>
    </section>
  );
}
