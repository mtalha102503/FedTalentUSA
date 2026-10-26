"use client";

import { useState } from "react";
import Link from "next/link";
import { displayName, formatUSD } from "@/lib/format";
import type { IndexEntry } from "@/lib/data";

// Ranking table shared by the homepage and /contractors.
// When pageSize is set, rows load pageSize at a time via a "Load more"
// button (progressive append, ranking order preserved). Without pageSize,
// all entries render at once.
export default function RankingTable({
  entries,
  pageSize,
}: {
  entries: IndexEntry[];
  pageSize?: number;
}) {
  const total = entries.length;
  const step = pageSize ?? total;
  const [visible, setVisible] = useState(step);
  const shown = entries.slice(0, visible);
  const allShown = visible >= total;
  const showControls = pageSize != null;

  return (
    <div>
      {showControls && (
        <p className="mb-3 text-sm text-slate-500">
          {allShown
            ? `All ${total.toLocaleString("en-US")} shown`
            : `Showing ${shown.length.toLocaleString("en-US")} of ${total.toLocaleString("en-US")}`}
        </p>
      )}
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
            {shown.map((e) => (
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
      {showControls && !allShown && (
        <button
          type="button"
          onClick={() => setVisible((v) => Math.min(v + step, total))}
          className="mt-4 rounded-lg bg-[#2f6df6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Load more
        </button>
      )}
    </div>
  );
}
