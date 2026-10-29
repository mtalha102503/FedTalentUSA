import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "FedTalentUSA privacy policy: no accounts, no personal-data forms, no advertising cookies.",
  alternates: { canonical: "https://fedtalentusa.com/privacy" },
  openGraph: {
    title: "Privacy Policy | FedTalentUSA",
    description:
      "FedTalentUSA privacy policy: no accounts, no personal-data forms, no advertising cookies.",
    url: "https://fedtalentusa.com/privacy",
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

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: October 2026</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        What we do not collect
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        FedTalentUSA has no user accounts, no sign-in, and no forms that
        collect personal information. We do not set advertising cookies and we
        do not sell personal information.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">
        What our hosting may log
      </h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Like most websites, our hosting provider may record standard technical
        information in server logs — such as IP address, browser type and pages
        visited — for security and operations. We do not use this information
        to identify individual visitors.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">External links</h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        This site links to USAspending.gov and to HireSkys. Those sites have
        their own privacy policies, which apply when you visit them.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Contact</h2>
      <p className="mt-3 leading-relaxed text-slate-700">
        Questions about this policy:{" "}
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
