// scripts/fetch-data.mjs — Fetch all contractor data from Supabase during prebuild.
// Writes to .build-data/ for the Next.js build to consume (no network during build).
// Reads credentials ONLY from environment variables; this file never contains a key.
// Totals come ONLY from contractor_years (family sums of USAspending obligations).
// Negative year totals are real net deobligations and are kept raw.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, ".build-data");

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? "";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Missing SUPABASE_URL / SUPABASE_ANON_KEY");
  process.exit(1);
}

async function sb(table, order) {
  const rows = [];
  const PAGE = 1000;
  let offset = 0;
  for (;;) {
    const url =
      `${SUPABASE_URL}/rest/v1/${table}?select=*&order=${order}` +
      `&limit=${PAGE}&offset=${offset}`;
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    if (!res.ok) {
      throw new Error(`Supabase ${res.status} on ${table}: ${(await res.text()).slice(0, 200)}`);
    }
    const batch = await res.json();
    rows.push(...batch);
    console.log(`  ${table}: got ${batch.length} rows (offset ${offset})`);
    if (batch.length < PAGE) break;
    offset += PAGE;
  }
  return rows;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

console.log("Fetching all contractor data...");
const contractors = await sb("contractors", "recipient_id");
const years = await sb("contractor_years", "id");
const agencies = await sb("contractor_agencies", "id");
const states = await sb("contractor_states", "id");
const naics = await sb("contractor_naics", "id");
const psc = await sb("contractor_psc", "id");
const awards = await sb("contractor_awards", "award_id");
console.log(
  `Totals: contractors=${contractors.length} years=${years.length} ` +
    `agencies=${agencies.length} states=${states.length} naics=${naics.length} ` +
    `psc=${psc.length} awards=${awards.length}`,
);

const yearsBy = new Map();
for (const y of years) {
  if (!yearsBy.has(y.contractor_id)) yearsBy.set(y.contractor_id, {});
  yearsBy.get(y.contractor_id)[String(y.fiscal_year)] = Number(y.total_amount);
}

function splitsFor(rows, contractorId) {
  return rows
    .filter((r) => r.contractor_id === contractorId && r.fiscal_year === 2025)
    .map((r) => ({
      name: r.agency_name ?? r.state_name ?? r.naics_title ?? r.psc_title,
      code: r.agency_code ?? r.state_code ?? r.naics_code ?? r.psc_code ?? null,
      amount: Number(r.amount),
    }))
    .sort((a, b) => b.amount - a.amount);
}

const awardsBy = new Map();
for (const a of awards) {
  if (!awardsBy.has(a.contractor_id)) awardsBy.set(a.contractor_id, []);
  awardsBy.get(a.contractor_id).push({
    award_id: a.award_id,
    amount: a.award_amount == null ? null : Number(a.award_amount),
    agency: a.awarding_agency ?? null,
    description: a.description ?? null,
    date: a.award_date ?? null,
    naics_code: a.naics_code ?? null,
    psc_code: a.psc_code ?? null,
    place_state: a.place_state ?? null,
  });
}
for (const list of awardsBy.values()) {
  list.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
}

// Rank by FY2025 total desc (ties broken by slug for determinism).
const ranked = [...contractors].sort((a, b) => {
  const ta = yearsBy.get(a.recipient_id)?.["2025"] ?? 0;
  const tb = yearsBy.get(b.recipient_id)?.["2025"] ?? 0;
  if (tb !== ta) return tb - ta;
  return a.slug.localeCompare(b.slug);
});

const index = [];
const stats = { total_contractors: 0, fy2023_total: 0, fy2024_total: 0, fy2025_total: 0 };
let written = 0;
for (let i = 0; i < ranked.length; i++) {
  const c = ranked[i];
  const y = yearsBy.get(c.recipient_id) ?? {};
  if (y["2025"] == null) {
    throw new Error(`Contractor ${c.slug} has no FY2025 year row — refusing to rank it`);
  }
  const cAgencies = splitsFor(agencies, c.recipient_id);
  const record = {
    recipient_id: c.recipient_id,
    name: c.name,
    slug: c.slug,
    uei: c.uei ?? null,
    duns: c.duns ?? null,
    hq_city: c.hq_city ?? null,
    hq_state: c.hq_state ?? null,
    hq_country: c.hq_country ?? null,
    business_types: c.business_types ?? [],
    years: y,
    splits: {
      agencies: cAgencies,
      states: splitsFor(states, c.recipient_id),
      naics: splitsFor(naics, c.recipient_id),
      psc: splitsFor(psc, c.recipient_id),
    },
    awards: (awardsBy.get(c.recipient_id) ?? []).slice(0, 20),
  };
  fs.writeFileSync(path.join(OUT_DIR, `${c.slug}.json`), JSON.stringify(record));
  written++;
  index.push({
    slug: c.slug,
    name: c.name,
    rank: i + 1,
    fy2025: y["2025"],
    hq_state: c.hq_state ?? null,
    top_agency: cAgencies.length > 0 ? cAgencies[0].name : null,
  });
  stats.fy2023_total += y["2023"] ?? 0;
  stats.fy2024_total += y["2024"] ?? 0;
  stats.fy2025_total += y["2025"];
}
stats.total_contractors = written;

fs.writeFileSync(path.join(OUT_DIR, "index.json"), JSON.stringify(index));
fs.writeFileSync(path.join(OUT_DIR, "stats.json"), JSON.stringify(stats));
console.log(`Wrote ${written} contractor files + index.json + stats.json`);
console.log(
  `FY totals: 2023=${stats.fy2023_total} 2024=${stats.fy2024_total} 2025=${stats.fy2025_total}`,
);
