import type { ImageProps } from "next/image";
import OptimizedImage from "./OptimizedImage";
import OrderNowModal from "./OrderFormModal";
import { ButtonLink } from "./ui/Button";
import { formatPrice, getSavings, type PriceValue } from "../lib/price";

type ProductCardProps = {
  name: string;
  image: ImageProps["src"];
  alt: string;
  description?: string;
  price?: number | string;
  originalPrice?: PriceValue;
  size?: string;
  href?: string;
  imageFit?: "cover" | "contain";
  imageRatio?: "4/3" | "1/1" | "3/2";
  actionLabel?: string;
};

export default function ProductCard({
  name,
  image,
  alt,
  description,
  price,
  originalPrice,
  size,
  href,
  imageFit = "cover",
  imageRatio = "4/3",
  actionLabel = "Enquire about this item",
}: ProductCardProps) {
  const ratioClass = imageRatio === "1/1" ? "aspect-square" : imageRatio === "3/2" ? "aspect-[3/2]" : "aspect-[4/3]";
  const objectFitClass = imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-shadow duration-normal ease-standard hover:shadow-card">
      <div className={`relative ${ratioClass} overflow-hidden bg-surface-2`}>
        <OptimizedImage
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`${objectFitClass} p-4 transition-transform duration-slow ease-standard group-hover:scale-[1.025]`}
        />
        {price !== undefined && originalPrice !== undefined && getSavings(price, originalPrice) !== null && <span className="absolute left-3 top-3 rounded-full bg-editorial-dark px-3 py-1.5 text-xs font-semibold text-editorial-text">Save {formatPrice(getSavings(price, originalPrice)!)}</span>}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="font-display text-heading-sm font-semibold text-ink">{name}</h2>
        {description && <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{description}</p>}
        {size && <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-muted">{size}</p>}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <div>
            {price !== undefined && <><p className="text-lg font-semibold tabular-nums text-ink">{formatPrice(price)}</p>{originalPrice !== undefined && getSavings(price, originalPrice) !== null && <p className="mt-1 text-xs text-muted"><span className="mr-2 line-through">{formatPrice(originalPrice)}</span><span className="font-medium text-sage-dark">Offer price</span></p>}</>}
            {price === undefined && <span className="text-sm text-muted">Ask us for details</span>}
          </div>
          {href
            ? <ButtonLink href={href} size="sm" variant="secondary">View details</ButtonLink>
            : <OrderNowModal triggerLabel={actionLabel} productName={name} />}
        </div>
      </div>
    </article>
  );
}
