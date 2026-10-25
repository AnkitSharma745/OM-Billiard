import { poolTableBalls } from "../Data/data";
import ProductCard from "./ProductCard";

export default function Balls({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="page-shell py-10 sm:py-14" aria-labelledby={showHeading ? "balls-section-heading" : undefined}>
      {showHeading && (
        <header className="mb-7 max-w-2xl sm:mb-9">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">For the break</p>
          <h2 id="balls-section-heading" className="font-display text-heading-md font-semibold text-ink">Billiard balls</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Browse the ball sets currently listed in our catalog.</p>
        </header>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {poolTableBalls.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name.trim()}
            image={product.img}
            alt={product.name.trim()}
            description={product.description}
            price={product.price}
            imageFit="contain"
            imageRatio="1/1"
            actionLabel="Ask about these balls"
          />
        ))}
      </div>
    </section>
  );
}
