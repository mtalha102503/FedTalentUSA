import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FedTalentUSA",
  description:
    "Contact FedTalentUSA, a HireSkys company, about the federal contractor rankings or data corrections.",
  alternates: { canonical: "https://fedtalentusa.com/contact" },
  openGraph: {
    title: "Contact FedTalentUSA",
    description:
      "Contact FedTalentUSA, a HireSkys company, about the federal contractor rankings or data corrections.",
    url: "https://fedtalentusa.com/contact",
    siteName: "FedTalentUSA",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <p className="mt-4 leading-relaxed text-slate-700">
        FedTalentUSA is operated by HireSkys. For questions about the rankings,
        or to flag a data issue, email us:
      </p>
      <p className="mt-4">
        <a
          href="mailto:contact@hireskys.com"
          className="text-lg font-semibold text-blue-700 hover:underline"
        >
          contact@hireskys.com
        </a>
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        If you are reporting a data issue, please include the company name and
        the figure in question so we can check it against the USAspending.gov
        record.
      </p>
    </section>
  );
}
