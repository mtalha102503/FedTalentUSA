import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "FedTalentUSA Blog",
  description:
    "Data-driven guides to the federal contracting market, built from USAspending.gov contract data — rankings, trends, agencies, states and industries.",
  alternates: { canonical: "https://fedtalentusa.com/blog" },
  openGraph: {
    title: "FedTalentUSA Blog",
    description:
      "Data-driven guides to the federal contracting market, built from USAspending.gov contract data.",
    url: "https://fedtalentusa.com/blog",
    siteName: "FedTalentUSA",
    type: "website",
    images: [
      {
        url: "https://fedtalentusa.com/blog/top-federal-contractors/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FedTalentUSA Blog",
      },
    ],
  },
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const mi = parseInt(m, 10) - 1;
  return `${months[mi]} ${parseInt(d, 10)}, ${y}`;
}

export default function BlogListingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>{" "}
        / <span className="text-slate-800">Blog</span>
      </nav>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        FedTalentUSA Blog
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Data-driven guides to the federal contracting market, built from
        USAspending.gov contract data. Every figure comes from the
        site&apos;s own ranking database — no estimates, no borrowed
        totals from other sites&apos; scopes.
      </p>
      <div className="mt-8 space-y-6">
        {blogPosts.map((p) => (
          <article
            key={p.slug}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              {p.tags[0]}
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              <Link
                href={`/blog/${p.slug}`}
                className="hover:text-blue-700 hover:underline"
              >
                {p.title}
              </Link>
            </h2>
            <p className="mt-2 leading-relaxed text-slate-600">{p.excerpt}</p>
            <p className="mt-3 text-sm text-slate-500">
              {formatDate(p.datePublished)} · {p.readingMinutes} min read
            </p>
            <p className="mt-3">
              <Link
                href={`/blog/${p.slug}`}
                className="text-sm font-medium text-blue-700 hover:underline"
              >
                Read the guide →
              </Link>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
