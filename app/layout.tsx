import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: {
    default: "FedTalentUSA — Top Federal Contractors, Ranked by Real Contract Data",
    template: "%s | FedTalentUSA",
  },
  description:
    "Rankings and profiles of the 1,000 largest U.S. federal contractors by actual contract obligations from USAspending.gov — agency, state, industry and award breakdowns for every company.",
  metadataBase: new URL("https://fedtalentusa.com"),
  alternates: {
    canonical: "https://fedtalentusa.com/",
  },
  openGraph: {
    siteName: "FedTalentUSA",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://fedtalentusa.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FedTalentUSA — Top Federal Contractors, Ranked by Real Contract Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-slate-900">
              FedTalent<span className="text-blue-600">USA</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Rankings and profiles of the largest U.S. federal contractors,
              built from official USAspending.gov contract data.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Company</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-blue-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-700">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Data</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>
                <Link href="/contractors" className="hover:text-blue-700">
                  Top 1,000 Contractors
                </Link>
              </li>
              <li>
                <a
                  href="https://www.usaspending.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  USAspending.gov
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@fedtalentusa.com"
                  className="hover:text-blue-700"
                >
                  contact@fedtalentusa.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-4 text-sm text-slate-500">
          <p>
            FedTalentUSA is a{" "}
            <a
              href="https://www.hireskys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 hover:text-blue-700"
            >
              HireSkys
            </a>{" "}
            company. Contract data: USAspending.gov, the official source for
            U.S. federal spending.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
