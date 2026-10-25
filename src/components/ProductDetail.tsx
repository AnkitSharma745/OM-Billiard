"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import ImageGallery from "react-image-gallery";
import AOS from "aos";
import { Link } from "../lib/navigation";
import PoolTableData from "../Data/poolTable";
import type { ProductDetails } from "../lib/types";
import OrderNowModal from "./OrderFormModal";
import { ButtonLink } from "./ui/Button";
import { formatPrice, getSavings } from "../lib/price";

function decodeSegment(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function detailsForProductId(productId: string | undefined): ProductDetails | null {
  if (!productId) return null;
  const decoded = decodeSegment(productId);
  const product = PoolTableData.find((item) => String(item.id) === decoded || item.details.title === decoded || item.name === decoded);
  if (!product) return null;

  const isTableTennis = product.name.toLowerCase().includes("tennis");
  return {
    ...product.details,
    title: product.name,
    ...(isTableTennis ? { information: undefined } : {}),
  };
}

export default function ProductDetail() {
  const params = useParams<{ productId: string }>();
  const routeDetails = useMemo(() => detailsForProductId(params?.productId), [params?.productId]);
  const [details, setDetails] = useState<ProductDetails | null>(routeDetails);
  const [selectedSize, setSelectedSize] = useState(routeDetails?.size[0] ?? "");
  const specificationItems = details?.information?.filter((info) => !/^\s*(size|room size)\s*-/i.test(info)) ?? [];

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    if (routeDetails) {
      setDetails(routeDetails);
      setSelectedSize(routeDetails.size[0] ?? "");
      return;
    }

    try {
      const savedState = JSON.parse(sessionStorage.getItem("om-billiard:navigation-state") ?? "null") as { details?: ProductDetails } | null;
      if (savedState?.details) {
        setDetails(savedState.details);
        setSelectedSize(savedState.details.size[0] ?? "");
      }
    } catch {
      setDetails(null);
    }
  }, [routeDetails]);

  if (!details) {
    return (
      <section className="page-shell section-space">
        <div className="rounded-xl border border-line bg-surface p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Product details</p>
          <h1 className="mt-3 font-display text-heading-md font-semibold text-ink">This product could not be found.</h1>
          <p className="mt-2 text-sm text-muted">Return to the table collection to browse available products.</p>
          <ButtonLink href="/pool-table" variant="secondary" className="mt-6">Browse pool tables</ButtonLink>
        </div>
      </section>
    );
  }

  return (
    <div className="page-shell py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link to="/" className="hover:text-ink">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/pool-table" className="hover:text-ink">Pool & snooker tables</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-ink">{details.title}</li>
        </ol>
      </nav>

      <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-10">
        <section aria-label={`${details.title} image gallery`} className="min-w-0 overflow-hidden rounded-xl border border-line bg-surface p-2 sm:p-4" data-aos="fade-up">
          <ImageGallery
            items={details.images}
            showThumbnails
            showFullscreenButton
            showPlayButton={false}
            lazyLoad
          />
        </section>

        <section className="rounded-xl border border-line bg-surface p-5 shadow-soft sm:p-7 lg:sticky lg:top-28" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Pool & snooker tables</p>
          <h1 className="mt-3 font-display text-heading-md font-semibold text-ink">{details.title}</h1>
          {details.size.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{details.size.map((size) => <span key={size} className="rounded-full border border-line bg-bg px-3 py-1.5 text-xs font-semibold text-muted">{size}</span>)}</div>}
          <div className="mt-6 border-y border-line py-5"><div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><p className="text-2xl font-semibold tabular-nums text-ink sm:text-3xl">{formatPrice(details.price.current)}</p>{getSavings(details.price.current, details.price.original) !== null && <p className="text-sm text-muted line-through">{formatPrice(details.price.original)}</p>}</div>{getSavings(details.price.current, details.price.original) !== null && <p className="mt-2 inline-flex rounded-full bg-sage/30 px-3 py-1 text-xs font-semibold text-sage-dark">Save {formatPrice(getSavings(details.price.current, details.price.original)!)}</p>}</div>

          {details.size.length > 1 && (
            <div className="mt-5">
              <label htmlFor="table-size" className="mb-1.5 block text-sm font-medium text-ink">Table size</label>
              <select id="table-size" value={selectedSize} onChange={(event) => setSelectedSize(event.target.value)} className="form-control">
                {details.size.map((size) => <option key={size} value={size}>{size}</option>)}
              </select>
            </div>
          )}

          <div className="mt-6">
            <OrderNowModal triggerLabel="Ask about this table" productName={`${details.title}${selectedSize ? ` · ${selectedSize}` : ""}`} />
          </div>
          <p className="mt-3 text-xs leading-5 text-muted">Ask about other available sizes, size-specific pricing, delivery or installation. This form sends an inquiry; it does not place an order.</p>
        </section>
      </div>

      {specificationItems.length > 0 && (
        <section aria-labelledby="specifications-heading" className="mt-8 rounded-xl border border-line bg-surface p-5 sm:mt-10 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Product information</p>
          <h2 id="specifications-heading" className="mt-2 font-display text-heading-md font-semibold text-ink">Specifications and included items</h2>
          <ul className="mt-6 grid gap-x-10 gap-y-3 text-sm leading-6 text-muted sm:grid-cols-2">
            {specificationItems.map((info, index) => <li key={`${index}-${info}`} className="border-b border-line pb-3">{info}</li>)}
          </ul>
        </section>
      )}
    </div>
  );
}
