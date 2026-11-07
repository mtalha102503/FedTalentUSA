// lib/blog/posts/viasat-sdn-backbone-mission-operations-center.tsx — Viasat's $450M SDN-B Mission Operations Center award.
// Newsjack, announced 6 November 2026. FedTalentUSA blog #6.
// Accuracy notes (every figure checked against the official SSC announcement, Nov 2026):
// - $450M is the IDIQ MAXIMUM CEILING — not funded money, not guaranteed revenue.
// - $115M is the FUNDED initial task order — the only money attached to work at award.
// - The award is COMPETITIVE (Viasat won it); Viasat is the network and mission
//   system integration partner. The MOC location is NOT disclosed in the announcement.
// - SpaceX's $2.29B OTA (May 2026) is a SEPARATE foundational agreement for the
//   backbone constellation, prototype due end-2027 — not part of Viasat's award.
// - Do NOT confuse with the NASA Ka-band relay selections (4 Nov 2026): Viasat
//   $460.9M ceiling, concept-stage only — a different award, different agency.
// - One unverified figure from early coverage is EXCLUDED from this article entirely.
// Registry metadata (for lib/blog.ts at push time):
// slug "viasat-sdn-backbone-mission-operations-center"; title "Viasat's $450M Space
// Data Network Win: What the Mission Operations Center Means for Golden Dome Vendors";
// date 2026-11-07; readingMinutes 8 (body prose ~1,780 words).
// excerpt "Viasat has won a $450 million-ceiling Space Force contract, with $115 million
// funded at award, to design, field, and scale the Mission Operations Center for the
// Space Data Network–Backbone — the multi-vendor network being built in partnership
// with Golden Dome for America."

function Table({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-slate-50">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-slate-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-200">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much is Viasat actually getting under this contract?",
    a: "Viasat has a funded initial task order of $115 million. The contract's maximum ceiling is $450 million, which is the most that could be ordered under it — not an amount guaranteed or paid at award.",
  },
  {
    q: "What will Viasat build and run?",
    a: "Viasat will design, field, and scale the Mission Operations Center for the Space Data Network–Backbone, serving as the network and mission system integration partner. The center brings together mission integration, network operations, and data transport management.",
  },
  {
    q: "What is the Space Data Network–Backbone?",
    a: "It is the Space Force's open-architecture, multi-vendor space data network under the Space-Based Sensing and Targeting portfolio, being expanded across multiple space-segment providers and built in partnership with Golden Dome for America.",
  },
  {
    q: "What is Golden Dome for America?",
    a: "As described in the announcement, it is the Department of War's layered homeland defense initiative, integrating sensors, data, command-and-control, and defensive systems to detect, track, and defeat advanced missile and aerial threats.",
  },
  {
    q: "Which other companies are already part of the program?",
    a: "The SBST portfolio's earlier Delivery Order 2 and Delivery Order 3 work involved Amazon LEO for Government, Lockheed Martin, Northrop Grumman, Rocket Lab, and York Space Systems. Separately, SpaceX holds the foundational $2.29 billion other transaction authority agreement (May 2026) for the proliferated low Earth orbit backbone constellation, with a fully operational prototype due by the end of 2027.",
  },
  {
    q: "Is this the same as Viasat's NASA Ka-band award?",
    a: "No. The NASA Ka-band relay selections announced on 4 November 2026 — where Viasat appears with a $460.9 million ceiling, at concept stage only — are a separate award from a different agency. This article is about the Space Force Space Systems Command award announced on 6 November 2026.",
  },
];

export default function ViasatSdnContent() {
  return (
    <div>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Space Systems Command has awarded Viasat a competitive contract to
        build the operations hub for a multi-vendor space network. The
        headline number is a ceiling — here is what is actually funded, what
        the center will do, and who is already in the program.
      </p>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
        <p className="font-semibold text-slate-900">At a glance</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            <strong>Buyer:</strong> U.S. Space Force, Space Systems Command
            (SSC)
          </li>
          <li>
            <strong>Awardee:</strong> Viasat, Inc.
          </li>
          <li>
            <strong>Award type:</strong> Competitive
            indefinite-delivery/indefinite-quantity (IDIQ) contract
          </li>
          <li>
            <strong>Contract ceiling:</strong> $450 million — maximum
            possible value, not guaranteed revenue
          </li>
          <li>
            <strong>Funded at award:</strong> $115 million — initial task
            order
          </li>
          <li>
            <strong>Work:</strong> Design, field, and scale a Mission
            Operations Center (MOC) for the Space Data Network–Backbone
            (SDN-B)
          </li>
          <li>
            <strong>Viasat&apos;s role:</strong> Network and mission system
            integration partner
          </li>
          <li>
            <strong>Program:</strong> Space-Based Sensing and Targeting
            (SBST) portfolio, in partnership with Golden Dome for America
          </li>
          <li>
            <strong>Announced:</strong> 6 November 2026
          </li>
          <li>
            <strong>MOC location:</strong> Not disclosed in the announcement
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Source for every fact in this box: the official Space Systems
          Command announcement of 6 November 2026, cited in full under
          Sources at the end of this article.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What the award is — and why the ceiling is not the money
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        On 6 November 2026, Space Systems Command awarded Viasat, Inc. a
        competitive indefinite-delivery/indefinite-quantity (IDIQ) contract
        to design, field, and scale a Mission Operations Center for the
        Space Data Network–Backbone.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Two numbers describe this award, and they mean different things.
      </p>
      <Table
        head={["", "Amount", "What it means"]}
        rows={[
          [
            "Contract ceiling",
            "$450 million",
            "Maximum possible value under the IDIQ — not guaranteed revenue, not paid at award.",
          ],
          [
            "Funded at award",
            "$115 million",
            "Initial task order — the work actually funded now.",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        That distinction matters for every vendor reading a headline like
        this one. A ceiling tells you the size of the lane the government
        has opened. A funded task order tells you the size of the work that
        has actually started. Future task orders under the same IDIQ, if any
        are issued, would add to the funded total — but the announcement
        does not promise them, and this article does not assume them.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The award is also competitive. Viasat won it; it was not handed
        over without competition. In its role under the contract, Viasat
        serves as the network and mission system integration partner as SSC
        expands an open-architecture ecosystem across multiple space-segment
        providers.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What the Mission Operations Center does
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        A Mission Operations Center is the place where a network is run day
        to day — where missions are coordinated, the network is monitored
        and managed, and data is moved to where it needs to go. For the
        SDN-B, that job is larger than running a single company&apos;s
        satellites, because the network underneath it is deliberately
        multi-vendor.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        According to the announcement, the MOC brings together three
        functions:
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="font-semibold text-slate-900">
            Mission integration
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Coordinating the missions that use the network.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="font-semibold text-slate-900">Network operations</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Running and overseeing the network itself.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="font-semibold text-slate-900">
            Data transport management
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Managing how data travels across the architecture.
          </p>
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-slate-700">
        Together, those functions are meant to help the Space-Based Sensing
        and Targeting portfolio field an operationally integrated capability
        — in plain terms, separate pieces from separate providers working as
        one usable system, rather than as disconnected parts.
      </p>
      <div className="mt-6 rounded-lg border-l-4 border-blue-600 bg-slate-50 px-5 py-4">
        <p className="italic leading-relaxed text-slate-700">
          “Establishing this Mission Operations Center is a crucial step in
          maturing our Space Data Network into a fully operational,
          multi-vendor capability.”
        </p>
        <p className="mt-2 text-sm text-slate-500">
          — Space Force Lt. Col. Alexa Eggert, materiel leader for the SBST
          SDN Backbone program (as quoted in the SSC announcement)
        </p>
      </div>
      <p className="mt-4 leading-relaxed text-slate-700">
        One practical detail is missing, and vendors should not guess at it:
        the announcement does not disclose where the Mission Operations
        Center will be built.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The Space Data Network Backbone in brief
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The Space Data Network–Backbone is the connective layer of the
        Space-Based Sensing and Targeting portfolio. Its premise is open
        architecture: instead of buying one closed system from one provider,
        SSC is building a network that multiple space-segment providers can
        plug into, with integration handled as a program function rather
        than left to chance.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The work sits in partnership with Golden Dome for America, described
        in the announcement as the Department of War&apos;s layered homeland
        defense initiative. Golden Dome integrates sensors, data,
        command-and-control, and defensive systems to detect, track, and
        defeat advanced missile and aerial threats. A data backbone is the
        layer that lets those sensors and systems share what they see
        quickly enough to act on it — which is why an operations center, not
        just satellites, is a program milestone.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Viasat&apos;s MOC sits on the ground-and-integration side of that
        picture: operating the network and managing its data transport,
        while space-segment providers supply capacity in orbit. Keeping
        those two sides separate in your reading of any SDN-B news will
        prevent most misreadings of who won what.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Who else is already in the program
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Viasat is joining a program that already has a bench. The
        announcement notes that the SDN-B effort builds on the SBST
        portfolio&apos;s prior Delivery Order 2 and Delivery Order 3 work
        with five providers:
      </p>
      <Table
        head={["Company", "Role in the SDN Backbone"]}
        rows={[
          [
            "SpaceX",
            "Foundational $2.29 billion other transaction authority agreement (May 2026) for the proliferated low Earth orbit backbone constellation; fully operational prototype due by the end of 2027.",
          ],
          [
            "Amazon LEO for Government",
            "SBST Delivery Order 2 and Delivery Order 3 work.",
          ],
          [
            "Lockheed Martin",
            "SBST Delivery Order 2 and Delivery Order 3 work.",
          ],
          [
            "Northrop Grumman",
            "SBST Delivery Order 2 and Delivery Order 3 work.",
          ],
          [
            "Rocket Lab",
            "SBST Delivery Order 2 and Delivery Order 3 work.",
          ],
          [
            "York Space Systems",
            "SBST Delivery Order 2 and Delivery Order 3 work.",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        For vendors, the picture is therefore not a single-winner program.
        It is a multi-vendor architecture with a foundational constellation
        provider, several space-segment providers already working under
        earlier delivery orders, and now a named integration partner for
        mission operations. That structure is the story — not any one
        company&apos;s headline number alone.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What vendors should watch next
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Nothing beyond the facts above is announced, so treat the following
        as watch items, not as news:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>Follow-on task orders.</strong> Whether additional task
          orders are issued under Viasat&apos;s IDIQ, and how the funded
          total moves beyond the initial $115 million toward — or short
          of — the $450 million ceiling.
        </li>
        <li>
          <strong>Integration requirements.</strong> How the
          integration-partner role is exercised in practice: which
          interfaces, standards, and onboarding steps space-segment
          providers will be expected to meet under the open-architecture
          model.
        </li>
        <li>
          <strong>MOC location.</strong> Any later disclosure of where the
          Mission Operations Center will be built, which the current
          announcement does not state.
        </li>
        <li>
          <strong>Prototype milestone.</strong> Progress toward SpaceX&apos;s
          fully operational prototype, due by the end of 2027 under its
          foundational agreement, since the operations center and the
          constellation mature on linked timelines.
        </li>
        <li>
          <strong>New entrants.</strong> Further delivery orders or awards
          that add providers to the SDN-B ecosystem, following the pattern
          of Delivery Orders 2 and 3.
        </li>
      </ul>
      <p className="mt-4 leading-relaxed text-slate-700">
        FedTalentUSA will update its contractor coverage if and when SSC
        announces any of the above. Until then, the verified position is
        the $115 million initial task order under a $450 million ceiling —
        no more, no less.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What this award is not
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>Not a $450 million payment.</strong> It is not $450
          million paid or guaranteed. Only $115 million is funded at award;
          the rest is ceiling.
        </li>
        <li>
          <strong>Not a monopoly.</strong> It is not a sole-vendor takeover
          of the Space Data Network. The program is explicitly multi-vendor,
          with SpaceX, Amazon LEO for Government, Lockheed Martin, Northrop
          Grumman, Rocket Lab, and York Space Systems already in it.
        </li>
        <li>
          <strong>Not located — yet.</strong> Its location has not been
          announced. Any report naming a site for the Mission Operations
          Center is going beyond the official announcement.
        </li>
        <li>
          <strong>Not the NASA Ka-band award.</strong> On 4 November 2026,
          NASA announced separate Ka-band relay selections in which Viasat
          appears with a $460.9 million ceiling, at concept stage only. That
          is a different award, from a different agency, for different work.
          Do not merge the two numbers or the two programs.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Frequently asked questions
      </h2>
      {FAQS.map((f) => (
        <div key={f.q} className="mt-6">
          <p className="font-semibold text-slate-900">{f.q}</p>
          <p className="mt-2 leading-relaxed text-slate-700">{f.a}</p>
        </div>
      ))}

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Sources</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700">
        <li>
          <a
            href="https://www.ssc.spaceforce.mil/Newsroom/Article/4642795/ussf-in-partnership-with-golden-dome-for-america-expands-multi-vendor-space-dat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            U.S. Space Force, Space Systems Command — “USSF, in partnership
            with Golden Dome for America, expands multi-vendor Space Data
            Network–Backbone” (6 November 2026)
          </a>{" "}
          — official announcement; source for the award figures in this
          article.
        </li>
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-slate-500">
        This article is general information about the award as of November
        7, 2026. It is not legal or investment advice. Award figures are as
        announced by Space Systems Command; future task orders under the
        contract, if any, are not announced.
      </p>
    </div>
  );
}
