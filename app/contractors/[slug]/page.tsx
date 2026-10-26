import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  displayBusinessType,
  displayDate,
  displayHQ,
  displayName,
  formatUSD,
  getContractor,
  getIndex,
  type SplitEntry,
} from "@/lib/data";

export const dynamicParams = false;

export async function generateStaticParams() {
  const index = await getIndex();
  return index.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = await getContractor(slug);
  if (!c) return {};
  const index = await getIndex();
  const rank = index.find((e) => e.slug === slug)?.rank ?? null;
  const fy2025 = c.years["2025"] ?? 0;
  const topAgency = c.splits.agencies.length > 0 ? c.splits.agencies[0].name : null;
  const name = displayName(c.name);
  const title = `${name} Federal Contracts & Awards`;
  const description =
    `${name} received ${formatUSD(fy2025)} in federal contract obligations ` +
    `in FY2025${rank ? ` (rank #${rank} of 1,000)` : ""}` +
    `${topAgency ? `. Top agency: ${topAgency}.` : "."} ` +
    `See its yearly trend, agency/state/industry splits and contract awards.`;
  const url = `https://fedtalentusa.com/contractors/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | FedTalentUSA`,
      description,
      url,
      siteName: "FedTalentUSA",
      type: "article",
    },
  };
}

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums text-slate-900">{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

function SplitTable({ title, rows }: { title: string; rows: SplitEntry[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {rows.length === 0 ? (
        <p className="mt-2 text-sm text-slate-500">
          No breakdown reported for FY2025.
        </p>
      ) : (
        <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[480px] text-left text-sm">
            <tbody>
              {rows.map((r) => (
                <tr key={`${r.name}-${r.code ?? ""}`} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-2.5 text-slate-800">
                    {r.name}
                    {r.code ? (
                      <span className="ml-2 text-xs text-slate-400">{r.code}</span>
                    ) : null}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums font-medium text-slate-900">
                    {formatUSD(r.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default async function ContractorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = await getContractor(slug);
  if (!c) notFound();
  const index = await getIndex();
  const rank = index.find((e) => e.slug === slug)?.rank ?? null;
  const name = displayName(c.name);
  const hq = displayHQ(c);
  const fy2025 = c.years["2025"] ?? 0;
  const fy2024 = c.years["2024"];
  const fy2023 = c.years["2023"];
  const topAgency = c.splits.agencies.length > 0 ? c.splits.agencies[0] : null;
  const hasNegativeYear = [fy2023, fy2024, fy2025].some(
    (v) => v != null && v < 0,
  );
  const canonical = `https://fedtalentusa.com/contractors/${slug}`;

  const pctChange = (cur: number, prev: number | undefined): string | null => {
    if (prev == null || prev === 0) return null;
    const pct = ((cur - prev) / Math.abs(prev)) * 100;
    return `${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fedtalentusa.com/" },
      { "@type": "ListItem", position: 2, name: "Contractors", item: "https://fedtalentusa.com/contractors" },
      { "@type": "ListItem", position: 3, name, item: canonical },
    ],
  };
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: canonical,
    ...(hq
      ? {
          address: {
            "@type": "PostalAddress",
            ...(c.hq_city ? { addressLocality: c.hq_city } : {}),
            ...(c.hq_state ? { addressRegion: c.hq_state } : {}),
            ...(c.hq_country ? { addressCountry: c.hq_country } : {}),
          },
        }
      : {}),
    parentOrganization: {
      "@type": "Organization",
      name: "HireSkys",
      url: "https://www.hireskys.com",
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/contractors" className="hover:text-blue-700">
          Contractors
        </Link>{" "}
        / <span className="text-slate-800">{name}</span>
      </nav>

      <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">{name}</h1>
      <p className="mt-2 text-slate-600">
        {rank ? (
          <>
            Rank <strong className="text-slate-900">#{rank}</strong> of 1,000 by
            FY2025 federal contract value
          </>
        ) : (
          "Federal contractor profile"
        )}
        {hq ? <> · Headquarters: {hq}</> : null}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="FY2025 contract value" value={formatUSD(fy2025)} sub="Oct 1, 2024 – Sep 30, 2025" />
        <StatCard label="FY2024 contract value" value={fy2024 != null ? formatUSD(fy2024) : "—"} />
        <StatCard label="FY2023 contract value" value={fy2023 != null ? formatUSD(fy2023) : "—"} />
        <StatCard
          label="Top agency (FY2025)"
          value={topAgency ? topAgency.name : "—"}
          sub={topAgency ? formatUSD(topAgency.amount) : undefined}
        />
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Company profile</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full min-w-[480px] text-left text-sm">
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-2.5 font-medium text-slate-500">Legal name (as listed)</td>
              <td className="px-4 py-2.5 text-slate-900">{c.name}</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-2.5 font-medium text-slate-500">UEI</td>
              <td className="px-4 py-2.5 tabular-nums text-slate-900">{c.uei ?? "Not listed"}</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-2.5 font-medium text-slate-500">DUNS</td>
              <td className="px-4 py-2.5 tabular-nums text-slate-900">{c.duns ?? "Not listed"}</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-2.5 font-medium text-slate-500">Headquarters</td>
              <td className="px-4 py-2.5 text-slate-900">{hq ?? "Not listed"}</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 align-top font-medium text-slate-500">Business types</td>
              <td className="px-4 py-2.5 text-slate-900">
                {c.business_types.length === 0 ? (
                  "Not listed"
                ) : (
                  <span className="flex flex-wrap gap-1.5">
                    {c.business_types.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                      >
                        {displayBusinessType(t)}
                      </span>
                    ))}
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Contract value trend, FY2023 – FY2025
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3 font-semibold">Fiscal year</th>
              <th className="px-4 py-3 text-right font-semibold">Contract value</th>
              <th className="px-4 py-3 text-right font-semibold">Change vs prior year</th>
            </tr>
          </thead>
          <tbody>
            {([
              ["2023", fy2023, undefined],
              ["2024", fy2024, fy2023],
              ["2025", fy2025, fy2024],
            ] as const).map(([year, value, prev]) => (
              <tr key={year} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-2.5 font-medium text-slate-900">FY{year}</td>
                <td className="px-4 py-2.5 text-right tabular-nums font-medium text-slate-900">
                  {value != null ? formatUSD(value) : "—"}
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums text-slate-600">
                  {value != null && prev !== undefined
                    ? (pctChange(value, prev) ?? "—")
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {hasNegativeYear && (
        <p className="mt-3 text-sm text-slate-500">
          Note: a negative total reflects net deobligations in that fiscal year
          — contract reductions exceeding new obligations — not missing data.
        </p>
      )}

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        FY2025 breakdowns
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Top 10 in each category by FY2025 contract value.
      </p>
      <div className="mt-5 grid gap-8 md:grid-cols-2">
        <SplitTable title="Top awarding agencies" rows={c.splits.agencies} />
        <SplitTable title="Top places of performance (states)" rows={c.splits.states} />
        <SplitTable title="Top industries (NAICS)" rows={c.splits.naics} />
        <SplitTable title="Top product & service codes (PSC)" rows={c.splits.psc} />
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Contract awards</h2>
      <p className="mt-2 text-sm text-slate-600">
        Up to 20 awards with activity in FY2025, newest start date first.
        Amounts are individual award obligations, not company totals.
      </p>
      {c.awards.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">
          No individual awards listed for this contractor in the FY2025 data.
        </p>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3 font-semibold">Award ID</th>
                <th className="px-4 py-3 text-right font-semibold">Amount</th>
                <th className="px-4 py-3 font-semibold">Awarding agency</th>
                <th className="px-4 py-3 font-semibold">Description</th>
                <th className="px-4 py-3 font-semibold">Start date</th>
                <th className="px-4 py-3 font-semibold">NAICS</th>
                <th className="px-4 py-3 font-semibold">PSC</th>
                <th className="px-4 py-3 font-semibold">Place</th>
              </tr>
            </thead>
            <tbody>
              {c.awards.map((a) => (
                <tr key={a.award_id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-2.5 tabular-nums text-slate-800">{a.award_id}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums font-medium text-slate-900">
                    {a.amount != null ? formatUSD(a.amount) : "—"}
                  </td>
                  <td className="px-4 py-2.5 text-slate-600">{a.agency ?? "—"}</td>
                  <td className="px-4 py-2.5 text-slate-600">{a.description ?? "—"}</td>
                  <td className="px-4 py-2.5 whitespace-nowrap text-slate-600">{displayDate(a.date)}</td>
                  <td className="px-4 py-2.5 tabular-nums text-slate-600">{a.naics_code ?? "—"}</td>
                  <td className="px-4 py-2.5 tabular-nums text-slate-600">{a.psc_code ?? "—"}</td>
                  <td className="px-4 py-2.5 text-slate-600">{a.place_state ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-8 text-xs text-slate-500">
        Source: USAspending.gov. Company totals are sums of all contract
        obligations across the company&apos;s USAspending recipient records for
        each fiscal year. This page is not affiliated with or endorsed by the
        U.S. government.
      </p>
      <p className="mt-4">
        <Link href="/contractors" className="text-sm font-medium text-blue-700 hover:underline">
          ← Back to the full ranking
        </Link>
      </p>
    </section>
  );
}
