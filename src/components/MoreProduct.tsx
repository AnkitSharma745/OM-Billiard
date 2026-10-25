import { accessories } from "../Data/data";
import ProductCard from "./ProductCard";

export default function MoreProduct({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="page-shell py-10 sm:py-14" aria-labelledby={showHeading ? "accessories-section-heading" : undefined}>
      {showHeading && (
        <header className="mb-7 max-w-2xl sm:mb-9">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">The finishing touches</p>
          <h2 id="accessories-section-heading" className="font-display text-heading-md font-semibold text-ink">Accessories</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Browse accessories and prices currently listed in our catalog.</p>
        </header>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {accessories.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.img}
            alt={product.name}
            description={product.description}
            price={product.price}
            imageFit="contain"
            imageRatio="4/3"
            actionLabel="Ask about this accessory"
          />
        ))}
      </div>
    </section>
  );
}
