"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { displayCompanyName, formatUSD, isAggregateRow } from "@/lib/format";

// Compact per-company record for the finder. Filter keys are codes/names
// only (no amounts); the full splits live on each company profile page.
export interface FinderEntry {
  slug: string;
  name: string;
  rank: number;
  fy2025: number;
  hq_state: string | null;
  top_agency: string | null;
  stateCodes: string[];
  agencyNames: string[];
  naicsCodes: string[];
  pscCodes: string[];
  setAsides: string[];
}

export interface FinderOptions {
  states: { code: string; name: string }[];
  agencies: string[];
  naics: { code: string; name: string }[];
  psc: { code: string; name: string }[];
}

// Set-aside keys derive from SAM.gov business_types flags. A company matches
// the set-aside group if it holds ANY of the checked flags. HUBZone is
// deliberately NOT offered: no confirmed HUBZone flag exists in the data.
const SET_ASIDE_OPTIONS = [
  { key: "small", label: "Small business" },
  { key: "wosb", label: "Women-owned (WOSB)" },
  { key: "8a", label: "8(a) program participant" },
  { key: "sdvosb", label: "Service-disabled veteran-owned (SDVOSB)" },
  { key: "vet", label: "Veteran-owned" },
  { key: "disadv", label: "Self-certified small disadvantaged" },
];

const selectClass =
  "mt-1 w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900";
const labelClass =
  "block text-xs font-semibold uppercase tracking-wide text-slate-500";


function FinderGuidance() {
  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          What this finder is
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          This finder filters the site&apos;s Top 1,000 federal contractors,
          ranked by their prime contract obligations in FY2025. It lets you
          slice that ranking — by where the work was performed, which agency
          bought it, what industry it falls under, or set-aside status — and
          then open any company for its full profile. It is not a search of
          the whole SAM database: only the 1,000 companies in this ranking
          can appear here.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          How to use each filter
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Filters combine: a company must match every filter you set. Leave
          a filter blank to ignore it. Results appear as soon as you set
          anything; clearing everything brings this guide back.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            <span className="font-medium text-slate-900">Company name</span>{" "}
            — substring match on the company name. Type part of a name, for
            example “Lockheed”, to narrow the ranking to matching companies.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              State (place of performance)
            </span>{" "}
            — the state where the contract work was performed, not the
            company&apos;s headquarters state. A company headquartered in one
            state can appear under several states.
          </li>
          <li>
            <span className="font-medium text-slate-900">Agency</span> — the
            awarding agency: the federal agency that obligated the contract
            dollars.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              NAICS industry
            </span>{" "}
            — the industry code and name describing what the contractor
            does, for example 336411 — Aircraft Manufacturing.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              PSC product / service
            </span>{" "}
            — the product or service code describing what was bought, for
            example 1510 — Aircraft, Fixed Wing.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              Set-aside status
            </span>{" "}
            — checkboxes for Small business, Women-owned (WOSB), 8(a)
            program participant, Service-disabled veteran-owned (SDVOSB),
            Veteran-owned, and Self-certified small disadvantaged. Checking
            more than one box shows companies holding any of them.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          What each result column means
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            <span className="font-medium text-slate-900">Rank</span> — the
            company&apos;s position in the FY2025 ranking. Rank 1 is the
            largest FY2025 total.
          </li>
          <li>
            <span className="font-medium text-slate-900">Contractor</span> —
            click the name to open the company&apos;s full profile.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              FY2025 contract value
            </span>{" "}
            — prime contract obligations in FY2025.
          </li>
          <li>
            <span className="font-medium text-slate-900">HQ state</span> —
            the headquarters state, shown separately from place of
            performance. A dash means it is not listed for that company.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              Top agency (FY2025)
            </span>{" "}
            — the company&apos;s largest awarding agency by FY2025
            obligations.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          What to do with a result
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Click any contractor to open its full profile: a three-year trend
          (FY2023–FY2025), its agency, state, NAICS and PSC splits, and up
          to 20 individual awards with activity in FY2025. Use the finder to
          build a shortlist — for example, every company doing aircraft work
          for one agency — then read the profiles to compare them.
        </p>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Scope and limits
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            Covers the site&apos;s Top 1,000 contractors only (FY2025
            ranking) — not the whole SAM database.
          </li>
          <li>
            State means place of performance (where the work was
            performed), not headquarters state. HQ state is shown
            separately.
          </li>
          <li>
            Set-aside lists undercount: 198 of the 1,000 companies have no
            business-type flags on file, so they never appear under any
            set-aside filter.
          </li>
          <li>
            FY2025 (Oct 1, 2024 – Sep 30, 2025) is the latest complete
            fiscal year.
          </li>
          <li>
            No HUBZone filter is offered, because no confirmed HUBZone flag
            exists in the data.
          </li>
          <li>
            The same legal name can appear more than once: USAspending keeps
            separate parent records for the same name (10 names appear on
            2–9 rows each), and each record has its own ranking, trend and
            awards. Click through to a profile to see which record it is.
          </li>
          <li>
            3 ranked rows are not single companies — one undisclosed
            grouping and two government recipients — and are marked
            Aggregate in the table.
          </li>
          <li>
            6 ranked rows have no company name on file in USAspending; they
            are shown as “Unnamed recipient (USAspending record)” and still
            link to their full profiles.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Try these searches
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            Set <span className="font-medium text-slate-900">State</span> to
            Virginia to see which top contractors perform work there.
          </li>
          <li>
            Set <span className="font-medium text-slate-900">NAICS</span> to
            336411 — Aircraft Manufacturing to see the aircraft builders in
            the ranking.
          </li>
          <li>
            Check{" "}
            <span className="font-medium text-slate-900">
              8(a) program participant
            </span>{" "}
            to see the 8(a) companies in the Top 1,000.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function FinderClient({
  entries,
  options,
}: {
  entries: FinderEntry[];
  options: FinderOptions;
}) {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("");
  const [agency, setAgency] = useState("");
  const [naics, setNaics] = useState("");
  const [psc, setPsc] = useState("");
  const [setAsides, setSetAsides] = useState<string[]>([]);

  const hasFilters =
    query.trim() !== "" ||
    state !== "" ||
    agency !== "" ||
    naics !== "" ||
    psc !== "" ||
    setAsides.length > 0;

  const clearFilters = () => {
    setQuery("");
    setState("");
    setAgency("");
    setNaics("");
    setPsc("");
    setSetAsides([]);
  };

  const toggleSetAside = (key: string) => {
    setSetAsides((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      if (q !== "" && !e.name.toLowerCase().includes(q)) return false;
      if (state !== "" && !e.stateCodes.includes(state)) return false;
      if (agency !== "" && !e.agencyNames.includes(agency)) return false;
      if (naics !== "" && !e.naicsCodes.includes(naics)) return false;
      if (psc !== "" && !e.pscCodes.includes(psc)) return false;
      if (
        setAsides.length > 0 &&
        !setAsides.some((k) => e.setAsides.includes(k))
      )
        return false;
      return true;
    });
  }, [entries, query, state, agency, naics, psc, setAsides]);

  return (
    <div>
      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <div>
          <label htmlFor="finder-name" className={labelClass}>
            Company name
          </label>
          <input
            id="finder-name"
            type="search"
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
            placeholder="e.g. Lockheed"
            className={selectClass}
          />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="finder-state" className={labelClass}>
              State (place of performance)
            </label>
            <select
              id="finder-state"
              value={state}
              onChange={(ev) => setState(ev.target.value)}
              className={selectClass}
            >
              <option value="">All states</option>
              {options.states.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="finder-agency" className={labelClass}>
              Agency
            </label>
            <select
              id="finder-agency"
              value={agency}
              onChange={(ev) => setAgency(ev.target.value)}
              className={selectClass}
            >
              <option value="">All agencies</option>
              {options.agencies.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="finder-naics" className={labelClass}>
              NAICS industry
            </label>
            <select
              id="finder-naics"
              value={naics}
              onChange={(ev) => setNaics(ev.target.value)}
              className={selectClass}
            >
              <option value="">All industries</option>
              {options.naics.map((n) => (
                <option key={n.code} value={n.code}>
                  {n.code} — {n.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="finder-psc" className={labelClass}>
              PSC product / service
            </label>
            <select
              id="finder-psc"
              value={psc}
              onChange={(ev) => setPsc(ev.target.value)}
              className={selectClass}
            >
              <option value="">All products / services</option>
              {options.psc.map((p) => (
                <option key={p.code} value={p.code}>
                  {p.code} — {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <fieldset className="mt-4">
          <legend className={labelClass}>Set-aside status</legend>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
            {SET_ASIDE_OPTIONS.map((o) => (
              <label
                key={o.key}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <input
                  type="checkbox"
                  checked={setAsides.includes(o.key)}
                  onChange={() => toggleSetAside(o.key)}
                />
                {o.label}
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Checking more than one box shows companies holding any of them.
          </p>
        </fieldset>
      </div>

      {!hasFilters ? (
        <FinderGuidance />
      ) : (
        <>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          Showing {filtered.length.toLocaleString("en-US")} of{" "}
          {entries.length.toLocaleString("en-US")} contractors
        </p>
        <button
          type="button"
          onClick={clearFilters}
          disabled={!hasFilters}
          className="rounded-lg bg-[#2f6df6] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear filters
        </button>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Top 1,000 only — FY2025 ranking; State = place of performance.
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 text-center">
          <p className="font-semibold text-slate-900">
            No contractors match these filters
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Try clearing a filter or broadening your search.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 rounded-lg bg-[#2f6df6] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3 font-semibold">Rank</th>
                <th className="px-4 py-3 font-semibold">Contractor</th>
                <th className="px-4 py-3 text-right font-semibold">
                  FY2025 contract value
                </th>
                <th className="px-4 py-3 font-semibold">HQ state</th>
                <th className="px-4 py-3 font-semibold">Top agency (FY2025)</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr
                  key={e.slug}
                  className="border-b border-slate-100 last:border-0 hover:bg-blue-50/50"
                >
                  <td className="px-4 py-3 tabular-nums text-slate-500">
                    {e.rank.toLocaleString("en-US")}
                  </td>
                  <td className="px-4 py-3 font-medium">
                    <Link
                      href={`/contractors/${e.slug}`}
                      className="text-blue-700 hover:underline"
                    >
                      {displayCompanyName(e.name)}
                    </Link>
                    {isAggregateRow(e.name) && (
                      <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500">
                        Aggregate
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums font-medium text-slate-900">
                    {formatUSD(e.fy2025)}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {e.hq_state ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {e.top_agency ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
        </>
      )}
    </div>
  );
}
