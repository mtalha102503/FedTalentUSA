import type { Metadata } from "next";
import Link from "next/link";
import { getContractor, getIndex } from "@/lib/data";
import FinderClient, {
  type FinderEntry,
  type FinderOptions,
} from "./FinderClient";

const URL = "https://fedtalentusa.com/tools/contractor-finder";

export const metadata: Metadata = {
  title: "Contractor Finder: Search Federal Contractors by State, Agency & Industry",
  description:
    "Filter the 1,000 largest U.S. federal contractors by state, agency, NAICS code, PSC code or set-aside status — ranked by real FY2025 contract obligations from USAspending.gov.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Contractor Finder | FedTalentUSA",
    description:
      "Filter the 1,000 largest U.S. federal contractors by state, agency, NAICS code, PSC code or set-aside status.",
    url: URL,
    siteName: "FedTalentUSA",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Contractor Finder | FedTalentUSA",
      },
    ],
  },
};

// SAM.gov business_types flags mapped to the finder's set-aside filters.
// HUBZone is deliberately absent: no confirmed HUBZone flag exists in the data.
const SET_ASIDE_MAP: Record<string, string> = {
  small_business: "small",
  woman_owned_business: "wosb",
  women_owned_small_business: "wosb",
  "8a_program_participant": "8a",
  service_disabled_veteran_owned_business: "sdvosb",
  veteran_owned_business: "vet",
  self_certified_small_disadvanted_business: "disadv",
};

export default async function ContractorFinderPage() {
  const index = await getIndex();
  const entries: FinderEntry[] = [];
  const stateMap = new Map<string, string>();
  const agencySet = new Set<string>();
  const naicsMap = new Map<string, string>();
  const pscMap = new Map<string, string>();

  for (const e of index) {
    const c = await getContractor(e.slug);
    if (!c) continue;
    const setAsides = new Set<string>();
    for (const f of c.business_types) {
      const k = SET_ASIDE_MAP[f];
      if (k) setAsides.add(k);
    }
    const stateCodes: string[] = [];
    for (const s of c.splits.states) {
      if (s.code) {
        stateCodes.push(s.code);
        stateMap.set(s.code, s.name);
      }
    }
    const agencyNames: string[] = [];
    for (const a of c.splits.agencies) {
      agencyNames.push(a.name);
      agencySet.add(a.name);
    }
    const naicsCodes: string[] = [];
    for (const n of c.splits.naics) {
      if (n.code) {
        naicsCodes.push(n.code);
        naicsMap.set(n.code, n.name);
      }
    }
    const pscCodes: string[] = [];
    for (const p of c.splits.psc) {
      if (p.code) {
        pscCodes.push(p.code);
        pscMap.set(p.code, p.name);
      }
    }
    entries.push({
      slug: e.slug,
      name: e.name,
      rank: e.rank,
      fy2025: e.fy2025,
      hq_state: e.hq_state,
      top_agency: e.top_agency,
      stateCodes,
      agencyNames,
      naicsCodes,
      pscCodes,
      setAsides: [...setAsides],
    });
  }
  entries.sort((a, b) => a.rank - b.rank);

  const options: FinderOptions = {
    states: [...stateMap.entries()]
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.name.localeCompare(b.name)),
    agencies: [...agencySet].sort((a, b) => a.localeCompare(b)),
    naics: [...naicsMap.entries()]
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.code.localeCompare(b.code)),
    psc: [...pscMap.entries()]
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.code.localeCompare(b.code)),
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>{" "}
        / <span className="text-slate-800">Contractor Finder</span>
      </nav>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        Contractor Finder
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Filter the largest U.S. federal contractors by where the work was
        performed, which agency bought it, what industry it falls under, or
        set-aside status — then open any company for its full profile with
        yearly trend, splits and awards.
      </p>
      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-slate-900">
          What this finder covers — and what it does not
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>
            Covers the site&apos;s Top 1,000 contractors only (FY2025
            ranking) — not the whole SAM database.
          </li>
          <li>
            State means place of performance (where the work was performed),
            not headquarters state. HQ state is shown separately.
          </li>
          <li>
            Set-aside lists undercount: 198 of the 1,000 companies have no
            business-type flags on file, so they never appear under any
            set-aside filter.
          </li>
          <li>
            FY2025 (Oct 1, 2024 – Sep 30, 2025) is the latest complete fiscal
            year.
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <FinderClient entries={entries} options={options} />
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Source: USAspending.gov. Totals are prime contract obligations; see{" "}
        <Link href="/about" className="text-blue-700 hover:underline">
          About
        </Link>{" "}
        for the full methodology.
      </p>
    </section>
  );
}
