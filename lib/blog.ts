// lib/blog.ts — Blog registry for FedTalentUSA.
// Pattern mirrors VisaTalentUSA: post components live in lib/blog/posts/
// (filename MUST equal the slug); this file holds the metadata only, so
// server files (sitemap, article page) can import it without pulling in
// any component code.

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  tags: string[];
  faqs: BlogFaq[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "top-federal-contractors",
    title: "Top Federal Contractors: The FY2025 Ranking by Real Contract Data",
    excerpt:
      "The 1,000 largest U.S. federal contractors by FY2025 contract obligations — Lockheed Martin leads at $64.73 billion, the top 1,000 total $554.25 billion, and the Department of Defense accounts for 61.5% of it.",
    datePublished: "2026-10-27",
    dateModified: "2026-10-27",
    readingMinutes: 13,
    tags: ["Federal Contractors", "FY2025 Rankings", "USAspending Data"],
    faqs: [
      {
        question: "Who is the largest federal contractor in FY2025?",
        answer:
          "Lockheed Martin Corp, with $64,725,692,748 in FY2025 federal contract obligations — rank #1 of 1,000 in the FedTalentUSA ranking. About 98.8% of its FY2025 total came from the Department of Defense.",
      },
      {
        question: "How much did the top 1,000 federal contractors win in FY2025?",
        answer:
          "Combined, the 1,000 companies in this ranking recorded $554,248,039,929 in FY2025 contract obligations. The smallest company in the ranking, Analex Corporation at rank #1,000, recorded $48,186,676.",
      },
      {
        question: "What does a contractor's total actually measure?",
        answer:
          "Prime federal contract obligations — the dollars agencies obligated on contracts — summed across every USAspending recipient record belonging to that company (parent and child records combined) for the fiscal year. It is not company revenue, and it does not include subcontracts or grants.",
      },
      {
        question: "Why do other sites show different totals for the same company?",
        answer:
          "Because their scopes differ. Washington Technology's Top 100 covers IT, systems integration and telecom work only; GovTribe's defense ranking uses a trailing-12-month window; other lists use a single recipient record instead of the whole parent family, or a different data vintage. Totals are only comparable when the scope, the fiscal year and the family definition match.",
      },
      {
        question: "Which agency spends the most with contractors?",
        answer:
          "The Department of Defense, by a wide margin: $340,858,883,451 in FY2025 agency splits across the top 1,000, or 61.5% of the ranking's total. The Department of Veterans Affairs is second at $65,636,548,574 (11.8%), followed by the Department of Energy at $46,354,495,604 (8.4%).",
      },
      {
        question: "Which state gets the most federal contract work?",
        answer:
          "Virginia, with $97,355,627,578 in FY2025 work by place of performance — where the work was performed, not where the contractor is headquartered. Texas is second at $76,136,314,617, followed by California at $42,060,907,816.",
      },
      {
        question: "What is FY2025, and why is it the latest complete year?",
        answer:
          "The federal fiscal year runs October 1 to September 30, so FY2025 covers October 1, 2024 to September 30, 2025. It is the latest complete fiscal year in this dataset; FY2026 reporting is still incomplete because agency reporting, especially from the Department of Defense, lags by roughly 90 days.",
      },
      {
        question: "How is this ranking different from the Washington Technology Top 100?",
        answer:
          "Washington Technology ranks 100 companies in its IT, systems integration and telecom scope, with one total per company. This ranking covers 1,000 companies across every contract type, with a three-year trend, agency, state, NAICS and PSC splits, and individual awards for every company.",
      },
    ],
  },
  {
    slug: "how-to-get-government-contracts",
    title: "How to Get Government Contracts: A Step-by-Step Guide With Real FY2025 Data",
    excerpt:
      "How to get government contracts, step by step — SAM.gov registration, finding opportunities, and bidding — with real FY2025 USAspending data on where the $554 billion actually goes.",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 12,
    tags: ["Government Contracts", "How-To Guides", "USAspending Data"],
    faqs: [
      {
        question: "What are the easiest government contracts to get?",
        answer:
          "There is no contract that is easy in the sense of guaranteed. The realistic entry points are smaller contracts, contracts set aside for small businesses, and subcontracting work under a large prime contractor. Businesses that start by subcontracting build the past performance that later helps them win prime contracts of their own.",
      },
      {
        question: "Is it hard to get government contracts?",
        answer:
          "It is competitive, and first attempts often lose. The process itself is open to any registered business: register on SAM.gov, find an opportunity that fits what you sell, and submit a compliant proposal. The difficulty is not access, it is competition — incumbents with past performance usually have an advantage, which is why new entrants often start with smaller or set-aside contracts.",
      },
      {
        question: "How can I acquire government contracts?",
        answer:
          "In three steps: first, register your business on SAM.gov and get your UEI and CAGE code; second, search SAM.gov Contract Opportunities and study who already wins work in your industry; third, submit a proposal that answers every requirement in the solicitation. The guide walks through each step, with real FY2025 spending data showing where the money actually goes.",
      },
      {
        question: "How much do government contracts cost?",
        answer:
          "Registering on SAM.gov is free, and the government does not charge a fee to bid. The real cost is your own time and effort: preparing a proposal, meeting compliance requirements, and, if you win, delivering the work. Anyone charging you a fee just to register on SAM.gov is selling you a service you can do yourself for free.",
      },
      {
        question: "Which agency awards the most contracts?",
        answer:
          "The Department of Defense, by a wide margin: $340.86 billion in FY2025 agency splits across the top 1,000 contractors, or 61.5% of that set's $554.25 billion total. The Department of Veterans Affairs is second at $65.64 billion (11.8%), followed by the Department of Energy at $46.35 billion (8.4%).",
      },
      {
        question: "How much did the top 1,000 federal contractors win in FY2025?",
        answer:
          "Combined, the 1,000 companies in the FedTalentUSA ranking recorded $554,248,039,929 in FY2025 prime contract obligations. The top 10 alone account for about $198 billion, or roughly 36% of that total — and the top 10 agencies account for about 96% of it.",
      },
      {
        question: "Where is most federal contract work performed?",
        answer:
          "Virginia, with $97.36 billion in FY2025 work by place of performance — where the work was performed, not where the contractor is headquartered. Texas is second at $76.14 billion, followed by California at $42.06 billion. Note the distinction: a contractor headquartered in one state often performs most of its work in another.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export interface AuthorInfo {
  name: string;
  slug: string;
  role: string;
  image: string;
  path: string;
  bioShort: string;
  bioLong: string[];
  sameAs: string[];
}

export const AUTHOR: AuthorInfo = {
  name: "Muhammad Talha",
  slug: "muhammad-talha",
  role: "Founder, HireSkys",
  image: "/muhammad-talha.jpg",
  path: "/author/muhammad-talha",
  bioShort:
    "Founder of HireSkys. Muhammad Talha built FedTalentUSA on official USAspending.gov federal contract data — so businesses can see who actually wins federal contracts, which agencies buy, and where the work goes.",
  bioLong: [
    "Muhammad Talha is the founder of HireSkys, the remote-jobs platform behind FedTalentUSA. He built FedTalentUSA to turn USAspending.gov's public federal contract records into a searchable ranking anyone can use.",
    "His work focuses on the data behind federal contracting: which companies actually win contracts, how agency, state, and industry splits shape the market, and what the latest complete fiscal year shows. Every guide on this site is written from that contract data and checked against official sources.",
  ],
  sameAs: ["https://www.hireskys.com"],
};
