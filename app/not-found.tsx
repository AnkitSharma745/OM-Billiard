import { ButtonLink } from "@/src/components/ui/Button";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[65vh] flex-col items-start justify-center py-section">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">404 · Page not found</p>
      <h1 className="mt-4 max-w-2xl font-display text-heading-xl font-semibold text-ink">Looks like this shot missed.</h1>
      <p className="mt-4 max-w-reading text-base text-muted">The page may have moved, or the address may be incomplete. Find your way back to the collection.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="primary">Back to home</ButtonLink>
        <ButtonLink href="/products" variant="secondary">Browse products</ButtonLink>
      </div>
    </main>
  );
}
