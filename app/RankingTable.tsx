import Link from "next/link";
import { displayName, formatUSD, type IndexEntry } from "@/lib/data";

// Full ranking table shared by the homepage and /contractors.
// Server-rendered, no client JS. Columns: rank, name, FY2025 total,
// HQ state, top FY2025 agency.
export default function RankingTable({ entries }: { entries: IndexEntry[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
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
          {entries.map((e) => (
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
                  {displayName(e.name)}
                </Link>
              </td>
              <td className="px-4 py-3 text-right tabular-nums font-medium text-slate-900">
                {formatUSD(e.fy2025)}
              </td>
              <td className="px-4 py-3 text-slate-600">{e.hq_state ?? "—"}</td>
              <td className="px-4 py-3 text-slate-600">{e.top_agency ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
