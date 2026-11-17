// lib/blog/posts/gsa-mas-refresh-34.tsx — GSA MAS Refresh 34 guide.
// Focus keyword: "GSA MAS Refresh 34" (picked on live SERP intent, Nov 17,
// 2026 — top results are niche govcon blogs and a law-firm post; no
// dominant authority). Conflict check: FREE — no MAS or GSA content in
// the FedTalentUSA blog registry. Trends (US, 12 mo, Nov 17, 2026): the
// exact term has too little data to show a line; the broader term
// "GSA MAS" peaked at 100 in May 2026 and sits at 26 — declining.
// Verdict GO as a news/utility article for MAS holders, not a volume play
// (same pattern as the PERM NPRM guide). Semrush leg is the user's step.
// Accuracy notes (every figure checked against the primary source, Nov 17,
// 2026 — the issued SF30 attachment on SAM.gov, read in full):
// - Refresh 34, solicitation 47QSMD20R0001, published Thursday, Nov 12,
//   2026, 11:16 AM EST. Advance notice Oct 5, 2026 (GSA Interact), with
//   a 10-business-day comment window.
// - Acceptance deadline: check your own Refresh 34 mass-modification
//   notice. GSA generally requires acceptance within 90 days of receipt
//   (SF30: "no later than 90 days after the modification has been
//   issued"). February 10, 2027 is only a computed example — 90 days
//   after the Nov 12, 2026 solicitation issuance — not a universal
//   deadline. The solicitation-level SF30 and each contract's own
//   mass-mod SF30 are different documents.
// - The SF30 prints NO single calendar effective date for the mass
//   modification. Do not state one. Nearest primary dates: GSAR Part 538
//   deviation effective Nov 30, 2026; GSAR Part 552 effective Oct 19,
//   2026 (ADM 2800.12B, Change 200, Attachment A).
// - GSAR Wave 4: 41 GSAR provisions/clauses deleted, 8 FAS FSS clauses
//   removed, 5 new clauses added (552.238-190 to -194); 16 clauses
//   remain. 552.238-81 Price Reductions is deleted. Ordering procedures
//   (538.71) untouched.
// - 552.238-116 evergreen: GSA may extend up to 5 years at a time, "no
//   limit to the number of times this option may be exercised", 30 days'
//   written notice. Applies to the FSS contract only, not orders/BPAs.
// - 552.239-7001 AI clause: deviation (RGO-2026-01), Sept 2026; applies
//   only where LLM functionality is a material feature AND Government
//   Data is submitted to or produced by the LLM. Key numbers: 120-day
//   LLM disclosure; 72-hour incident notice; 7-day bias/safety notice;
//   30-day advance notice of material changes; 30/15-day concurrent
//   access on model deprecation; decommissioning liability capped at 25%
//   of the affected order value; Government may suspend use at any time.
// - 552.238-130 domestic certificate: CD-2026-04, Sept 1, 2026, voluntary;
//   US components above 75% of component cost (iron/steel: foreign iron
//   or steel below 5%). Knowingly false certification can bring False
//   Claims Act remedies. OMB clearance still pending — until then GSA
//   will not enforce the clause or share the data, and no one may rely on
//   a certification or its absence. Accepting the mass mod does NOT
//   certify anything.
// - Nitrile gloves: intent only — nothing is removed by Refresh 34.
//   OMB memorandum dated Aug 31, 2026 (memo text not located; GSA's
//   summary only). In scope: powder-free, medical-grade nitrile gloves,
//   4 mil and 5 mil blue and 6 mil black.
// - SIN changes (only two): 561210FAC HVAC Maintenance subgroup removed;
//   54151HACS voluntary Incident Response subgroup phased out at the end
//   of FY2027 (Sept 30, 2027). No SINs added or deleted.
// - Non-acceptance, 552.238-191(h): pricing and catalog data "may" be
//   temporarily removed or the contract "may" be cancelled — discretionary,
//   not automatic termination.
// - Sales criteria, 552.238-194: $100,000 in the first 60 months,
//   $125,000 in each 60-month period thereafter. The thresholds are NOT
//   new — they already appeared in I-FSS-639 (Sept 2023); the clause is
//   new, the dollar figures are not.
// - NOT in this guide (unverified, deliberately excluded): MAS holder
//   counts and FY2025 MAS sales totals (~14,579 / ~$50.6B — secondary
//   only); the Refresh 34 mass modification number; the Oct 26, 2026
//   industry webinar; the 12-category / 277-SIN counts (secondary only).
// Registry metadata (for lib/blog.ts at push time):
// slug "gsa-mas-refresh-34"; title "GSA MAS Refresh 34: Evergreen
// Contracts, AI Rules & Next Steps";
// date 2026-11-17; readingMinutes 14; (body prose ~3,300 words; 14 min
// at a normal reading pace. Full visible text including tables, FAQs, and
// sources is ~4,400 words.)
// excerpt "GSA's MAS Refresh 34, issued November 12, 2026, ends the
// 20-year contract limit, adds an AI data-safeguarding clause and a
// voluntary domestic end product certificate. What changed, what it means
// for your contract, and how to accept the mass modification."
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
    q: "What is the deadline to accept the MAS Refresh 34 mass modification?",
    a: "Check your Refresh 34 mass-modification notice for your acceptance deadline. GSA generally requires acceptance within 90 days of receipt; do not calculate your contract's deadline solely from the solicitation publication date. The solicitation refresh was issued November 12, 2026, so a modification issued that day would compute to February 10, 2027 — but that is an example, not your deadline. Your own Mass Mod Portal notice is the controlling document for your contract.",
  },
  {
    q: "What happens if I do not accept the mass modification?",
    a: "Under clause 552.238-191(h), failure to accept a mass modification by the acceptance date designated by the FSS Contracting Officer may result in your pricing and catalog data being temporarily removed, or your contract being cancelled. The word is may — it is a discretionary remedy, not automatic termination the day after the deadline. An unsigned modification also rolls into the next mass modification rather than disappearing.",
  },
  {
    q: "Does Refresh 34 really remove the 20-year limit on MAS contracts?",
    a: "Yes. The revised clause 552.238-116 lets GSA extend the term of an FSS contract for up to 5 years at a time, with no limit on the number of times the option may be exercised, on 30 days' written notice. The old clause allowed three 5-year options after the base period — a 20-year maximum — after which a contractor had to win a new contract to stay on the Schedule. The new clause applies to the FSS contract itself, not to orders or BPAs placed against it.",
  },
  {
    q: "Does the new AI clause apply to my contract?",
    a: "Only if a two-part test is met: in performance of the order, BPA, or contract, the Government is procuring a system where LLM functionality is a material feature, and Government Data will be submitted directly to or produced by the LLM. If LLM use is limited to your internal business systems, or the LLM feature is incidental to the commercial product being procured, the clause imposes no obligation unless the contracting officer says otherwise.",
  },
  {
    q: "Do I have to certify my products as domestic end products?",
    a: "No. Clause 552.238-130 is voluntary — you may certify listed products as FSS domestic end products, but nothing requires it. Treat a certification as a serious step, not a marketing badge: it is a material representation of fact, and a knowingly false certification can bring remedies under the False Claims Act. OMB clearance for the information collection is still pending, and until it arrives GSA will not enforce the clause or share the data, so no one may rely on a certification or its absence. Accepting the mass modification does not certify anything by itself.",
  },
  {
    q: "What changed for SIN 561210FAC and SIN 54151HACS?",
    a: "Under SIN 561210FAC (Facilities Support Services), the HVAC Maintenance subgroup is removed — HVAC maintenance is no longer a standalone offering, and GSA will not award MAS contracts to offerors only offering services such as janitorial, plumbing, electrical, or HVAC maintenance that complete facilities maintenance contractors can perform. Under SIN 54151HACS (Highly Adaptive Cybersecurity Services), the voluntary Incident Response subgroup is phased out at the end of fiscal year 2027, September 30, 2027; contractors in that subgroup who do not hold the Incident Handling and Event Management subgroup may evaluate eligibility and request placement in it.",
  },
  {
    q: "When do the Refresh 34 changes take effect for orders?",
    a: "The refresh's changes apply to all new task and delivery orders issued after the modification's effective date, including BPA calls under existing BPAs. Orders issued before the effective date remain governed by the terms and conditions in effect at the time of award. The issued SF30 does not print a single calendar effective date for the mass modification; the nearest primary dates are the GSAR Part 538 deviation effective November 30, 2026, and the GSAR Part 552 effective date of October 19, 2026.",
  },
  {
    q: "How do I accept the mass modification?",
    a: "Through the Mass Mod Portal at mcm.fas.gsa.gov. Your authorized negotiator logs in with a FAS ID and multi-factor authentication, reviews the modification, and signs it electronically. Do not use eOffer/eMod for this — that system is for contractor-initiated modifications, such as adding a SIN or changing prices. The modification must be accepted no later than 90 days after issuance, and GSA's guidance frames the clock as 90 days from receipt — check your own notice for the date that applies to your contract.",
  },
];

export default function MasRefresh34Content() {
  return (
    <div>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        GSA issued Multiple Award Schedule (MAS) Refresh 34 on November 12,
        2026, and it is the most structurally significant refresh in recent
        memory. It ends the 20-year limit on MAS contracts, adds a new clause
        that governs how government data may be used inside large language
        model systems, creates a voluntary certificate for domestic end
        products, and rewrites the GSAR clauses that sit behind every
        schedule contract. Every existing MAS holder must accept the mass
        modification that carries these changes into their contract —
        generally within 90 days of receipt. Check your own
        mass-modification notice for the deadline that applies to your
        contract.
      </p>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="font-semibold text-amber-900">
          Check your notice for your acceptance deadline
        </p>
        <p className="mt-2 text-sm leading-relaxed text-amber-900">
          GSA generally requires the Refresh 34 mass modification to be
          accepted within 90 days of receipt. The solicitation refresh was
          issued November 12, 2026, so a modification issued that day would
          compute to Wednesday, February 10, 2027 — but that is an example,
          not a universal deadline. Do not calculate your contract&apos;s
          deadline solely from the solicitation publication date: your own
          Mass Mod Portal notice is the controlling date. Accept it in the
          Mass Mod Portal at mcm.fas.gsa.gov; your authorized negotiator
          signs it electronically. If you miss the date, your pricing and
          catalog data may be temporarily removed, or your contract may be
          cancelled under clause 552.238-191(h). This notice is dated
          November 17, 2026.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
        <p className="font-semibold text-slate-900">At a glance</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            <strong>Issued:</strong> Thursday, November 12, 2026, 11:16 AM
            Eastern — solicitation 47QSMD20R0001, Refresh Number 0034.
          </li>
          <li>
            <strong>Acceptance deadline:</strong> check your Refresh 34
            mass-modification notice — GSA generally requires acceptance
            within 90 days of receipt. (A modification issued November 12,
            2026 computes to February 10, 2027.)
          </li>
          <li>
            <strong>Evergreen contracts:</strong> the 20-year cap is gone.
            GSA may extend an FSS contract for up to 5 years at a time, with
            no limit on the number of extensions.
          </li>
          <li>
            <strong>New AI clause:</strong> 552.239-7001 governs government
            data inside LLM systems — it applies only where LLM functionality
            is a material feature and government data is involved.
          </li>
          <li>
            <strong>Voluntary certificate:</strong> 552.238-130 lets you
            certify listed products as FSS domestic end products. It is
            optional, and a false certification can bring False Claims Act
            remedies.
          </li>
          <li>
            <strong>Clause rewrite:</strong> 41 GSAR provisions and clauses
            deleted, 8 FAS schedule clauses removed, 5 new clauses added
            (552.238-190 to -194). The Price Reductions clause (552.238-81)
            is deleted.
          </li>
          <li>
            <strong>SIN changes:</strong> only two — HVAC maintenance leaves
            SIN 561210FAC; the Incident Response subgroup phases out of SIN
            54151HACS on September 30, 2027.
          </li>
        </ul>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 1</p>
          <p className="mt-1 font-bold text-slate-900">Accept</p>
          <p className="mt-1 text-sm text-slate-600">Sign the mass mod in the Mass Mod Portal by the date on your notice</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 2</p>
          <p className="mt-1 font-bold text-slate-900">Check the AI clause</p>
          <p className="mt-1 text-sm text-slate-600">Does 552.239-7001 bite on your orders? Run the two-part test</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 3</p>
          <p className="mt-1 font-bold text-slate-900">Decide on the certificate</p>
          <p className="mt-1 text-sm text-slate-600">Certify only products you can document line by line — or skip it</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 4</p>
          <p className="mt-1 font-bold text-slate-900">Check your SINs</p>
          <p className="mt-1 text-sm text-slate-600">HVAC maintenance and Incident Response holders need a plan</p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What Refresh 34 is
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The Multiple Award Schedule is the government&apos;s largest
        contracting vehicle: one solicitation, 47QSMD20R0001, under which
        agencies buy commercial products and services from companies that
        already hold a schedule contract. GSA updates that solicitation in
        periodic refreshes, and each refresh is carried into existing
        contracts by a mass modification that holders must accept. Refresh 34
        was published on SAM.gov on November 12, 2026, with an SF30
        attachment summarizing its significant changes. GSA had previewed it
        on October 5, 2026, on GSA Interact, with a 10-business-day comment
        window on the draft changes document — the issued version matches
        that draft in substance.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Refresh 34 is not a routine update. It carries the final wave of
        GSA&apos;s Revolutionary FAR Overhaul as it applies to the schedule
        program — GSAR Overhaul Wave 4 — plus two new clauses created by
        class deviation and a sourcing change driven by an OMB memorandum.
        The changes apply to all new task and delivery orders issued after
        the modification&apos;s effective date, including BPA calls under
        existing BPAs. Orders issued before that date remain governed by the
        terms in effect when they were awarded.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        One caution before the details: the issued SF30 does not print a
        single calendar effective date for the mass modification. The closest
        primary dates are the effective dates of the underlying GSAR
        deviations — November 30, 2026 for GSAR Part 538 (the schedule
        program) and October 19, 2026 for GSAR Part 552 (clauses, including
        the AI clause). This guide gives those dates where they belong and
        does not invent a mass-modification effective date.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The changes at a glance
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Five groups of changes arrive with Refresh 34. The first three touch
        every schedule contract; the last two are targeted.
      </p>
      <Table
        head={["Change", "What it does", "Who it affects"]}
        rows={[
          [
            "GSAR Overhaul Wave 4 (Part 538)",
            "Removes the 20-year contract limit; deletes 41 GSAR provisions and clauses, removes 8 FAS schedule clauses, adds 5 new clauses (552.238-190 to -194)",
            "Every MAS holder",
          ],
          [
            "New AI clause 552.239-7001",
            "Sets safeguarding, ownership, and reporting rules for government data inside LLM systems",
            "Holders whose orders use LLMs as a material feature with government data",
          ],
          [
            "Voluntary certificate 552.238-130",
            "Lets offerors certify listed products as FSS domestic end products",
            "Product offerors and contractors — optional for all",
          ],
          [
            "Nitrile glove removal (intent)",
            "GSA intends to remove covered nitrile gloves from MAS contracts; nothing is removed by Refresh 34 itself",
            "Contractors offering the listed glove variants",
          ],
          [
            "SIN changes",
            "HVAC Maintenance subgroup leaves 561210FAC; Incident Response subgroup phases out of 54151HACS on Sept 30, 2027",
            "Holders of those two SINs only",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        No SINs were added or deleted in Refresh 34. The instructions
        applicable to all offerors (SCP-FSS-001) were also updated to reflect
        the Wave 4 overhaul, the domestic certificate deviation, and the
        nitrile glove memorandum. If you are new to federal contracting and
        the schedule program, start with our{" "}
        <Link href="/blog/how-to-get-government-contracts" className="font-medium text-blue-700 hover:underline">
          step-by-step guide to getting government contracts
        </Link>
        , which explains SAM.gov registration and how the schedule fits into
        the $554 billion federal contracting market.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Evergreen contracts: the 20-year limit is gone
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The headline change for most holders is the simplest one. Under the
        old clause, a MAS contract ran a 5-year base period plus up to three
        5-year options — a 20-year maximum. When the clock ran out, the
        contractor had to win a new contract through the Streamlined
        Acquisition process to stay on the Schedule. Refresh 34 deletes that
        cap.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The revised clause 552.238-116, Option to Extend the Term of the FSS
        Contract, now reads in full: GSA may extend the term of the contract
        for up to an additional 5-year period, and{" "}
        <strong>
          there is no limit to the number of times this option may be
          exercised
        </strong>
        . The FSS Contracting Officer exercises the option by giving written
        notice to the contractor 30 days before the contract expires. The
        5-year increment and the 30-day notice are unchanged from the old
        clause — only the three-exercise cap is gone.
      </p>
      <Table
        head={["", "Before Refresh 34", "After Refresh 34"]}
        rows={[
          [
            "Maximum contract life",
            "20 years (5-year base + three 5-year options)",
            "No maximum — unlimited 5-year extensions",
          ],
          [
            "Extension increment",
            "Up to 5 years",
            "Up to 5 years (unchanged)",
          ],
          [
            "Notice to extend",
            "Written notice 30 days before expiry",
            "Written notice 30 days before expiry (unchanged)",
          ],
          [
            "After the maximum",
            "Win a new contract (Streamlined Acquisition)",
            "No new contract needed while extensions continue",
          ],
          [
            "Applies to",
            "The FSS contract",
            "The FSS contract only — not orders or BPAs",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        Evergreen does not mean permanent. A contract still ends if the
        Contracting Officer elects not to extend it, if it is cancelled, or
        if it is terminated. Refresh 34 places the sales criteria in GSAR
        552.238-194. The $100,000 and $125,000 thresholds already appeared
        in I-FSS-639; the new clause revises the contractual wording and
        available remedies. Under it, the Contracting Officer may elect not
        to extend the term — or take other appropriate remedies as
        authorized by law, regulation, and other rights under the contract —
        if sales do not exceed $100,000 within the first 60 months after
        award and $125,000 in each 60-month period thereafter. Low-volume
        holders should read that clause as the real condition on evergreen
        status: the cap is gone, but the contract still has to earn its
        keep.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The same Wave 4 consolidation deleted 41 GSAR provisions and
        clauses, removed eight FAS schedule clauses, and added five new
        ones — 552.238-190 (Contractor Team Arrangements), 552.238-191
        (Contract Requirements), 552.238-192 (Order-level Requirements),
        552.238-193 (Product Offering and Sales Requirements), and
        552.238-194 (Sales Criteria). Sixteen GSAR clauses remain in total.
        One deletion worth noting by name: the Price Reductions clause,
        552.238-81, is deleted. The economic price adjustment clause moves
        from 552.238-120 to 552.516-90 Alt I. Ordering procedures under
        GSAR 538.71 were not revised in this wave.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The new AI clause: 552.239-7001
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Refresh 34 creates GSAR Part 539 and adds a new clause,
        552.239-7001, Basic Safeguarding of Data within Large Language Model
        Artificial Intelligence Systems. It was created by GSA class
        deviation RGO-2026-01, issued in response to Executive Order 14275,
        and the clause text is dated September 2026. It is a deviation, not
        a final rule — formal rulemaking with public comment is to follow.
        GSAR Part 552 took effect October 19, 2026.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The first question for any holder is whether the clause applies to
        them at all. It applies only to the extent that, in performance of
        the task or delivery order, BPA, or contract, the Government is
        procuring an LLM, generative assistant, chatbot, agentic system,
        LLM-enabled document or productivity tool, or similar system where
        two conditions are both true: LLM functionality is a material
        feature, and Government Data will be submitted directly to or
        produced by the LLM. If LLM use is limited to your internal business
        systems — back office, operations, or performance support that the
        Government never sees — or the LLM feature is incidental to the
        commercial product being procured, the clause imposes no obligation
        unless the contracting officer says otherwise.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Where it does apply, the clause is detailed and strict. The points
        that matter most to a contractor:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>Ownership.</strong> The Government owns all Government
          Data and all Custom Developments — including fine-tuned model
          weights. You keep the underlying LLM, base models, and your
          pre-existing Background Data. Any IP rights you obtain in
          Government Data or improvements incorporating it are assigned to
          the Government immediately upon creation.
        </li>
        <li>
          <strong>Prohibited uses.</strong> You may not train or fine-tune
          any LLM on Government Data, use it for advertising, marketing,
          sales, monetization, strategy, or other business decisions, or
          provide it to other entities. The permitted uses are narrow:
          performing the work, de-identified aggregated security telemetry,
          technical support and maintenance, and uses the Contracting Officer
          authorizes in writing.
        </li>
        <li>
          <strong>Safeguards.</strong> Reasonable technical, administrative,
          physical, and organizational safeguards; access restricted to
          authorized personnel; encrypted transmission and processing; audit
          logging that tracks processing without capturing or displaying
          actual Government Data. Zero-persistence architectures satisfy the
          access restriction. Government Data must stay on agreed premises
          or FedRAMP-authorized services, and must be logically segregated
          from other customers&apos; data.
        </li>
        <li>
          <strong>Disclosure within 120 days.</strong> You must disclose
          the LLMs used to process Government Data by the date in the
          contract or order — or, if none is specified, within 120 days
          after commencing work. Existing artifacts such as model cards,
          FedRAMP packages, SOC 2 reports, or ISO/IEC 27001 certifications
          may satisfy this.
        </li>
        <li>
          <strong>72-hour incident notice.</strong> Any FISMA incident
          affecting an LLM used in performance that may affect the
          confidentiality, integrity, or availability of Government Data must
          be reported as soon as possible and no later than 72 hours after
          discovery, with daily status updates until resolved. Preserve logs
          and forensic artifacts for at least 90 calendar days and complete
          the CISA incident reporting form.
        </li>
        <li>
          <strong>Change notice.</strong> Thirty calendar days&apos;
          advance written notice before adding, replacing, or materially
          changing any LLM, developer, operator, integrator, or service
          provider — or before any change to services handling Government
          Data. Model deprecation requires concurrent access to the
          successor model for at least 30 calendar days for major versions
          and 15 for minor versions. A material increase in output bias, a
          decrease in safety guardrails, or a degradation in performance or
          truthfulness must be reported within 7 calendar days.
        </li>
        <li>
          <strong>End of performance.</strong> At completion, termination,
          or expiration of the contract, order, or BPA, securely and
          permanently delete all Government Data and all Custom Developments
          — including fine-tuned weights, embeddings, indexes, and caches —
          from the LLM and all other systems, unless the Contracting Officer
          directs otherwise in writing. Document the deletion in writing,
          including coverage of copies, backups, and derivatives.
        </li>
        <li>
          <strong>Precedence and suspension.</strong> In a conflict with
          your own policies, commercial supplier agreements, license
          agreements, or terms of service, the clause takes precedence. The
          Government may suspend use of the LLM at any time. If the
          Contracting Officer terminates for cause after written notice of
          non-compliance, your liability for reasonable decommissioning
          costs is capped at 25% of the value of the affected task or
          delivery order.
        </li>
      </ul>
      <p className="mt-4 leading-relaxed text-slate-700">
        The clause also flows down: you must flow the applicable paragraphs
        to any subcontractor performing AI design, development, deployment,
        or operation and monitoring tasks under the NIST AI Risk Management
        Framework where that entity handles Government Data. And it states a
        U.S. preference — maximize use of LLMs developed, managed, and
        operated in the United States, subject to U.S. law and jurisdiction,
        and not controlled by a foreign government or compelled to disclose
        Government Data. Sellers of AI-enabled products should treat this
        clause as the section of Refresh 34 most likely to change how they
        deliver, not just how they contract.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The voluntary domestic end product certificate: 552.238-130
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Refresh 34 adds a new clause, 552.238-130, the Federal Supply
        Schedule Domestic End Product Certificate, created by GSA Class
        Deviation CD-2026-04 dated September 1, 2026. It implements
        Executive Order 14392, Ensuring Truthful Advertising of Products
        Claiming to be Made in America. The clause is inserted in all FSS
        solicitations and contracts — but using it is entirely voluntary.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        A product qualifies as an FSS domestic end product when three things
        are all true: it is offered for sale on your Schedule contract, it
        is manufactured in the United States, and its components pass a
        content test. For most products, U.S.-mined, produced, or
        manufactured components must exceed 75% of all component costs. For
        products consisting wholly or predominantly of iron or steel, foreign
        iron or steel must be less than 5% of total component costs. The
        certification itself is a product-level table in the clause — product
        name, manufacturer part number, manufacturer name — with rows added
        as needed.
      </p>
      <Table
        head={["Product type", "Component test for domestic status"]}
        rows={[
          [
            "Most products",
            "Cost of U.S.-mined, produced, or manufactured components exceeds 75% of all component costs",
          ],
          [
            "Products wholly or predominantly iron or steel",
            "Cost of foreign iron or steel is less than 5% of total component costs",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        Two warnings matter more than the test itself. First, the
        certification is a material representation of fact to the Government.
        If it is later determined that you knowingly rendered an erroneous
        certification, the Government may pursue any available remedies,
        including under the False Claims Act. Certify only the SKUs you can
        document line by line. A dealer, distributor, or reseller acting in
        good faith may rely on information from the original equipment
        manufacturer plus commercially reasonable best efforts; an OEM may
        rely on commercially reasonable due-diligence best efforts.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Second, the certificate is not fully live yet. GSA is seeking OMB
        clearance for the information collection behind it, and until that
        clearance arrives, GSA will not enforce compliance with the clause
        requirements and will not share the information received — and no
        one may rely on a certification or its absence. Once clearance is
        received, GSA will tell the workforce that full compliance may be
        enforced. And accepting the Refresh 34 mass modification does not
        certify anything by itself; certification is a separate, voluntary
        step. It does not waive or modify the Trade Agreements Act or any
        applicable trade agreement.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Nitrile gloves and the two SIN changes
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The fourth change in Refresh 34 is an intent, not an action. Under
        an OMB memorandum dated August 31, 2026, GSA intends to move toward
        removing MAS items that fall within the scope of the Department of
        Homeland Security&apos;s Best-in-Class PPE Safety Stock contract for
        domestically manufactured nitrile gloves. The items in scope are
        powder-free, medical-grade nitrile gloves in 4 mil and 5 mil blue
        varieties and a 6 mil black variety. GSA will engage directly with
        affected contractors to validate scope and consider feedback before
        proceeding with any removal — Refresh 34 itself removes nothing.
        Glove sellers should expect contact from GSA rather than a sudden
        delisting.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Only two Special Item Numbers change, and neither is added or
        deleted. Under SIN 561210FAC (Facilities Support Services), the HVAC
        Maintenance subgroup is removed and the SIN notes are revised to
        eliminate HVAC maintenance as a standalone offering. GSA will not
        award MAS contracts to offerors only offering service types such as
        janitorial, plumbing, electrical, or HVAC maintenance that complete
        facilities maintenance contractors can perform. The only standalone
        services allowable under the SIN are now HVAC services (with a
        technical response showing experience in boilers, chillers,
        refrigeration, and similar systems), maintenance of fire alarm
        systems, maintenance of fire suppression systems, and elevator and
        escalator inspection and maintenance.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Under SIN 54151HACS (Highly Adaptive Cybersecurity Services), the
        voluntary Incident Response subgroup is phased out at the end of
        fiscal year 2027 — September 30, 2027. Contractors currently under
        that subgroup who do not hold the Incident Handling and Event
        Management (IHEM) subgroup may evaluate their eligibility and
        request placement in IHEM, which incorporates Incident Response
        capabilities. If you hold either SIN, the refresh is not only a
        contract update — it is a decision about where your offerings live
        next.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        How to accept the mass modification
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        GSA issues mass modifications directly to MAS contractors through
        the Mass Mod Portal at mcm.fas.gsa.gov. Your authorized negotiator
        logs in with a FAS ID and multi-factor authentication, reviews the
        modification, and signs it electronically. Do not confuse this with
        eOffer/eMod — that system is for contractor-initiated modifications,
        such as adding a SIN, changing prices, or updating your catalog.
        The mass modification comes from GSA; you accept it in the portal.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The rule in the SF30 is plain: the mass modification applying the
        Refresh 34 changes is to be accepted by the contractor no later than
        90 days after the modification has been issued. GSA&apos;s standing
        guidance frames the same clock as 90 days from receipt. What that
        means in practice: your deadline runs from your own
        modification&apos;s issuance or receipt, not from the solicitation
        refresh date. The solicitation refresh was issued November 12, 2026,
        so a modification issued that day would compute to Wednesday,
        February 10, 2027 — treat that as an example, not your deadline.
        The notice in your own Mass Mod Portal is the controlling document
        for your contract. And if you do not sign before the next mass
        modification is released, the next one will include the unsigned
        changes — an unsigned modification does not simply vanish.
      </p>
      <Table
        head={["Step", "Where", "What happens"]}
        rows={[
          [
            "1. Open the notice",
            "Mass Mod Portal (mcm.fas.gsa.gov)",
            "Your authorized negotiator logs in with FAS ID and multi-factor authentication",
          ],
          [
            "2. Review the modification",
            "Mass Mod Portal",
            "Read the Refresh 34 changes as applied to your contract, including the new and deleted clauses",
          ],
          [
            "3. Sign electronically",
            "Mass Mod Portal",
            "The authorized negotiator signs; the modification is accepted",
          ],
          [
            "4. Confirm",
            "Mass Mod Portal / your records",
            "Keep the signed modification on file; check that the changes show on your contract record",
          ],
        ]}
      />

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What happens if you do not accept
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The controlling text is clause 552.238-191(h), Modifications, as
        revised in Refresh 34:
      </p>
      <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-700">
        &ldquo;GSA may issue mass modifications for purposes of revising the
        terms and conditions of this contract. Failure to accept a mass
        modification by the acceptance date designated by the FSS
        Contracting Officer may result in Contractor pricing and catalog
        data being temporarily removed or this contract being
        cancelled.&rdquo;
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Read the sentence carefully: the consequence is that your pricing
        and catalog data may be temporarily removed — your offerings
        disappearing from GSA Advantage! and the catalog — or your contract
        may be cancelled. The word is &ldquo;may,&rdquo; not &ldquo;will.&rdquo;
        It is a discretionary remedy for the Contracting Officer, not
        automatic termination the day after the deadline, and no GSA source
        states that orders stop or that a contractor is debarred for missing
        the date. That distinction matters, but it is not a reason to test
        it: a temporary removal of catalog data is itself a serious
        commercial event for a schedule holder.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Two related provisions in the same refresh add to the picture.
        Under 552.238-194, the Contracting Officer may elect not to extend
        the contract if the sales criteria are not met — $100,000 in the
        first 60 months, $125,000 in each 60-month period thereafter. Under
        552.238-193, resellers and distributors must not offer products
        they are not authorized to sell; if GSA finds a discrepancy, the
        contractor has 30 days to respond, and failure to resolve it may
        result in termination or cancellation. Refresh 34 tightens the
        contract from several directions at once.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What to do now
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        If you hold a MAS contract, work through this list before the
        acceptance date on your mass-modification notice:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>Accept the mass modification.</strong> Log in to the Mass
          Mod Portal, review the Refresh 34 modification, and sign it. Put
          the date from your own portal notice — not this guide — on your
          calendar.
        </li>
        <li>
          <strong>Run the AI clause test on your offerings.</strong> For
          each order and product line, ask the two questions: is LLM
          functionality a material feature, and will Government Data be
          submitted to or produced by the LLM? If yes, map the clause&apos;s
          obligations — 120-day disclosure, 72-hour incident notice,
          30-day change notice — onto your delivery process before the next
          order.
        </li>
        <li>
          <strong>Decide on the domestic certificate deliberately.</strong>
          If you sell products, check which SKUs pass the 75% or 5% content
          test and whether you can document them. If you cannot document a
          product line by line, do not certify it — and remember the
          certificate is voluntary and not yet enforceable.
        </li>
        <li>
          <strong>Check your SINs.</strong> HVAC maintenance holders under
          561210FAC and Incident Response holders under 54151HACS should
          plan now — for the latter, evaluate the IHEM subgroup before the
          September 30, 2027 phase-out.
        </li>
        <li>
          <strong>Check your sales against the applicable sales criteria.</strong>{" "}
          $100,000 in the first 60 months, $125,000 in each 60-month period
          after. If you are close to the line, the evergreen extension is
          not guaranteed.
        </li>
        <li>
          <strong>Update your catalog and price lists.</strong> The Price
          Reductions clause is deleted and several clauses are consolidated
          into 552.238-190 to -194 — make sure your internal contract
          references and compliance checklists point at the current clause
          numbers.
        </li>
      </ul>
      <p className="mt-4 leading-relaxed text-slate-700">
        Refresh 34 rewards holders who treat it as a contract event, not a
        paperwork event. Checking your own acceptance date is the easy part.
        The AI clause and the certificate are the parts that change how you
        sell — and they are worth reading in the primary sources linked
        below before you sign.
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
            href="https://sws.gsa.gov/sws-search/viewSolDocument.do?method=view&solNum=NDdRU01EMjBSMDAwMQ==&solRefresh=MDAzNA==&solDoc=MDkwMDI5YjQ4ZWJmMDc0ZQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Issued SF30 attachment, MAS Refresh 34 (solicitation
            47QSMD20R0001)
          </a>{" "}
          — the refresh itself: summary of significant changes and the full
          added, updated, and deleted clause lists, including the text of
          552.238-116, 552.238-130, 552.238-191, and 552.239-7001.
        </li>
        <li>
          <a
            href="https://sam.gov/workspace/contract/opp/9e966a416a40493b9ece3952de8241d0/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SAM.gov notice 47QSMD20R0001
          </a>{" "}
          — Refresh 34 published November 12, 2026, 11:16 AM Eastern.
        </li>
        <li>
          <a
            href="https://buy.gsa.gov/interact/system/files/Significant_Changes_Attachment%20for%20MAS%20Refresh%2034.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Advance-notice Significant Changes document (buy.gsa.gov)
          </a>{" "}
          — the October 5, 2026 preview of Refresh 34 and its draft changes.
        </li>
        <li>
          <a
            href="https://www.gsa.gov/policy-regulations/policy/acquisition-policy/acquisition-policy-library-and-resources/cd202604"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            GSA Class Deviation CD-2026-04 (September 1, 2026)
          </a>{" "}
          — voluntary FSS Domestic End Product Certification, clause
          552.238-130.
        </li>
        <li>
          <a
            href="https://www.gsa.gov/system/files/RGO-2026-01-Signed_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            GSA memorandum RGO-2026-01
          </a>{" "}
          — GSAR class deviations in response to Executive Order 14275,
          including the AI clause 552.239-7001.
        </li>
        <li>
          <a
            href="https://www.gsa.gov/system/files/ADM%202800.12B%2C%20Change%20200_Signed_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            GSA Order ADM 2800.12B, Change 200, Attachment A
          </a>{" "}
          — effective dates: GSAR Part 538 on November 30, 2026; GSAR Part
          552 on October 19, 2026.
        </li>
        <li>
          <a
            href="https://www.gsa.gov/sell-to-government/step-1-learn-about-government-contracting/how-to-access-contract-opportunities/help-with-mas-contracts-to-sell-to-government/requirements-after-getting-a-mas-contract/modification-and-mass-modification-guidance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            GSA modification and mass modification guidance
          </a>{" "}
          — how to accept a mass modification, the 90-day rule, the Mass
          Mod Portal, and eOffer/eMod.
        </li>
        <li>
          <a
            href="https://mcm.fas.gsa.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Mass Mod Portal
          </a>{" "}
          — where MAS contractors accept mass modifications.
        </li>
        <li>
          <a
            href="https://www.gsa.gov/policy-regulations/policy/acquisition-policy/acquisition-policy-library-and-resources"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            GSA acquisition policy library
          </a>{" "}
          — RGO-2026-01 and CD-2026-04 listings.
        </li>
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-slate-500">
        This guide is general information about GSA MAS Refresh 34 as of
        November 17, 2026. It is not legal advice. Clause texts, deadlines,
        and GSA guidance change — check the sources above, and the notice in
        your own Mass Mod Portal, before acting. February 10, 2027 is a
        computed example (90 days after the November 12, 2026 solicitation
        issuance), not a universal deadline; your portal notice controls.
        Figures attributed to GSA are as stated in the issued SF30 and the
        cited GSA memoranda.
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
