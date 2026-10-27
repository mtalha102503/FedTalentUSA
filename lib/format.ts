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

// USAspending recipient IDs double as the display name when no company name
// is on file: a UUID-style hash with a -P level suffix. Show an honest
// fallback instead of the raw identifier; the slug (profile link) is unchanged.
const RECIPIENT_HASH_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-p$/i;

export function isUnnamedRecipient(name: string): boolean {
  return RECIPIENT_HASH_PATTERN.test(name.trim());
}

export function displayCompanyName(name: string): string {
  return isUnnamedRecipient(name)
    ? "Unnamed recipient (USAspending record)"
    : displayName(name);
}

// Ranked rows that are not single companies: one undisclosed grouping and
// government recipients in USAspending. Marked "Aggregate" in tables.
export function isAggregateRow(name: string): boolean {
  const n = name.trim();
  return (
    n.toUpperCase().startsWith("GOVERNMENT OF ") ||
    /\(UNDISCLOSED\)/i.test(n)
  );
}
