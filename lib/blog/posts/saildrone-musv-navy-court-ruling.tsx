// lib/blog/posts/saildrone-musv-navy-court-ruling.tsx — Saildrone MUSV court ruling.
// NEWS ARTICLE (Nov 4, 2026): covers the Nov 3, 2026 Court of Federal Claims
// ruling in Saildrone v. Navy (Nos. 26-936 and 26-944) — not a ranking guide.
// Accuracy notes (checked against reporting, Nov 2026):
// - Opinion made public Nov 3, 2026, Judge Philip S. Hadji; quote "engaged in
//   disparate treatment, and thus acted in an arbitrary and capricious manner"
//   is from the opinion as reported by the NYT, Bloomberg and DroneXL.
// - $600M frozen is the gap between the $2.1B program total and the $1.5B
//   obligation cap the court imposed; sources describe it as "about $600M".
// - The ~$1.2B production-tranche value is DERIVED (30 vessels x the Navy's
//   ~$40M average procurement cost); the Navy release published no aggregate
//   award value, and USNI described about $400M obligated at the outset —
//   obligated-now vs total-value are different figures, and the article says so.
// - The ruling does NOT cancel the Sept 29 awards; it caps FURTHER MUSV
//   construction obligations until Saildrone's re-evaluation is complete.
// - No re-evaluation deadline and no Navy appeal announcement had been
//   reported at writing time; both are listed as watch items, not facts.
// - HII figures are FedTalentUSA's own FY2025 USAspending sums, read from
//   HII's live contractor page (rank #7, $10,934,408,068).
// The inline SVG timeline in this file is original code drawn for this
// article. It uses no third-party images or screenshots, so it carries no
// third-party copyright.
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
    q: "What did the court actually order?",
    a: "The Navy must re-evaluate Saildrone's proposal using the same criteria it applied to other competitors, including a new chance at the at-sea demonstration Saildrone was denied. Until that evaluation is complete, the Navy may obligate no more than $1.5 billion of the program's money for MUSV construction. If the re-evaluation finds Saildrone's proposal acceptable, the Navy must reinstate it to the competition.",
  },
  {
    q: "Does the ruling cancel the September 29 MUSV awards?",
    a: "No. The September 29 production agreements — 10 vessels each for Galliano Marine Services, HII and Saronic Technologies — stand. The court's order caps further MUSV construction obligations at $1.5 billion until Saildrone's re-evaluation finishes; it does not unwind awards already made.",
  },
  {
    q: "What is an OTA, and why couldn't Saildrone protest at GAO?",
    a: "An Other Transaction agreement sits outside the Federal Acquisition Regulation and the Competition in Contracting Act, giving agencies more flexibility for prototype work. Because the MUSV awards were OTAs, the normal GAO bid-protest route was unavailable to excluded firms — which is why Saildrone and Blue Water Autonomy sued in the Court of Federal Claims instead.",
  },
  {
    q: "What is the $600 million figure?",
    a: "It is the gap between the MUSV program's $2.1 billion total and the $1.5 billion obligation cap the court imposed: about $600 million the Navy cannot spend on MUSV construction until Saildrone's re-evaluation is complete. It is a freeze on further obligations, not a cancelled contract.",
  },
  {
    q: "Why is this win rare?",
    a: "Bid protests usually fail. The GAO sustained only 14 percent of the protests it decided on the merits in fiscal year 2025, and the Court of Federal Claims applies a higher legal threshold than GAO. A small company winning a protest against the Navy at that court — on a $2.1 billion program — is the exception, not the pattern.",
  },
  {
    q: "What happens to Saildrone now?",
    a: "Saildrone gets a fresh evaluation and a new at-sea demonstration — the final, most rigorous step of the competition. Re-instatement to the competition follows only if the re-evaluation finds its proposal acceptable. No public deadline for the re-evaluation had been reported at the time of writing.",
  },
  {
    q: "What is Phase II, and is it still open?",
    a: "Phase II is the Navy's follow-on MUSV solicitation, opened September 23, 2026, with testing scheduled to begin November 16, 2026 and run as a rolling assessment over five years. It drops the Phase I speed and at-sea refueling requirements to widen the field, so the MUSV marketplace route remains live for vendors that were not in the first production tranche.",
  },
  {
    q: "How can I track HII and other MUSV winners on FedTalentUSA?",
    a: "HII is ranked #7 of 1,000 in the FedTalentUSA FY2025 ranking, with $10,934,408,068 in FY2025 federal contract obligations, almost all of it from the Department of Defense. Its full agency, state and industry breakdown is on its contractor page, and the Contractor Finder tool lets you filter the top 1,000 by agency, state and industry.",
  },
];

export default function SaildroneMusvContent() {
  return (
    <div>
      <p className="leading-relaxed text-slate-700">
        A small drone-boat company just beat the U.S. Navy in court — and the
        ruling reaches far beyond one competition. On November 3, 2026, Judge
        Philip S. Hadji of the U.S. Court of Federal Claims ordered the Navy
        to re-evaluate Saildrone&apos;s proposal in the $2.1 billion Medium
        Unmanned Surface Vessel (MUSV) competition, after finding the Navy
        treated Saildrone unfairly when it eliminated the company. Until that
        re-evaluation is complete, the Navy cannot obligate more than $1.5
        billion of the program&apos;s money for MUSV construction — leaving
        about $600 million frozen.
      </p>
      <p className="leading-relaxed text-slate-700">
        The case matters for two reasons. First, it is a rare protest win
        against the Navy on a flagship unmanned-vessel program, five weeks
        after the Navy handed out the first 30-vessel production tranche.
        Second, and more important for vendors, the court first had to decide
        it could even hear the case: the competition was run under Other
        Transaction (OTA) prototype authority, outside the normal protest
        system. By holding that an OTA competition tied to a real buy is a
        procurement it can review, the court opened a door that many vendors
        assumed was closed.
      </p>

      <h2 className="text-lg font-bold text-slate-900">Key facts</h2>
      <Table
        head={["Item", "Detail"]}
        rows={[
          ["Ruling", "Nov 3, 2026, U.S. Court of Federal Claims, Judge Philip S. Hadji (Nos. 26-936 and 26-944)"],
          ["Order", "Navy must re-evaluate Saildrone's proposal, including a new at-sea demonstration"],
          ["Spending cap", "No more than $1.5B of program money obligable until evaluation completes"],
          ["Frozen", "About $600M ($2.1B program total minus the $1.5B cap)"],
          ["Program", "Medium Unmanned Surface Vessel (MUSV), $2.1B total"],
          ["Sept 29 awards", "30 vessels: 10 each for Galliano Marine Services, HII, Saronic Technologies"],
          ["The other plaintiff", "Blue Water Autonomy lost — its elimination was held reasonable"],
          ["Jurisdiction", "Oct 29, 2026: court denied Navy's motion to dismiss; OTA protest can proceed"],
        ]}
      />

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What the court actually ordered
      </h2>
      <p className="leading-relaxed text-slate-700">
        The core finding is a single sentence from the opinion, reported by
        the New York Times and Bloomberg: the Navy &quot;engaged in disparate
        treatment, and thus acted in an arbitrary and capricious manner&quot;
        in its review of Saildrone&apos;s proposal. In plain terms, the court
        found the Navy applied criteria to Saildrone that it did not apply
        to other competitors.
      </p>
      <p className="leading-relaxed text-slate-700">
        Saildrone&apos;s own account of the case fills in the mechanics. The
        company says it was excluded after being falsely deemed non-compliant
        across all three evaluation criteria, even though its proposal met or
        exceeded every requirement in the solicitation. When challenged, the
        Navy abandoned two of the three non-compliance determinations — and
        the court has now rejected the sole remaining one. That sequence is
        why the remedy is re-evaluation rather than an award: the court is
        not saying Saildrone should have won, only that it was judged by a
        different standard than its rivals.
      </p>
      <p className="leading-relaxed text-slate-700">
        The remedy has three parts. The Navy must re-evaluate
        Saildrone&apos;s proposal using the same criteria it applied to
        other competitors. Saildrone gets a new opportunity at the at-sea
        demonstration — the final, most rigorous step of the competition, and
        the step it was denied. And if the re-evaluation finds
        Saildrone&apos;s proposal acceptable, the Navy must reinstate the
        company to the competition. The $1.5 billion cap runs until that
        evaluation is complete.
      </p>
      <p className="leading-relaxed text-slate-700">
        The consolidated case also shows the court was not simply siding
        with every challenger. Blue Water Autonomy sued alongside Saildrone
        over its own elimination, and lost: Judge Hadji found the Navy&apos;s
        review and elimination of Blue Water&apos;s proposal reasonable and
        denied its protest. The split outcome is part of what makes the
        ruling credible — the court distinguished a genuinely unequal
        evaluation from an ordinary competitive loss.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The timeline: from solicitation to courtroom
      </h2>
      <p className="leading-relaxed text-slate-700">
        The whole dispute played out in under eight months, which is fast
        for a $2.1 billion program — and that speed is itself part of the
        story, because the OTA route was chosen to move quickly.
      </p>
      <svg
        viewBox="0 0 720 600"
        className="h-auto w-full"
        role="img"
        aria-labelledby="saildrone-timeline-title"
      >
        <title id="saildrone-timeline-title">
          Saildrone MUSV timeline: solicitation, lawsuit, awards, jurisdiction
          ruling, merits ruling, re-evaluation
        </title>
        <line x1="40" y1="40" x2="40" y2="560" stroke="#bfdbfe" strokeWidth="4" />
        <circle cx="40" cy="50" r="10" fill="#2f6df6" />
        <text x="70" y="46" fontSize="19" fontWeight="bold" fill="#0f172a">Mar 26, 2026</text>
        <text x="70" y="70" fontSize="17" fill="#334155">Navy issues MUSV solicitation under OTA prototype authority</text>
        <circle cx="40" cy="130" r="10" fill="#2f6df6" />
        <text x="70" y="126" fontSize="19" fontWeight="bold" fill="#0f172a">Late June 2026</text>
        <text x="70" y="150" fontSize="17" fill="#334155">Saildrone + Blue Water sue in the Court of Federal Claims</text>
        <circle cx="40" cy="210" r="10" fill="#2f6df6" />
        <text x="70" y="206" fontSize="19" fontWeight="bold" fill="#0f172a">Sept 23, 2026</text>
        <text x="70" y="230" fontSize="17" fill="#334155">Navy opens Phase II solicitation to widen the field</text>
        <circle cx="40" cy="290" r="10" fill="#2f6df6" />
        <text x="70" y="286" fontSize="19" fontWeight="bold" fill="#0f172a">Sept 29, 2026</text>
        <text x="70" y="310" fontSize="17" fill="#334155">30-vessel production awards: Galliano, HII, Saronic (10 each)</text>
        <circle cx="40" cy="370" r="10" fill="#2f6df6" />
        <text x="70" y="366" fontSize="19" fontWeight="bold" fill="#0f172a">Oct 29, 2026</text>
        <text x="70" y="390" fontSize="17" fill="#334155">Court denies Navy&apos;s motion to dismiss; OTA case proceeds</text>
        <circle cx="40" cy="450" r="10" fill="#2f6df6" />
        <text x="70" y="446" fontSize="19" fontWeight="bold" fill="#0f172a">Nov 3, 2026</text>
        <text x="70" y="470" fontSize="17" fill="#334155">Court rules for Saildrone; re-evaluation ordered, ~$600M frozen</text>
        <circle cx="40" cy="530" r="10" fill="#2f6df6" />
        <text x="70" y="526" fontSize="19" fontWeight="bold" fill="#0f172a">Next</text>
        <text x="70" y="550" fontSize="17" fill="#334155">Re-evaluation + new at-sea demo (no deadline reported)</text>
      </svg>
      <p className="leading-relaxed text-slate-700">
        Two dates in that timeline deserve emphasis. The Navy issued the
        MUSV solicitation on March 26, 2026, funded by money from the
        reconciliation bill signed in July 2025 — the program was designed
        from the start to move fast, using OTA prototype authority rather
        than a traditional shipbuilding procurement. And the lawsuit landed
        in late June, before any production awards existed: Saildrone and
        Blue Water were challenging their exclusion from the sea-trial
        phase, not trying to undo awards after the fact. The September 29
        production awards came while the case was already pending.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The money, stated carefully
      </h2>
      <p className="leading-relaxed text-slate-700">
        MUSV money gets misreported easily, because three different figures
        circulate: the program total, the court&apos;s cap, and the
        production tranche. Here they are, separated.
      </p>
      <Table
        head={["Figure", "Amount", "What it is"]}
        rows={[
          ["Program total", "$2.1 billion", "Full MUSV program value"],
          ["Obligation cap", "$1.5 billion", "Court-imposed ceiling until re-evaluation completes"],
          ["Frozen", "About $600 million", "Derived: $2.1B total minus the $1.5B cap"],
          ["Production tranche", "30 vessels", "Sept 29, 2026: 10 each for three winners"],
          ["Average cost", "About $40 million", "Per vessel, per the Navy's own figure"],
          ["Implied tranche value", "About $1.2 billion", "Derived: 30 vessels x ~$40M (Navy published no aggregate)"],
          ["First deliveries", "Before end of FY2027", "Per the Navy's announcement"],
        ]}
      />
      <p className="leading-relaxed text-slate-700">
        One nuance matters. Some outlets described the September 29 deal as
        about $400 million at the outset. That figure and the ~$1.2 billion
        figure are not contradictory: one is money obligated immediately,
        the other is the tranche&apos;s total value at the Navy&apos;s
        per-vessel figure. Reporting that calls the deal &quot;$1.2
        billion&quot; without that qualifier overstates what the Navy
        actually published — which is why this article labels the $1.2
        billion as derived, not announced.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The three winners — and the FedTalentUSA connection
      </h2>
      <p className="leading-relaxed text-slate-700">
        The September 29 production tranche split 30 vessels evenly across
        three Louisiana-connected builders, each building at yards in
        Loreauville, Houma and Franklin, Louisiana. Phase I, which seven
        companies entered, required a vessel able to travel 2,500 nautical
        miles at 25 knots in sea state 4, carrying up to 25 metric tons of
        payload in at least two 40-foot containers.
      </p>
      <Table
        head={["Company", "Vessels", "Design", "Build"]}
        rows={[
          ["HII (Huntington Ingalls)", "10", "ROMULUS, 151-foot, Odyssey autonomy", "Breaux Brothers / Halimar, Louisiana"],
          ["Saronic Technologies", "10", "Marauder, 180-foot autonomous ship", "Franklin, Louisiana"],
          ["Galliano Marine Services", "10", "Design not publicly identified", "Houma, Louisiana (Edison Chouest)"],
        ]}
      />
      <p className="leading-relaxed text-slate-700">
        One of those three winners is directly trackable on this site.{" "}
        <Link
          href="/contractors/huntington-ingalls-industries-inc"
          className="text-blue-700 hover:underline"
        >
          HII ranks #7 of 1,000 in the FedTalentUSA FY2025 ranking
        </Link>
        , with $10,934,408,068 in FY2025 federal contract obligations —
        $10,304,343,115 of it from the Department of Defense — and Ship
        Building and Repairing as its top industry at $8,734,121,876. The
        MUSV ruling does not take HII&apos;s 10 vessels away; it constrains
        what the Navy can obligate next, while HII&apos;s existing
        production agreement stands. Vendors tracking Navy shipbuilding can
        follow HII&apos;s full agency, state and industry breakdown on its
        contractor page, or filter the top 1,000 by agency and industry in
        the{" "}
        <Link href="/tools/contractor-finder" className="text-blue-700 hover:underline">
          Contractor Finder
        </Link>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Why the OTA part matters more than the boats
      </h2>
      <p className="leading-relaxed text-slate-700">
        The most consequential part of this case is not the $600 million
        freeze — it is the October 29 jurisdiction ruling that made the
        November 3 ruling possible. The government moved to dismiss on the
        ground that the Court of Federal Claims has no jurisdiction over
        OTA prototype agreements. Judge Hadji denied the motion, holding
        that the court&apos;s broad procurement protest statute covers the
        case because the Navy ran the competition &quot;in connection
        with&quot; buying MUSVs. In other words: a prototype competition
        tied to a real purchase is a procurement the court can review,
        even when the instrument itself sits outside the FAR.
      </p>
      <p className="leading-relaxed text-slate-700">
        That holding matters because the OTA route was specifically chosen
        to avoid the normal protest system. OTA agreements sit outside the
        Federal Acquisition Regulation and the Competition in Contracting
        Act, which is why excluded firms could not file a standard GAO
        protest against the MUSV awards — the faster, cheaper venue most
        vendors know. One procurement attorney told the New York Times the
        ruling &quot;arguably expanded&quot; the court&apos;s jurisdiction
        and could soon bring more cases like this one. The Pentagon has
        been pushing OTA buying to speed up acquisition; if every OTA
        prototype competition tied to a real buy is now protestable at the
        Court of Federal Claims, the speed advantage of OTAs comes with a
        litigation risk agencies have to price in.
      </p>
      <p className="leading-relaxed text-slate-700">
        Vendors should keep the odds in perspective. The GAO sustained
        only 14 percent of the protests it decided on the merits in fiscal
        year 2025, and the Court of Federal Claims applies a higher legal
        threshold than GAO — so a company&apos;s chances there are, if
        anything, slimmer. Saildrone won because it could show unequal
        treatment on the record, not because it was unhappy with the
        outcome. That distinction is the whole ballgame for anyone
        considering a protest.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What this means for small and nontraditional vendors
      </h2>
      <p className="leading-relaxed text-slate-700">
        <strong>1. OTA does not mean unreviewable — but the venue is the
        Court of Federal Claims, not GAO.</strong> If you are excluded
        from an OTA prototype competition that is tied to a real purchase,
        a protest is now a live option. Budget for the higher threshold
        and the longer timeline of court litigation, not a GAO timetable.
      </p>
      <p className="leading-relaxed text-slate-700">
        <strong>2. Disparate treatment is the argument that wins.</strong>{" "}
        Saildrone&apos;s case turned on one provable claim: the Navy
        applied criteria to it that it did not apply elsewhere. Vendors
        who suspect unfair elimination should preserve the evaluation
        record — solicitation criteria, Q&amp;A, debrief material, and
        any inconsistent treatment across competitors — because that
        record is what a court reviews.
      </p>
      <p className="leading-relaxed text-slate-700">
        <strong>3. Losing is still the normal outcome.</strong> Blue Water
        Autonomy sued on the same facts and lost, and the overall protest
        success rate is low. A protest is a tool for a documented unequal
        evaluation, not a second bite at a competition you simply lost.
      </p>
      <p className="leading-relaxed text-slate-700">
        <strong>4. Phase II is still open — and it is deliberately
        wider.</strong> The September 23 Phase II solicitation drops the
        Phase I speed and at-sea refueling requirements, with testing
        scheduled to begin November 16, 2026 and run as a rolling
        assessment over five years. Vendors that missed the first tranche
        still have a live route into the MUSV marketplace.
      </p>
      <p className="leading-relaxed text-slate-700">
        <strong>5. Track the incumbents, not just the headlines.</strong>{" "}
        The three production winners — and the agencies buying from them —
        are all visible in the FedTalentUSA top-1,000 data. Watching how
        HII&apos;s Navy work moves after this ruling, and which new names
        enter through Phase II, is more useful than following any single
        protest.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What to watch next
      </h2>
      <p className="leading-relaxed text-slate-700">
        Three things will decide whether this ruling is a footnote or a
        turning point. First, the re-evaluation itself: whether
        Saildrone&apos;s proposal survives a fair second look, and whether
        it earns the at-sea demonstration — no public deadline for either
        step had been reported at the time of writing. Second, whether the
        Navy appeals the ruling or the jurisdiction holding, which would
        test whether the OTA-protest door stays open. Third, whether other
        excluded OTA competitors file at the Court of Federal Claims now
        that the path is proven — the ruling&apos;s real legacy may be the
        second and third cases, not the first.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Frequently asked questions
      </h2>
      {FAQS.map((f) => (
        <div key={f.q}>
          <h3 className="mt-8 text-xl font-bold text-slate-900">{f.q}</h3>
          <p className="mt-2 leading-relaxed text-slate-700">{f.a}</p>
        </div>
      ))}

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Sources and method
      </h2>
      <p className="leading-relaxed text-slate-700">
        Program and ruling figures in this article come from the court
        reporting and the Navy&apos;s announcement as covered by the
        outlets below; where a figure is derived rather than announced,
        the article says so. HII&apos;s FY2025 figures are FedTalentUSA
        sums of USAspending.gov prime contract obligations across the
        company&apos;s recipient records (parent and child records
        combined) — not company revenue, and not including subcontracts or
        grants.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
        <li>
          <a
            href="https://www.saildrone.com/media-room/press-releases/saildrone-wins-musv-protest-in-the-us-court-of-federal-claims"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Saildrone press release: Saildrone Wins MUSV Protest
          </a>{" "}
          — the company&apos;s account of the three-criteria exclusion and
          the Navy abandoning two determinations.
        </li>
        <li>
          <a
            href="https://dnyuz.com/2026/11/03/drone-boat-maker-saildrone-wins-protest-over-navy-contract/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            New York Times (via syndication): Drone Boat Maker Saildrone Wins
            Protest Over Navy Contract
          </a>{" "}
          — the ruling, the quote, the $1.5B cap, and the jurisdiction
          analysis.
        </li>
        <li>
          <a
            href="https://news.bgov.com/states-of-play/saildrone-succeeds-in-protest-of-navys-prototype-competition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Bloomberg Government: Saildrone Succeeds in Protest of
            Navy&apos;s Prototype Competition
          </a>{" "}
          — the order, the reinstatement condition, and the &gt;$1.2B in
          follow-on production awards.
        </li>
        <li>
          <a
            href="https://news.bloomberglaw.com/federal-contracting/saildrone-can-proceed-with-2-billion-navy-prototype-protest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Bloomberg Law: Saildrone Can Proceed With $2 Billion Navy
            Prototype Protest
          </a>{" "}
          — the October 29 jurisdiction holding.
        </li>
        <li>
          <a
            href="https://www.shipuniverse.com/naval/a-deeper-look-at-30-drone-ships-three-shipyards-and-1-2-billion-dollars/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            ShipUniverse: A Deeper Look at 30 Drone Ships
          </a>{" "}
          — the September 29 tranche detail and the derived-vs-announced
          $1.2B distinction.
        </li>
        <li>
          <a
            href="https://www.armyrecognition.com/news/navy-news/2026/u-s-navy-buys-30-unmanned-surface-vessels-to-expand-autonomous-operations-across-contested"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Army Recognition: U.S. Navy Buys 30 Unmanned Surface Vessels
          </a>{" "}
          — Phase I test requirements and the three designs.
        </li>
      </ul>
    </div>
  );
}
