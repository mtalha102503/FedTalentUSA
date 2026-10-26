import type { Metadata } from "next";
import RankingTable from "../RankingTable";
import { getIndex } from "@/lib/data";

export const metadata: Metadata = {
  title: "Top 1,000 Federal Contractors by FY2025 Contract Value",
  description:
    "The full ranking of the 1,000 largest U.S. federal contractors by FY2025 contract obligations from USAspending.gov — with headquarters state and top agency for every company.",
  alternates: { canonical: "https://fedtalentusa.com/contractors" },
  openGraph: {
    title: "Top 1,000 Federal Contractors by FY2025 Contract Value | FedTalentUSA",
    description:
      "The full ranking of the 1,000 largest U.S. federal contractors by FY2025 contract obligations from USAspending.gov.",
    url: "https://fedtalentusa.com/contractors",
    siteName: "FedTalentUSA",
    type: "website",
  },
};

export default async function ContractorsPage() {
  const index = await getIndex();
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-slate-500">
        <a href="/" className="hover:text-blue-700">
          Home
        </a>{" "}
        / <span className="text-slate-800">Contractors</span>
      </nav>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        Top 1,000 federal contractors by FY2025 contract value
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Every company below is ranked by its total federal contract obligations
        in FY2025 (October 1, 2024 – September 30, 2025), summed across all of
        its USAspending recipient records. Click any company for its yearly
        trend, agency/state/industry splits and contract awards.
      </p>
      <div className="mt-6">
        <RankingTable entries={index} pageSize={50} />
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Source: USAspending.gov. Totals are contract obligations; see{" "}
        <a href="/about" className="text-blue-700 hover:underline">
          About
        </a>{" "}
        for the full methodology.
      </p>
    </section>
  );
}
