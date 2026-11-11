// lib/blog/posts/sba-veteran-contracting-goal-10-percent.tsx — SBA doubles the
// veteran contracting goal to 10% for FY2027.
// Newsjack, announced 9 November 2026 (National Veterans Small Business Week).
// FedTalentUSA blog #8.
// Accuracy notes (every figure checked against the SBA releases, Nov 2026):
// - FY27 goal: combined VOSB + SDVOSB prime AND subcontracting, 5% -> 10%.
//   Other FY27 goals unchanged: SDB 5%, WOSB 5%, HUBZone 3%. Statutory
//   government-wide small-business target is at least 23% of prime dollars,
//   exceeded eleven consecutive years. Measured via the Scorecard.
// - 23% vs 10% are NOT nested: both goals are percentages of total prime /
//   subcontract dollars (15 USC 644(g)(1)(A)). A veteran-owned prime award
//   can count toward both the 23% and the 10%.
// - FY25 baseline: $32.5B in federal prime contracts to SDVOSBs (beat the 5%
//   goal). FY26: 18,000+ veteran contracting certifications approved;
//   2,700+ VetCert backlog cleared.
// - SDVOSB goal was 3% until the FY2024 NDAA raised it to 5%.
// - VOSB vs SDVOSB: both need >=51% veteran ownership AND control and small
//   status under the size standard (13 CFR Part 128). SDVOSB needs a
//   VA-determined service-connected disability (no minimum rating in the
//   regulation). SDVOSB set-asides are government-wide; VOSB set-asides are
//   at the VA (Vets First). VetCert is the sole portal since 1 Jan 2023.
//   Self-certification grace period ended 22 Dec 2024.
// - 7(a) equity flexibility: Veterans Day 11 Nov 2026 through end of FY2027
//   (30 Sep 2027). Full 10% equity may come from permitted outside sources
//   (seller standby notes, investor capital); previously outside sources were
//   capped at half. The 10% requirement itself is unchanged. Window dates
//   and prior cap verified directly in SBA release 26-117 (read 11 Nov 2026).
// - VetsinTech pilot: training, capital access, procurement pathways in the
//   $10B drone / dual-use aerospace sector, 120,000-member network. NO dollar
//   figure for the pilot is stated in SBA's releases — do not invent one.
// - Scale: 1.8M veteran-owned firms, 4M workers, $1.3T sales, $258B payroll;
//   7% of 632,000 small manufacturers veteran-owned; FY26 2,800+ loans $1.32B.
// - OPEN QUESTION flagged in the article: how the combined 10% goal is
//   measured alongside the statutory 5% SDVOSB requirement — the November 9
//   releases do not explain the method.
// - Set-aside/sole-source: non-VA SDVOSB certification required since 1 Jan
//   2024 (13 CFR 128.200(c)(1); complete application by 31 Dec 2023
//   preserved transitional treatment; VA contracts excluded from it).
//   Goaling/subcontracting credit: SDVOSB-specific (13 CFR 128.200(c)(2));
//   self-cert grace ended 22 Dec 2024; a complete application by that date
//   keeps eligibility until SBA decides. A new application filed today
//   carries no transitional eligibility. VOSB counting under the combined
//   FY2027 goal: no implementation guidance published yet.
// Registry metadata (for lib/blog.ts at push time):
// slug "sba-veteran-contracting-goal-10-percent"; title "SBA Doubles the
// Veteran Contracting Goal to 10%: What VOSB and SDVOSB Firms Should Do Now";
// date 2026-11-11; readingMinutes 15 (body prose ~3,170 words).
// excerpt "SBA has doubled the FY2027 federal contracting goal for
// veteran-owned and service-disabled veteran-owned small businesses from 5%
// to 10% — for prime contracts and subcontracts. Here is what changed, what
// a goal does and does not guarantee, and the four moves a VOSB or SDVOSB
// firm should make now."

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
    q: "What exactly did SBA change?",
    a: "SBA doubled the FY2027 agency-level contracting goal for veteran-owned and service-disabled veteran-owned small businesses from 5% to 10%, for both prime contracts and subcontracts. The goal is now one combined category covering VOSBs and SDVOSBs together; the previous 5% goal covered SDVOSBs only.",
  },
  {
    q: "Does the 10% goal guarantee my firm more contracts?",
    a: "No. A contracting goal is an agency-level target, not a set-aside and not a promise of dollars. Agencies still run competitions, and firms still have to win them. What the goal may do is increase agencies' incentive to buy from certified veteran-owned firms — and count VOSBs toward this new combined FY2027 target.",
  },
  {
    q: "What is the difference between a VOSB and an SDVOSB?",
    a: "Both must be at least 51% owned and controlled by qualifying veterans and small under the applicable size standard. An SDVOSB must be owned and controlled by veterans with a service-connected disability determined by the VA. A certified SDVOSB can compete for set-aside and sole-source opportunities government-wide; a certified VOSB can compete for set-asides at the Department of Veterans Affairs under its Vets First program. Both count toward the new combined 10% goal.",
  },
  {
    q: "Do I need VetCert certification to count toward the goal?",
    a: "Yes, with one narrow exception. SBA's VetCert program is the sole federal certification portal for VOSB and SDVOSB status, and certification is free. The grace period for self-certifying ended on December 22, 2024, and contracting officers must confirm that SAM.gov shows a firm as SBA-certified. The exception, written for SDVOSB credit, covers firms that submitted a complete application by December 22, 2024: they keep eligibility until SBA decides on it. A new application submitted today does not carry that transitional eligibility. Apply through MySBA Certifications at certifications.sba.gov.",
  },
  {
    q: "What is the 7(a) equity change for veterans buying a business?",
    a: "From Veterans Day, November 11, 2026, through the end of FY2027 (September 30, 2027), eligible veterans acquiring an existing business with an SBA 7(a) loan can fund the full required 10% equity contribution from permitted outside sources, such as seller standby notes or investor capital. Previously, outside sources could cover no more than half. The 10% requirement itself has not changed.",
  },
  {
    q: "What is the VetsinTech pilot?",
    a: "A national pilot program from SBA and VetsinTech offering training, capital access support, and procurement pathways for veteran founders in the $10 billion drone and dual-use aerospace sector, drawing on a 120,000-member network. It is aimed at veteran founders entering the defense supply chain through drones.",
  },
  {
    q: "When does the 10% goal take effect?",
    a: "The goals cover federal fiscal year 2027, which began on October 1, 2026. SBA announced them on November 9, 2026. Agencies' performance against the goals is measured through SBA's annual Small Business Procurement Scorecard.",
  },
];

export default function SbaVeteranContractingGoal10PercentContent() {
  return (
    <div>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        The U.S. Small Business Administration has doubled the federal
        contracting goal for veteran-owned small businesses — from 5% to
        10% — for fiscal year 2027. SBA announced the new goal on November
        9, 2026, the first day of National Veterans Small Business Week,
        and it applies to both prime contracts and subcontracts. The goal
        covers veteran-owned small businesses (VOSBs) and service-disabled
        veteran-owned small businesses (SDVOSBs) together, as one combined
        category.
      </p>

      <p className="mt-6 leading-relaxed text-slate-700">
        This is the largest single increase in the veteran contracting
        goal in the program&apos;s recent history: the SDVOSB goal was 3%
        until the FY2024 National Defense Authorization Act raised it to
        5%, and the new FY2027 goal doubles that again — while also
        widening the counted population from SDVOSBs alone to VOSBs and
        SDVOSBs combined.
      </p>

      <p className="mt-6 leading-relaxed text-slate-700">
        But a goal is not a set-aside, and it guarantees no firm a single
        dollar. This guide explains what SBA actually changed, what a
        contracting goal does and does not do, who qualifies as a VOSB or
        SDVOSB, and the four moves a veteran-owned firm should make now —
        plus the two companion announcements SBA made the same week: new
        7(a) loan flexibility for veterans buying a business, and a
        VetsinTech pilot for the drone sector.
      </p>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
        <p className="font-semibold text-slate-900">At a glance</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700">
          <li>
            <strong>When:</strong> Announced November 9, 2026, on the
            first day of National Veterans Small Business Week (November
            9–13, 2026).
          </li>
          <li>
            <strong>What changed:</strong> The combined VOSB + SDVOSB
            prime contracting and subcontracting goal for federal agencies
            rises from 5% to 10% in FY2027.
          </li>
          <li>
            <strong>What did not change:</strong> Other FY2027 goals are
            unchanged: small disadvantaged businesses 5%, women-owned
            small businesses 5%, HUBZone 3%. The government-wide target
            of at least 23% of prime dollars to small businesses also
            stands.
          </li>
          <li>
            <strong>Baseline:</strong> Agencies awarded $32.5 billion in
            federal prime contracts to SDVOSBs in FY2025, exceeding the
            5% goal. SBA approved more than 18,000 veteran contracting
            certifications in FY2026.
          </li>
          <li>
            <strong>What it is not:</strong> A goal steers agency buying;
            it does not set aside contracts and it guarantees no dollars.
            Firms still have to compete — a goal creates no entitlement
            to work.
          </li>
          <li>
            <strong>Companion moves:</strong> From Veterans Day, November
            11, 2026, through FY2027, veteran buyers of an existing
            business can fund the full 10% equity on a 7(a) loan from
            permitted outside sources. SBA is also launching a VetsinTech
            pilot for veteran founders in the drone and dual-use
            aerospace sector.
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Source for every fact in this box: SBA&apos;s November 9, 2026
          announcements, cited in full under Sources at the end of this
          article.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What changed: the FY2027 goals
      </h2>
      <p className="mt-6 leading-relaxed text-slate-700">
        SBA sets annual prime contracting and subcontracting goals for
        every federal agency under the Small Business Act. The goals are
        agency-level targets: each agency is measured against them, and
        SBA publishes the results in its annual Small Business
        Procurement Scorecard. For FY2027, SBA set the following goals:
      </p>
      <Table
        head={["Category", "Prime", "Subcontracting"]}
        rows={[
          [
            "Veteran-owned and service-disabled veteran-owned small businesses (VOSB + SDVOSB)",
            "10.00%",
            "10.00%",
          ],
          ["Small disadvantaged businesses (SDB)", "5.00%", "5.00%"],
          ["Women-owned small businesses (WOSB)", "5.00%", "5.00%"],
          ["HUBZone small businesses", "3.00%", "3.00%"],
        ]}
      />
      <p className="mt-6 leading-relaxed text-slate-700">
        Two things are new at once. First, the number: 10%, up from 5%.
        Second, the population: the goal now counts veteran-owned and
        service-disabled veteran-owned firms together, as one combined
        category. The previous 5% goal covered SDVOSBs only. A VOSB that
        is not service-disabled now counts toward this new combined
        FY2027 target.
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        SBA Administrator Kelly Loeffler framed the change as support for
        the defense industrial base. In the announcement she said:
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        <em>
          &ldquo;The Trump SBA is proud to establish historic federal
          contracting goals – doubling the 5% objective to 10% – for
          veteran-owned and service-disabled veteran-owned small
          businesses, who are among the most competent and critical
          contractors,&rdquo;
        </em>{" "}
        said SBA Administrator Kelly Loeffler.{" "}
        <em>
          &ldquo;Veteran entrepreneurs deliver unmatched products and
          services that bolster our Main Streets and our military
          readiness.&rdquo;
        </em>
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        She added that in the defense industry, small businesses make up
        70% of the industrial base. The kickoff event in Washington,
        D.C., on November 9 featured Vice President JD Vance, Loeffler,
        Department of Veterans Affairs Secretary Doug Collins, and
        Department of Agriculture Secretary Brooke Rollins, in a
        cosponsorship with the D&apos;Aniello Institute for Veterans and
        Military Families at Syracuse University.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What a contracting goal is — and what it is not
      </h2>
      <p className="mt-6 leading-relaxed text-slate-700">
        This is the part most coverage skips, and it matters more than
        the headline number. A contracting goal is an agency-level
        target. It tells federal agencies how much of their contracting
        dollars SBA expects them to direct toward a category of small
        businesses, and it holds them accountable through the public
        Scorecard. It does not do any of the following:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>No set-aside.</strong> It does not set aside any
          contract. Set-asides are a separate mechanism: a contracting
          officer restricts a specific competition to a category of
          firms. The goal does not create a set-aside.
        </li>
        <li>
          <strong>No guaranteed dollars.</strong> It does not guarantee
          any firm work. Agencies still run competitions, and firms
          still have to win them on price, past performance, and
          capability.
        </li>
        <li>
          <strong>No eligibility change.</strong> It does not change who
          is eligible. Only certified firms count toward the goal — with
          a narrow, SDVOSB-specific exception for firms whose complete
          application was submitted by December 22, 2024 and is still
          pending (see below) — and certification rules are unchanged.
        </li>
      </ul>
      <p className="mt-6 leading-relaxed text-slate-700">
        The November 9 releases do not explain how the new combined 10%
        goal will be measured alongside the existing statutory 5% SDVOSB
        requirement. The Small Business Act
        requires a government-wide goal of at least 5% of prime and
        subcontracting dollars for SDVOSBs — that requirement still
        stands. Whether agencies will be scored on the combined 10%, on
        the 5% SDVOSB floor, or on both is not explained in those
        releases. Until SBA
        clarifies the measurement, treat the 10% as the direction of
        travel, not as a precise promise about how any single agency
        will be scored.
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        The honest reading, then, is this: the goal may increase
        agencies&apos; incentive to buy from veteran-owned firms, and it
        widens the counted population to include VOSBs. Agencies that
        were already missing the 5% SDVOSB goal now face a 10% combined
        target, and they may look harder for certified veteran-owned
        suppliers. But the work still goes to firms that are certified,
        visible in the systems agencies search, and competitive on the
        contract itself. The rest of this guide is about becoming one of
        those firms.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        How we got here: 3% to 5% to 10%
      </h2>
      <p className="mt-6 leading-relaxed text-slate-700">
        The veteran contracting goal has moved twice in three years.
        Until the FY2024 National Defense Authorization Act, the
        government-wide SDVOSB goal was 3% of prime and subcontracting
        dollars. That Act raised it to 5%. Agencies then beat the 5%
        goal in FY2025, with $32.5 billion in prime contracts to
        SDVOSBs. The FY2027 announcement doubles the target again to
        10% — and counts VOSBs alongside SDVOSBs toward the new combined
        target.
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        The certification pipeline grew with the goal. SBA said it
        cleared a backlog of more than 2,700 Veteran Small Business
        Certification (VetCert) applications that had accumulated before
        the current administration, and in FY2026 it approved more than
        18,000 contracting certifications for veteran-owned small
        businesses. A larger certified population is what makes a 10%
        goal plausible: a firm&apos;s dollars count toward the goal once
        it is certified — SDVOSBs with a complete application submitted
        by December 22, 2024 keep eligibility while SBA decides — so a
        bigger certified pool gives agencies more suppliers to buy from.
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        The broader small-business picture gives the goal its context.
        The Small Business Act requires the federal government to award
        at least 23% of federal prime contracting dollars to small
        businesses — a target the government has exceeded for eleven
        consecutive years, according to SBA. Qualifying veteran-owned
        prime-contract awards can also count toward the overall
        small-business goal. The veteran target is not calculated as 10%
        of the 23% small-business target.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Who qualifies: VOSB vs SDVOSB
      </h2>
      <p className="mt-6 leading-relaxed text-slate-700">
        VOSB and SDVOSB are two different statuses from one certification
        program, SBA&apos;s Veteran Small Business Certification
        (VetCert). Both require the same foundation: the firm must be
        small under the SBA size standard for at least one NAICS code in
        its SAM.gov profile, and qualifying veterans must unconditionally
        and directly own at least 51% of the business and control both
        its long-term decisions and its day-to-day operations. The rules
        are in 13 CFR Part 128.
      </p>
      <Table
        head={["", "VOSB", "SDVOSB"]}
        rows={[
          [
            "Owned and controlled by",
            "Veterans — at least 51%",
            "Service-disabled veterans — at least 51%",
          ],
          [
            "Disability requirement",
            "None",
            "Service-connected disability determined by the VA (the regulation sets no minimum rating)",
          ],
          ["Certification", "SBA VetCert, free", "SBA VetCert, free"],
          [
            "Set-aside access",
            "At the Department of Veterans Affairs, under its Vets First program",
            "Government-wide — all federal agencies",
          ],
        ]}
      />
      <p className="mt-6 leading-relaxed text-slate-700">
        The difference that matters commercially is the last row. A
        certified SDVOSB can compete for set-aside and sole-source
        opportunities at every federal agency. A certified VOSB can
        compete for set-asides at the VA, under the Vets First program,
        but not government-wide. Both count toward the new combined 10%
        goal — which is why the goal&apos;s expansion to VOSBs is
        meaningful for veteran-owned firms that are not service-disabled:
        their dollars now move an agency&apos;s score.
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        Certification runs through SBA, not the VA. Responsibility moved
        from the Department of Veterans Affairs to SBA on January 1,
        2023, under the FY2021 National Defense Authorization Act.
        SBA&apos;s VetCert program is now the sole federal certification
        portal for both statuses, and certification is free. Firms apply
        through MySBA Certifications.
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        VetCert has its own eligibility rules and document checklist,
        which are different from the 8(a) program&apos;s — start with
        SBA&apos;s VetCert guidance at{" "}
        <a
          href="https://www.sba.gov/vetcert"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          sba.gov/vetcert
        </a>
        , and apply through MySBA Certifications.
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        Two transitions govern certification, and they have different
        dates — and both are written for SDVOSB credit. For non-VA
        SDVOSB set-aside and sole-source awards, SBA certification has
        been required since January 1, 2024 — a contracting officer must
        confirm that SAM.gov shows the firm as SBA-certified, and firms
        that submitted a complete application by December 31, 2023 kept
        transitional treatment while SBA reviewed it. (VA contracts are
        excluded from that transition — VA set-asides have always
        required verification.) For SDVOSB goaling and subcontracting
        credit, the grace period for self-certifying ended on December
        22, 2024 — but SDVOSBs that submitted a complete application by
        that date keep eligibility until SBA decides on it. A firm that
        still lists itself as veteran-owned in SAM.gov without a VetCert
        certification, and without a complete application submitted by
        December 22, 2024 that SBA has not yet decided, does not count
        toward any agency&apos;s goal. SBA has not yet published
        implementation guidance on how VOSB counting will work under the
        new combined goal — until it does, treat the VOSB counting
        mechanics as unconfirmed.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What VOSB and SDVOSB firms should do now
      </h2>
      <p className="mt-6 leading-relaxed text-slate-700">
        The goal changes what agencies are looking for. It does not
        change what a firm has to do to be found. Four moves, in order:
      </p>

      <p className="mt-6 font-semibold text-slate-900">
        1. Get VetCert-certified — or check that your certification is
        current
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        Certification is the entry ticket for goal-counted dollars: a
        firm&apos;s dollars count toward an agency&apos;s target once it
        is certified — SDVOSBs with a complete application submitted by
        December 22, 2024 keep eligibility while SBA decides. Agencies
        still buy on capability and price, but certification is what
        makes those dollars count toward the 10%. If your firm is
        veteran-owned and
        not yet certified, start the VetCert application through MySBA
        Certifications now — SBA has said it intends to maintain a
        30-day average for deciding complete applications, though
        complex ownership structures take longer. If you are already
        certified, confirm the certification is current and that SAM.gov
        shows it: that is what a contracting officer checks.
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        Start at{" "}
        <a
          href="https://certifications.sba.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          certifications.sba.gov
        </a>{" "}
        (MySBA Certifications), and confirm your SAM.gov registration
        lists the right NAICS codes and shows your veteran-owned status.
      </p>

      <p className="mt-6 font-semibold text-slate-900">
        2. Align your NAICS codes with what agencies actually buy
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        A firm counts toward the goal only in the NAICS codes where it
        qualifies as small, and agencies search by NAICS. Check that
        your SAM.gov profile lists every NAICS code you can genuinely
        perform in — and that your capability statement leads with the
        codes where veteran-owned demand is strongest, which for this
        goal means the defense industrial base and the agencies that buy
        from it.
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        Our{" "}
        <Link
          href="/tools/company-naics-lookup"
          className="text-blue-700 hover:underline"
        >
          Company NAICS Lookup
        </Link>{" "}
        shows which NAICS codes a company actually won awards under in
        FY2025 — use it to see where the dollars in your industry sit
        before you rewrite your capability statement.
      </p>

      <p className="mt-6 font-semibold text-slate-900">
        3. Make yourself findable to the agencies that now have to hit
        10%
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        Agencies that were already struggling to hit 5% now face a 10%
        combined target. They will be looking for certified veteran-owned
        suppliers — but they look in the systems they already use:
        SAM.gov, agency vendor databases, and the SBA&apos;s own
        resources. A current SAM.gov registration, a clear capability
        statement, and registration with the agencies you target are the
        minimum. Watch the Small Business Procurement Scorecard when
        FY2027 results publish: it shows, agency by agency, who is
        hitting the goal and who is short — and a short agency is an
        agency with a reason to take your call.
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        To see which agencies buy the most, and from whom, start with
        our{" "}
        <Link
          href="/blog/top-federal-contractors"
          className="text-blue-700 hover:underline"
        >
          Top Federal Contractors ranking
        </Link>{" "}
        and the Contractor Finder — the dollars are concentrated, and the
        top of the list is where the subcontracting opportunities sit.
      </p>

      <p className="mt-6 font-semibold text-slate-900">
        4. If you are buying a business, use the 7(a) window before it
        closes
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        The 7(a) equity flexibility SBA announced the same week is a
        separate opportunity with a hard end date: it runs through the
        end of FY2027, September 30, 2027. If you are a veteran
        considering buying an existing business, the next section
        explains the terms — and the window is the point. A temporary
        rule rewards firms that move while it is open.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The other two announcements: 7(a) loans and the VetsinTech pilot
      </h2>
      <p className="mt-6 leading-relaxed text-slate-700">
        The goal was one of three initiatives SBA announced during
        National Veterans Small Business Week. The other two matter to
        different veteran founders — one buying a business, one building
        in the drone sector.
      </p>

      <p className="mt-6 font-semibold text-slate-900">
        7(a) equity flexibility for veteran business acquisitions
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        From Veterans Day, November 11, 2026, through the end of FY2027
        (September 30, 2027), eligible veterans buying an existing
        business with an SBA 7(a) loan can fund the entire required 10%
        equity contribution from permitted outside sources — seller
        standby notes, investor capital, or other outside equity.
        Previously, outside sources could cover no more than half of the
        10%; the veteran had to bring the rest from personal savings.
        The 10% equity requirement itself has not changed — only where
        it can come from.
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        SBA&apos;s stated reason is the wave of owners preparing to
        retire and sell: its Office of Advocacy found that 51% of owners
        of businesses with employees are 55 or older. The flexibility is
        explicitly temporary — it is a window, not a permanent rule —
        and it applies to eligible veteran buyers acquiring an existing
        business through the 7(a) program. A veteran buyer who was short
        on personal savings and therefore locked out of an acquisition
        can now close the same deal with outside capital, provided the
        lender and SBA approve the structure.
      </p>

      <p className="mt-6 font-semibold text-slate-900">
        VetsinTech pilot for the drone and dual-use aerospace sector
      </p>
      <p className="mt-2 leading-relaxed text-slate-700">
        SBA is launching a national pilot program with VetsinTech to
        deliver training, capital access support, and procurement
        pathways for veteran founders in the $10 billion drone and
        dual-use aerospace sector, drawing on a 120,000-member network.
        The pilot is aimed at veteran founders entering the defense
        supply chain through drones — a sector where the government is
        actively trying to build domestic suppliers. The pilot funding
        amount was not disclosed in SBA&apos;s releases: what is
        announced is the program, its sector, and its three parts —
        training, capital access, and procurement pathways.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The scale of veteran-owned business
      </h2>
      <p className="mt-6 leading-relaxed text-slate-700">
        The goal is aimed at a large population. More than 1.8 million
        veteran-owned small businesses in America employ four million
        workers, generate $1.3 trillion in annual sales, and pay $258
        billion in payroll, according to SBA. Seven percent of the
        nation&apos;s 632,000 small manufacturers are veteran-owned —
        the manufacturing base the defense industrial base draws on.
      </p>
      <p className="mt-6 leading-relaxed text-slate-700">
        SBA&apos;s own lending to the population is substantial: in
        FY2026 it approved more than 2,800 loans for veteran-owned small
        businesses totaling $1.32 billion in federally backed capital.
        Its resource network includes 51 Veterans Business Outreach
        Centers, and its Boots to Business entrepreneurship courses have
        trained and graduated nearly 260,000 service members, veterans,
        National Guard and Reserve members, and military spouses since
        2013.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Frequently asked questions
      </h2>
      {FAQS.map((f) => (
        <div key={f.q} className="mt-6">
          <p className="font-semibold text-slate-900">{f.q}</p>
          <p className="mt-2 leading-relaxed text-slate-700">{f.a}</p>
        </div>
      ))}

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Sources</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700">
        <li>
          <a
            href="https://legacy.sba.gov/article/2026/11/09/sba-doubles-federal-contracting-goal-expand-opportunity-veteran-owned-small-businesses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA — &ldquo;SBA Doubles Federal Contracting Goal to Expand
            Opportunity for Veteran-Owned Small Businesses&rdquo;
            (November 9, 2026)
          </a>{" "}
          — the FY2027 goals, the $32.5 billion FY2025 baseline, the
          VetCert backlog and certification figures, and the Loeffler
          quote.
        </li>
        <li>
          <a
            href="https://legacy.sba.gov/article/2026/11/09/sba-opens-national-veterans-small-business-week-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA — &ldquo;SBA Opens National Veterans Small Business Week
            2026&rdquo; (November 9, 2026)
          </a>{" "}
          — the three NVSBW initiatives, the 1.8 million-firm scale
          figures, FY2026 lending and certifications, the VetsinTech
          pilot, and the 7(a) equity waiver.
        </li>
        <li>
          <a
            href="https://legacy.sba.gov/article/2026/11/09/sba-establishes-new-7a-equity-flexibility-veterans-small-business-acquisitions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA — &ldquo;SBA Establishes New 7(a) Equity Flexibility for
            Veterans&rsquo; Small Business Acquisitions&rdquo; (news
            release 26-117, November 9, 2026)
          </a>{" "}
          — the 7(a) equity flexibility window, beginning Veterans Day,
          November 11, 2026, through FY2027, and the prior 50% cap on
          outside sources.
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-13/chapter-I/part-128"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR Part 128, Veteran Small Business Certification Program
          </a>{" "}
          — VOSB and SDVOSB eligibility, the 51% ownership and control
          tests, the VA disability determination, and the certification
          transitions in §128.200(c).
        </li>
        <li>
          <a
            href="https://www.sba.gov/vetcert"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA VetCert program
          </a>{" "}
          — the sole federal certification portal for VOSB and SDVOSB
          status since January 1, 2023; applications through MySBA
          Certifications at{" "}
          <a
            href="https://certifications.sba.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            certifications.sba.gov
          </a>
          .
        </li>
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-slate-500">
        This article is general information about the SBA announcement of
        November 9, 2026, as of November 11, 2026. It is not legal or
        financial advice. The 10% figure is an agency-level contracting
        goal, not a set-aside and not a guarantee of contract dollars.
        Program rules change — confirm certification requirements and
        loan terms on the linked SBA pages before acting. The VetsinTech
        pilot funding amount was not disclosed in SBA&apos;s releases.
      </p>
    </div>
  );
}
