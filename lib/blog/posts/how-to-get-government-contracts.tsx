// lib/blog/posts/how-to-get-government-contracts.tsx — How-to guide:
// the SAM.gov process, plus the FY2025 data nobody on page 1 shows.
// EVERY dollar figure below is a real row from the federal-contractors-1
// Supabase project (USAspending.gov data), freshly pulled at writing time
// (2026-11-01). Scope: prime federal contract obligations of the 1,000
// largest contractors, parent-family sums, FY2025 = Oct 1, 2024 – Sep 30,
// 2025. State figures are by place of performance, not headquarters.
// See the Methodology section for scope and why other sites differ.
import Link from "next/link";
import { formatUSD } from "@/lib/format";

const TOP_AGENCIES: { name: string; amount: number; share: string }[] = [
  { name: "Department of Defense", amount: 340858883451.21, share: "61.5%" },
  { name: "Department of Veterans Affairs", amount: 65636548574.09, share: "11.8%" },
  { name: "Department of Energy", amount: 46354495603.55, share: "8.4%" },
  { name: "Department of Homeland Security", amount: 19754181046.02, share: "3.6%" },
  { name: "General Services Administration", amount: 17851899084.7, share: "3.2%" },
  { name: "Department of Health and Human Services", amount: 13041578486.33, share: "2.4%" },
  { name: "National Aeronautics and Space Administration", amount: 12244411553.94, share: "2.2%" },
  { name: "Department of the Treasury", amount: 6205172337.39, share: "1.1%" },
  { name: "Department of State", amount: 5267632963.89, share: "1.0%" },
  { name: "Department of Justice", amount: 5192253845.23, share: "0.9%" },
];

const TOP_CONTRACTORS: { name: string; slug: string; amount: number }[] = [
  { name: "Lockheed Martin Corp", slug: "lockheed-martin-corp", amount: 64725692748.21 },
  { name: "UnitedHealth Group Incorporated", slug: "unitedhealth-group-incorporated", amount: 25405430794.11 },
  { name: "The Boeing Company", slug: "the-boeing-company", amount: 22546403604.31 },
  { name: "Electric Boat Corporation", slug: "electric-boat-corporation", amount: 21366142819.4 },
  { name: "TriWest Healthcare Alliance Corp", slug: "triwest-healthcare-alliance-corp", amount: 13374744670.22 },
  { name: "McKesson Corporation", slug: "mckesson-corporation", amount: 11938599293.76 },
  { name: "Huntington Ingalls Industries, Inc", slug: "huntington-ingalls-industries-inc", amount: 10934408067.71 },
  { name: "Northrop Grumman Corporation", slug: "northrop-grumman-corporation", amount: 9763138990.58 },
  { name: "Leidos Holdings, Inc.", slug: "leidos-holdings-inc", amount: 9137387797.24 },
  { name: "General Dynamics Corp", slug: "general-dynamics-corp", amount: 8958643563.22 },
];

const TOP_STATES: { name: string; amount: number }[] = [
  { name: "Virginia", amount: 97355627577.59 },
  { name: "Texas", amount: 76136314616.89 },
  { name: "California", amount: 42060907815.58 },
  { name: "Connecticut", amount: 26701076397.72 },
  { name: "Maryland", amount: 26407130446.47 },
  { name: "Florida", amount: 23073935776.92 },
  { name: "Pennsylvania", amount: 22109294413.85 },
  { name: "District Of Columbia", amount: 19245000319.94 },
  { name: "Alabama", amount: 14055180715.17 },
  { name: "Colorado", amount: 12378243628.8 },
];

const TOP_INDUSTRIES: { name: string; amount: number }[] = [
  { name: "Aircraft Manufacturing", amount: 60086623889.6 },
  { name: "Direct Health and Medical Insurance Carriers", amount: 45357232072.67 },
  { name: "Engineering Services", amount: 35220483372.88 },
  { name: "Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)", amount: 34899490512.98 },
  { name: "Ship Building and Repairing", amount: 33614895642.4 },
  { name: "Facilities Support Services", amount: 32144932996.54 },
  { name: "Computer Systems Design Services", amount: 23836865157.58 },
  { name: "Guided Missile and Space Vehicle Manufacturing", amount: 21240838321.69 },
  { name: "Other Computer Related Services", amount: 17088887874.65 },
  { name: "Other Aircraft Parts and Auxiliary Equipment Manufacturing", amount: 13770238762.51 },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What are the easiest government contracts to get?",
    a: "There is no contract that is easy in the sense of guaranteed. The realistic entry points are smaller contracts, contracts set aside for small businesses, and subcontracting work under a large prime contractor. Businesses that start by subcontracting build the past performance that later helps them win prime contracts of their own.",
  },
  {
    q: "Is it hard to get government contracts?",
    a: "It is competitive, and first attempts often lose. The process itself is open to any registered business: register on SAM.gov, find an opportunity that fits what you sell, and submit a compliant proposal. The difficulty is not access, it is competition — incumbents with past performance usually have an advantage, which is why new entrants often start with smaller or set-aside contracts.",
  },
  {
    q: "How can I acquire government contracts?",
    a: "In three steps: first, register your business on SAM.gov and get your UEI and CAGE code; second, search SAM.gov Contract Opportunities and study who already wins work in your industry; third, submit a proposal that answers every requirement in the solicitation. The sections below walk through each step, with real FY2025 spending data showing where the money actually goes.",
  },
  {
    q: "How much do government contracts cost?",
    a: "Registering on SAM.gov is free, and the government does not charge a fee to bid. The real cost is your own time and effort: preparing a proposal, meeting compliance requirements, and, if you win, delivering the work. Anyone charging you a fee just to register on SAM.gov is selling you a service you can do yourself for free.",
  },
  {
    q: "Which agency awards the most contracts?",
    a: "The Department of Defense, by a wide margin: $340.86 billion in FY2025 agency splits across the top 1,000 contractors, or 61.5% of that set's $554.25 billion total. The Department of Veterans Affairs is second at $65.64 billion (11.8%), followed by the Department of Energy at $46.35 billion (8.4%).",
  },
  {
    q: "How much did the top 1,000 federal contractors win in FY2025?",
    a: "Combined, the 1,000 companies in the FedTalentUSA ranking recorded $554,248,039,929 in FY2025 prime contract obligations. The top 10 alone account for about $198 billion, or roughly 36% of that total — and the top 10 agencies account for about 96% of it.",
  },
  {
    q: "Where is most federal contract work performed?",
    a: "Virginia, with $97.36 billion in FY2025 work by place of performance — where the work was performed, not where the contractor is headquartered. Texas is second at $76.14 billion, followed by California at $42.06 billion. Note the distinction: a contractor headquartered in one state often performs most of its work in another.",
  },
];

function Table({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-slate-50">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-slate-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-200">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HowToGetGovernmentContractsContent() {
  return (
    <div>
      <p className="leading-relaxed text-slate-700">
        A government contract is a deal between your business and a federal
        agency: the agency buys goods or services, and you deliver them under
        the terms of the contract. Anyone can compete — there is no license
        that reserves federal contracting for big companies — but the process
        has its own language, registrations, and rules, and newcomers who skip
        the groundwork usually lose their first bids.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Most guides to this topic stop at the process: register, search, bid.
        This one does that too, but it adds something none of the top-ranking
        guides have — real FY2025 spending data from USAspending.gov, showing
        which agencies actually award the money, which companies win it, and
        where the work is performed. If you are deciding where to compete,
        those numbers matter more than generic encouragement.
      </p>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h2 className="text-lg font-bold text-slate-900">Key facts</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>
            The 1,000 largest federal contractors recorded{" "}
            <strong>$554.25 billion</strong> in FY2025 prime contract
            obligations.
          </li>
          <li>
            The Department of Defense accounts for{" "}
            <strong>61.5%</strong> of that total — $340.86 billion.
          </li>
          <li>
            The largest contractor, Lockheed Martin, won{" "}
            <strong>$64.73 billion</strong> in FY2025.
          </li>
          <li>
            The most contract work is performed in{" "}
            <strong>Virginia ($97.36 billion)</strong>, followed by Texas and
            California.
          </li>
          <li>
            SAM.gov registration is <strong>free</strong> — the government
            charges nothing to register or bid.
          </li>
        </ul>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Step 1: Register your business on SAM.gov
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Everything starts at{" "}
        <a
          href="https://sam.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          SAM.gov
        </a>
        , the government&apos;s system for award management. Registration is
        free and it is mandatory: an agency cannot award you a contract until
        your entity registration is active.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        During registration you will receive a Unique Entity Identifier (UEI)
        and a CAGE code, which identify your business in the federal system.
        You will also select NAICS codes — the industry codes that describe
        what you sell. Choose them carefully: agencies and prime contractors
        search by NAICS code when they look for suppliers, so the codes you
        pick decide whether buyers can find you at all.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        If you are a small business, say so accurately in your registration.
        Many contracts are set aside for small businesses, and there are
        further set-asides for specific categories, including 8(a) firms,
        HUBZone businesses, women-owned small businesses, and service-disabled
        veteran-owned small businesses. A set-aside means only businesses in
        that category may compete for that contract, which removes the
        largest incumbents from your competition pool.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        One warning that belongs in every guide on this topic: SAM.gov
        registration itself costs nothing. If a company offers to register
        you for a fee, it is selling a convenience service, not a government
        requirement — you can complete the same registration yourself for
        free.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Step 2: Find opportunities worth bidding on
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Once registered, search SAM.gov Contract Opportunities — the public
        listing of federal solicitations. Filter by your NAICS codes, by
        agency, and by set-aside category, and read the full solicitation
        before you decide to bid. The solicitation states exactly what the
        agency wants, the deadline, and how proposals will be evaluated; a
        bid that ignores any of those three things is usually a wasted bid.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Before you bid, study who already wins the kind of work you want to
        do. That is where this site helps: every contractor profile on
        FedTalentUSA shows that company&apos;s real obligations by year,
        agency, state, industry, and individual awards. If you sell
        engineering services, look at who the Department of Defense and the
        Department of Energy already buy them from. If you are weighing
        subcontracting, the same profiles show you which primes dominate
        your market — those are the companies whose supply chains you want
        to join. Use the{" "}
        <Link href="/tools/contractor-finder" className="text-blue-700 hover:underline">
          Contractor Finder
        </Link>{" "}
        to search the ranking by agency, state, or industry.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        A practical note on timing: federal buying runs on the fiscal year,
        which ends September 30, and agencies often award heavily as that
        deadline approaches. Building your pipeline early in the year, rather
        than discovering opportunities in September, is one of the simplest
        advantages a new bidder can give itself.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Step 3: Submit a competitive bid
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        A winning proposal answers the solicitation, requirement by
        requirement, in the order and format the agency asked for. Evaluators
        score compliance first: a brilliant technical approach that misses a
        required form or deadline still loses. Price matters, but the lowest
        price does not automatically win — agencies weigh technical merit,
        past performance, and price together, and an unrealistically low
        price can read as a delivery risk.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Past performance is the hardest part for a new business, and the
        honest way around it is to start smaller: set-aside contracts,
        smaller-dollar awards, and subcontracting under an established prime
        all build the record that later supports larger prime bids. If you
        lose a bid, ask the agency for a debrief — agencies routinely explain
        where a proposal fell short, and that feedback is the cheapest
        education in this market.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Where the money actually goes: FY2025 data
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The tables below are the part other guides do not have. Every figure
        is a prime contract obligation from USAspending.gov, summed across
        the parent family of each of the 1,000 largest contractors, for
        FY2025 (October 1, 2024 to September 30, 2025). Shares are shares of
        that set&apos;s $554.25 billion total — not shares of all federal
        spending, which is much larger because it includes grants, benefits,
        and contractors outside the top 1,000.
      </p>

      <h3 className="mt-8 text-xl font-bold text-slate-900">
        Top agencies by FY2025 contract obligations
      </h3>
      <p className="mt-4 leading-relaxed text-slate-700">
        Ten agencies account for about 96% of the top 1,000&apos;s dollars.
        If your business sells to the government, it almost certainly sells
        to one of these.
      </p>
      <Table
        head={["Rank", "Agency", "FY2025 obligations", "Share of top-1,000 total"]}
        rows={TOP_AGENCIES.map((a, i) => [
          i + 1,
          a.name,
          formatUSD(a.amount),
          a.share,
        ])}
      />

      <h3 className="mt-8 text-xl font-bold text-slate-900">
        Top contractors by FY2025 contract obligations
      </h3>
      <p className="mt-4 leading-relaxed text-slate-700">
        The top 10 contractors alone won about $198 billion, roughly 36% of
        the top-1,000 total. Click any name for that company&apos;s full
        profile: yearly trend, agency and state splits, and individual
        awards.
      </p>
      <Table
        head={["Rank", "Contractor", "FY2025 obligations"]}
        rows={TOP_CONTRACTORS.map((c, i) => [
          i + 1,
          <Link
            key={c.slug}
            href={`/contractors/${c.slug}`}
            className="text-blue-700 hover:underline"
          >
            {c.name}
          </Link>,
          formatUSD(c.amount),
        ])}
      />

      <h3 className="mt-8 text-xl font-bold text-slate-900">
        Where the work is performed: top states, FY2025
      </h3>
      <p className="mt-4 leading-relaxed text-slate-700">
        These figures are by place of performance — where the work happened
        — not by contractor headquarters. That distinction matters: a
        company headquartered in one state may perform most of its work in
        another, and if you are deciding where to hire or open an office,
        performance geography is the number you want.
      </p>
      <Table
        head={["Rank", "State (place of performance)", "FY2025 obligations"]}
        rows={TOP_STATES.map((s, i) => [i + 1, s.name, formatUSD(s.amount)])}
      />

      <h3 className="mt-8 text-xl font-bold text-slate-900">
        Top industries by FY2025 contract obligations
      </h3>
      <p className="mt-4 leading-relaxed text-slate-700">
        Aircraft manufacturing leads by a wide margin, followed by health
        insurance carriers (driven by veterans&apos; health programs),
        engineering services, and research and development. If your
        industry is not in this top 10, that is not a reason to stay out —
        it means your competition pool is smaller and your buyers are more
        concentrated, which the Contractor Finder can show you directly.
      </p>
      <Table
        head={["Rank", "Industry (NAICS)", "FY2025 obligations"]}
        rows={TOP_INDUSTRIES.map((n, i) => [i + 1, n.name, formatUSD(n.amount)])}
      />

      <h3 className="mt-8 text-xl font-bold text-slate-900">
        How to use these tables
      </h3>
      <p className="mt-4 leading-relaxed text-slate-700">
        Pick your row before you pick your bid. If you sell engineering
        services or IT, your buyers are concentrated in the Department of
        Defense, the Department of Energy, and the Department of Veterans
        Affairs. If you perform work in Virginia, Texas, or California, you
        are standing where the performance dollars already flow. And if
        your industry sits outside the top 10, look up its buyers on
        FedTalentUSA directly — a smaller, concentrated buyer list is often
        easier to break into than the most crowded markets.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Frequently asked questions
      </h2>
      <div className="mt-6 space-y-6">
        {FAQS.map((f) => (
          <div key={f.q}>
            <h3 className="text-lg font-bold text-slate-900">{f.q}</h3>
            <p className="mt-2 leading-relaxed text-slate-700">{f.a}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Methodology</h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        All dollar figures in this guide come from USAspending.gov records
        held in the FedTalentUSA ranking database and freshly pulled at
        writing time. A contractor&apos;s total is the sum of prime contract
        obligations across every USAspending recipient record belonging to
        that company — parent and child records combined — for the fiscal
        year. It is not company revenue, and it does not include
        subcontracts or grants.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The ranking covers the 1,000 largest contractors only. That is why
        these totals differ from government-wide figures: independent
        year-end analyses put total FY2025 federal contract obligations
        above $800 billion, because they include every contractor, not just
        the top 1,000. Totals are only comparable when the scope, the
        fiscal year, and the family definition match — which is also why
        other sites show different numbers for the same company.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        FY2025 runs October 1, 2024 to September 30, 2025, and is the latest
        complete fiscal year in this dataset. FY2026 reporting is still
        incomplete because agency reporting, especially from the Department
        of Defense, lags by roughly 90 days.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Sources</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <a
            href="https://www.usaspending.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            USAspending.gov
          </a>{" "}
          — prime contract obligation records, via the FedTalentUSA ranking
          database (top 1,000 contractors, FY2025).
        </li>
        <li>
          <a
            href="https://sam.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SAM.gov
          </a>{" "}
          — entity registration and Contract Opportunities.
        </li>
        <li>
          <a
            href="https://www.sba.gov/federal-contracting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            U.S. Small Business Administration: Federal Contracting
          </a>{" "}
          — how to win contracts and small business programs.
        </li>
        <li>
          <Link href="/contractors" className="text-blue-700 hover:underline">
            FedTalentUSA contractor rankings
          </Link>{" "}
          and{" "}
          <Link href="/tools/contractor-finder" className="text-blue-700 hover:underline">
            Contractor Finder
          </Link>{" "}
          — the underlying data for every table in this guide.
        </li>
      </ul>
    </div>
  );
}
