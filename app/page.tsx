import type { Metadata } from "next";
import Link from "next/link";
import RankingTable from "./RankingTable";
import { formatUSD, formatUSDCompact, getIndex, getSiteStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Top Federal Contractors, Ranked by Real Contract Data",
  description:
    "FedTalentUSA ranks the 1,000 largest U.S. federal contractors by actual FY2025 contract obligations from USAspending.gov, with agency, state, industry and award breakdowns for every company.",
  alternates: { canonical: "https://fedtalentusa.com/" },
  openGraph: {
    title: "FedTalentUSA — Top Federal Contractors, Ranked by Real Contract Data",
    description:
      "The 1,000 largest U.S. federal contractors by actual FY2025 contract obligations from USAspending.gov.",
    url: "https://fedtalentusa.com/",
    siteName: "FedTalentUSA",
    type: "website",
  },
};

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{sub}</p>
    </div>
  );
}

export default async function HomePage() {
  const [index, stats] = await Promise.all([getIndex(), getSiteStats()]);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FedTalentUSA",
    url: "https://fedtalentusa.com/",
    description:
      "Rankings and profiles of the largest U.S. federal contractors, built from official USAspending.gov contract data.",
    parentOrganization: {
      "@type": "Organization",
      name: "HireSkys",
      url: "https://www.hireskys.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <section className="bg-[#071228] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Built from USAspending.gov data
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Top Federal Contractors, Ranked by Real Contract Data
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            FedTalentUSA ranks the {stats.total_contractors.toLocaleString("en-US")}{" "}
            largest U.S. federal contractors by actual contract obligations —
            with agency, state, industry and award breakdowns for every company.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contractors"
              className="rounded-lg bg-[#2f6df6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              See the full ranking
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-slate-400"
            >
              How the ranking works
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Contractors ranked"
            value={stats.total_contractors.toLocaleString("en-US")}
            sub="By FY2025 contract obligations"
          />
          <StatCard
            label="FY2025 contract value (top 1,000)"
            value={formatUSDCompact(stats.fy2025_total)}
            sub={`Exact total: ${formatUSD(stats.fy2025_total)}`}
          />
          <StatCard
            label="Fiscal years covered"
            value="FY2023 – FY2025"
            sub="FY = Oct 1 – Sep 30 (federal fiscal year)"
          />
          <StatCard
            label="Contract awards listed"
            value="14,462"
            sub="Individual awards across the top 1,000"
          />
        </div>

        <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-5">
          <p className="font-semibold text-slate-900">
            Looking for government contracting jobs?
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Browse open roles from employers across the U.S. on HireSkys, our
            sister job board.
          </p>
          <a
            href="https://www.hireskys.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-lg bg-[#2f6df6] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Browse jobs on HireSkys →
          </a>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">
          Top 50 federal contractors by FY2025 contract value
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Ranked by each company&apos;s total federal contract obligations in
          FY2025 (October 1, 2024 – September 30, 2025), summed across all of
          its USAspending recipient records. Click any company for its yearly
          trend, agency/state/industry splits and contract awards.
        </p>
        <div className="mt-5">
          <RankingTable entries={index.slice(0, 50)} />
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/contractors"
            className="inline-block rounded-lg bg-[#2f6df6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View all 1,000 contractors
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Source: USAspending.gov, the official source for U.S. federal
          spending data. Totals are contract obligations; negative totals, where
          they appear on company pages, reflect net deobligations (contract
          reductions) in that fiscal year.
        </p>
      </section>
    </>
  );
}
