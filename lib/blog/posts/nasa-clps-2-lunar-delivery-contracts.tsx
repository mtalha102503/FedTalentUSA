// lib/blog/posts/nasa-clps-2-lunar-delivery-contracts.tsx — NASA CLPS 2 Moon delivery framework.
// Newsjack, announced 7 November 2026. FedTalentUSA blog #7.
// Accuracy notes (every figure checked against the official NASA/JPL announcement, Nov 2026):
// - $10B is the CLPS 2 IDIQ MAXIMUM CEILING (10-year, multiple-award) — not funded
//   money, not guaranteed revenue, not a payment to any vendor.
// - FUNDED so far under CLPS 2: one award — Blue Origin, $94M base contract plus a
//   $140M performance option, to deliver the PROMISE rover to the lunar South Pole.
// - The ~$1.3B is SIX task orders under the SEPARATE VADR launch services contract
//   (Arrow Science and Technology, Blue Origin, Impulse Space) — NOT CLPS 2 money.
//   VADR itself is a 10-year IDIQ with a $5B maximum total value.
// - The $15B figure is an OPTION only: Voyager's release says the base contract runs
//   through 2036 at a $10B ceiling, with an option to extend to 2041 that would raise
//   the ceiling to $15B. $15B is NOT the current ceiling — do not present it as one.
// - CLPS 1 raised from $2.6B to $4.2B; original CLPS contract in place through
//   November 2028, with deliveries through November 2033.
// - Top-1,000 overlap VERIFIED against the site's own FY2025 data (local .build-data,
//   cross-checked against live Supabase contractor_years — totals match to the cent):
//   FIVE of the eight vendors are in the Top 1,000, not four — Lockheed Martin Corp
//   #1 ($64,725,692,748), Northrop Grumman Corporation #8 ($9,763,138,991), Space
//   Exploration Technologies Corp. #30 ($3,009,914,691), Firefly Aerospace Inc. #531
//   ($115,033,988), Blue Origin, LLC #584 ($106,054,852). Intuitive Machines, iSpace
//   US, and Voyager Technologies are NOT in the Top 1,000 (no Astrobotic entry either).
//   Lockheed Martin Space and Northrop Grumman Space Systems are divisions — the
//   ranking lists their parent families (Lockheed Martin Corp, Northrop Grumman Corp).
// - "Up to six metric tons" for next-generation landers is from Moon Base Program
//   manager Carlos García-Galán speaking at the announcement event, as reported by
//   Scientific American (7 November 2026) — attributed, not from the JPL release.
// Registry metadata (for lib/blog.ts at push time):
// slug "nasa-clps-2-lunar-delivery-contracts"; title "NASA CLPS 2: The $10B Moon
// Delivery Framework — Who's In, What's Funded, and What It Means for Federal
// Contractors"; date 2026-11-08; readingMinutes 11 (body prose ~2,400 words).
// excerpt "NASA has named eight vendors for CLPS 2, a 10-year Moon delivery framework
// with a $10 billion ceiling — but only $94 million is funded so far, to Blue Origin
// for the nuclear-powered PROMISE rover. Five of the eight vendors are already in
// FedTalentUSA's Top 1,000 federal contractors."

import Link from "next/link";

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
    q: "What is NASA CLPS 2?",
    a: "CLPS 2 is the next phase of NASA's Commercial Lunar Payload Services program: a 10-year, multiple-award, indefinite-delivery/indefinite-quantity contract with a combined maximum value of $10 billion. Eight companies were selected and are now eligible to compete for future lunar surface delivery task orders. Selection is eligibility to compete — it is not a guaranteed award or payment.",
  },
  {
    q: "How much money has NASA actually awarded under CLPS 2 so far?",
    a: "One award: a $94 million base contract to Blue Origin, with a $140 million performance option, to deliver the nuclear-powered PROMISE rover to the Moon's South Pole on Blue Origin's Mark 1 lander. The $10 billion figure is the contract ceiling — the maximum that could be ordered over 10 years — not money paid at award.",
  },
  {
    q: "Is the $1.3 billion part of CLPS 2?",
    a: "No. The approximately $1.3 billion is six launch and in-space transportation task orders under a separate contract — NASA's Venture-Class Acquisition of Dedicated and Rideshare (VADR) launch services contract, awarded to Arrow Science and Technology, Blue Origin, and Impulse Space. VADR itself is a 10-year contract with a $5 billion maximum total value. It was announced the same day, which is why the two figures get mixed up.",
  },
  {
    q: "What is the $15 billion CLPS 2 figure I have seen?",
    a: "It is an option, not the current ceiling. Voyager Technologies' release states the base CLPS 2 contract runs through 2036 under a $10 billion ceiling, with an option to extend to 2041 that would raise the ceiling to $15 billion. Unless that option is exercised, $10 billion is the ceiling.",
  },
  {
    q: "Which CLPS 2 vendors are in FedTalentUSA's Top 1,000 federal contractors?",
    a: "Five of the eight: Lockheed Martin Corp at #1 ($64,725,692,748 in FY2025), Northrop Grumman Corporation at #8 ($9,763,138,991), Space Exploration Technologies Corp. (SpaceX) at #30 ($3,009,914,691), Firefly Aerospace Inc. at #531 ($115,033,988), and Blue Origin, LLC at #584 ($106,054,852). Intuitive Machines, iSpace US, and Voyager Technologies are not in the Top 1,000. Lockheed Martin Space and Northrop Grumman Space Systems are divisions — the ranking lists their parent families.",
  },
  {
    q: "What is the PROMISE rover?",
    a: "PROMISE — Polar Rover for Observation, Mapping, and In-Situ Exploration — is a nuclear-powered, six-wheeled rover that will land at the Moon's South Pole to characterize the surface and subsurface, assess resource potential, and provide data for landing site selection. NASA's Jet Propulsion Laboratory manages the mission and is building the rover from spare flight components and engineering test models from the Curiosity and Perseverance Mars rovers. Launch is targeted for late 2028, with an 18-month mission.",
  },
  {
    q: "What happened to the original CLPS contract?",
    a: "It continues. NASA raised the CLPS 1.0 contract ceiling from $2.6 billion to $4.2 billion to support initial Moon Base objectives. The original contract remains in place through November 2028, with an additional five-year period to complete awarded lunar deliveries through November 2033. CLPS 2 is the next-phase framework that follows it.",
  },
];

export default function NasaClps2Content() {
  return (
    <div>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        On 7 November 2026, NASA named eight companies for the next phase
        of its Commercial Lunar Payload Services program — CLPS 2, a
        10-year Moon delivery framework with a{" "}
        <strong>$10 billion combined ceiling</strong>. It is the largest
        commercial lunar delivery vehicle NASA has ever opened, and it sits
        at the center of the agency&apos;s Moon Base plan to establish a
        sustained presence at the lunar South Pole. But the headline number
        is a ceiling, not a payment: the only money actually awarded under
        CLPS 2 so far is a{" "}
        <strong>$94 million contract to Blue Origin</strong> to deliver a
        nuclear-powered rover. And five of the eight vendors are already
        names federal contractors will recognise — they sit in
        FedTalentUSA&apos;s Top 1,000.
      </p>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4">
        <p className="font-semibold text-slate-900">At a glance</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700">
          <li>
            <strong>Announced:</strong> 7 November 2026, at the MAX POWER
            aerospace expo and air show, NASA&apos;s Kennedy Space Center,
            Florida
          </li>
          <li>
            <strong>Framework:</strong> CLPS 2 — 10-year, multiple-award,
            indefinite-delivery/indefinite-quantity (IDIQ) master contract
          </li>
          <li>
            <strong>Contract ceiling:</strong> $10 billion combined maximum
            value — the most that could be ordered, not guaranteed revenue
          </li>
          <li>
            <strong>Funded so far:</strong> $94 million base contract to
            Blue Origin, plus a $140 million performance option
          </li>
          <li>
            <strong>Vendors:</strong> 8 — Blue Origin, Firefly Aerospace,
            Intuitive Machines, iSpace US, Lockheed Martin Space, Northrop
            Grumman Space Systems, SpaceX, Voyager Technologies
          </li>
          <li>
            <strong>CLPS 1:</strong> ceiling raised from $2.6 billion to
            $4.2 billion; in place through November 2028, deliveries
            through November 2033
          </li>
          <li>
            <strong>First funded job:</strong> delivering the
            nuclear-powered PROMISE rover to the lunar South Pole, launch
            targeted for late 2028
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Source for every fact in this box: NASA&apos;s official
          announcement of 7 November 2026, cited in full under Sources at
          the end of this article.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The ceiling is not the money
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Three numbers describe CLPS 2, and they mean different things. Mix
        them up and the story becomes a $10 billion payday that does not
        exist yet.
      </p>
      <Table
        head={["", "Amount", "What it means"]}
        rows={[
          [
            "Contract ceiling",
            "$10 billion",
            "Combined maximum value of the 10-year IDIQ — the most NASA could order across all eight vendors. Not guaranteed revenue, not paid at award.",
          ],
          [
            "Funded so far",
            "$94 million",
            "Blue Origin base contract to deliver the PROMISE rover, plus a $140 million option based on performance. The only CLPS 2 money attached to work today.",
          ],
          [
            "CLPS 1 (original)",
            "$2.6B raised to $4.2B",
            "Ceiling increase for the original CLPS contract, to support initial Moon Base objectives. In place through November 2028, deliveries through November 2033.",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        An IDIQ contract is a lane, not a job. Being selected for CLPS 2
        makes a company eligible to compete for future lunar surface
        delivery task orders — it does not promise any of them. Each task
        order is competed (or awarded) separately, and the funded total
        grows only as task orders are actually issued. A vendor reading
        this announcement should therefore ask a narrower question than
        “how big is CLPS 2?” — the useful question is “what task orders
        come next, and can we win one?”
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        One more figure needs the same discipline. Some coverage mentions a
        $15 billion CLPS 2 ceiling. That is an option, not the current
        ceiling: Voyager Technologies&apos; release states the base
        contract runs through 2036 under a $10 billion ceiling, with an
        option to extend to 2041 that would raise the ceiling to $15
        billion. Unless that option is exercised, $10 billion is the
        ceiling — this article uses $10 billion throughout.
      </p>
      <div className="mt-6 rounded-lg border-l-4 border-blue-600 bg-slate-50 px-5 py-4">
        <p className="italic leading-relaxed text-slate-700">
          “We are building the Moon Base mission by mission. Today&apos;s
          announcements expand nearly every part of that campaign, using
          the playbook that carried NASA through its greatest eras: fly
          often, learn, apply those lessons, and get more better and more
          capable with every mission.”
        </p>
        <p className="mt-2 text-sm text-slate-500">
          — NASA Administrator Jared Isaacman, at the 7 November 2026
          announcement (as quoted in NASA&apos;s release)
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The eight vendors — and five are already in the Top 1,000
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The eight companies selected for CLPS 2 are Blue Origin, Firefly
        Aerospace, Intuitive Machines, iSpace US, Lockheed Martin Space,
        Northrop Grumman Space Systems, SpaceX, and Voyager Technologies.
        Under the framework they will provide lunar delivery services,
        including managing, building, and operating landers that transport
        NASA science, technology, and infrastructure payloads to the Moon.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Five of the eight already appear in FedTalentUSA&apos;s Top 1,000
        federal contractors by FY2025 obligations — verified against the
        site&apos;s own FY2025 data, not estimated from press coverage:
      </p>
      <Table
        head={["Company", "Top 1,000 rank", "FY2025 total", "Of which NASA"]}
        rows={[
          [
            <Link
              key="lm"
              href="/contractors/lockheed-martin-corp"
              className="text-blue-700 hover:underline"
            >
              Lockheed Martin Corp
            </Link>,
            "#1",
            "$64,725,692,748",
            "$682,909,341",
          ],
          [
            <Link
              key="ng"
              href="/contractors/northrop-grumman-corporation"
              className="text-blue-700 hover:underline"
            >
              Northrop Grumman Corporation
            </Link>,
            "#8",
            "$9,763,138,991",
            "$419,853,130",
          ],
          [
            <Link
              key="spx"
              href="/contractors/space-exploration-technologies-corp"
              className="text-blue-700 hover:underline"
            >
              Space Exploration Technologies Corp. (SpaceX)
            </Link>,
            "#30",
            "$3,009,914,691",
            "$1,348,505,847",
          ],
          [
            <Link
              key="ff"
              href="/contractors/firefly-aerospace-inc"
              className="text-blue-700 hover:underline"
            >
              Firefly Aerospace Inc.
            </Link>,
            "#531",
            "$115,033,988",
            "$110,533,988",
          ],
          [
            <Link
              key="bo"
              href="/contractors/blue-origin-llc"
              className="text-blue-700 hover:underline"
            >
              Blue Origin, LLC
            </Link>,
            "#584",
            "$106,054,852",
            "$4,688,161",
          ],
        ]}
      />
      <p className="mt-4 leading-relaxed text-slate-700">
        Two notes keep this table honest. First, CLPS names divisions —
        “Lockheed Martin Space” and “Northrop Grumman Space Systems” — and
        this ranking is by parent family, so the totals above are the whole
        Lockheed Martin Corp and Northrop Grumman Corporation families, not
        the space divisions alone. Second, the three vendors not in the Top
        1,000 — Intuitive Machines, iSpace US, and Voyager Technologies —
        are absent from the ranking entirely, which means their FY2025
        prime federal obligations fell below the ranking&apos;s $48.2
        million cutoff at rank #1,000. That is a statement about their
        federal contracting footprint so far, not about their lunar
        capability: Firefly and Intuitive Machines are the only two
        companies that have actually landed spacecraft on the Moon under
        CLPS, and Voyager&apos;s Griffin-1 mission is headed for the lunar
        South Pole in late 2026.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The NASA column also tells two opposite stories. Firefly is
        almost a pure NASA vendor in this data — $110.5 million of its
        $115.0 million FY2025 total came from NASA, about 96%. Blue Origin
        is the reverse: only $4.7 million of its $106.1 million FY2025
        total is NASA money, while $101.4 million came from the Department
        of Defense. A CLPS 2 task order would therefore mean very different
        things to the two companies — for Firefly it would extend an
        already NASA-shaped book of business; for Blue Origin it would add
        a NASA line to a book that is currently dominated by defense work.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        PROMISE: the one funded job so far
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The only CLPS 2 money attached to actual work today is the PROMISE
        delivery. PROMISE — Polar Rover for Observation, Mapping, and
        In-Situ Exploration — is a nuclear-powered, six-wheeled rover that
        will land at the Moon&apos;s South Pole to characterize the surface
        and subsurface, assess resource potential, and provide data to
        enable landing site selection, as well as future infrastructure and
        exploration activities. Because it is nuclear-powered, it can
        operate during long lunar nights and within permanently shadowed
        regions thought to harbor ice — the capability a sustained human
        presence depends on.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        NASA&apos;s Jet Propulsion Laboratory will manage the mission and
        build the rover from a combination of spare flight components and
        engineering test models for NASA&apos;s Curiosity and Perseverance
        Mars rovers — proven hardware, software, and Mars rover operations
        approaches, reused to cut cost and shorten integration and testing.
        The rover will carry a drill to extract regolith from approximately
        3 feet (1 meter) below the surface, spectrometers for analyzing the
        chemical composition of surface material, temperature and radiation
        sensors, and visible-light cameras. It will also demonstrate a
        next-generation, radiation-tolerant computing system and advanced
        autonomy sensors and algorithms. NASA is targeting late 2028 to
        launch PROMISE and planning an 18-month mission for the rover.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Blue Origin won the delivery job: a $94 million base contract, with
        an option period worth an additional $140 million based on
        performance, to deliver PROMISE to the lunar South Pole on its Mark
        1 lander. The award expands a task order awarded in May 2026 to
        deliver two lunar terrain vehicles to the Moon, and it sits in the
        Moon Base&apos;s first phase. For vendors, the signal is that the
        first funded CLPS 2 work went to a company that already had a
        delivery relationship with NASA under the earlier task order — not
        to a newcomer.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        The $1.3 billion that is not CLPS 2 money
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The same NASA announcement also contained a second, separate award
        that is easy to confuse with CLPS 2 — and early coverage did
        confuse it. NASA awarded six task orders as part of its
        Venture-Class Acquisition of Dedicated and Rideshare (VADR) launch
        services contract, to Arrow Science and Technology, Blue Origin, and
        Impulse Space, to integrate and transport Moon Base cargo. Those
        task orders are worth approximately $1.3 billion combined, and they
        fall under the 10-year VADR indefinite-delivery/indefinite-quantity
        contract, which has a maximum total value of $5 billion across all
        contracts.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        VADR is launch and in-space transportation — orbital transfer
        vehicles acting as long-distance freight trucks between Earth and
        the Moon — while CLPS is the last-mile delivery of payloads to the
        lunar surface. The VADR missions cover three types: delivering the
        CAPSTONE 02 spacecraft to deep space to test proximity maneuvers,
        navigation, and communications around the Moon; sending highly
        mobile MoonFall drones to survey the lunar South Pole before
        astronauts arrive; and testing navigation technologies and
        operations in multiple cislunar orbits. Some missions will launch
        aboard Blue Origin&apos;s New Glenn, Relativity Space&apos;s Terran
        R, and SpaceX&apos;s Falcon 9 rockets, with in-space transportation
        spacecraft provided by Blue Origin, Firefly Aerospace, Impulse
        Space, and Quantum Space.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Two details matter for anyone tracking the money. First, the $1.3
        billion is a combined value for the six VADR task orders — it is
        real, funded work, but it is not CLPS 2 money and must not be added
        to the CLPS 2 ceiling or presented as CLPS 2 funding. Second, NASA
        separately selected SpaceX for a Cislunar Communications Deployment
        Demonstration under an existing lunar logistics contract: through a
        Specialized Delivery Mission task order, SpaceX will launch
        communications satellites aboard a Starship to cislunar space in
        2028, to inform future lunar communications networks. That is a
        third, distinct award in the same announcement.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What this means for vendors
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        CLPS 2 changes the shape of the lunar market in three ways that
        matter more than the $10 billion headline.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        <strong>First, the work gets bigger.</strong> NASA officials said
        at the announcement that the next generation of landers will need
        to carry loads of as much as six metric tons — an order of magnitude
        above the roughly 100-kilogram payloads of the early CLPS landers.
        Voyager&apos;s release describes the expanded mission types the
        same way: multi-lander procurements, or “bulk buys,” with metric
        ton landers, survive-the-night lunar surface missions, lunar sample
        return missions, and missions in direct support of the Artemis and
        Moon Base programs. The vendors who can build or operate heavier
        landers are the ones this framework is built for.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        <strong>Second, past performance now counts twice.</strong> The
        two companies that have already landed on the Moon under CLPS —
        Firefly and Intuitive Machines — arrive with demonstrated
        capability, and the first funded CLPS 2 job went to Blue Origin,
        which already held the May 2026 lunar terrain vehicle task order.
        New entrants are not locked out — iSpace US and Voyager are in the
        pool without a Top 1,000 federal footprint — but the pattern of
        the first award suggests NASA is building on relationships that
        already delivered.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        <strong>Third, the framework is a decade long.</strong> A 10-year
        IDIQ through 2036, with a possible five-year extension to 2041,
        means the task-order pipeline — not the announcement — is the
        market. Vendors should track the solicitations, not the ceiling:
        each task order is a separate competition, and the funded total
        will move in steps as orders are issued, exactly as the PROMISE
        award moved it from zero to $94 million.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What to watch next
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Nothing beyond the facts above is announced, so treat the following
        as watch items, not as news:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>First CLPS 2 task order solicitations.</strong> Which
          delivery missions NASA puts out for competition first, and
          whether the winners are the established Top 1,000 names or the
          smaller specialists.
        </li>
        <li>
          <strong>PROMISE milestones.</strong> Whether the late-2028
          launch target holds, and whether Blue Origin exercises the $140
          million performance option — the first test of how the option
          structure works in practice.
        </li>
        <li>
          <strong>Griffin-1.</strong> Voyager&apos;s Griffin Mission One,
          headed for the lunar South Pole in late 2026, is the
          near-term flight that shows whether the company&apos;s lander
          is ready before its first CLPS 2 competition.
        </li>
        <li>
          <strong>VADR flight cadence.</strong> When the six VADR task
          orders fly — CAPSTONE 02, the MoonFall drone missions, and the
          cislunar navigation demonstrations — since launch and transport
          capacity gates the delivery schedule.
        </li>
        <li>
          <strong>Mini-CAST and surface power.</strong> Work on the
          Mini-Communications and Solar Tower components (Honeybee
          Robotics for energy storage, Redwire for power generation, Yank
          Technologies for wireless power transfer) is expected to begin
          within months, with a separate solicitation for fully integrated
          power systems anticipated in early 2027.
        </li>
        <li>
          <strong>The extension option.</strong> Whether NASA exercises
          the five-year CLPS 2 extension to 2041 — the only path by which
          the $15 billion ceiling figure becomes real.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        What CLPS 2 is not
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        <li>
          <strong>Not a $10 billion payment.</strong> It is not $10
          billion paid or guaranteed. Only $94 million is funded so far
          (plus a $140 million option); the rest is ceiling.
        </li>
        <li>
          <strong>Not $1.3 billion of CLPS money.</strong> The
          approximately $1.3 billion is six VADR launch and transportation
          task orders under a separate $5 billion-maximum contract. Do not
          add it to CLPS 2.
        </li>
        <li>
          <strong>Not a $15 billion contract.</strong> The $15 billion
          figure is an unexercised option to extend the contract to 2041.
          The current ceiling is $10 billion.
        </li>
        <li>
          <strong>Not a guarantee of work.</strong> Selection makes the
          eight vendors eligible to compete for task orders. No vendor is
          promised any task order, and the three vendors outside the Top
          1,000 will have to win on capability, not on federal scale.
        </li>
        <li>
          <strong>Not the end of CLPS 1.</strong> The original CLPS
          contract, now at a $4.2 billion ceiling, remains in place through
          November 2028, with deliveries through November 2033. CLPS 2
          runs alongside it before taking over as the main framework.
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
            href="https://www.jpl.nasa.gov/news/nasa-awards-moon-base-transportation-technology-science-projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            NASA Jet Propulsion Laboratory — “NASA Awards Moon Base
            Transportation, Technology, Science Projects” (7 November 2026)
          </a>{" "}
          — official announcement; source for the CLPS 2 framework, the
          vendor list, the PROMISE award, the VADR task orders, and the
          CLPS 1 ceiling change.
        </li>
        <li>
          <a
            href="https://voyagertechnologies.com/press-releases/voyager-awarded-nasa-clps-2-contract/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Voyager Technologies — “Voyager Awarded NASA CLPS 2 Contract”
            (7 November 2026)
          </a>{" "}
          — company release; source for the base contract running through
          2036 at a $10 billion ceiling, with an option to extend to 2041
          at a $15 billion ceiling, and for the expanded mission types
          including metric ton landers.
        </li>
        <li>
          <a
            href="https://www.scientificamerican.com/article/nasa-reveals-new-lunar-rover-promise-to-launch-to-moon-in-2028/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Scientific American — “NASA reveals new lunar rover, PROMISE,
            to launch to moon in 2028” (7 November 2026)
          </a>{" "}
          — report of the announcement event; source only for the Moon Base
          Program manager&apos;s statement that next-generation landers
          will need to carry loads of as much as six metric tons.
        </li>
        <li>
          <Link
            href="/blog/top-federal-contractors"
            className="text-blue-700 hover:underline"
          >
            FedTalentUSA — Top Federal Contractors: The FY2025 Ranking by
            Real Contract Data
          </Link>{" "}
          — source for the Top 1,000 ranking method (family sums of
          USAspending.gov prime obligations) and the $48.2 million cutoff
          at rank #1,000. Vendor totals and ranks in this article are from
          the site&apos;s own FY2025 dataset.
        </li>
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-slate-500">
        This article is general information about the award as of November
        8, 2026. It is not legal or investment advice. Award figures are as
        announced by NASA and the vendors; future task orders under the
        contract, if any, are not announced. Top 1,000 ranks and totals are
        FY2025 prime federal contract obligations from USAspending.gov as
        compiled by FedTalentUSA.
      </p>
    </div>
  );
}
