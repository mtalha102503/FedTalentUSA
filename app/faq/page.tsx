import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "FedTalentUSA FAQ: where the contractor data comes from, what a contract obligation is, what negative totals mean, and why a company may not be listed.",
  alternates: { canonical: "https://fedtalentusa.com/faq" },
  openGraph: {
    title: "FAQ | FedTalentUSA",
    description:
      "Where the contractor data comes from, what a contract obligation is, what negative totals mean, and why a company may not be listed.",
    url: "https://fedtalentusa.com/faq",
    siteName: "FedTalentUSA",
    type: "website",
    images: [
      {
        url: "https://fedtalentusa.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FedTalentUSA — Top Federal Contractors, Ranked by Real Contract Data",
      },
    ],
  },
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">
        Frequently Asked Questions
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: November 2026</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        What is FedTalentUSA?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        FedTalentUSA ranks the 1,000 largest contractors to the United States
        federal government by actual contract obligations. For every company
        we show a three-year trend, the agencies, states and industries
        behind its contracts, and a selection of its individual awards.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Where does the data come from?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        All figures come from{" "}
        <a
          href="https://www.usaspending.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          USAspending.gov
        </a>
        , the official source for U.S. federal spending. Agencies report
        their contract activity there, and we aggregate those records into
        company totals.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        What is a contract obligation?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        A contract obligation is an amount a federal agency commits under a
        contract. Each company&apos;s yearly total on this site is the sum of
        all contract obligations across every USAspending recipient record
        belonging to that company, parent and child records combined — not a
        single subsidiary&apos;s figure.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Why is a company&apos;s total different from its revenue?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Contract obligations cover only a company&apos;s federal contract
        work. A company&apos;s total revenue also includes commercial sales,
        state and local work, and any other business lines, so the two
        figures are not comparable.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        What does a negative total mean?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        A negative year total means net deobligations: contract reductions
        exceeded new obligations that year. We show these figures as
        recorded rather than hiding them.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        What years are covered, and how are companies ranked?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Profiles cover FY2023 – FY2025. The federal fiscal year runs October
        1 – September 30, so FY2025 covers October 1, 2024 – September 30,
        2025. Companies are ordered by their FY2025 total.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Why is a company not listed?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Rankings cover only the top 1,000 contractors by FY2025 obligations.
        Smaller contractors are not profiled, even if they hold federal
        contracts.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Why do your totals differ from other &quot;top
        contractors&quot; lists?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Other lists may use different years, different definitions (such as
        prime contracts only), or a single subsidiary instead of the whole
        company family. Our totals always sum every recipient record
        belonging to the company in the stated fiscal year.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Is FedTalentUSA affiliated with the U.S. government?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        No. FedTalentUSA is an independent publication and a{" "}
        <a
          href="https://www.hireskys.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          HireSkys
        </a>{" "}
        company. It is not affiliated with or endorsed by the U.S.
        government, any federal agency, or USAspending.gov.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        How do I report a data issue?
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Email us at{" "}
        <a
          href="mailto:contact@fedtalentusa.com"
          className="text-blue-700 hover:underline"
        >
          contact@fedtalentusa.com
        </a>{" "}
        with the company name and the figure in question, so we can check it
        against the USAspending.gov record.
      </p>
    </section>
  );
}
