import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "FedTalentUSA disclaimer: independent rankings from USAspending.gov data, not affiliated with the U.S. government, and not legal or financial advice.",
  alternates: { canonical: "https://fedtalentusa.com/disclaimer" },
  openGraph: {
    title: "Disclaimer | FedTalentUSA",
    description:
      "FedTalentUSA is an independent ranking built from USAspending.gov data — not affiliated with the U.S. government, and not legal or financial advice.",
    url: "https://fedtalentusa.com/disclaimer",
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

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Disclaimer</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: November 2026</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Not affiliated with the U.S. government
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        FedTalentUSA is an independent publication and a{" "}
        <a
          href="https://www.hireskys.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          HireSkys
        </a>{" "}
        company. It is not affiliated with, endorsed by, or acting on behalf
        of the United States government, any federal agency, or
        USAspending.gov. It is also not affiliated with any company ranked on
        this site.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Where the figures come from
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Rankings and profiles are built from contract data published by{" "}
        <a
          href="https://www.usaspending.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          USAspending.gov
        </a>
        , the official source for U.S. federal spending. Each company&apos;s
        total is the sum of contract obligations across every USAspending
        recipient record belonging to that company. Company names,
        headquarters locations and business classifications appear as listed
        in those records.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Accuracy limits
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        USAspending records reflect what agencies report, and agencies revise
        records over time. Figures on this site may therefore differ from
        later revisions, from a company&apos;s own reports, or from other
        rankings that use different years or definitions. We do not guarantee
        that any figure is complete, current or error-free.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Not advice</h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Nothing on this site is legal, financial, investment or
        government-contracting advice. Do not base bidding, investment or
        business decisions solely on the figures shown here; verify material
        facts against the underlying USAspending.gov record first.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Trademarks and external links
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Company names and trademarks shown on company profiles belong to
        their respective owners. This site links to USAspending.gov and to
        HireSkys; those sites have their own policies and content, which we
        do not control.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Contact</h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Questions about this disclaimer:{" "}
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
