import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "./Navbar";
import Script from "next/script";
import RouteProgress from "./RouteProgress";

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
              <li>
                <Link href="/terms" className="hover:text-blue-700">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-blue-700">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-700">
                  FAQ
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
        {/* InMobi Choice CMP (TCF 2.3) — consent banner for The Moneytizer / Improve Digital */}
        <Script id="inmobi-cmp" strategy="beforeInteractive">
          {`(function() {
  var host = "www.themoneytizer.com";
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://cmp.inmobi.com'
    .concat('/choice/', '6Fv0cGNfc_bw8', '/', host, '/choice.js?tag_version=V3');
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        if(args[0] === 'init' && typeof args[3] === 'object') {
          args[3] = Object.assign(args[3], { tag_version: 'V3' });
        }
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            if (event && event.source && event.source.postMessage) {
              event.source.postMessage(returnMsg, '*');
            }
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2BE68KTVRR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2BE68KTVRR');`}
        </Script>
        <RouteProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
