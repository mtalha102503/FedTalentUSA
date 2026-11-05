// lib/blog/posts/8a-certification.tsx — SBA 8(a) certification guide.
// Focus keyword: "8(a) certification" (Semrush US 2.4K, KD 24%, Informational,
// CPC $3.60). Cluster 315 variations / 5.4K total. Gate PASS 2026-11-06.
// Unlike the ranking guides, this guide's figures are PROGRAM RULES from
// the SBA and 13 CFR Part 124 (current as of Nov 2026), plus SBA's own
// FY2025 scorecard data — 8(a) certification is a program, not a ranking,
// and the top-1,000 prime-contractor database does not contain 8(a) firms.
// Accuracy notes (every figure checked against the regulation or SBA, Nov 2026):
// - The mentor-protégé consolidation rule is from 2020 (85 FR 66146, eff.
//   Nov 16, 2020), NOT 2026. Any guide dating it to 2026 is wrong.
// - Social disadvantage: the September 2026 rewrite (91 FR 51568, eff.
//   Sept 10, 2026) removed the presumption AND retired the personal
//   narrative. The two-part evidence test replaced both.
// - Sole-source ceilings are $5.5M other / $8.5M manufacturing
//   (FAR 19.805-1, Oct 1, 2025 inflation adjustment, 90 FR 41872).
//   $4.5M/$7M is stale — still printed in 13 CFR 124.506 and on SBA's
//   own program page; the FAR-adjusted figures govern.
// - Justification thresholds: civilian above $30M (FAR 6.204(b), raised
//   from $25M by the same Oct 2025 adjustment); DoD above $100M
//   (DFARS 206.303-1). The $150M figure in some guides is the FAR 6.304
//   approval tier, not the 8(a) trigger — it does not belong here.
// - JV pre-approval was eliminated for COMPETITIVE 8(a) awards only.
//   Sole-source 8(a) JV awards still need SBA approval before award
//   (13 CFR 124.513). The 40% protégé share is measured on the work
//   performed by the partners, not on the whole contract.
// - Reapply after a denial: any time after 90 calendar days from the
//   final decision (13 CFR 124.207). There is no 12-month wait after a
//   third denial in the regulation.
// - Annual financial statements (13 CFR 124.602): under $7.5M in-house
//   or compilation (90 days); $7.5M–$20M CPA-reviewed (90 days);
//   over $20M audited (120 days). The $2M/$10M tiers in some guides
//   are wrong.
// - Per-participant cap (13 CFR 124.519): $168.5M combined 8(a) awards
//   during participation; above it, no more sole-source awards
//   (competitive awards still allowed). Entity-owned firms are exempt.
// - FY2025 award figures are AS REPORTED BY SBA in its FY2025
//   scorecard (June 25, 2026 announcement); no independent
//   USAspending transaction-level check has been performed.
// - Returned-application deadline: applications returned on Sept 10,
//   2026 must be resubmitted by Dec 24, 2026 (SBA Certifications
//   announcements page; extended from Oct 25, 2026). Dated Nov 6, 2026.
// - The step cards in this file use Tailwind only — no third-party
//   images or screenshots, so they carry no third-party copyright.
//   (An earlier inline SVG diagram was replaced with cards because
//   its 11px text scaled to ~5.5px on mobile and was unreadable.)
// Registry metadata (for lib/blog.ts at push time):
// slug "8a-certification"; title "SBA 8(a) Certification in 2026:
// Eligibility and How to Apply"; date 2026-11-06; readingMinutes 14;
// (body prose ~3,300 words; 14 min at a normal reading pace. Full
// visible text including tables, FAQs, and sources is ~4,450 words.)
// excerpt "SBA 8(a) certification opens federal set-aside and sole-source
// contracts to qualifying small firms. This guide covers the September
// 2026 social-disadvantage standard, the three economic tests, how to
// apply, sole-source limits, and staying eligible for the full nine years."
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
    q: "How long does 8(a) certification last?",
    a: "For a new applicant, the standard program term is nine years: four developmental years followed by five transitional years. The term starts on the date of the SBA approval letter. There is no re-entry after a firm leaves the program, so the nine years are a one-time window.",
  },
  {
    q: "What is the sole-source limit for 8(a) contracts?",
    a: "An agency must compete an 8(a) requirement among eligible participants when two conditions are both met: the anticipated value, including options, exceeds $5.5 million for most acquisitions ($8.5 million for manufacturing NAICS codes), and at least two eligible and responsible participants are expected to submit offers at a fair market price. If either condition is missing — the value is below the ceiling, or no two eligible and responsible participants are expected to compete — the agency can award sole-source to one eligible participant. Tribally owned and Alaska Native Corporation-owned firms can receive sole-source awards above the ceilings.",
  },
  {
    q: "How long does SBA take to decide an 8(a) application?",
    a: "SBA advises the applicant within 15 days of receipt whether the submission is complete. The 90-day processing period runs from the date SBA receives a complete package — not from the first submission. If SBA asks for clarification or revised information, the clock stops until the applicant responds. Practitioners report reviews taking longer than a year in some 2025–26 cases, so do not plan around a flat 90 days.",
  },
  {
    q: "Can I reapply if SBA denies my 8(a) application?",
    a: "Yes. A declined firm may submit a new application at any time after 90 calendar days from the date of SBA's final decision to decline. Before reapplying, address each defect SBA stated in its written denial. There is no 12-month waiting rule after a third denial in the regulation.",
  },
  {
    q: "What changed for 8(a) applicants in September 2026?",
    a: "SBA's final rule (91 FR 51568) took effect September 10, 2026. It removed the rebuttable presumption of social disadvantage and retired the personal social-disadvantage narrative. Individually owned applicants must now show social disadvantage with a two-part evidence test: objective evidence that a government, university, or corporation discriminated against or disfavored a group the applicant belonged to, plus the applicant's self-certification of membership at the time and material harm to their economic advancement.",
  },
  {
    q: "Is there a fee to apply for 8(a) certification?",
    a: "No. SBA charges no application fee, and applications are filed free through MySBA Certifications at certifications.sba.gov. SAM.gov registration is also free. Anyone charging a fee to file the application is selling a service, not paying SBA.",
  },
  {
    q: "What is the December 24, 2026 deadline for 8(a) applications?",
    a: "It applies only to individually owned 8(a) applications that SBA returned on September 10, 2026, when the new social-disadvantage rule took effect. Those applicants must update their applications to the new standard and resubmit by December 24, 2026 (extended from October 25, 2026). New applicants follow the normal process and this deadline does not apply to them.",
  },
  {
    q: "Does 8(a) certification guarantee federal contracts?",
    a: "No. Certification gives access to contracts reserved for 8(a) firms — competitive set-asides and sole-source awards — plus a dedicated Business Opportunity Specialist and business development support. The firm still has to win the work, perform it, and stay eligible through annual reviews for the full nine years.",
  },
  {
    q: "Can a firm rejoin the 8(a) program after leaving?",
    a: "No. A firm that has already participated in the 8(a) program cannot re-enter. A qualifying entity may own more than one eligible participant firm, but each firm has its own one-time participation.",
  },
  {
    q: "Do I still need to write a social-disadvantage narrative?",
    a: "No. The personal narrative was retired by the September 10, 2026 rule. SBA staff were directed in January 2026 not to request or consider those narratives. What the new standard requires instead is evidence: documents showing a discriminatory action, policy, or practice, plus your self-certification of group membership at the time and material harm.",
  },
];

export default function EightAContent() {
  return (
    <div>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        SBA 8(a) certification gives qualifying small businesses access to
        federal contracts reserved for 8(a) firms — competitive set-asides
        and sole-source awards — plus a dedicated Business Opportunity
        Specialist and business development support. Start by checking the
        ownership path that applies to your firm. Individually owned
        applicants must meet the September 2026 social-disadvantage
        evidence standard as well as the separate economic, size, ownership,
        and control requirements.
      </p>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="font-semibold text-amber-900">
          If your application was returned on September 10, 2026, read this
          first
        </p>
        <p className="mt-2 text-sm leading-relaxed text-amber-900">
          When the September 2026 rule took effect, SBA returned pending
          individually owned 8(a) applications so applicants could update
          them to the new social-disadvantage standard. Those applications
          must be resubmitted by{" "}
          <strong>December 24, 2026</strong> (extended from October 25,
          2026). If the application is not resubmitted in time, the system
          closes it and the firm must start a new application. New
          applicants follow the normal process — this deadline does not
          apply to them. This notice is dated November 6, 2026; recheck the
          announcements page on MySBA Certifications before relying on it.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
        <p className="font-semibold text-slate-900">At a glance</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            <strong>Term:</strong> nine years — four developmental years,
            then five transitional years. One participation per lifetime.
          </li>
          <li>
            <strong>Application fee:</strong> none. File free through
            MySBA Certifications.
          </li>
          <li>
            <strong>Ownership:</strong> at least 51% owned and controlled,
            directly and unconditionally, by socially and economically
            disadvantaged U.S. citizens (individual path) or by a tribe,
            Alaska Native Corporation, Native Hawaiian Organization, or
            Community Development Corporation (entity path).
          </li>
          <li>
            <strong>Competition thresholds:</strong> $5.5 million for
            most acquisitions, $8.5 million for manufacturing NAICS
            codes — above these, the agency must compete the requirement
            when at least two eligible and responsible participants are
            expected to offer at a fair market price; otherwise
            sole-source is possible.
          </li>
          <li>
            <strong>Decision clock:</strong> 90 days after SBA receives a
            complete package — not 90 days after first submission.
          </li>
          <li>
            <strong>FY2025 scale:</strong> about $24.3 billion in 8(a)
            awards, 4,985 active firms (SBA FY2025 scorecard, as reported
            by SBA).
          </li>
        </ul>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 1</p>
          <p className="mt-1 font-bold text-slate-900">Qualify</p>
          <p className="mt-1 text-sm text-slate-600">Size, ownership, control, character</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 2</p>
          <p className="mt-1 font-bold text-slate-900">Prove</p>
          <p className="mt-1 text-sm text-slate-600">Social + economic disadvantage</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 3</p>
          <p className="mt-1 font-bold text-slate-900">Apply</p>
          <p className="mt-1 text-sm text-slate-600">SAM.gov, then MySBA Certifications</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 4</p>
          <p className="mt-1 font-bold text-slate-900">Win work</p>
          <p className="mt-1 text-sm text-slate-600">Set-asides and sole-source awards</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step 5</p>
          <p className="mt-1 font-bold text-slate-900">Stay eligible</p>
          <p className="mt-1 text-sm text-slate-600">Annual reviews for nine years</p>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-slate-600">
        The September 2026 rule changed step 2 — not the other four. The
        personal narrative is gone; evidence is what counts now.
      </p>
      <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
        <p className="font-semibold text-slate-900">
          What the program does not do
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Certification is access, not a guarantee. The firm still has to
          win each contract, perform it, pass an annual review every year,
          and leave the program after nine years. A firm that treats
          admission as the finish line will lose eligibility before the
          term ends.
        </p>
      </div>


      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Who qualifies? Start with the ownership path
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The 8(a) program has two ownership paths, and the rules for each
        are different. Pick the wrong path and the application fails before
        any other test matters.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        <strong>The individual path</strong> is for firms owned by
        qualifying U.S. citizens. Those owners must be both socially and
        economically disadvantaged, and they must own and control the firm.
        The September 2026 social-disadvantage rule addresses this path.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        <strong>The entity path</strong> is for firms owned by an Indian
        tribe, an Alaska Native Corporation (ANC), a Native Hawaiian
        Organization (NHO), or a Community Development Corporation (CDC).
        Separate provisions apply to these firms — including different
        rules on social disadvantage, sole-source ceilings, and the
        per-firm dollar cap. This guide covers the individual path in
        detail and flags where the entity path differs.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Every applicant, on either path, must be a for-profit small
        business. Check size under the primary industry&apos;s North
        American Industry Classification System (NAICS) code, applying the
        relevant affiliation rules. Receipts-based industries generally
        use five years of receipts. Employee-based industries generally
        use a 24-month average. Use the applicable industry standard —
        there is no universal revenue cutoff, and any guide claiming a
        flat dollar cap on size is wrong.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Ownership on paper and control in practice
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        For the individual path, one or more qualifying owners must
        directly and unconditionally own at least 51% of the firm. Check
        voting rights, ownership classes, long-term decisions, and who
        runs daily operations. A nominal majority can still leave control
        with an outside investor or manager — SBA examines the actual
        agreements, not just the cap table.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Good-character review also covers the principals. Examine actual
        agreements and disclose relevant tax, debt, and integrity issues
        rather than waiting for SBA to find them. An undisclosed problem
        discovered during review is worse than the same problem disclosed
        up front with an explanation.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The three economic tests
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Economic disadvantage is measured with three separate tests, and
        all three must be passed. Failing one is enough to fail the
        economic test.
      </p>
      <Table
        head={["Personal financial test", "What SBA checks"]}
        rows={[
          [
            "Net worth below $850,000",
            "Exclude the interest in the applicant firm, qualifying primary-home equity, and qualifying retirement funds. Excessive withdrawals can affect the home-equity exclusion.",
          ],
          [
            "Average adjusted gross income of $400,000 or less",
            "Use the preceding three years. Above this level SBA presumes the individual lacks economic disadvantage — but the applicant can rebut that presumption with supporting evidence.",
          ],
          [
            "Total assets of $6.5 million or less",
            "SBA generally considers the person ineligible above this level. Include the home and business value. Qualifying retirement funds are excluded.",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        The income test deserves a closer look, because it is a
        presumption, not a hard ceiling. Example: an owner&apos;s
        three-year average income is $410,000 after an unusual one-time
        payment. The owner should document why the income is unlikely to
        recur. SBA decides whether the evidence overcomes the presumption.
        The net-worth and asset tests still require separate calculations
        — rebutting the income presumption does not fix a failed asset
        test.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Document qualifying pass-through income reinvested in the company
        or used for taxes. Review below-market transfers to immediate
        family or trusts during the two-year lookback, and the exceptions
        specified in the rule. Transfers that look like an attempt to move
        assets out of the owner&apos;s name before applying will be
        examined.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Two years of operations — or a supported waiver
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The usual route requires two full years immediately before
        applying, performing contracts in the primary industry. Tax
        returns for both years must show operating revenues. Private-sector
        work can qualify — the work does not have to be federal.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        A firm younger than two years can ask for a waiver, but SBA may
        approve it only when the applicant demonstrates all five
        conditions:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          Substantial management experience of the qualifying owner or
          owners.
        </li>
        <li>Technical experience to execute the business plan.</li>
        <li>
          Capital sufficient to carry out the plan and sustain operations.
        </li>
        <li>
          Successful contract performance in the primary industry,
          supported by project records and references.
        </li>
        <li>
          Personnel, facilities, equipment, and other resources available
          or obtainable in time.
        </li>
      </ul>
      <p className="mt-4 leading-relaxed text-slate-700">
        Example: a 17-month-old IT contractor with two completed private
        contracts can use those contracts as performance evidence. The
        contracts alone do not establish management experience, capital,
        or the remaining waiver conditions. A failed waiver means a
        denial, not a deferral — the firm must wait and reapply.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        How to prove social disadvantage under the September 2026 rule
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        This is the part of the program that changed most in 2026, and it
        is where most current guides are out of date.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        After the 2023 <em>Ultima</em> injunction, SBA stopped using the
        group-based presumption of social disadvantage. On January 22,
        2026, SBA issued clarifying guidance that unsubstantiated claims
        or earlier-style narratives alone would not support admission, and
        that SBA staff should not request or consider those narratives.
        The August final rule (91 FR 51568) took effect September 10,
        2026, and applied to pending individually owned applications.
        What matters now is the evidence, not the narrative.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The new standard has two parts, and both are required:
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>Objective evidence</strong> of an action, policy, or
          practice by a government, university, or corporation that
          discriminated against or disfavored an identifiable group to
          which the applicant belonged — or favored a group to which the
          applicant did not belong. The rule&apos;s examples include
          unlawful DEI or affirmative-action programs, race-based
          quotas, set-asides, or hiring targets, and admissions
          decisions. Sex-based bias is also a possible example when its
          requirements are met.
        </li>
        <li>
          <strong>Self-certification</strong> of relevant group membership
          at the time, and of material harm to the applicant&apos;s
          economic advancement. Explain the connection between the action
          and the harm — a policy that existed somewhere is not enough
          without showing what it cost the applicant.
        </li>
      </ol>
      <p className="mt-4 leading-relaxed text-slate-700">
        For example, imagine a university admissions policy in the 2010s
        that set a higher test-score bar for applicants of the
        owner&apos;s background, and the owner was denied admission to
        a program that fed directly into the industry the firm now
        serves. The evidence would be the policy document or an official
        record of it, the owner&apos;s application and denial, and a
        statement of membership and of the lost opportunity — for
        instance, a delayed entry into the industry and lower early-career
        earnings. The point is the chain: policy, membership, harm. Any
        one link missing leaves the test unmet.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Firms already admitted are not re-tested under the new standard.
        Entity-owned firms — tribes, ANCs, NHOs, CDCs — are untouched by
        this change. The January 2026 guidance also signalled a narrower
        program overall — expect scrutiny, not a rubber stamp.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        How to apply
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Work through the application in three stages. The portal will not
        accept an application from a firm whose SAM.gov registration is
        not active, so do not start MySBA Certifications before SAM.gov
        is done.
      </p>
      <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>Confirm the primary NAICS and size</strong>, then
          register in SAM.gov. Obtain the Unique Entity ID (UEI) and
          activate the registration before starting MySBA Certifications.
          Registration is free.
        </li>
        <li>
          <strong>Prepare ownership and control evidence:</strong>{" "}
          formation papers, governing agreements, stock or membership
          records, relevant licenses, owner résumés, citizenship evidence,
          organization chart, and signing authority.
        </li>
        <li>
          <strong>Assemble business returns, financial statements, owner
          financial disclosures, contracts, and evidence of social
          disadvantage.</strong> Gather spouse records when required.
          Follow the current MySBA checklist for your entity and
          circumstances. Older Form 1010, 912, or 413 lists describe
          possible information needs; verify the portal&apos;s current
          fields before treating any item as a mandatory upload.
        </li>
      </ol>
      <p className="mt-4 leading-relaxed text-slate-700">
        The application itself is filed through{" "}
        <a
          href="https://certifications.sba.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          MySBA Certifications
        </a>{" "}
        (Login.gov sign-in). SBA charges no application fee. Note the
        portal address: the old certify.sba.gov address is retired, and
        guides that still send readers there are out of date. The document
        list below is compiled from SBA&apos;s Form 1010 checklist and
        corroborating sources — the portal is login-gated, so treat this
        as a preparation list and confirm the current checklist inside
        MySBA before filing.
      </p>
      <Table
        head={["Document group", "What to gather"]}
        rows={[
          [
            "Business records",
            "Business tax returns for 2–3 years; financial statements no more than 90 days old; bank statements; organization documents; stock or membership ledger.",
          ],
          [
            "Per disadvantaged owner (and spouse, when required)",
            "Personal tax returns for 3 years; Form 413 personal financial statement; résumé; proof of U.S. citizenship; Form 1010-IND; Form 912; IRS Form 4506; Form 1623.",
          ],
          [
            "Social disadvantage (post-September 2026)",
            "Documentary evidence of group discrimination by a government, university, or corporation, plus self-certification of membership at the time and material harm. Not a narrative.",
          ],
          [
            "Performance and potential",
            "Contracts in the primary industry; project records and references; evidence for any waiver condition claimed.",
          ],
        ]}
      />

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What the decision clock measures
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        SBA advises applicants within 15 days of receipt whether the
        submission is complete and what information is missing. The
        90-day processing period begins upon receipt of a complete
        package. A request for clarification or revised information
        suspends the clock pending the response. Eligibility is assessed
        at decision — a firm that qualified when it applied but no longer
        qualifies when SBA decides will not be admitted.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Record requests, responses, and dates rather than promising a
        decision 90 days after first submission. Practitioner sources
        report reviews exceeding a year in some 2025–26 cases. That is
        attributed experience, not an SBA promise or a published average
        — but it is a reason not to plan a bid around a 90-day approval.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        If SBA declines the application
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Check the written reasons. A denial is not one thing — the appeal
        route and the reapplication route depend on which ground SBA
        relied on.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        An appeal to SBA&apos;s Office of Hearings and Appeals (OHA) is
        available only when the denial rests solely on social
        disadvantage, economic disadvantage, ownership, control, or a
        combination of those grounds. A denial based even partly on
        another eligibility ground falls outside that appeal route and is
        SBA&apos;s final decision. For an appealable denial, the filing
        period is 45 days from receipt of the decision.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        A declined firm may submit a new application at any time after 90
        calendar days from the date of SBA&apos;s final decision to
        decline. Before reapplying, address each stated defect. An
        information request and a denial are different outcomes — a
        request for more documents is not a denial, and it does not start
        the 90-day clock.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        One correction worth stating plainly: some guides claim a firm
        must wait 12 months after a third denial before reapplying. That
        rule does not exist in the regulation. Section 124.207 states
        only the 90-day period, with no longer wait for repeat denials.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What certification buys: set-asides and sole-source awards
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        An 8(a) competitive set-aside limits competition to eligible
        participants. A sole-source award goes to one eligible participant
        through the applicable acceptance and award process. Three
        different threshold questions arise, and mixing them up is the
        most common error in guides about this program.
      </p>
      <Table
        head={["Question", "Amount and purpose"]}
        rows={[
          [
            "When must agencies compete the requirement?",
            "$8.5M for manufacturing NAICS and $5.5M for other acquisitions. Count options. Consider the expectation of at least two eligible fair-price offers and the applicable exceptions.",
          ],
          [
            "When does a written justification apply (civilian agencies)?",
            "Above $30M for a sole-source 8(a) award (FAR 6.204(b), raised from $25M by the October 2025 inflation adjustment, 90 FR 41872). This is a written justification and approval requirement.",
          ],
          [
            "When does a written justification apply (DoD)?",
            "Above $100M under DFARS 206.303-1. Below that, DoD needs no justification and approval for a sole-source 8(a) award.",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        The October 2025 FAR adjustment took effect October 1, 2025. A
        $6 million nonmanufacturing requirement exceeds $5.5 million, so
        it must be competed if two eligible participants are expected to
        offer at a fair market price. A $6 million manufacturing
        requirement falls below $8.5 million, so it can go sole-source.
        Neither example alone decides the acquisition strategy — the
        two-offer expectation and the tribal and ANC exceptions still
        apply. Tribal and ANC exceptions, and the DoD-specific NHO
        exception, have distinct scopes under §124.506.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        <strong>Why older guides show different numbers.</strong> The
        ceilings were $4.5 million and $7 million before the October 2025
        adjustment. Those figures are still printed in 13 CFR 124.506
        and on SBA&apos;s own program page — but §124.506 itself says
        the FAR-adjusted figures govern, and the FAR adjustment raised
        them to $5.5 million and $8.5 million. Any guide still teaching
        $4.5 million / $7 million, or $4 million / $7 million, is
        teaching pre-October 2025 law. The same applies to the civilian
        justification figure: SBA&apos;s page still prints $25 million;
        the current figure is $30 million.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        <strong>There is also a cap on each firm, not just each
        contract.</strong> An individually owned participant may not
        receive sole-source 8(a) awards once it has received a combined
        total of competitive and sole-source 8(a) contracts above{" "}
        <strong>$168.5 million</strong> during its participation. The cap
        is measured on 8(a) revenues actually received, not projected
        revenues, and contracts under the simplified acquisition threshold
        do not count. Once the cap is reached, the firm may not receive
        more sole-source awards but remains eligible for competitive 8(a)
        awards. The AA/BD may waive the cap where the head of a procuring
        activity represents that the award is needed to achieve
        significant interests of the Government. Entity-owned firms are
        exempt from this cap entirely.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        <strong>Keep the goals straight.</strong> The statutory goal is
        23% of prime-contract dollars to small businesses generally, and
        5% to Small Disadvantaged Businesses (SDBs) — a broader category
        than 8(a) firms. The 5% figure is not an 8(a)-only goal, and the
        $24.3 billion in FY2025 8(a) awards is a measure of 8(a) award
        dollars, not a goal.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Joint ventures and the mentor-protégé program
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        SBA consolidated its mentor-protégé programs in{" "}
        <strong>2020</strong> (85 FR 66146, effective November 16, 2020).
        That date matters: several guides and alerts have dated this
        consolidation to 2026. It is six-year-old settled law, not a 2026
        change. The 2020 rule eliminated the separate 8(a) mentor-protégé
        program and folded it into the unified program at 13 CFR
        125.9.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The 2020 rule also changed joint-venture approval — but only in
        part. For <strong>competitive</strong> 8(a) awards, SBA does not
        pre-approve the joint-venture agreement. For a{" "}
        <strong>sole-source</strong> 8(a) award, SBA must approve the
        agreement before award. Additional sole-source awards can require
        approval of an addendum. Guides that say pre-approval was
        eliminated for all 8(a) joint ventures are wrong.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        In a mentor-protégé joint venture, the qualifying small partner
        generally performs at least 40% of the work performed by the
        partners — measured on the partners&apos; work, not on the entire
        contract regardless of subcontracting. A mentor can provide
        management, technical, or financial assistance. A mentor may be
        any size, may have at most three protégés, and a protégé may have
        at most two mentor relationships in its lifetime. A mentor-protégé
        agreement lasts at most six years, and the mentor may hold no
        more than 40% equity in the protégé. A joint venture qualifies as
        small if the protégé is small.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Two related rules deserve a mention, with a caution. SBA&apos;s
        separate recertification rule (December 17, 2024) created 13 CFR
        125.12, which governs what happens to set-aside eligibility after
        a merger, sale, or acquisition — including the traps for pending
        set-aside awards and future options. And SBA has proposed
        revising its size standards (August 2026 proposals; comments
        extended to November 20, 2026), which would change the size
        discussion if finalised. For either topic, check the operative
        regulation and dates for the particular contract rather than
        relying on a summary.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        How to stay eligible: annual review, targets, and exits
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Admission is the start, not the finish. The standard nine-year
        term includes four developmental years followed by five
        transitional years. Annual review checks continued eligibility.
        Prepare updated ownership and owner financial information,
        disclosures of transfers and distributions, and required
        contract-performance and mentor reports. Report adverse changes
        promptly — an undisclosed change found at review is treated
        worse than the same change disclosed when it happened.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        In the transitional stage, the firm must hit non-8(a) revenue
        targets — revenue from work outside the 8(a) program — so it
        is not dependent on 8(a) awards when the term ends.
      </p>
      <Table
        head={["Program year", "5", "6", "7", "8", "9"]}
        rows={[
          [
            "Non-8(a) revenue target",
            "15%",
            "25%",
            "30%",
            "40%",
            "50%",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        If the firm misses its target, SBA evaluates its good-faith
        efforts. An adverse finding can suspend eligibility for
        sole-source awards. Section 124.509 explains notice, quarterly
        demonstrations, and reinstatement. A missed percentage alone does
        not establish an automatic loss of eligibility — but a firm that
        misses repeatedly without a credible plan will lose sole-source
        access.
      </p>
      <Table
        head={["Gross annual receipts", "Annual financial statement"]}
        rows={[
          [
            "Less than $7.5M",
            "In-house or compilation statement, verified by an authorized person, within 90 days of fiscal year-end.",
          ],
          [
            "$7.5M through $20M",
            "Independent licensed public accountant's reviewed statements within 90 days, subject to applicable waivers.",
          ],
          [
            "More than $20M",
            "Audited statements within 120 days, subject to specified exceptions and waiver provisions.",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        Use these figures — they come from §124.602. Some guides print
        $2 million and $10 million tiers; those are wrong. Entity-owned
        firms have a specific alternative in qualifying circumstances.
        Annual review and annual financial reporting are separate
        obligations, and both must be met. Excessive withdrawals by owners
        can trigger reinvestment requirements, early graduation, or
        termination.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Distinguish the four ways out. Normal completion is the
        nine-year term ending. Voluntary withdrawal and early graduation
        are the firm&apos;s choice or the result of achieving its business
        goals — or of losing eligibility, for example by exceeding the
        size standard for three successive years. Termination for good
        cause can follow false information, prolonged noncompliance,
        unapproved ownership or control changes, or a pattern of missed
        submissions. Follow the written notice, response, and appeal
        provisions in the relevant case. And remember: there is no
        recertification that extends the term, and no re-entry after exit.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        FY2025 awards and what they actually show
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        SBA&apos;s June 2026 announcement reports about $24.3 billion in
        FY2025 8(a) awards. The ownership and award-method tables answer
        different questions, so read them separately.
      </p>
      <Table
        head={["Measure", "Figures (as reported by SBA)"]}
        rows={[
          [
            "Total and award method",
            "$24.34B total. About $14.53B sole-source and $9.58B competitive.",
          ],
          [
            "Ownership breakdown",
            "795 entity-owned firms and $16.35B. 4,190 individually owned firms and $7.99B. Together: 4,985 active firms.",
          ],
          [
            "Calculated dollars per active firm",
            "About $20.6M for the entity-owned group and $1.9M for the individually owned group. Aggregate dollars divided by active firms in each group.",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        SBA reports that about $225 million in FY2025 8(a) awards had no
        competitive or sole-source designation. That explains the gap
        between the total and the two award-method figures.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        SBA&apos;s entity-owned grouping includes ANCs, tribes, NHOs, and
        CDCs.
        These ratios are group means — not medians, not profits, not
        typical awards, and not an earnings forecast for a newly admitted
        firm. A single tribal firm with a multi-billion-dollar portfolio
        moves the entity-owned mean far more than any individual firm
        moves its own group&apos;s mean.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The total was down about $1.5 billion against FY2024 — the
        largest decrease in more than ten years, according to SBA. And
        8(a) is uniquely sole-source-heavy: about 60% of its dollars came
        through sole-source awards, against roughly 39% competitive. The
        other set-aside programs are 94–98% competitive. That is the
        program&apos;s real edge for a small firm — and the reason the
        sole-source ceilings above matter so much.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Keep three statistics separate. The statutory small-business
        prime-contract goal is 23%. The 5% disadvantaged-small-business
        goal covers a broader category than 8(a). The $24.3 billion
        figure describes 8(a) award dollars. In the wider FY2025
        scorecard, SBA reported about $179 billion in small-business
        prime contracts and nearly $273 billion including subcontracts.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        One more piece of context, attributed as SBA&apos;s own claims
        rather than verified fact: in its June 25, 2026 announcement, SBA
        said the prior administration approved 2,100 new 8(a) firms,
        compared with just 65 approved to date under the current
        administration. SBA also says it has begun the program&apos;s
        first-ever audit and initiated termination proceedings against
        nearly 800 firms. Initiated proceedings are not completed
        terminations. The direction is clear — a narrower, more closely
        examined program — but the numbers are the agency&apos;s, and
        they should be read as such.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        A note on scope: the figures above are as reported by SBA in its
        FY2025 scorecard. No independent USAspending transaction-level
        reconstruction has been performed for this guide. And
        FedTalentUSA&apos;s contractor profiles cover the largest prime
        contractors — they do not establish any firm&apos;s 8(a)
        participation or the amount of its 8(a) awards. Use them for
        market context only. For the sibling program, see our{" "}
        <Link href="/blog/hubzone" className="text-blue-700 hover:underline">
          HUBZone certification guide
        </Link>
        . To see how large prime contractors are distributed across
        agencies and industries, use the{" "}
        <Link
          href="/tools/contractor-finder"
          className="text-blue-700 hover:underline"
        >
          Contractor Finder
        </Link>
        .
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
            href="https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA 8(a) Business Development Program
          </a>{" "}
          — program overview, eligibility summary, and benefits.
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
          — application portal and announcements, including the December
          24, 2026 resubmission extension for applications returned on
          September 10, 2026.
        </li>
        <li>
          <a
            href="https://www.govinfo.gov/content/pkg/FR-2026-08-11/pdf/2026-16370.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Final rule, 91 FR 51568 (August 11, 2026)
          </a>{" "}
          — social-disadvantage rewrite, effective September 10, 2026.
        </li>
        <li>
          <a
            href="https://www.sba.gov/article/2026/01/22/sba-issues-clarifying-guidance-race-based-discrimination-not-tolerated-8a-program"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA clarifying guidance, January 22, 2026
          </a>{" "}
          — race-neutral administration; narratives not requested or
          considered.
        </li>
        <li>
          <a
            href="https://www.govinfo.gov/content/pkg/FR-2020-10-16/pdf/2020-19428.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Final rule, 85 FR 66146 (October 16, 2020)
          </a>{" "}
          — mentor-protégé consolidation, effective November 16, 2020.
        </li>
        <li>
          <a
            href="https://public-inspection.federalregister.gov/2025-16412.pdf?1756212335"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            FAR inflation adjustment, 90 FR 41872 (effective October 1,
            2025)
          </a>{" "}
          — sole-source ceilings $5.5M/$8.5M; civilian justification
          threshold $25M to $30M (FAR 6.204(b)).
        </li>
        <li>
          <a
            href="https://www.acquisition.gov/far/19.805-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            FAR 19.805-1
          </a>{" "}
          — competition test for 8(a) requirements.
        </li>
        <li>
          <a
            href="https://www.acq.osd.mil/dpap/dars/dfars/pdf/r20241218/206_3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            DFARS 206.303-1
          </a>{" "}
          — DoD justification threshold of $100 million for sole-source
          8(a) awards.
        </li>
        <li>
          <a
            href="https://www.sba.gov/certifications/scorecard-details/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA FY2025 Small Business Goaling Report
          </a>{" "}
          — official scorecard tables and reconciliation note.
        </li>
        <li>
          <a
            href="https://www.sba.gov/article/2026/06/25/sba-releases-fy25-scorecard-small-business-contracting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SBA FY2025 scorecard announcement (June 25, 2026)
          </a>{" "}
          — about $24.3 billion in 8(a) awards; program totals.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.104"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.104
          </a>{" "}
          — economic disadvantage: net worth, income, and asset tests.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.107
          </a>{" "}
          — two-year rule and the five waiver conditions.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.204
          </a>{" "}
          — 15-day completeness notice and 90-day processing period.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.206"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.206
          </a>{" "}
          — OHA appeal rights; 45-day filing period.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.207"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.207
          </a>{" "}
          — reapplication after 90 calendar days.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.506"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.506
          </a>{" "}
          — competition thresholds and the tribal/ANC exception.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.513"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.513
          </a>{" "}
          — joint ventures; sole-source approval requirement.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.519"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.519
          </a>{" "}
          — $168.5 million per-participant cap.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/124.602"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 124.602
          </a>{" "}
          — annual financial statement tiers.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/13/125.9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            13 CFR § 125.9
          </a>{" "}
          — mentor-protégé program.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/uscode/text/15/644"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            15 U.S.C. § 644
          </a>{" "}
          — small-business and disadvantaged-business contracting goals.
        </li>
        <li>
          <a
            href="https://sam.gov/entity-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            SAM.gov entity registration
          </a>{" "}
          — registration and Unique Entity ID.
        </li>
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-slate-500">
        This guide is general information about the 8(a) program as of
        November 6, 2026. It is not legal advice. Program rules,
        thresholds, and SBA guidance change — check the sources above,
        and the current MySBA Certifications checklist, before filing.
        Figures attributed to SBA are as reported by SBA; the FY2025
        totals have not been independently reconstructed from
        USAspending transaction data.
      </p>
    </div>
  );
}
