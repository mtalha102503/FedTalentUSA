// lib/blog/posts/sewip-contract.tsx — Navy SEWIP Contract 2026 guide.
// Focus keyword: "SEWIP contract" (secondary: "navy SEWIP award").
// Accuracy notes (every figure checked against the primary source, Nov 21,
// 2026 — the Department of War daily contracts digest, read in full):
// - Award announced November 19, 2026 ("Contracts for Nov. 19, 2026").
//   Combined ceiling $7,125,820,000; firm-fixed-price, fixed-price
//   incentive (firm-target), cost-only, cost-plus-fixed-fee, and
//   cost-plus-incentive-fee; indefinite-delivery/indefinite-quantity,
//   multiple award. Contract numbers N6175027D1401–N6175027D1428.
// - 28 awardees, 31 offers received. Competitively solicited via SAM.gov
//   and the PIEE Solicitation Module. Contracting activity: Program
//   Acquisition Executive Mission Systems, Washington, D.C.
// - Small businesses are marked with an asterisk in the digest ("*Small
//   business" footnote). Counted from the digest: 11 of 28.
// - Work continues through November 2036 if all options are exercised.
//   The digest states NO ordering period, NO start date, and NO option
//   structure — none is published in this guide. No task orders and no
//   obligated funds appear in the announcement.
// - RFP N00024-26-R-5504, "SEWIP AN SLQ-32(V) Full Rate Production,
//   Design Agent Engineering, and Integration", posted to SAM.gov
//   January 30, 2026; offers due April 9, 2026. Original Set Aside field
//   is blank — no set-aside; the competition was full and open.
//   PSC 5865, NAICS 334511.
// - Block 3: electronic attack, AN/SLQ-32(V)7, Northrop Grumman prime.
//   First Block 3 system installed on USS Pinckney (DDG-91) in 2023;
//   March 30, 2026 Northrop modification for up to nine additional
//   Block 3 systems, including the first shipset for an aircraft carrier
//   (Northrop press release).
// - DOT&E FY2025 Annual Report (SEWIP section): Block 2 FOT&E on USS
//   Mason (DDG 87) was planned for FY25 but not executed (weather and
//   platform issues); cyber test on USS Frank E. Petersen Jr. (DDG 121)
//   in September 2025; Block 3 has not yet started IOT&E.
// - Air Force propulsion award, announced November 20, 2026 ("Contracts
//   for Nov. 20, 2026"): cumulative maximum ceiling $16,100,000,000;
//   $58,000 in FY2027 RDT&E funds obligated at award ($1,000 per
//   awardee); work complete by November 2041; competitive acquisitions;
//   Air Force Materiel Command, Wright-Patterson AFB, Ohio. Breaking
//   Defense reports 58 vendors. The published DoW text names 57 firms —
//   counted from the digest. No 58th name is published anywhere; none is
//   invented here. The digest itself prints three contract numbers with
//   apparent typos (FA86-27-D-B027, FA86-27-D-B043, FA86-27-D-B054) and
//   "Herndon, Indiana" for Arc Space Innovation; the propulsion table
//   below lists names only to avoid repeating those errors.
// - Secondary items, labelled as reported in the text (NOT primary
//   sources): Lockheed Martin $208,962,712 Block II (V)6 modification,
//   awarded September 30, 2026, options to a cumulative $1,708,478,799,
//   work through September 2029; Lockheed Martin $74,294,440 FMS
//   modification, October 14, 2026 (Canada 52%, Japan 47%, Coast Guard
//   1%); Lockheed Martin $249 million February 2026 Block II spares,
//   repairs, and engineering IDIQ, work through February 2031;
//   predecessor SEWIP vehicle reported by Washington Technology as a
//   Lockheed Martin single-award contract with about $783 million
//   obligated, sunsetting in early May 2028.
// - NOT in this guide (unverified, deliberately excluded): per-firm
//   dollar allocations under the $7.13B ceiling (the announcement gives
//   none); the ordering period, start date, and option structure (not
//   stated in the announcement); the 58th propulsion vendor's name;
//   Google Trends figures (unavailable); any task-order values or dates.
// Registry metadata (for lib/blog.ts at push time):
// slug "sewip-contract"; title "Navy SEWIP Contract 2026: $7.13B Award,
// 28 Firms, and What It Means for Vendors";
// date 2026-11-21; readingMinutes 10; (body prose ~2,450 words; 10 min
// at a normal reading pace. Full visible text including tables, FAQs, and
// sources is ~3,200 words.)
// excerpt "The Navy awarded 28 firms a combined $7,125,820,000
// multiple-award contract for the SEWIP Family of Systems on November 19,
// 2026 — a potential 10-year vehicle running through November 2036. The
// full awardee list, what the ceiling does and does not mean, and how
// vendors position for task orders."
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
    q: "What is SEWIP?",
    a: "SEWIP is the Surface Electronic Warfare Improvement Program, the Navy's program for upgrading the AN/SLQ-32 electronic warfare system on surface ships in blocks. The system performs early detection, signal analysis, threat warning, and protection from anti-ship missiles on Navy, Coast Guard, and allied ships. Block 2 improved electronic support; Block 3 adds an electronic attack capability, designated AN/SLQ-32(V)7.",
  },
  {
    q: "Who won the SEWIP contract?",
    a: "28 firms won spots on the multiple-award contract, announced November 19, 2026. They range from the large primes — Lockheed Martin, Northrop Grumman, Raytheon, Leidos, BAE Systems, CACI, HII Mission Technologies, Amentum, ManTech, and both General Dynamics businesses — to smaller specialists such as Aeronix, Distributed Spectrum, Simventions, and PCI Aviation. 11 of the 28 are small businesses. The full list, with contract numbers, is in the table above.",
  },
  {
    q: "How much is the SEWIP contract really worth?",
    a: "$7,125,820,000 is the combined ceiling — the maximum value of all task orders that can be placed under the vehicle — not money spent or obligated. The announcement obligates no funds at award and gives no per-firm allocation. Each awardee's actual revenue depends on the task orders it wins over the life of the contract.",
  },
  {
    q: "When does work under the SEWIP contract run through?",
    a: "If all options are exercised, work will continue through November 2036. The announcement does not state an ordering period, a start date, or the option structure, so no more precise schedule can be published from the award notice.",
  },
  {
    q: "Was the SEWIP contract a small-business set-aside?",
    a: "No. The solicitation carried no set-aside and was competed full and open through SAM.gov and the PIEE Solicitation Module, drawing 31 offers. 11 of the 28 awardees are small businesses that won in open competition.",
  },
  {
    q: "How can a firm that is not on the vehicle participate?",
    a: "Through subcontracting or teaming with one of the 28 awardees. That is general practice for multiple-award vehicles — the Navy did not state a subcontracting route for this vehicle in the announcement. Firms should approach awardees whose work shares match their capability, and watch SAM.gov and FPDS for the first task orders to see which teams are winning.",
  },
  {
    q: "What is SEWIP Block 3?",
    a: "Block 3 is the electronic attack increment of SEWIP, designated AN/SLQ-32(V)7. It adds an active electronic attack capability — using radio-frequency energy to jam or deceive threats — to the passive detection capability of the earlier blocks. Northrop Grumman is the Block 3 prime. The first Block 3 system was installed on the destroyer USS Pinckney (DDG-91) in 2023, and in March 2026 the Navy ordered up to nine additional Block 3 systems, including the first shipset for an aircraft carrier.",
  },
  {
    q: "What is the Air Force propulsion award announced the next day?",
    a: "On November 20, 2026, the Air Force awarded a cumulative maximum ceiling of $16,100,000,000 in indefinite-delivery/indefinite-quantity contracts for advanced propulsion enterprise work, running through November 2041. Breaking Defense reported 58 vendors; the published Department of War text names 57 firms. Each awardee received $1,000 at award — $58,000 in fiscal 2027 research, development, test and evaluation funds obligated in total.",
  },
  {
    q: "Where do I watch for SEWIP task orders?",
    a: "On SAM.gov and FPDS. Task orders under the vehicle will appear as award notices against the individual contract numbers (N6175027D1401 through N6175027D1428) or the parent solicitation N00024-26-R-5504. The first task orders will show which firms are actually winning work and what the Navy is buying first.",
  },
];

export default function SewipContractContent() {
  return (
    <div>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        The Navy awarded 28 firms a combined $7,125,820,000 multiple-award
        contract for the Surface Electronic Warfare Improvement Program
        (SEWIP) Family of Systems on November 19, 2026. The award covers
        full-rate production, design agent engineering, and integration of
        the AN/SLQ-32(V) shipboard electronic warfare suite — the system
        that warns a surface ship of incoming anti-ship missiles. If all
        options are exercised, work will continue through November 2036. The
        28 awardees now compete against each other for task orders; no task
        orders and no funding were announced with the award.
      </p>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="font-semibold text-amber-900">
          $7.13 billion is a ceiling, not a payment
        </p>
        <p className="mt-2 text-sm leading-relaxed text-amber-900">
          The $7,125,820,000 figure is the combined maximum value of every
          task order that can ever be placed under this vehicle. The
          announcement obligates no money at award and gives no per-firm
          allocation — no awardee has been promised any specific amount.
          Each firm&apos;s actual revenue depends entirely on the task
          orders it wins over the next ten years. The announcement also
          states no ordering period, no start date, and no option
          structure, so none of those is published in this guide. This
          notice is dated November 21, 2026.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
        <p className="font-semibold text-slate-900">At a glance</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            <strong>Announced:</strong> November 19, 2026, in the
            Department of War&apos;s daily contracts digest.
          </li>
          <li>
            <strong>Ceiling:</strong> $7,125,820,000 combined, across 28
            awardees.
          </li>
          <li>
            <strong>Vehicle:</strong> indefinite-delivery /
            indefinite-quantity, multiple award; firm-fixed-price,
            fixed-price incentive (firm-target), cost-only,
            cost-plus-fixed-fee, and cost-plus-incentive-fee orders.
          </li>
          <li>
            <strong>Work through:</strong> November 2036, if all options
            are exercised.
          </li>
          <li>
            <strong>Competition:</strong> full and open, via SAM.gov and
            the PIEE Solicitation Module; 31 offers received.
          </li>
          <li>
            <strong>Small businesses:</strong> 11 of the 28 awardees.
          </li>
          <li>
            <strong>Contracting activity:</strong> Program Acquisition
            Executive Mission Systems, Washington, D.C.
          </li>
          <li>
            <strong>Solicitation:</strong> N00024-26-R-5504, posted to
            SAM.gov January 30, 2026; offers due April 9, 2026.
          </li>
        </ul>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The award in numbers
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Every figure in this table comes from the award announcement
        itself. The contract is a multiple-award IDIQ: the 28 firms hold
        places on the vehicle and will compete for individual task orders.
        The announcement names no task orders, obligates no funds, and
        assigns no dollar value to any single firm.
      </p>
      <Table
        head={["Item", "Detail"]}
        rows={[
          ["Announcement date", "November 19, 2026"],
          ["Combined ceiling", "$7,125,820,000"],
          ["Awardees", "28 firms"],
          ["Small businesses among awardees", "11"],
          ["Offers received", "31"],
          ["Competition", "Full and open — no set-aside"],
          ["Contract type", "IDIQ, multiple award"],
          ["Order types", "Firm-fixed-price; fixed-price incentive (firm-target); cost-only; cost-plus-fixed-fee; cost-plus-incentive-fee"],
          ["Contract numbers", "N6175027D1401 – N6175027D1428"],
          ["Work through", "November 2036 (if all options are exercised)"],
          ["Funds obligated at award", "None stated"],
          ["Task orders announced", "None"],
          ["Contracting activity", "Program Acquisition Executive Mission Systems, Washington, D.C."],
          ["Solicitation", "N00024-26-R-5504 (posted January 30, 2026)"],
          ["NAICS / PSC", "334511 / 5865"],
        ]}
      />

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        All 28 awardees
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The table below reproduces the award announcement exactly: legal
        name, location, and contract number for each of the 28 firms, in
        contract-number order. The small-business column follows the
        asterisk in the announcement, which the digest&apos;s footnote
        defines as &ldquo;Small business.&rdquo; Eleven firms carry the
        mark.
      </p>
      <Table
        head={["Firm", "Location", "Contract", "Small business"]}
        rows={[
          ["Aeronix Inc.", "Melbourne, Florida", "N6175027D1401", "No"],
          ["Amentum Services Inc.", "Chantilly, Virginia", "N6175027D1402", "No"],
          ["BAE Systems Technology Solutions & Services Inc.", "Rockville, Maryland", "N6175027D1403", "No"],
          ["CACI Inc. Federal", "Chantilly, Virginia", "N6175027D1404", "No"],
          ["CAES Systems LLC", "Lansdale, Pennsylvania", "N6175027D1405", "No"],
          ["Distributed Spectrum Inc.", "New York, New York", "N6175027D1406", "Yes"],
          ["EWA Warrior Services LLC", "Huntsville, Alabama", "N6175027D1407", "No"],
          ["Frequency Electronics Inc.", "Uniondale, New York", "N6175027D1408", "Yes"],
          ["Future Technologies Inc.", "Herndon, Virginia", "N6175027D1409", "Yes"],
          ["General Dynamics Information Technology Inc.", "Falls Church, Virginia", "N6175027D1410", "No"],
          ["General Dynamics Mission Systems Inc.", "Manassas, Virginia", "N6175027D1411", "No"],
          ["Management Services Group Inc. (doing business as Global Technical Systems)", "Virginia Beach, Virginia", "N6175027D1412", "Yes"],
          ["HII Mission Technologies Corp.", "McLean, Virginia", "N6175027D1413", "No"],
          ["Innovative Defense Technologies LLC", "Arlington, Virginia", "N6175027D1414", "Yes"],
          ["Laurel Technologies Partnership", "Johnstown, Pennsylvania", "N6175027D1415", "No"],
          ["Leidos Inc.", "Reston, Virginia", "N6175027D1416", "No"],
          ["Lockheed Martin Corp.", "Liverpool, New York", "N6175027D1417", "No"],
          ["Mantech Advanced Systems International Inc.", "Herndon, Virginia", "N6175027D1418", "No"],
          ["Northrop Grumman Systems Corp.", "Linthicum Heights, Maryland", "N6175027D1419", "No"],
          ["Product Development Associates Inc.", "Burnsville, Minnesota", "N6175027D1420", "Yes"],
          ["Raytheon Co.", "Goleta, California", "N6175027D1421", "No"],
          ["Research and Development Solutions Inc.", "McLean, Virginia", "N6175027D1422", "Yes"],
          ["Systems Engineering Support Co. Inc.", "San Diego, California", "N6175027D1423", "Yes"],
          ["Simventions Inc.", "Fredericksburg, Virginia", "N6175027D1424", "Yes"],
          ["Systems & Processes Engineering Corp.", "Austin, Texas", "N6175027D1425", "Yes"],
          ["Ultra Electronics Ocean Systems Inc.", "Braintree, Massachusetts", "N6175027D1426", "No"],
          ["VT Milcom Inc.", "Virginia Beach, Virginia", "N6175027D1427", "No"],
          ["PCI Aviation LLC", "Atmore, Alabama", "N6175027D1428", "Yes"],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        The list mixes the Navy&apos;s largest electronic warfare primes
        with specialist suppliers. Lockheed Martin and Northrop Grumman
        build the SEWIP systems themselves — Lockheed for Block 2,
        Northrop for Block 3. Raytheon, Leidos, BAE Systems, CACI, HII
        Mission Technologies, Amentum, ManTech, and the two General
        Dynamics businesses bring integration, software, and engineering
        depth. The small businesses include component and subsystem
        specialists: Distributed Spectrum (spectrum engineering),
        Frequency Electronics (precision timing), Simventions (systems
        engineering), and PCI Aviation (aviation support). Virginia
        dominates the map — 13 of the 28 firms list a Virginia location —
        followed by New York with three, and Alabama, California,
        Maryland, and Pennsylvania with two each.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What the contract covers
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The solicitation title says it plainly: &ldquo;SEWIP AN/SLQ-32(V)
        Full Rate Production, Design Agent Engineering, and
        Integration.&rdquo; The vehicle covers the work of building
        SEWIP systems to print, engineering them as design agent, and
        integrating them onto ships — across the family of systems&apos;
        block upgrades. The award announcement describes the SEWIP
        Family of Systems as several block upgrades that, combined,
        create variants installed on surface ships. Those variants
        perform early detection, signal analysis, threat warning, and
        protection from anti-ship missiles on Navy, Coast Guard, and
        allied ships.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The solicitation, N00024-26-R-5504, was posted to SAM.gov on
        January 30, 2026, under NAICS 334511 and product service code
        5865 (electronic countermeasures equipment). Proposals were due
        April 9, 2026, after four amendments. The solicitation&apos;s
        set-aside field is blank: the competition was full and open, and
        it drew 31 offers for 28 awards. As a multiple-award IDIQ, the
        vehicle runs on fair opportunity — the Navy will compete task
        orders among the 28 awardees rather than assigning work to firms
        by name.
      </p>
      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        SEWIP in blocks: what Block 1, 2, and 3 actually are
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        SEWIP upgrades the AN/SLQ-32 — the Navy&apos;s shipboard
        electronic warfare system, in service for decades — in
        increments called blocks. Block 1 began the electronic-support
        modernization of the system. Block 2 added an enhanced
        electronic support capability built around a new antenna and
        receiver, with an open combat-system interface; its AN/SLQ-32(V)6
        variant is fitted to Arleigh Burke-class destroyers and entered
        full-rate production in 2016. Block 3 adds the missing piece:
        active electronic attack.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Block 3, designated AN/SLQ-32(V)7, combines the passive detection
        capability of the earlier blocks with the ability to make active,
        precise electronic attacks on multiple targets at once — using
        bursts of radio-frequency energy to jam or deceive the radars
        guiding incoming missiles. Northrop Grumman is the Block 3 prime.
        The first Block 3 system was installed on the destroyer USS
        Pinckney (DDG-91) in 2023. In March 2026, the Navy awarded
        Northrop a modification to produce up to nine additional Block 3
        systems, including the first shipset to be installed on an
        aircraft carrier.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Testing has not kept pace with production. The Pentagon&apos;s
        test office reported that the Navy intended to run follow-on
        operational testing of the Block 2 (V)6 on USS Mason (DDG 87) in
        fiscal year 2025, but weather and platform problems prevented the
        test from happening, and the office still lacked the data to judge
        whether Block 2 works as required at sea. Block 3 has not yet
        started initial operational testing. That testing backlog is part
        of the context for this award: the new vehicle buys production,
        design, and integration capacity while the test program catches
        up.
      </p>
      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What this contract is not
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The $7.13 billion vehicle is easy to confuse with the contracts
        already buying SEWIP hardware. It is none of them. Three separate
        awards, all reported in trade press rather than in this
        announcement, cover the production and sustainment work that is
        already running:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>Block 3 production is a separate Northrop
          contract.</strong> The March 30, 2026 modification for up to
          nine additional Block 3 systems — including the first carrier
          shipset — sits under Northrop&apos;s own Block 3 production
          contract, not under this vehicle.
        </li>
        <li>
          <strong>Block II (V)6 production is a separate Lockheed
          contract.</strong> The Navy awarded Lockheed Martin a
          $208,962,712 modification on September 30, 2026, to build
          more AN/SLQ-32(V)6 systems under contract N00024-20-C-5503;
          options, if exercised, would bring that contract&apos;s
          cumulative value to $1,708,478,799, with work through
          September 2029. A further $74,294,440 modification on
          October 14, 2026, covered (V)6 systems for Canada (52%),
          Japan (47%), and the Coast Guard (1%).
        </li>
        <li>
          <strong>Block II sustainment is a separate Lockheed
          contract.</strong> In February 2026 the Navy awarded Lockheed
          Martin a $249 million indefinite-delivery contract for SEWIP
          Block II spares, repairs, engineering services, and depot
          stand-up, with work through February 2031.
        </li>
      </ul>
      <p className="mt-4 leading-relaxed text-slate-700">
        The new vehicle overlaps with those contracts in subject matter —
        it covers full-rate production, design agent engineering, and
        integration of the same AN/SLQ-32(V) family — but it is a
        different instrument, with different awardees competing for its
        task orders. Vendors should not read the $7.13 billion ceiling as
        replacing the Lockheed and Northrop production lines already
        under contract.
      </p>
      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What it means for vendors
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        For the 28 awardees, the award is a hunting license, not a
        paycheck. Nothing is funded yet, and every dollar will be won
        order by order against the other 27 firms. The work that matters
        now is positioning: which SEWIP variants each firm can build,
        integrate, or engineer; which ship classes its past performance
        covers; and which teammates fill its gaps. Firms that won as
        specialists — timing, spectrum, subsystems — should expect to
        compete as subcontractors on larger integration orders as often
        as they prime their own.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        For firms not on the vehicle, the only route in is
        subcontracting or teaming with an awardee. That is general
        practice for multiple-award vehicles — the Navy did not state a
        subcontracting route for this vehicle in the announcement. The
        practical move is to approach awardees whose work shares match
        your capability, with a concrete offer (a component, a test
        service, a field team) rather than a general introduction.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The small-business result deserves attention. Eleven small firms
        won places in a full-and-open competition against the primes —
        not through a set-aside. That tells small vendors two things:
        the Navy is willing to put small firms on its largest electronic
        warfare vehicle, and the way in was technical capability, not
        preference. Small firms reading this award should note which
        niches won — spectrum engineering, precision timing, systems
        engineering — and build past performance there.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Two milestones are worth watching. First, the first task orders:
        they will appear on SAM.gov and FPDS against the contract
        numbers in the table above, and they will show what the Navy is
        buying first and which firms are winning it. Second, the
        predecessor vehicle&apos;s end: Washington Technology reported
        that the predecessor SEWIP vehicle, held solely by Lockheed
        Martin with about $783 million obligated, sunsets in early May
        2028. The new vehicle has to be ordering well before then, or
        the Navy faces a gap in its electronic warfare pipeline.
      </p>
      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Also announced: the Air Force&apos;s $16.1B propulsion award
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The day after the SEWIP award, the Air Force named vendors for
        an even larger vehicle: a cumulative maximum ceiling of
        $16,100,000,000 in indefinite-delivery / indefinite-quantity
        contracts for advanced propulsion enterprise work — the
        continuing enhancement of propulsion technology across all areas
        and lifecycle phases of propulsion development. Work is expected
        to be completed by November 2041. The contracts were competitive
        acquisitions, and the contracting activity is the Air Force
        Materiel Command, Wright-Patterson Air Force Base, Ohio.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The vendor count needs a note, because the sources disagree.
        Breaking Defense reported 58 vendors, each awarded $1,000 at
        award. The published Department of War text names 57 firms — the
        table below lists exactly those 57, no more. The funding line
        supports the higher number: $58,000 in fiscal 2027 research,
        development, test and evaluation funds were obligated at award,
        at $1,000 per awardee, which works out to 58. The 58th name has
        not been published; this guide does not invent one.
      </p>
      <Table
        head={["Firm", "Firm", "Firm"]}
        rows={[
          ["Aerocore Technologies LLC", "Amentum Services Inc.", "Arc Space Innovation LLC"],
          ["Arctos Technology Solutions LLC", "Astro Mechanica Federal Corp.", "ATEC Inc."],
          ["ATRX, Inc.", "Beehive Industries LLC", "Bet Shemesh Engines Ltd."],
          ["The Boeing Co.", "Booz Allen Hamilton Inc.", "CFD Research Corp."],
          ["Concept Plus LLC", "Cornerstone Research Group Inc.", "Electric Propulsion Technologies LLC"],
          ["Engineering and Software System Solutions Inc.", "Exquadrum Inc.", "Frontera Space Inc."],
          ["General Electric Co.", "Hermeus Corp.", "Honeywell International Inc."],
          ["Howe Industries LLC", "Hybrid Aerospace Corp.", "Innovative Scientific Solutions Inc."],
          ["Integration Innovation Inc.", "JetCat Defense Inc.", "Jetoptera Inc."],
          ["Systima Technologies Inc.", "Florida Turbine Technologies Inc.", "Aerojet Rocketdyne Inc."],
          ["Dynetics Inc.", "Lockheed Martin Corp.", "Mach Industries Inc."],
          ["Maglev Aero Inc.", "Northrop Grumman Systems Corp.", "Ozark Integrated Circuits Inc."],
          ["Parabilis Space Technologies Inc.", "PBS Aerospace Inc.", "Polyrhythm Software LLC"],
          ["RTX Corp.", "Renaissance Services Inc.", "Rolls-Royce North American Technologies Inc."],
          ["Safran Defense & Space Inc.", "Sintavia LLC", "Southwest Research Institute"],
          ["Sparc Research LLC", "Spectral Energies LLC", "Standard Aero Inc."],
          ["Stone Solutions and Research Collective LLC", "Strategic Technology Consulting LLC", "Streamline Automation LLC"],
          ["Technical Directions Inc.", "Velontra LLC", "Volund Manufacturing Inc."],
          ["Whisper Aero Inc.", "Williams International Co. LLC", "Zulu Pods Inc."],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        The propulsion award is a framework, not a funded program: like
        SEWIP, the $16.1 billion is a ceiling, and only $58,000 was
        obligated at award. What makes it notable is the breadth — engine
        primes (GE, Rolls-Royce, Honeywell, Aerojet Rocketdyne) next to
        startups (Hermeus, Mach Industries, Jetoptera, Velontra) — and
        the length, fifteen years. Vendors in propulsion should read it
        the same way as SEWIP: the vehicle is the ticket, the task
        orders are the work.
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
            href="https://www.war.gov/News/Contracts/Contract/Article/4653606/contracts-for-nov-19-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Contracts for Nov. 19, 2026 (Department of War)
          </a>{" "}
          — the SEWIP award: all 28 awardees, contract numbers,
          $7,125,820,000 ceiling, 31 offers, work through November 2036.
        </li>
        <li>
          <a
            href="https://www.war.gov/News/Contracts/Contract/Article/4657624/contracts-for-nov-20-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Contracts for Nov. 20, 2026 (Department of War)
          </a>{" "}
          — the Air Force advanced propulsion award: $16,100,000,000
          ceiling, 57 firms named, $58,000 obligated at $1,000 per
          awardee, work through November 2041.
        </li>
        <li>
          <a
            href="https://news.northropgrumman.com/electronic-warfare/northrop-grumman-awarded-contract-modification-for-sewip-block-3-maritime-electronic-attack-system"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Northrop Grumman awarded contract modification for SEWIP
            Block 3 (March 30, 2026)
          </a>{" "}
          — up to nine additional Block 3 systems, including the first
          carrier shipset; first Block 3 system installed on USS Pinckney
          in 2023.
        </li>
        <li>
          <a
            href="https://www.dote.osd.mil/Portals/97/pub/reports/FY2025/navy/2025sewip.pdf?ver=FsJTOgSgDWVga6Q8ettmMQ%3d%3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            DOT&E FY2025 Annual Report — SEWIP (PDF)
          </a>{" "}
          — Block 2 follow-on testing on USS Mason, cyber testing on USS
          Frank E. Petersen Jr., and Block 3 test status.
        </li>
        <li>
          <a
            href="https://sam.gov/opp/b04d962d3521486c97b3615560b44d37/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SAM.gov solicitation N00024-26-R-5504
          </a>{" "}
          — SEWIP AN/SLQ-32(V) Full Rate Production, Design Agent
          Engineering, and Integration; posted January 30, 2026; no
          set-aside; offers due April 9, 2026.
        </li>
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-slate-500">
        This guide is general information about the Navy&apos;s SEWIP
        Family of Systems award as of November 21, 2026. It is not legal
        advice. Award values, dates, and awardee lists are as stated in
        the cited announcements; the $7,125,820,000 and $16,100,000,000
        figures are contract ceilings, not obligated funding. Figures
        attributed to trade-press reporting — the Lockheed Martin Block
        II modifications, the February 2026 spares contract, and the
        predecessor vehicle&apos;s sunset — are labelled as reported in
        the text. Check the sources above and the notices on SAM.gov
        before acting.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-500">
        Related guides:{" "}
        <Link href="/blog/how-to-get-government-contracts" className="font-medium text-blue-700 hover:underline">
          How to Get Government Contracts
        </Link>{" "}
        and{" "}
        <Link href="/blog/top-federal-contractors" className="font-medium text-blue-700 hover:underline">
          Top Federal Contractors: The FY2025 Ranking
        </Link>
        .
      </p>
    </div>
  );
}
