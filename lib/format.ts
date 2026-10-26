// lib/format.ts — Pure display formatters (no Node APIs), safe to import
// from client components. lib/data.ts re-exports these for server code.

// Full USD figure, e.g. $64,725,692,748. Negative values keep their sign.
export function formatUSD(n: number): string {
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.round(Math.abs(n)).toLocaleString("en-US")}`;
}

// USAspending stores legal names in ALL CAPS. Display them title-cased.
// This is a mechanical display transform only; the stored name is unchanged.
export function displayName(name: string): string {
  return name
    .toLowerCase()
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}
