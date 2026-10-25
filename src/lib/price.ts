export type PriceValue = number | string;

export function parsePrice(value: PriceValue): number | null {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const normalized = value.toLowerCase().replace(/[₹,\s]/g, "").trim();
  const lakhMatch = normalized.match(/^([\d.]+)(?:lakh|lakhs|lac|lacs)$/);
  if (lakhMatch) return Math.round(Number(lakhMatch[1]) * 100000);
  const numeric = Number(normalized);
  return Number.isFinite(numeric) ? numeric : null;
}

export function formatPrice(value: PriceValue): string {
  const amount = parsePrice(value);
  return amount === null ? `₹${String(value).replace(/^₹/, "")}` : `₹${amount.toLocaleString("en-IN")}`;
}

export function getSavings(current: PriceValue, original: PriceValue): number | null {
  const currentAmount = parsePrice(current);
  const originalAmount = parsePrice(original);
  if (currentAmount === null || originalAmount === null || originalAmount <= currentAmount) return null;
  return originalAmount - currentAmount;
}
