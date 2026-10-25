import PoolTableData from "../Data/poolTable";
import ProductCard from "./ProductCard";

type PoolTableProps = {
  showHeading?: boolean;
  title?: string;
};

export default function PoolTable({ showHeading = true, title = "Pool & snooker tables" }: PoolTableProps) {
  return (
    <section className="page-shell py-10 sm:py-14" aria-labelledby={showHeading ? "pool-table-section-heading" : undefined}>
      {showHeading && (
        <header className="mb-7 max-w-2xl sm:mb-9">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Tables</p>
          <h2 id="pool-table-section-heading" className="font-display text-heading-md font-semibold text-ink">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Browse the tables currently listed in our catalog. For sizing or product questions, send us an inquiry.</p>
        </header>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {PoolTableData.map((product) => (
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
    </section>
  );
}
