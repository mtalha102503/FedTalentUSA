import type { Metadata } from "next";
import Link from "next/link";
import {
  displayCompanyName,
  displayHQ,
  formatUSD,
  getContractor,
  getIndex,
  isAggregateRow,
} from "@/lib/data";

const URL = "https://fedtalentusa.com/tools/company-naics-lookup";
const MAX_MATCHES = 50;

export const metadata: Metadata = {
  title: "Company NAICS Lookup: Find NAICS Codes by Company Name",
  description:
    "Look up a federal contractor by company name and see the NAICS codes on its FY2025 federal awards, with dollars per code and top agencies — real USAspending.gov data, free, no signup.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Company NAICS Lookup | FedTalentUSA",
    description:
      "Find a federal contractor's NAICS codes by company name, with FY2025 award dollars per code and top agencies.",
    url: URL,
    siteName: "FedTalentUSA",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Company NAICS Lookup | FedTalentUSA",
      },
    ],
  },
};

// Company names in the data are ALL-CAPS legal names with punctuation
// ("CGI FEDERAL INC."). Normalize both sides so "cgi federal",
// "Cgi-Federal" and "CGI FEDERAL INC" all match the same record.
function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstParam(
  v: string | string[] | undefined,
): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

export default async function CompanyNaicsLookupPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const rawQ = firstParam(params.q) ?? "";
  const q = rawQ.trim();
  const queryNorm = normalize(q);
  const slug = firstParam(params.slug);

  const index = await getIndex();

  // Result view: a single company, chosen from the match list.
  const contractor = slug ? await getContractor(slug) : null;
  const backHref = q
    ? `/tools/company-naics-lookup?q=${encodeURIComponent(q)}`
    : "/tools/company-naics-lookup";

  // Match view: every index entry whose legal name contains the query.
  const matches = queryNorm
    ? index
        .filter((e) => normalize(e.name).includes(queryNorm))
        .sort((a, b) => a.rank - b.rank)
    : [];
  const truncated = matches.length > MAX_MATCHES;
  const shownMatches = matches.slice(0, MAX_MATCHES);

  const fy2025Total = contractor ? contractor.years["2025"] ?? 0 : 0;
  const naicsRows = contractor
    ? [...contractor.splits.naics].sort((a, b) => b.amount - a.amount)
    : [];
  const topAgencies = contractor
    ? [...contractor.splits.agencies]
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 5)
    : [];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>{" "}
        / <span className="text-slate-800">Company NAICS Lookup</span>
      </nav>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        Company NAICS Lookup
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Type a company name and see the NAICS codes on that company&apos;s
        FY2025 federal awards — ranked by award dollars, with its top
        agencies. Free, no signup, built on real USAspending.gov data.
      </p>

      <form
        method="get"
        action="/tools/company-naics-lookup"
        className="mt-6 flex max-w-3xl flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="company-name" className="sr-only">
          Company name
        </label>
        <input
          id="company-name"
          name="q"
          type="search"
          defaultValue={q}
          placeholder="e.g. Lockheed Martin, CGI Federal"
          autoComplete="off"
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          Look up
        </button>
      </form>
      <p className="mt-2 text-sm text-slate-500">
        Try:{" "}
        <Link
          href="/tools/company-naics-lookup?q=Lockheed%20Martin"
          className="text-blue-700 hover:underline"
        >
          Lockheed Martin
        </Link>{" "}
        or{" "}
        <Link
          href="/tools/company-naics-lookup?q=CGI%20Federal"
          className="text-blue-700 hover:underline"
        >
          CGI Federal
        </Link>
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-slate-900">
          What these NAICS codes are — and what they are not
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>
            These are the NAICS codes appearing on the company&apos;s FY2025
            federal awards (Oct 1, 2024 – Sep 30, 2025). Each award carries
            the code of what the government bought under it.
          </li>
          <li>
            They are NOT the company&apos;s SAM-registered primary NAICS
            code. A company&apos;s registered codes live in its SAM.gov
            entity registration; this lookup shows what it actually sold
            to the government in FY2025.
          </li>
          <li>
            Coverage is the site&apos;s Top 1,000 contractor records only —
            not the whole SAM database. Companies outside it return no
            match.
          </li>
          <li>
            The same legal name can appear more than once under different
            records. Use the FY2025 total and headquarters to pick the
            right one, then open its full profile.
          </li>
        </ul>
      </div>

      {/* Result view */}
      {slug && contractor && (
        <div className="mt-8">
          <Link href={backHref} className="text-sm text-blue-700 hover:underline">
            ← Back to results
          </Link>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            {displayCompanyName(contractor.name)}
            {isAggregateRow(contractor.name) && (
              <span className="ml-2 rounded bg-slate-200 px-2 py-0.5 align-middle text-xs font-semibold text-slate-700">
                Aggregate
              </span>
            )}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {displayHQ(contractor) ?? "Headquarters not listed"}
            {contractor.uei ? ` · UEI ${contractor.uei}` : ""}
            {" · "}
            <Link
              href={`/contractors/${contractor.slug}`}
              className="text-blue-700 hover:underline"
            >
              Full contractor profile →
            </Link>
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                FY2025 awards
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                {formatUSD(fy2025Total)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                FY2024 awards
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                {formatUSD(contractor.years["2024"] ?? 0)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                FY2023 awards
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                {formatUSD(contractor.years["2023"] ?? 0)}
              </p>
            </div>
          </div>

          <h3 className="mt-8 text-lg font-bold text-slate-900">
            NAICS codes on FY2025 awards
          </h3>
          {naicsRows.length === 0 ? (
            <p className="mt-2 text-slate-600">
              No NAICS split is on file for this record in FY2025.
            </p>
          ) : (
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-2">NAICS code</th>
                    <th className="px-4 py-2">Industry</th>
                    <th className="px-4 py-2 text-right">FY2025 awards</th>
                    <th className="px-4 py-2 text-right">Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {naicsRows.map((n) => (
                    <tr key={n.code ?? n.name}>
                      <td className="px-4 py-2 font-medium text-slate-900">
                        {n.code ?? "—"}
                      </td>
                      <td className="px-4 py-2 text-slate-700">{n.name}</td>
                      <td className="px-4 py-2 text-right text-slate-900">
                        {formatUSD(n.amount)}
                      </td>
                      <td className="px-4 py-2 text-right text-slate-700">
                        {fy2025Total > 0
                          ? `${((n.amount / fy2025Total) * 100).toFixed(1)}%`
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {topAgencies.length > 0 && (
            <>
              <h3 className="mt-8 text-lg font-bold text-slate-900">
                Top buying agencies, FY2025
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {topAgencies.map((a) => (
                  <li
                    key={a.code ?? a.name}
                    className="flex justify-between gap-4 rounded-lg border border-slate-200 px-4 py-2"
                  >
                    <span className="text-slate-700">{a.name}</span>
                    <span className="font-medium text-slate-900">
                      {formatUSD(a.amount)}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-4 text-xs text-slate-500">
            Source: USAspending.gov. Totals are prime contract obligations;
            see <Link href="/about" className="text-blue-700 hover:underline">About</Link> for
            the full methodology. NAICS splits cover FY2025 only.
          </p>
        </div>
      )}

      {/* Broken or stale profile link */}
      {slug && !contractor && (
        <div className="mt-8 rounded-lg border border-slate-200 p-5">
          <p className="font-semibold text-slate-900">
            That contractor profile was not found.
          </p>
          <p className="mt-1 text-sm text-slate-600">
            <Link href={backHref} className="text-blue-700 hover:underline">
              Back to search
            </Link>{" "}
            and pick a company from the match list.
          </p>
        </div>
      )}

      {/* Match list view */}
      {!slug && queryNorm && (
        <div className="mt-8">
          <h2 className="text-lg font-bold text-slate-900">
            {matches.length === 0
              ? `No match for “${q}”`
              : `${matches.length} match${matches.length === 1 ? "" : "es"} for “${q}”`}
          </h2>
          {matches.length === 0 ? (
            <div className="mt-3 rounded-lg border border-slate-200 p-5 text-sm text-slate-700">
              <p>
                This lookup covers the site&apos;s Top 1,000 contractor
                records only. If the company is smaller than that, or if
                you searched a subsidiary or brand name, it will not
                appear here.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Try the parent company&apos;s legal name (for example,
                  the name on its federal contracts, not a product brand).
                </li>
                <li>
                  For any U.S. business, the Census Bureau&apos;s free
                  keyword tool at census.gov/naics maps an activity to its
                  code — and a company&apos;s registered codes live in its
                  SAM.gov entity registration.
                </li>
              </ul>
            </div>
          ) : (
            <>
              {truncated && (
                <p className="mt-2 text-sm text-slate-500">
                  Showing the first {MAX_MATCHES} by FY2025 rank — refine
                  your search to narrow it down.
                </p>
              )}
              <ul className="mt-3 space-y-2">
                {shownMatches.map((e) => (
                  <li
                    key={e.slug}
                    className="rounded-lg border border-slate-200 px-4 py-3 hover:border-blue-300"
                  >
                    <Link
                      href={`/tools/company-naics-lookup?slug=${encodeURIComponent(e.slug)}&q=${encodeURIComponent(q)}`}
                      className="block"
                    >
                      <span className="font-medium text-blue-700 hover:underline">
                        {displayCompanyName(e.name)}
                        {isAggregateRow(e.name) && (
                          <span className="ml-2 rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
                            Aggregate
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-sm text-slate-600">
                        FY2025 rank #{e.rank} · {formatUSD(e.fy2025)}
                        {e.hq_state ? ` · HQ ${e.hq_state}` : ""}
                        {e.top_agency ? ` · Top agency: ${e.top_agency}` : ""}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {/* Default view: worked example + explainer + FAQs */}
      {!slug && !queryNorm && (
        <div className="mt-8">
          <h2 className="text-lg font-bold text-slate-900">
            Worked example: CGI Federal
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            CGI Federal&apos;s FY2025 federal awards total $1,193,894,458.
            The NAICS codes on those awards, ranked by dollars, start with
            541512 Computer Systems Design Services ($400,211,581), then
            541519 Other Computer Related Services ($350,862,514) and
            541513 Computer Facilities Management Services ($240,783,930)
            — ten codes in all. Its top buying agency in FY2025 was the
            Department of State ($363,774,985). That is the kind of answer
            this lookup gives for any company in the Top 1,000.
          </p>
          <p className="mt-2 text-sm">
            <Link
              href="/tools/company-naics-lookup?q=CGI%20Federal"
              className="text-blue-700 hover:underline"
            >
              Run the CGI Federal lookup →
            </Link>
          </p>

          <h2 className="mt-8 text-lg font-bold text-slate-900">
            Award NAICS vs. registered NAICS vs. Census code
          </h2>
          <div className="mt-3 max-w-3xl space-y-3 text-sm text-slate-700">
            <p>
              Three different things are all called “a company&apos;s NAICS
              code,” and mixing them up is the most common mistake in this
              space. The Census Bureau assigns one code per establishment,
              based on its primary activity — the activity producing the
              most revenue at that location. SAM.gov lets a registered
              entity list several codes and designate one as primary; those
              registered codes decide which small-business size standards
              apply when it bids.
            </p>
            <p>
              This lookup shows a third thing: the codes the government
              actually bought under, award by award, in FY2025. A company
              that sells IT services, facilities support and training to
              different agencies will show all three, ranked by dollars —
              which is exactly what a subcontractor, competitor or
              researcher usually wants to know before approaching it.
            </p>
          </div>

          <h2 className="mt-8 text-lg font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mt-3 max-w-3xl space-y-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">
                Are these the company&apos;s official NAICS codes?
              </p>
              <p className="mt-1">
                No. These are the codes on its FY2025 federal awards. The
                official registered codes are in the company&apos;s SAM.gov
                entity registration, which is login-gated and not part of
                this lookup.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                Why does one company show several NAICS codes?
              </p>
              <p className="mt-1">
                Because each award carries the code of what was bought. A
                company selling different services to different agencies
                accumulates several codes; the table ranks them by FY2025
                dollars so the main lines of business come first.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                Why does the same name appear more than once?
              </p>
              <p className="mt-1">
                USAspending keeps recipient records per registration, so
                one legal name can sit behind several records. Compare the
                FY2025 total and headquarters, then open the profile that
                matches the company you mean.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                Why is there no result for my company?
              </p>
              <p className="mt-1">
                Either it is outside the Top 1,000 contractor records this
                site covers, or you searched a subsidiary or brand name.
                Try the parent company&apos;s legal name as it appears on
                federal contracts.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                Which year does this cover?
              </p>
              <p className="mt-1">
                FY2025 only (Oct 1, 2024 – Sep 30, 2025), the latest
                complete fiscal year in this data. NAICS splits for other
                years are not in the database behind this tool.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Source: USAspending.gov. Totals are prime contract obligations;
            see <Link href="/about" className="text-blue-700 hover:underline">About</Link> for
            the full methodology.
          </p>
        </div>
      )}
    </section>
  );
}
