// lib/data.ts — Local JSON data layer (build time).
// Data is fetched from Supabase by scripts/fetch-data.mjs during prebuild
// and written to .build-data/. This file reads from local JSON (no network).
// Totals come ONLY from contractor_years (family sums of USAspending
// contract obligations). Negative year totals are real net deobligations
// and are kept raw, never zeroed.
import fs from "node:fs";
import path from "node:path";

export interface SplitEntry {
  name: string;
  code: string | null;
  amount: number;
}

export interface AwardEntry {
  award_id: string;
  amount: number | null;
  agency: string | null;
  description: string | null;
  date: string | null;
  naics_code: string | null;
  psc_code: string | null;
  place_state: string | null;
}

export interface Contractor {
  recipient_id: string;
  name: string;
  slug: string;
  uei: string | null;
  duns: string | null;
  hq_city: string | null;
  hq_state: string | null;
  hq_country: string | null;
  business_types: string[];
  years: Record<string, number>;
  splits: {
    agencies: SplitEntry[];
    states: SplitEntry[];
    naics: SplitEntry[];
    psc: SplitEntry[];
  };
  awards: AwardEntry[];
}

export interface IndexEntry {
  slug: string;
  name: string;
  rank: number;
  fy2025: number;
  hq_state: string | null;
  top_agency: string | null;
}

export interface SiteStats {
  total_contractors: number;
  fy2023_total: number;
  fy2024_total: number;
  fy2025_total: number;
}

const DATA_DIR = path.join(process.cwd(), ".build-data");

function readJson<T>(filename: string): T {
  const fp = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(fp, "utf-8")) as T;
}

export async function getIndex(): Promise<IndexEntry[]> {
  return readJson<IndexEntry[]>("index.json");
}

export async function getSiteStats(): Promise<SiteStats> {
  return readJson<SiteStats>("stats.json");
}

export async function getContractor(slug: string): Promise<Contractor | null> {
  try {
    return readJson<Contractor>(`${slug}.json`);
  } catch {
    return null;
  }
}

// ---- formatting helpers ----

// Display formatters live in lib/format.ts (client-safe, no Node APIs).
// Server components keep importing them from here via re-export.
export { displayName, formatUSD } from "./format";

// Compact figure for hero stats, e.g. $64.73B / $48.19M / $512.40K.
export function formatUSDCompact(n: number): string {
  const sign = n < 0 ? "-" : "";
  const a = Math.abs(n);
  if (a >= 1_000_000_000) return `${sign}$${(a / 1_000_000_000).toFixed(2)}B`;
  if (a >= 1_000_000) return `${sign}$${(a / 1_000_000).toFixed(2)}M`;
  if (a >= 1_000) return `${sign}$${(a / 1_000).toFixed(2)}K`;
  return `${sign}$${a.toFixed(2)}`;
}

// SAM.gov business-type codes are snake_case; render them readable.
// Mechanical transform only (underscores -> spaces, US acronym kept).
export function displayBusinessType(code: string): string {
  return code
    .split("_")
    .map((w) => {
      if (w === "us") return "US";
      return w ? w[0].toUpperCase() + w.slice(1) : w;
    })
    .join(" ");
}

export function displayHQ(c: {
  hq_city: string | null;
  hq_state: string | null;
  hq_country: string | null;
}): string | null {
  const parts = [c.hq_city, c.hq_state].filter(Boolean) as string[];
  if (parts.length > 0) return parts.join(", ");
  return c.hq_country ?? null;
}

export function displayDate(iso: string | null): string {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const mi = parseInt(m, 10) - 1;
  if (mi < 0 || mi > 11) return iso;
  return `${months[mi]} ${parseInt(d, 10)}, ${y}`;
}
