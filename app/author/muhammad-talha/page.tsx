import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, AUTHOR } from "@/lib/blog";

const BASE = "https://fedtalentusa.com";

export const metadata: Metadata = {
  title: "Muhammad Talha — Founder & Author",
  description:
    "Muhammad Talha is the founder of HireSkys and the author behind FedTalentUSA's federal contracting guides, built on official USAspending.gov contract data.",
  alternates: { canonical: `${BASE}${AUTHOR.path}` },
  openGraph: {
    title: "Muhammad Talha — Founder & Author | FedTalentUSA",
    description:
      "Founder of HireSkys. Writing FedTalentUSA's federal contracting guides from official USAspending.gov contract data.",
    url: `${BASE}${AUTHOR.path}`,
    type: "profile",
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

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const mi = parseInt(m, 10) - 1;
  return `${months[mi]} ${parseInt(d, 10)}, ${y}`;
}

export default function AuthorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    url: `${BASE}${AUTHOR.path}`,
    image: `${BASE}${AUTHOR.image}`,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "HireSkys",
      url: "https://www.hireskys.com",
    },
    sameAs: AUTHOR.sameAs,
  };
  const sortedPosts = [...blogPosts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>{" "}
        / Author
      </p>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={AUTHOR.image}
          alt={AUTHOR.name}
          width={144}
          height={144}
          className="h-36 w-36 shrink-0 rounded-2xl object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {AUTHOR.name}
          </h1>
          <p className="mt-1 font-medium text-blue-700">{AUTHOR.role}</p>
          <p className="mt-3 text-sm text-slate-500">
            Author of FedTalentUSA&apos;s federal contracting guides · A{" "}
            <a
              href="https://www.hireskys.com"
              className="text-blue-700 underline underline-offset-2"
            >
              HireSkys
            </a>{" "}
            company project
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        {AUTHOR.bioLong.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
        <p>
          Questions or a data correction? Write to{" "}
          <a
            href="mailto:contact@fedtalentusa.com"
            className="text-blue-700 underline underline-offset-2"
          >
            contact@fedtalentusa.com
          </a>
          .
        </p>
      </div>

      <section className="mt-12 border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-900">
          Guides by {AUTHOR.name}
        </h2>
        <div className="mt-4 space-y-4">
          {sortedPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:bg-blue-50/30"
            >
              <p className="font-semibold text-slate-900 hover:text-blue-700">
                {p.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
              <p className="mt-2 text-xs text-slate-400">
                {formatDate(p.datePublished)} · {p.readingMinutes} min read
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
