// lib/blog/posts/top-federal-contractors.tsx — Hub guide: the FY2025
// ranking of the 1,000 largest U.S. federal contractors.
// EVERY figure below is a real row from the federal-contractors-1
// Supabase project (USAspending.gov data), verified before writing.
// Totals are prime contract obligations, parent-family sums, FY2025 =
// Oct 1, 2024 – Sep 30, 2025. See the Methodology section for scope,
// the $0-year caveat, and why other sites show different totals.
import Link from "next/link";
import { displayName, formatUSD } from "@/lib/format";
import { getBlogPost } from "@/lib/blog";

const TOP25: {
  rank: number;
  name: string;
  slug: string;
  fy23: number;
  fy24: number;
  fy25: number;
  topAgency: string;
}[] = [
  { rank: 1, name: "LOCKHEED MARTIN CORP", slug: "lockheed-martin-corp", fy23: 35615327812.88, fy24: 31639926821.23, fy25: 64725692748.21, topAgency: "Department of Defense" },
  { rank: 2, name: "UNITEDHEALTH GROUP INCORPORATED", slug: "unitedhealth-group-incorporated", fy23: 876549394.15, fy24: 18783397371.26, fy25: 25405430794.11, topAgency: "Department of Veterans Affairs" },
  { rank: 3, name: "THE BOEING COMPANY", slug: "the-boeing-company", fy23: 23777258572.08, fy24: 20734440859.07, fy25: 22546403604.31, topAgency: "Department of Defense" },
  { rank: 4, name: "ELECTRIC BOAT CORPORATION", slug: "electric-boat-corporation", fy23: 0, fy24: 3600371198.36, fy25: 21366142819.4, topAgency: "Department of Defense" },
  { rank: 5, name: "TRIWEST HEALTHCARE ALLIANCE CORP", slug: "triwest-healthcare-alliance-corp", fy23: 7984754268.12, fy24: 8383006980.68, fy25: 13374744670.22, topAgency: "Department of Veterans Affairs" },
  { rank: 6, name: "MCKESSON CORPORATION", slug: "mckesson-corporation", fy23: -507314289.74, fy24: 6526920886.61, fy25: 11938599293.76, topAgency: "Department of Veterans Affairs" },
  { rank: 7, name: "HUNTINGTON INGALLS INDUSTRIES, INC", slug: "huntington-ingalls-industries-inc", fy23: 9788941419.96, fy24: 6121093174.99, fy25: 10934408067.71, topAgency: "Department of Defense" },
  { rank: 8, name: "NORTHROP GRUMMAN CORPORATION", slug: "northrop-grumman-corporation", fy23: 15891269536.61, fy24: 11864437849.66, fy25: 9763138990.58, topAgency: "Department of Defense" },
  { rank: 9, name: "LEIDOS HOLDINGS, INC.", slug: "leidos-holdings-inc", fy23: 9365250348.35, fy24: 9485263422.27, fy25: 9137387797.24, topAgency: "Department of Defense" },
  { rank: 10, name: "GENERAL DYNAMICS CORP", slug: "general-dynamics-corp", fy23: 0, fy24: 10078192163.18, fy25: 8958643563.22, topAgency: "Department of Defense" },
  { rank: 11, name: "BOOZ ALLEN HAMILTON HOLDING CORPORATION", slug: "booz-allen-hamilton-holding-corporation", fy23: 7367454347.15, fy24: 8434324094.95, fy25: 7547783395.58, topAgency: "Department of Defense" },
  { rank: 12, name: "CENCORA GLOBAL CONSULTING SERVICES US CORP", slug: "cencora-global-consulting-services-us-corp", fy23: 0, fy24: 2627730168.91, fy25: 7434221062.12, topAgency: "Department of Defense" },
  { rank: 13, name: "L3HARRIS TECHNOLOGIES, INC", slug: "l3harris-technologies-inc", fy23: 7418303692.05, fy24: 7239450670.66, fy25: 7303753415.15, topAgency: "Department of Defense" },
  { rank: 14, name: "PIP MANUFACTURING, INC.", slug: "pip-manufacturing-inc", fy23: 0, fy24: 1562508642.09, fy25: 6868423877.37, topAgency: "Department of Energy" },
  { rank: 15, name: "HUMANA GOVERNMENT BUSINESS INC", slug: "humana-government-business-inc", fy23: 0, fy24: 4963545212.46, fy25: 6513706438.99, topAgency: "Department of Defense" },
  { rank: 16, name: "FLUOR CORPORATION", slug: "fluor-corporation", fy23: 4381001036.83, fy24: 6371812244.55, fy25: 6470269738.81, topAgency: "Department of Energy" },
  { rank: 17, name: "ATLANTIC DIVING SUPPLY, INC.", slug: "atlantic-diving-supply-inc", fy23: 0, fy24: 4623837496.63, fy25: 6079118533.73, topAgency: "Department of Defense" },
  { rank: 18, name: "AMENTUM HOLDINGS INC.", slug: "amentum-holdings-inc", fy23: 0, fy24: 0, fy25: 5521509208.68, topAgency: "Department of Defense" },
  { rank: 19, name: "TRIAD NATIONAL SECURITY  LLC", slug: "triad-national-security-llc", fy23: 4578543066.01, fy24: 5162951247.26, fy25: 5199738722.65, topAgency: "Department of Energy" },
  { rank: 20, name: "CACI INTERNATIONAL INC", slug: "caci-international-inc", fy23: 4045698862.65, fy24: 3377136804.57, fy25: 4939643465.34, topAgency: "Department of Defense" },
  { rank: 21, name: "BAE SYSTEMS PLC", slug: "bae-systems-plc", fy23: 0, fy24: 5406635802.99, fy25: 4738907593.52, topAgency: "Department of Defense" },
  { rank: 22, name: "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION", slug: "science-applications-international-corporation", fy23: 182378429.56, fy24: 1761780400.88, fy25: 4525904802.48, topAgency: "Department of Defense" },
  { rank: 23, name: "DELOITTE CONSULTING LLP", slug: "deloitte-consulting-llp", fy23: 0, fy24: 3528923107.23, fy25: 3669109539.3, topAgency: "Department of Defense" },
  { rank: 24, name: "LAWRENCE LIVERMORE NATIONAL SECURITY, LLC", slug: "lawrence-livermore-national-security-llc", fy23: 2966113061.61, fy24: 3166514253.56, fy25: 3625335906.99, topAgency: "Department of Energy" },
  { rank: 25, name: "FRANCISCO PARTNERS MANAGEMENT, L.P.", slug: "francisco-partners-management-l-p", fy23: 12745788.1, fy24: 2351981497.35, fy25: 3319426427.31, topAgency: "Department of Defense" },
];

function MoneyTable({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            {head.map((h, i) => (
              <th
                key={h}
                className={`px-4 py-3 font-semibold ${i > 0 ? "text-right" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-slate-100 last:border-0">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`px-4 py-2.5 ${j === 0 ? "text-slate-800" : "text-right tabular-nums text-slate-900"} ${j === 0 ? "" : "font-medium"}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TopFederalContractorsContent() {
  const faqs = getBlogPost("top-federal-contractors")?.faqs ?? [];
  return (
    <>
      <p className="text-lg leading-relaxed text-slate-700">
        The United States federal government obligated{" "}
        <strong className="text-slate-900">$554,248,039,929</strong> to its
        1,000 largest contractors in FY2025 — and more than three-fifths of it
        went through a single department. This guide ranks those 1,000
        companies by real contract data from{" "}
        <a
          href="https://www.usaspending.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          USAspending.gov
        </a>
        , with three-year totals, agency, state and industry splits, and the
        risers and fallers behind the ranking. Every figure is a prime
        contract obligation summed across each company&apos;s parent and
        child recipient records. FY2025 — October 1, 2024 to September 30,
        2025 — is the latest complete fiscal year in this dataset.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-slate-900">Key facts</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            <strong>Top 1,000 total, FY2025:</strong> $554,248,039,929 in
            prime contract obligations.
          </li>
          <li>
            <strong>#1:</strong> Lockheed Martin Corp — $64,725,692,748,
            about 98.8% of it from the Department of Defense.
          </li>
          <li>
            <strong>#1,000 cutoff:</strong> Analex Corporation — $48,186,676.
            Below that line, a company did not make this ranking.
          </li>
          <li>
            <strong>Department of Defense share:</strong> $340,858,883,451,
            or 61.5% of the top-1,000 total.
          </li>
          <li>
            <strong>Same 1,000 companies in FY2024:</strong> $402,437,018,094
            — the FY2025 total is 37.7% higher, a jump driven by a few very
            large movers (see Risers and fallers) as well as real growth.
          </li>
        </ul>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The top 25 federal contractors, FY2025
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Ranked by each company&apos;s total federal contract obligations in
        FY2025. Click any company for its full profile: yearly trend,
        agency/state/industry splits and individual awards. The FY2023 and
        FY2024 columns are the same parent-family totals for those years —
        read the notes under the table before comparing across years.
      </p>
      <MoneyTable
        head={["Rank", "Contractor", "FY2023", "FY2024", "FY2025", "Top agency (FY2025)"]}
        rows={TOP25.map((c) => [
          `#${c.rank}`,
          <Link
            key={c.slug}
            href={`/contractors/${c.slug}`}
            className="font-medium text-blue-700 hover:underline"
          >
            {displayName(c.name)}
          </Link>,
          formatUSD(c.fy23),
          formatUSD(c.fy24),
          formatUSD(c.fy25),
          c.topAgency,
        ])}
      />
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        Notes: a FY2023 or FY2024 figure of $0 means no obligations were
        recorded under that company&apos;s current parent record in that
        year — parent records change when companies restructure, so $0 is
        not proof the company won nothing. A negative figure, such as
        McKesson&apos;s FY2023 total of -$507,314,290, is a real net
        deobligation: contract reductions exceeded new obligations that
        year. Top agency is the company&apos;s largest awarding agency by
        FY2025 obligations.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The full ranking — all 1,000 companies, with headquarters state and
        top agency for each — is on the{" "}
        <Link href="/contractors" className="font-medium text-blue-700 hover:underline">
          Top 1,000 Contractors
        </Link>{" "}
        page.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        At the top: Lockheed Martin
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Lockheed Martin Corp is #1 by a margin of nearly $40 billion over
        #2 UnitedHealth Group. Its FY2025 total of $64,725,692,748 is more
        than double its FY2024 total of $31,639,926,821 — a $33.09 billion
        jump in a single year, the largest dollar gain of any contractor in
        this ranking.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The shape of Lockheed&apos;s business is almost entirely defense:
        $63,957,621,036 (98.8%) came from the Department of Defense, with
        NASA a distant second at $682,909,341. By place of performance,
        Texas accounts for $40,906,882,265 (63.2%) — Fort Worth&apos;s
        F-35 production — followed by Florida and Connecticut. By industry,
        Aircraft Manufacturing (NAICS 336411) is $39,376,744,424 (60.8%),
        and by product code, Aircraft, Fixed Wing (PSC 1510) is
        $31,744,222,583 (49.0%). Its full profile, with all splits and
        awards, is on the{" "}
        <Link
          href="/contractors/lockheed-martin-corp"
          className="font-medium text-blue-700 hover:underline"
        >
          Lockheed Martin Corp
        </Link>{" "}
        page.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Risers and fallers, FY2024 → FY2025
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Year-over-year movement is most reliable between FY2024 and FY2025,
        because both years have recorded totals for nearly every top
        company. (FY2023 comparisons are weaker: several companies show
        $0 for FY2023 only because their current parent record did not
        exist in that form yet — see Methodology.) The same 1,000
        companies recorded $402,437,018,094 in FY2024, so the FY2025
        total of $554,248,039,929 is 37.7% higher — but that jump is
        concentrated in a few very large movers, not spread evenly.
      </p>
      <h3 className="mt-8 text-lg font-semibold text-slate-900">
        Biggest dollar gainers, FY2024 → FY2025
      </h3>
      <MoneyTable
        head={["Contractor", "FY2024", "FY2025", "Change", "Rank"]}
        rows={[
          [
            <Link key="l" href="/contractors/lockheed-martin-corp" className="font-medium text-blue-700 hover:underline">Lockheed Martin Corp</Link>,
            "$31,639,926,821", "$64,725,692,748", "+$33,085,765,927 (+104.6%)", "#1 → #1",
          ],
          [
            <Link key="e" href="/contractors/electric-boat-corporation" className="font-medium text-blue-700 hover:underline">Electric Boat Corporation</Link>,
            "$3,600,371,198", "$21,366,142,819", "+$17,765,771,621 (+493.4%)", "#18 → #4",
          ],
          [
            <Link key="u" href="/contractors/unitedhealth-group-incorporated" className="font-medium text-blue-700 hover:underline">UnitedHealth Group Incorporated</Link>,
            "$18,783,397,371", "$25,405,430,794", "+$6,622,033,423 (+35.3%)", "#3 → #2",
          ],
          [
            <Link key="m" href="/contractors/mckesson-corporation" className="font-medium text-blue-700 hover:underline">McKesson Corporation</Link>,
            "$6,526,920,887", "$11,938,599,294", "+$5,411,678,407 (+82.9%)", "#10 → #6",
          ],
          [
            <Link key="p" href="/contractors/pip-manufacturing-inc" className="font-medium text-blue-700 hover:underline">PIP Manufacturing, Inc.</Link>,
            "$1,562,508,642", "$6,868,423,877", "+$5,305,915,235 (+339.6%)", "#41 → #14",
          ],
        ]}
      />
      <h3 className="mt-8 text-lg font-semibold text-slate-900">
        Biggest dollar losers, FY2024 → FY2025
      </h3>
      <MoneyTable
        head={["Contractor", "FY2024", "FY2025", "Change", "Rank"]}
        rows={[
          [
            <Link key="a" href="/contractors/amentum-services-inc" className="font-medium text-blue-700 hover:underline">Amentum Services, Inc.</Link>,
            "$3,439,319,953", "$143,838,633", "-$3,295,481,320 (-95.8%)", "#20 → #437",
          ],
          [
            <Link key="s" href="/contractors/science-applications-international-corporation-5061" className="font-medium text-blue-700 hover:underline">Science Applications International Corporation</Link>,
            "$3,178,964,288", "$172,851,710", "-$3,006,112,577 (-94.6%)", "#25 → #380",
          ],
          [
            <Link key="n" href="/contractors/northrop-grumman-corporation" className="font-medium text-blue-700 hover:underline">Northrop Grumman Corporation</Link>,
            "$11,864,437,850", "$9,763,138,991", "-$2,101,298,859 (-17.7%)", "#4 → #8",
          ],
          [
            <Link key="an" href="/contractors/analytic-services-inc" className="font-medium text-blue-700 hover:underline">Analytic Services Inc.</Link>,
            "$1,479,011,684", "$87,552,107", "-$1,391,459,577 (-94.1%)", "#45 → #667",
          ],
          [
            <Link key="g" href="/contractors/general-dynamics-corp" className="font-medium text-blue-700 hover:underline">General Dynamics Corp</Link>,
            "$10,078,192,163", "$8,958,643,563", "-$1,119,548,600 (-11.1%)", "#5 → #10",
          ],
        ]}
      />
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        Note: the Science Applications row above is a separate parent
        record that shares the SAIC legal name — it is not the #22 record
        on the{" "}
        <Link href="/contractors/science-applications-international-corporation" className="text-blue-700 hover:underline">
          Science Applications International Corporation
        </Link>{" "}
        page. Links in this guide always go to the exact record.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        In percentage terms (among companies with at least $100 million in
        FY2024, so tiny bases do not dominate), the fastest growers were{" "}
        <Link href="/contractors/bccg-a-joint-venture" className="font-medium text-blue-700 hover:underline">
          BCCG A Joint Venture
        </Link>{" "}
        (+989.4%, $287,037,592 → $3,127,100,299, #189 → #28),{" "}
        <Link href="/contractors/fisher-sand-gravel-co" className="font-medium text-blue-700 hover:underline">
          Fisher Sand &amp; Gravel Co
        </Link>{" "}
        (+669.4%, $120,680,000 → $928,459,404, #409 → #92),{" "}
        <Link href="/contractors/ameresco-inc" className="font-medium text-blue-700 hover:underline">
          Ameresco Inc
        </Link>{" "}
        (+455.3%, $104,144,098 → $578,315,199, #470 → #132) and{" "}
        <Link href="/contractors/dynetics-inc" className="font-medium text-blue-700 hover:underline">
          Dynetics, Inc.
        </Link>{" "}
        (+380.3%, $132,397,565 → $635,938,350, #374 → #120). The steepest
        percentage falls beyond the dollar table were{" "}
        <Link href="/contractors/california-institute-of-technology-4210" className="font-medium text-blue-700 hover:underline">
          California Institute of Technology
        </Link>{" "}
        (-92.1%, $918,176,459 → $72,235,503, #77 → #769) and{" "}
        <Link href="/contractors/environmental-chemical-corporation" className="font-medium text-blue-700 hover:underline">
          Environmental Chemical Corporation
        </Link>{" "}
        (-90.5%, $631,797,978 → $60,057,966, #103 → #886).
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Seventeen companies entered the top 100 in FY2025 and seventeen
        left it. The most prominent entrants were{" "}
        <Link href="/contractors/amentum-holdings-inc" className="font-medium text-blue-700 hover:underline">
          Amentum Holdings Inc.
        </Link>{" "}
        at #18 ($5,521,509,209),{" "}
        <Link href="/contractors/bccg-a-joint-venture" className="font-medium text-blue-700 hover:underline">
          BCCG A Joint Venture
        </Link>{" "}
        at #28, a second BAE Systems PLC parent record at #29
        ($3,044,728,103, distinct from the #21 record),{" "}
        <Link href="/contractors/palantir-technologies-inc" className="font-medium text-blue-700 hover:underline">
          Palantir Technologies Inc.
        </Link>{" "}
        at #82 ($1,020,566,209) and{" "}
        <Link href="/contractors/kiewit-turner-a-joint-venture" className="font-medium text-blue-700 hover:underline">
          Kiewit-Turner A Joint Venture
        </Link>{" "}
        at #96. The biggest names to leave the top 100 were Amentum
        Services (#20 → #437), the second SAIC record (#25 → #380),{" "}
        <Link href="/contractors/united-launch-alliance-l-l-c" className="font-medium text-blue-700 hover:underline">
          United Launch Alliance, L.L.C
        </Link>{" "}
        (#40 → #121) and{" "}
        <Link href="/contractors/the-mitre-corporation-2690" className="font-medium text-blue-700 hover:underline">
          The MITRE Corporation
        </Link>{" "}
        (#44 → #134). Note the pattern: Amentum Services collapsed in the
        same year Amentum Holdings entered — large swings here often
        reflect parent-record and corporate-structure changes in the
        source data, not a company simply winning or losing work.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Where the money comes from: agencies
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Agency totals below are the sums of FY2025 agency splits across
        the top 1,000. One department dominates everything else combined:
        the Department of Defense alone accounts for 61.5% of the
        ranking&apos;s total. The next two — Veterans Affairs and Energy —
        together add barely another fifth.
      </p>
      <MoneyTable
        head={["Agency", "FY2025 total", "Share of top-1,000 total"]}
        rows={[
          ["Department of Defense", "$340,858,883,451", "61.5%"],
          ["Department of Veterans Affairs", "$65,636,548,574", "11.8%"],
          ["Department of Energy", "$46,354,495,604", "8.4%"],
          ["Department of Homeland Security", "$19,754,181,046", "3.6%"],
          ["General Services Administration", "$17,851,899,085", "3.2%"],
          ["Department of Health and Human Services", "$13,041,578,486", "2.4%"],
          ["National Aeronautics and Space Administration", "$12,244,411,554", "2.2%"],
          ["Department of the Treasury", "$6,205,172,337", "1.1%"],
          ["Department of State", "$5,267,632,964", "1.0%"],
          ["Department of Justice", "$5,192,253,845", "0.9%"],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        The civilian side of the ranking is really a health story: VA
        ($65.64 billion) and HHS ($13.04 billion) together are the
        community-care, benefits-administration and pharmaceutical
        business that puts UnitedHealth, TriWest, McKesson, Cencora and
        Humana in the top 15. Energy ($46.35 billion) is the national
        laboratory and site-management complex — Triad National Security
        and Lawrence Livermore National Security are both DOE-first
        companies in the top 25.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Where the work happens: states
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        State figures are by place of performance — where the work was
        performed — not by contractor headquarters. Virginia leads by a
        wide margin, and the top two states together account for more
        than $173 billion. State rows are reported for 976 of the 1,000
        companies; the remaining 24 have no reported state split.
      </p>
      <MoneyTable
        head={["Place of performance", "FY2025 total"]}
        rows={[
          ["Virginia", "$97,355,627,578"],
          ["Texas", "$76,136,314,617"],
          ["California", "$42,060,907,816"],
          ["Connecticut", "$26,701,076,398"],
          ["Maryland", "$26,407,130,446"],
          ["Florida", "$23,073,935,777"],
          ["Pennsylvania", "$22,109,294,414"],
          ["District of Columbia", "$19,245,000,320"],
          ["Alabama", "$14,055,180,715"],
          ["Colorado", "$12,378,243,629"],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        The District of Columbia appears because place-of-performance
        rows include it; it is a district, not a state. Connecticut at
        #4 is the submarine story — Electric Boat&apos;s Groton work —
        while Maryland at #5 reflects the concentration of defense and
        intelligence work around the capital region.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What the government buys: NAICS and PSC
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Two code systems describe what the money buys. NAICS classifies
        the contractor&apos;s industry; PSC classifies the product or
        service itself. The top five of each, by FY2025 totals across the
        top 1,000:
      </p>
      <MoneyTable
        head={["NAICS industry", "FY2025 total"]}
        rows={[
          ["336411 — Aircraft Manufacturing", "$60,086,623,890"],
          ["524114 — Direct Health and Medical Insurance Carriers", "$45,357,232,073"],
          ["541330 — Engineering Services", "$35,220,483,373"],
          ["541715 — Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)", "$34,899,490,513"],
          ["336611 — Ship Building and Repairing", "$33,614,895,642"],
        ]}
      />
      <MoneyTable
        head={["PSC product / service code", "FY2025 total"]}
        rows={[
          ["1510 — AIRCRAFT, FIXED WING", "$41,892,905,026"],
          ["1905 — COMBAT SHIPS AND LANDING VESSELS", "$37,421,730,139"],
          ["Q201 — MEDICAL- MANAGED HEALTHCARE", "$34,797,686,307"],
          ["R425 — SUPPORT- PROFESSIONAL: ENGINEERING/TECHNICAL", "$22,931,148,526"],
          ["6505 — DRUGS AND BIOLOGICALS", "$20,056,936,738"],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        Aircraft, ships and managed healthcare dominate both lists — the
        same three stories (air power, sea power, veterans&apos;
        healthcare) that dominate the company ranking. Every company
        profile on this site shows its own top-10 NAICS and PSC splits
        for FY2025.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        How to use this ranking
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Start with the{" "}
        <Link href="/contractors" className="font-medium text-blue-700 hover:underline">
          full Top 1,000 ranking
        </Link>{" "}
        and click any company for its three-year trend, its agency,
        state, NAICS and PSC splits, and up to 20 of its individual
        awards. If you are researching a market — say, who wins VA
        healthcare work, or which companies build ships — the company
        profiles are the fastest way to see the competitive set with
        real numbers attached. The{" "}
        <Link href="/about" className="font-medium text-blue-700 hover:underline">
          About page
        </Link>{" "}
        explains the full methodology.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Methodology and limits
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
        <li>
          <strong>Totals are prime contract obligations.</strong> Each
          company&apos;s yearly total is the sum of all federal contract
          obligations across every USAspending recipient record
          belonging to that company (parent and child records combined),
          not a single subsidiary&apos;s figure.
        </li>
        <li>
          <strong>Ranked by FY2025.</strong> Companies are ordered by
          their FY2025 total. The federal fiscal year runs October 1 –
          September 30, so FY2025 covers October 1, 2024 – September 30,
          2025. FY2025 is the latest complete fiscal year in this
          dataset; FY2026 reporting is still incomplete.
        </li>
        <li>
          <strong>Breakdowns are FY2025 top 10s.</strong> The agency,
          state, NAICS and PSC breakdowns on each profile show that
          company&apos;s ten largest categories in FY2025. The aggregate
          tables in this guide sum those reported splits across the top
          1,000.
        </li>
        <li>
          <strong>Awards are a selection.</strong> Each profile lists up
          to 20 awards with activity in FY2025, newest start date first.
          These are individual awards, not company totals. 909 of the
          1,000 companies have at least one award listed; 91 have none.
        </li>
        <li>
          <strong>Negative totals are real.</strong> A negative year
          total means net deobligations: contract reductions exceeded
          new obligations that year. These figures are shown as recorded
          rather than hidden.
        </li>
        <li>
          <strong>$0 years are a record artifact, not a business
          fact.</strong> A $0 total for FY2023 or FY2024 means no
          obligations were recorded under that company&apos;s current
          parent record in that year. Parent records change when
          companies restructure, merge or split. That is why the
          recorded FY2023 total for these same 1,000 companies
          ($265,264,646,661) understates FY2023 and is not like-for-like
          with FY2025 — and why this guide&apos;s trend story uses
          FY2024 → FY2025, where both years are recorded for nearly
          every top company.
        </li>
        <li>
          <strong>Some legal names appear twice.</strong> The source
          data holds two separate parent records named Science
          Applications International Corporation, and two named BAE
          Systems PLC. They are distinct records with different totals
          and different profile pages; every link in this guide goes to
          the exact record it describes.
        </li>
        <li>
          <strong>Why totals differ across sites.</strong> Washington
          Technology&apos;s Top 100 covers IT, systems integration and
          telecom work only; GovTribe&apos;s defense ranking uses a
          trailing-12-month window; other lists use a single recipient
          record instead of the whole parent family, or an older data
          vintage. Compare totals only when scope, fiscal year and
          family definition match.
        </li>
        <li>
          <strong>State splits are place of performance,</strong> not
          headquarters location. Headquarters, where listed, appears on
          each company&apos;s profile.
        </li>
        <li>
          This site is not affiliated with or endorsed by the U.S.
          government. Company names, headquarters locations and business
          classifications appear as listed in USAspending records and
          may be missing for some companies.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Frequently asked questions
      </h2>
      {faqs.map((f) => (
        <div key={f.question}>
          <h3 className="mt-6 text-lg font-semibold text-slate-900">
            {f.question}
          </h3>
          <p className="mt-2 leading-relaxed text-slate-700">{f.answer}</p>
        </div>
      ))}

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Sources</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
        <li>
          <a
            href="https://www.usaspending.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            USAspending.gov
          </a>{" "}
          — the official source for all contract figures in this guide.
        </li>
        <li>
          <a
            href="https://www.usaspending.gov/federal-spending-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            USAspending Federal Spending Guide
          </a>{" "}
          — what NAICS and PSC codes mean and how federal spending data
          is organized.
        </li>
        <li>
          <Link href="/about" className="font-medium text-blue-700 hover:underline">
            About FedTalentUSA
          </Link>{" "}
          — the full methodology behind this ranking.
        </li>
        <li>
          <Link href="/contractors" className="font-medium text-blue-700 hover:underline">
            Top 1,000 Contractors
          </Link>{" "}
          — the full ranking this guide summarizes.
        </li>
      </ul>

      <p className="mt-10 text-sm text-slate-500">
        Published October 27, 2026. Figures reflect FedTalentUSA&apos;s
        FY2025 ranking of the 1,000 largest federal contractors by prime
        contract obligations from USAspending.gov. Company profiles show
        FY2023 – FY2025 trends, splits and awards for every company in
        the ranking.
      </p>
    </>
  );
}
