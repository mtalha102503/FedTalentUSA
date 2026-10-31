import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "FedTalentUSA terms of use: how you may use the federal contractor rankings, data limits, and liability.",
  alternates: { canonical: "https://fedtalentusa.com/terms" },
  openGraph: {
    title: "Terms of Use | FedTalentUSA",
    description:
      "How you may use the FedTalentUSA federal contractor rankings, data limits, and liability.",
    url: "https://fedtalentusa.com/terms",
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

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: November 2026</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Acceptance of these terms
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        By using FedTalentUSA you accept these terms. If you do not accept
        them, please do not use the site. FedTalentUSA is operated by
        HireSkys.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">The service</h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        FedTalentUSA publishes free rankings and profiles of the 1,000
        largest U.S. federal contractors by FY2025 contract obligations,
        built from public data on USAspending.gov. There are no user
        accounts, no sign-in, and no paid features.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Acceptable use
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        You may read, link to, and quote pages on this site with attribution.
        You may not use the site for any unlawful purpose, scrape it in a
        way that degrades it for other visitors, or present its figures as
        official government figures. Automated access must respect the
        site&apos;s robots file.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Data and accuracy
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Figures come from USAspending.gov records as reported by federal
        agencies and may be revised by those agencies over time. Rankings
        cover the top 1,000 contractors by FY2025 obligations; smaller
        contractors are not profiled. See our{" "}
        <a href="/disclaimer" className="text-blue-700 hover:underline">
          Disclaimer
        </a>{" "}
        for the full limits of the data. Nothing on this site is legal,
        financial, investment or government-contracting advice.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Intellectual property
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        The site&apos;s design and editorial text are owned by FedTalentUSA.
        Company names and trademarks shown on profiles belong to their
        respective owners. The underlying USAspending data is public U.S.
        government data.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        External links
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        This site links to USAspending.gov and to HireSkys. We are not
        responsible for the content or policies of third-party sites.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        No warranties and liability
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        The service is provided &quot;as is&quot;, without warranties of any
        kind. To the fullest extent permitted by law, FedTalentUSA is not
        liable for any loss arising from your use of, or reliance on, the
        figures or content on this site.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        Changes to these terms
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        We may update these terms from time to time. Continued use of the
        site after an update means you accept the updated terms.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Contact</h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Questions about these terms:{" "}
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
