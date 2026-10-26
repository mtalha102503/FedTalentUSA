# FedTalentUSA

Rankings and profiles of the 1,000 largest U.S. federal contractors, built
from official USAspending.gov contract data. A HireSkys company.

## Data

- Source: Supabase project `federal-contractors-1` (tables: contractors,
  contractor_years, contractor_agencies/states/naics/psc, contractor_awards).
- Totals come ONLY from `contractor_years` (family sums of USAspending
  contract obligations). Negative year totals are real net deobligations and
  are kept raw.
- FY2025 = October 1, 2024 – September 30, 2025.

## Build

```bash
npm install
npm run build        # runs prebuild: scripts/fetch-data.mjs (needs env vars)
```

`scripts/fetch-data.mjs` reads `SUPABASE_URL` + `SUPABASE_ANON_KEY` from the
environment (set them in the Vercel project dashboard) and writes build-time
JSON to `.build-data/` (gitignored, never committed). It never contains a
key value.

For a local build without env vars, generate `.build-data/` from the stored
Supabase credential first, then run `npx next build` (NOT `npm run build`,
which would run the prebuild and fail without env vars).

## SEO

Canonical base is `https://fedtalentusa.com` everywhere (metadataBase,
canonical URLs, og:url, sitemap). The temporary `*.vercel.app` URL is for
verification only and must never appear in SEO fields.
