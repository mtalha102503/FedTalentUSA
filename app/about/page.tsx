import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FedTalentUSA",
  description:
    "FedTalentUSA ranks the 1,000 largest U.S. federal contractors using official USAspending.gov data. Read how the ranking is built and what its limits are.",
  alternates: { canonical: "https://fedtalentusa.com/about" },
  openGraph: {
    title: "About FedTalentUSA",
    description:
      "How the top-1,000 federal contractor ranking is built from official USAspending.gov data.",
    url: "https://fedtalentusa.com/about",
    siteName: "FedTalentUSA",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">About FedTalentUSA</h1>
      <p className="mt-4 leading-relaxed text-slate-700">
        FedTalentUSA ranks the 1,000 largest contractors to the United States
        federal government by actual contract obligations, using official data
        from{" "}
        <a
          href="https://www.usaspending.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          USAspending.gov
        </a>
        . For every company we show a three-year trend, the agencies, states
        and industries behind its contracts, and a selection of its individual
        awards.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">How the ranking works</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
        <li>
          <strong>Totals are contract obligations.</strong> Each company&apos;s
          yearly total is the sum of all federal contract obligations across
          every USAspending recipient record belonging to that company
          (parent and child records combined), not a single subsidiary&apos;s
          figure.
        </li>
        <li>
          <strong>Ranked by FY2025.</strong> Companies are ordered by their
          FY2025 total. The federal fiscal year runs October 1 – September 30,
          so FY2025 covers October 1, 2024 – September 30, 2025.
        </li>
        <li>
          <strong>Breakdowns are FY2025 top 10s.</strong> The agency, state,
          NAICS industry and PSC breakdowns on each profile show that
          company&apos;s ten largest categories in FY2025.
        </li>
        <li>
          <strong>Awards are a selection.</strong> Each profile lists up to 20
          awards with activity in FY2025, newest start date first. These are
          individual awards, not company totals.
        </li>
        <li>
          <strong>Negative totals are real.</strong> A negative year total
          means net deobligations: contract reductions exceeded new
          obligations that year. We show these figures as recorded rather than
          hiding them.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Limits of the data</h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        USAspending records reflect what agencies report. Company names,
        headquarters locations and business classifications appear as listed
        in those records and may be missing for some companies. Rankings cover
        the top 1,000 contractors by FY2025 obligations; smaller contractors
        are not profiled. This site is not affiliated with or endorsed by the
        U.S. government.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Who runs FedTalentUSA</h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        FedTalentUSA is a{" "}
        <a
          href="https://www.hireskys.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          HireSkys
        </a>{" "}
        company. Questions or data corrections:{" "}
        <a
          href="mailto:contact@fedtalentusa.com"
          className="text-blue-700 hover:underline"
        >
          contact@fedtalentusa.com
        </a>
        .
      </p>
    </section>
  );
}
