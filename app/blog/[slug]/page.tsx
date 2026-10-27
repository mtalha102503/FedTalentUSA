import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog";
import TopFederalContractorsContent from "@/lib/blog/posts/top-federal-contractors";

export const dynamicParams = false;

const COMPONENTS: Record<string, React.ComponentType> = {
  "top-federal-contractors": TopFederalContractorsContent,
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
      "@type": "Organization",
      name: "FedTalentUSA",
      url: "https://fedtalentusa.com/",
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
      <p className="mt-3 text-sm text-slate-500">
        Published {formatDate(post.datePublished)} · {post.readingMinutes}{" "}
        min read · FedTalentUSA
      </p>
      <div className="mt-8">
        <Content />
      </div>
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
