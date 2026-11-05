import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogSlugs, getBlogPost, AUTHOR } from "@/lib/blog";
import TopFederalContractorsContent from "@/lib/blog/posts/top-federal-contractors";
import HowToGetGovernmentContractsContent from "@/lib/blog/posts/how-to-get-government-contracts";
import HubzoneContent from "@/lib/blog/posts/hubzone";
import SaildroneMusvContent from "@/lib/blog/posts/saildrone-musv-navy-court-ruling";
import EightAContent from "@/lib/blog/posts/8a-certification";

export const dynamicParams = false;

const COMPONENTS: Record<string, React.ComponentType> = {
  "top-federal-contractors": TopFederalContractorsContent,
  "how-to-get-government-contracts": HowToGetGovernmentContractsContent,
  hubzone: HubzoneContent,
  "saildrone-musv-navy-court-ruling": SaildroneMusvContent,
  "8a-certification": EightAContent,
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `https://fedtalentusa.com/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | FedTalentUSA`,
      description: post.excerpt,
      url,
      siteName: "FedTalentUSA",
      type: "article",
      images: [
        {
          url: `${url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const mi = parseInt(m, 10) - 1;
  return `${months[mi]} ${parseInt(d, 10)}, ${y}`;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const Content = COMPONENTS[slug];
  if (!post || !Content) notFound();

  const url = `https://fedtalentusa.com/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: `https://fedtalentusa.com${AUTHOR.path}`,
      image: `https://fedtalentusa.com${AUTHOR.image}`,
    },
    publisher: {
      "@type": "Organization",
      name: "FedTalentUSA",
      url: "https://fedtalentusa.com/",
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fedtalentusa.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://fedtalentusa.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-blue-700">
          Blog
        </Link>{" "}
        / <span className="text-slate-800">{post.tags[0]}</span>
      </nav>
      <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
        {post.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
        <Link
          href={AUTHOR.path}
          className="flex items-center gap-2 font-medium text-slate-700 hover:text-blue-700"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={AUTHOR.image}
            alt={AUTHOR.name}
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover"
          />
          By {AUTHOR.name}
        </Link>
        <span>·</span>
        <span>Published {formatDate(post.datePublished)}</span>
        <span>·</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <div className="mt-8">
        <Content />
      </div>
      <section className="mt-10 flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={AUTHOR.image}
          alt={AUTHOR.name}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Written by
          </p>
          <Link
            href={AUTHOR.path}
            className="mt-0.5 block font-bold text-slate-900 hover:text-blue-700"
          >
            {AUTHOR.name}
          </Link>
          <p className="text-sm font-medium text-blue-700">{AUTHOR.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {AUTHOR.bioShort}
          </p>
          <Link
            href={AUTHOR.path}
            className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:underline"
          >
            More from {AUTHOR.name} →
          </Link>
        </div>
      </section>
      <p className="mt-10 border-t border-slate-200 pt-6">
        <Link
          href="/blog"
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          ← Back to the blog
        </Link>
      </p>
    </section>
  );
}
