import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export default function PageIntro({ eyebrow, title, description, actions }: PageIntroProps) {
  return (
    <header className="page-shell pb-8 pt-12 sm:pb-10 sm:pt-16 lg:pt-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">{eyebrow}</p>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h1 className="font-display text-heading-lg font-semibold text-ink">{title}</h1>
          {description && <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p>}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
    </header>
  );
}
