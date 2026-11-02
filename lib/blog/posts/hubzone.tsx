// lib/blog/posts/hubzone.tsx — HUBZone guide.
// Focus keyword: "hubzone" (Semrush US 2.4K, KD 34%, CPC $6.97, Informational).
// Related query "hubzone map" (3.6K) is covered by its own full section.
// Unlike the ranking guides, this guide's figures are PROGRAM RULES from
// the SBA and 13 CFR Part 126 (current as of Nov 2026), not USAspending
// rows — HUBZone certification is a program, not a ranking, and the
// top-1,000 prime-contractor database does not contain HUBZone small firms.
// Accuracy notes (checked against the regulation, Nov 2026):
// recertification is every THREE years (older guides saying "annually" are
// out of date); sole-source ceilings are $7M manufacturing / $4.5M other
// (13 CFR 126.612); the 35% test covers ALL employees, not principal-office
// staff only; the 10% preference applies in full-and-open competition only.
import Link from "next/link";

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

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is a HUBZone?",
    a: "A HUBZone — Historically Underutilized Business Zone — is a geographic area the SBA designates as economically distressed, based on poverty rates, unemployment, income, or other criteria. The HUBZone program gives small businesses located in these zones preferential access to federal contracts: set-aside contracts reserved for certified firms, and a 10% price evaluation preference in full and open competitions.",
  },
  {
    q: "What is the HUBZone 35% rule?",
    a: "At least 35% of a certified firm's employees must reside in a HUBZone. The test covers all employees, not only the staff at the principal office, and those employees do not have to live in the same HUBZone as the office. During performance of a HUBZone contract, the firm must attempt to maintain that 35% share.",
  },
  {
    q: "Can a home office qualify as a HUBZone principal office?",
    a: "It can, if it genuinely is the principal office — the place where the greatest number of the firm's employees perform their work — and that address sits inside a designated HUBZone. What does not work is a mailing address, a registered-agent address, or a virtual office where nobody actually works. SBA can visit and examine a firm, so the office has to be real and evidenced.",
  },
  {
    q: "How long does HUBZone certification take?",
    a: "SBA states it will decide within 90 days after receiving a complete application. The key word is complete: if SBA has to come back for missing documents or information, the clock effectively restarts on the missing piece. Guides commonly quote 60 to 90 days, which is consistent with the SBA standard but is an estimate, not a promise.",
  },
  {
    q: "How often do you have to recertify for HUBZone?",
    a: "Every three years. You can apply for recertification from 90 days before your certification anniversary up to 30 days after it. Older guides that say recertification is annual are out of date — the three-year cycle comes from the December 2024 amendments to 13 CFR Part 126. There is no limit on how long a business can stay in the program as long as it keeps qualifying.",
  },
  {
    q: "Does HUBZone certification guarantee federal contracts?",
    a: "No. The regulation says so expressly: certification makes you eligible to compete for set-asides and gives you the price preference, but it guarantees nothing. Agencies still have to find at least two certified firms likely to bid at a fair price before setting a contract aside, and you still have to win the competition.",
  },
  {
    q: "Can a business hold HUBZone certification and 8(a) certification at the same time?",
    a: "Yes. SBA states that HUBZone-certified firms can still compete under other socio-economic programs they qualify for. Note one limit: a contracting officer cannot restrict a HUBZone competition to firms that are both HUBZone and something else, such as HUBZone plus 8(a).",
  },
  {
    q: "What happens if my area loses its HUBZone designation?",
    a: "Designations change on a five-year cycle for census tracts and counties, and the map shows transition and expiry dates for redesignated and expiring areas. Check the exact date shown for your address on the SBA map before relying on it, and re-check before applying or bidding — a designation that was valid when you certified may not be valid at your next recertification.",
  },
];

export default function HubzoneContent() {
  return (
    <div>
      <p className="leading-relaxed text-slate-700">
        HUBZone stands for Historically Underutilized Business Zone. It is a
        federal program, run by the U.S. Small Business Administration, that
        gives small businesses in economically distressed areas a real edge
        in federal contracting: contracts set aside just for certified firms,
        and a 10% price evaluation preference when competing in the open
        market. The federal government aims to award 3% of all prime
        contract dollars to HUBZone-certified small businesses every year.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Most guides to this topic repeat the same four eligibility tests and
        stop there. This one goes further, because the parts that decide
        whether you actually get certified — and stay certified — are the
        parts other guides skip: how to read the SBA map result for your
        exact address, what documents SBA actually wants to see, what
        happens when your employee-residency share drops, and which
        well-ranked guides are still repeating rules that changed in
        December 2024. Every rule below is checked against SBA pages and
        13 CFR Part 126, the regulation that governs the program.
      </p>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h2 className="text-lg font-bold text-slate-900">Key facts</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>
            The federal goal is <strong>3%</strong> of prime contract dollars
            to HUBZone small businesses — a target, not a guarantee to any
            firm.
          </li>
          <li>
            Certification requires <strong>four tests at once</strong>: small
            size, 51% U.S.-citizen ownership and control, a principal office
            inside a HUBZone, and <strong>35%</strong> of all employees
            living in a HUBZone.
          </li>
          <li>
            Certified firms get a <strong>10% price evaluation preference</strong>{" "}
            in full and open competitions, plus eligibility for set-aside
            and sole-source contracts.
          </li>
          <li>
            Sole-source HUBZone awards are capped at{" "}
            <strong>$7 million</strong> for manufacturing and{" "}
            <strong>$4.5 million</strong> for everything else.
          </li>
          <li>
            Recertification is every <strong>three years</strong> — not
            annually, as older guides still claim.
          </li>
          <li>
            Applying through SBA is <strong>free</strong>, and SBA decides
            within <strong>90 days</strong> of receiving a complete
            application.
          </li>
        </ul>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What is a HUBZone?
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        A HUBZone is not a neighborhood nickname. It is a specific geographic
        designation the SBA maintains on an official map. The program&apos;s
        purpose, stated in the regulation itself, is to bring federal
        contracting work — and with it jobs and investment — into
        communities that have historically seen too little of either. A
        business does not become a HUBZone by being small, or by being in a
        poor area in general. Its principal office address must fall inside
        one of the SBA&apos;s designated zone types.
      </p>
      <Table
        head={["Designation type", "What it means", "How it updates"]}
        rows={[
          [
            "Qualified Census Tract",
            "A census tract with high poverty or low household income, designated with HUD data.",
            "Every five years",
          ],
          [
            "Qualified Non-Metropolitan County",
            "A county outside a metropolitan area meeting income or unemployment benchmarks.",
            "Every five years",
          ],
          [
            "Indian Land",
            "Lands within the external boundaries of a federally recognized Indian reservation.",
            "As designated",
          ],
          [
            "Qualified Disaster Area",
            "An area covered by a federal disaster declaration.",
            "Generally added monthly from FEMA data; removed at the next five-year update",
          ],
          [
            "Governor-Designated Covered Area",
            "A rural area a state governor petitions SBA to designate, with unemployment at least 120% of the national or state average.",
            "After SBA approves a petition; removed at the five-year update or one year after approval, whichever is later",
          ]]}
        />
      <p className="mt-4 leading-relaxed text-slate-700">
        The map was last fully updated in 2023. SBA states the next updates
        are due at some point in 2026 for expiring redesignated areas, and in
        July 2028 for census tracts and non-metropolitan counties. That
        schedule matters: a designation you rely on today can expire, and
        the map itself shows the transition or expiry date for your address.
        Always read that date before applying or bidding.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The four eligibility tests
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        All four tests must be met at the same time. Failing any one of them
        disqualifies the firm — there is no partial credit, and SBA verifies
        the answers rather than taking them on trust.
      </p>
      <Table
        head={["Test", "The rule", "The detail most guides get wrong"]}
        rows={[
          [
            "1. Small business",
            "The firm must be small under the SBA size standard for its primary industry (NAICS code), counting affiliates.",
            "Size is judged by industry, not by a single headcount or revenue number that fits every business.",
          ],
          [
            "2. Ownership and control",
            "At least 51% owned and controlled by U.S. citizens — or by a Community Development Corporation, agricultural cooperative, Alaska Native Corporation, Indian tribe, or Native Hawaiian organization.",
            "Ownership alone is not enough; control matters too. The owners must actually control the firm.",
          ],
          [
            "3. Principal office",
            "The principal office — where the greatest number of employees perform their work — must be inside a HUBZone.",
            "A mailing address or registered-agent address does not count. It has to be where the work actually happens.",
          ],
          [
            "4. Employee residency",
            "At least 35% of all employees must reside in a HUBZone.",
            "This covers every employee, not only principal-office staff — and they need not live in the same HUBZone as the office.",
          ]]}
        />
      <p className="mt-4 leading-relaxed text-slate-700">
        The residency test is the one that trips up the most applicants,
        because it is easy to misread. A firm with 20 employees needs at
        least 7 living in a HUBZone — any HUBZone, not necessarily the one
        its office sits in. Part-time and remote employees count in the
        total, which is exactly why firms with a scattered workforce need to
        run the calculation on their full roster, not on the office headcount
        alone.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What certification actually gets you
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Certification opens three doors, and they work differently. Knowing
        which door you are walking through matters, because the rules — and
        the limits — are not the same for each.
      </p>
      <h3 className="mt-6 text-xl font-bold text-slate-900">
        Set-aside contracts
      </h3>
      <p className="mt-2 leading-relaxed text-slate-700">
        An agency can reserve a contract for HUBZone-certified firms only,
        including partial set-asides and set-aside orders under
        multiple-award contracts. Before doing so, the contracting officer
        must have a reasonable expectation of offers from at least two
        certified HUBZone firms, and must be able to award at a fair market
        price. If only one firm is likely to bid, a set-aside is not the
        right vehicle — which is one reason certification alone never
        guarantees work.
      </p>
      <h3 className="mt-6 text-xl font-bold text-slate-900">
        Sole-source awards
      </h3>
      <p className="mt-2 leading-relaxed text-slate-700">
        An agency can award directly to one certified firm without
        competition, but only within strict ceilings: the anticipated price,
        including options, must not exceed $7 million for a manufacturing
        NAICS code or $4.5 million for all other contracts. Two further
        conditions apply: no two or more HUBZone firms are likely to offer,
        and the award must be at a fair and reasonable price. Treat any
        guide quoting different ceilings with suspicion — one well-ranked
        guide still prints $8 million for manufacturing, which is not the
        current regulation figure.
      </p>
      <h3 className="mt-6 text-xl font-bold text-slate-900">
        The 10% price evaluation preference
      </h3>
      <p className="mt-2 leading-relaxed text-slate-700">
        In a full and open competition, the contracting officer adds 10% to
        the price of each non-HUBZone offer for evaluation purposes. A
        HUBZone offer that is up to 10% higher can therefore still be
        evaluated as the lower price — and win. Two limits apply: the
        preference does not kick in if the lowest responsive, responsible
        offer already comes from a HUBZone firm, and it does not turn an
        open competition into a set-aside. It is a thumb on the scale, not
        a reserved lane.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        One more benefit is easy to miss: a HUBZone-certified firm can
        still compete under any other socio-economic program it qualifies
        for, such as 8(a) or WOSB. The programs stack — you are not forced
        to pick one identity. The one thing an agency cannot do is restrict
        a HUBZone competition to firms that are both HUBZone and something
        else.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        How to check the HUBZone map, step by step
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        This is the section no top-ranking guide does properly. Most guides
        tell you to “check the map” and link to it. The SBA map itself is a
        tool, not an explanation — and its own help page was returning an
        error when we checked. Here is the actual walkthrough.
      </p>
      <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-slate-700">
        <li>
          Go to the SBA HUBZone Map and type the exact street address, city
          and state into the “Enter address” box at the top left. Do not
          check by ZIP code alone: a zone boundary can split a single
          street, so a ZIP-level check can give you the wrong answer for
          your building.
        </li>
        <li>
          Read the result against the legend. Qualified areas show as
          Census Tract, County, or Indian Land. Expiring areas show as
          Redesignated, Disaster Area, or Governor-Designated Covered
          Area — each with its own transition or expiry date.
        </li>
        <li>
          Click the location to see its qualification type and any
          validity or redesignation information. Note the date. An area
          that qualifies today but expires before your application or
          contract performance is a risk, not a qualification.
        </li>
        <li>
          Repeat the check separately for the principal office address and
          for employee home addresses. These are two different tests, and
          an office that qualifies does not make your employees qualify —
          or the other way round.
        </li>
        <li>
          If the result is “not qualified,” do not guess or round up. Check
          the exact address again for typos, check whether a nearby
          address across the boundary qualifies, and check the
          governor-designated list — but do not apply on the basis of an
          address that is not actually inside a zone.
        </li>
      </ol>
      <p className="mt-4 leading-relaxed text-slate-700">
        Two worked outcomes show why the detail matters. A firm whose
        office sits in a qualified census tract passes the office test even
        if its employees live elsewhere — as long as 35% of them live in
        some HUBZone. A firm whose office sits just outside a zone fails
        the office test even if every employee lives inside one. The map
        result for the office address, read precisely, decides the first
        test on its own.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        How to apply for HUBZone certification, step by step
      </h2>
      <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-slate-700">
        <li>
          Confirm you are a small business under the SBA size standard for
          your primary NAICS code, and run the SBA HUBZone Calculator to
          pre-test your eligibility before you start the formal
          application.
        </li>
        <li>
          Check the map for your principal office address and for your
          employees&apos; home addresses, and save the results — you will
          need them as evidence, not just as a private sanity check.
        </li>
        <li>
          Gather the documents below, then create an SBA account and apply
          through MySBA Certifications. Applying through SBA is free; be
          wary of anyone charging you a fee just to file the application.
        </li>
        <li>
          Respond promptly to any SBA request for additional information.
          The 90-day decision standard runs from a complete application —
          an incomplete file is the most common reason the process drags
          beyond what guides quote.
        </li>
        <li>
          Once certified, keep your evidence current. SBA may visit
          unannounced and conduct program examinations, and you must tell
          SBA if the business is involved in a merger or acquisition.
        </li>
      </ol>
      <Table
        head={["Document", "What it proves", "Evidence tip"]}
        rows={[
          [
            "Lease, deed, or occupancy proof",
            "The principal office really is where the work happens",
            "A home office needs the same proof as a commercial one — a mailing address or virtual office will not pass an examination",
          ],
          [
            "Employee roster with home addresses",
            "The 35% residency calculation, on all employees",
            "Run the percentage on the full roster, including part-time and remote staff — not on office headcount alone",
          ],
          [
            "Payroll records",
            "Who actually works for the firm, and where the work is performed",
            "Keep payroll consistent with the roster; mismatches are what examinations look for",
          ],
          [
            "Ownership and formation documents",
            "51% ownership and control by qualifying owners",
            "Formation papers, operating agreements, and ownership ledgers should all tell the same story",
          ],
          [
            "Tax returns",
            "Size, ownership, and operating history",
            "Use the most recent filed returns; SBA checks the file as a whole, not one document at a time",
          ]]}
        />
      <p className="mt-4 leading-relaxed text-slate-700">
        SBA&apos;s own certification page does not publish a single
        exhaustive checklist, which is why guides differ on the details.
        The list above is the practical set the strongest guides converge
        on, matched to the four tests SBA actually examines. If a document
        does not map to one of the four tests, it is probably not what is
        holding your application up.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Common mistakes, delays, and denials
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Only one top-ranking guide has a dedicated delays-and-denials
        section, and none gives SBA-sourced rejection categories — so
        treat any article claiming precise denial statistics with
        skepticism. What the rules and the strongest guides do establish is
        a clear pattern of avoidable mistakes:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
        <li>
          Checking by ZIP code instead of exact address, and missing a
          boundary that splits the street.
        </li>
        <li>
          Counting the 35% on principal-office staff only, instead of all
          employees.
        </li>
        <li>
          Offering a mailing or registered-agent address as the principal
          office, where nobody actually works.
        </li>
        <li>
          Applying before checking the map at all, then discovering the
          office is outside a zone.
        </li>
        <li>
          Filing an incomplete application, which pauses the 90-day clock
          while SBA waits for the missing pieces.
        </li>
        <li>
          Assuming certification guarantees contracts — and then bidding
          only on set-asides in markets where two certified competitors
          rarely appear.
        </li>
      </ul>
      <p className="mt-4 leading-relaxed text-slate-700">
        If SBA denies an application, the practical response is to fix the
        specific failing test and reapply with evidence that addresses it —
        a new lease, a corrected roster, a real principal office — rather
        than resubmitting the same file. And if SBA opens a program
        examination, respond completely and quickly: examinations can
        include a site visit, SBA decides within 90 calendar days after
        receiving all requested information, and examination documentation
        must be retained for six years.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Staying certified: recertification and the 35% problem
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Certification is not permanent, and it is not a one-time exam you
        pass and forget. Two obligations run for as long as you hold it.
        First, recertify every three years, with the application window
        opening 90 days before your certification anniversary and closing
        30 days after it. Second, during performance of a HUBZone contract,
        attempt to maintain at least 35% HUBZone residency among your
        employees.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        That word — attempt — is doing real work, and no top guide explains
        it operationally. It does not mean a single bad month costs you
        certification. But the regulation draws a hard line further down:
        a firm that falls below 20% HUBZone residency is in compliance-risk
        territory, connected to the rules on decertification. The practical
        playbook, if your share starts sliding, is straightforward:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
        <li>
          Track the percentage monthly, on the full roster, so a slide is
          visible while it is still fixable — not at recertification.
        </li>
        <li>
          Prioritize HUBZone-resident hiring for the next open roles, and
          keep the address evidence for every hire.
        </li>
        <li>
          Keep payroll, roster, and lease evidence consistent and current,
          so a program examination finds a clean file instead of a
          reconstruction exercise.
        </li>
        <li>
          If the share drops sharply — an office move, a hiring wave
          outside zones, a round of departures — treat it as a compliance
          event, not a rounding error, and get the number back above 35%
          before your next recertification or contract performance review.
        </li>
      </ul>
      <p className="mt-4 leading-relaxed text-slate-700">
        There is no time limit on participation itself: a business can stay
        in the program indefinitely, as long as it keeps qualifying. That
        is a genuine advantage over time-limited programs, and it is why
        the compliance habit — monthly tracking, clean evidence — matters
        more than the initial application.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What changed in December 2024 — and which guides are out of date
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Part 126 was substantially amended in December 2024, and the
        change that matters most for readers is the recertification cycle:
        three years, not one. Yet two well-ranked guides — a law-firm
        overview from June 2024 and a current commercial guide — still tell
        readers to recertify annually. A June 2024 article cannot reflect a
        December 2024 amendment, but a guide carrying a 2026 date has no
        such excuse. The same caution applies to dollar figures: the
        current sole-source ceilings are $7 million and $4.5 million, and
        any guide printing higher numbers is working from superseded text.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The rule for readers is simple: if a guide does not show its
        sources and its update date, verify its two most error-prone claims
        — recertification interval and sole-source ceilings — against the
        SBA page or the regulation before acting on anything else it says.
        This guide&apos;s figures were checked against both in November
        2026.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        HUBZone vs 8(a) vs SDVOSB vs WOSB
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        HUBZone is one of four SBA socio-economic programs, and firms often
        qualify for more than one. The difference that matters is the basis
        of each program: HUBZone rewards where you are, the others reward
        who owns the firm.
      </p>
      <Table
        head={["Program", "Who qualifies", "What it gets you"]}
        rows={[
          [
            "HUBZone",
            "Small firm with its principal office in a HUBZone and 35% of employees living in one",
            "Set-asides, sole-source up to $7M (manufacturing) / $4.5M (other), and a 10% price preference in full and open competition; 3% federal goal; no time limit, recertify every 3 years",
          ],
          [
            "8(a) Business Development",
            "Small firm at least 51% owned and controlled by socially and economically disadvantaged U.S. citizens, in business at least two years",
            "Set-asides and sole-source up to $8.5M (manufacturing) / $5.5M (other), plus mentoring; maximum 9 years, once in a lifetime",
          ],
          [
            "SDVOSB",
            "Small firm owned by service-disabled veterans",
            "Set-aside contracts; 5% federal goal",
          ],
          [
            "WOSB",
            "Small firm at least 51% owned and controlled by women who are U.S. citizens",
            "Set-aside contracts in industries where women-owned firms are underrepresented; 5% federal goal",
          ]]}
        />
      <p className="mt-4 leading-relaxed text-slate-700">
        The 10% price preference is unique to HUBZone — none of the other
        three programs has one. And the time limit runs the other way: 8(a)
        ends after nine years, while HUBZone lasts as long as you keep
        qualifying. A firm that qualifies for both should generally pursue
        both, since eligibility under one does not cancel eligibility under
        another.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Finding HUBZone contracts once you are certified
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Certification gets you into the competition; it does not bring the
        competitions to you. The practical channels are SAM.gov Contract
        Opportunities, filtered for HUBZone set-asides in your industry,
        and subcontracting under large primes that need HUBZone
        subcontractors for their own subcontracting plans. SBA&apos;s
        annual small business procurement scorecard is also worth reading:
        it grades each agency on its small-business and socio-economic
        goals, which tells you which agencies actually meet their HUBZone
        numbers and which ones fall short. Our step-by-step guide to the
        wider process — registration, finding opportunities, and bidding —
        is{" "}
        <Link href="/blog/how-to-get-government-contracts" className="text-blue-700 hover:underline">
          How to Get Government Contracts
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Frequently asked questions
      </h2>
      <div className="mt-4 space-y-6">
        {FAQS.map((f) => (
          <div key={f.q}>
            <h3 className="text-lg font-bold text-slate-900">{f.q}</h3>
            <p className="mt-2 leading-relaxed text-slate-700">{f.a}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Sources and method
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        This guide&apos;s rules come from official sources only: SBA
        certification pages, the SBA HUBZone Map, and 13 CFR Part 126. The
        December 2024 amendments to Part 126 and the September 2026
        amendment were checked in November 2026, which is why this guide
        corrects the annual-recertification claim still found in
        well-ranked older guides. Unlike our ranking guides, this article
        contains no USAspending contract totals: HUBZone certification is
        a program, and the top-1,000 prime-contractor database does not
        contain HUBZone small firms, so no contract-dollar figure here
        pretends otherwise.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <a
            href="https://www.sba.gov/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            U.S. Small Business Administration: Business Certifications
          </a>{" "}
          — program benefits, goals, recertification, and map-update
          schedule.
        </li>
        <li>
          <a
            href="https://maps.certify.sba.gov/hubzone/map"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA HUBZone Map
          </a>{" "}
          — the authoritative tool for checking any address.
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-13/chapter-I/part-126"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR Part 126 (eCFR)
          </a>{" "}
          — eligibility (126.200), set-asides (126.600–126.619), sole-source
          ceilings (126.612), price preference (126.613), recertification
          and examinations (126.500–126.503, 126.402–126.404).
        </li>
        <li>
          <a
            href="https://certifications.sba.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            MySBA Certifications
          </a>{" "}
          — where HUBZone applications are filed.
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
      </ul>
    </div>
  );
}
