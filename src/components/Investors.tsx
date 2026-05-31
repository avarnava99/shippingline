import {
  TrendingUp,
  Globe,
  Ship,
  BarChart3,
  DollarSign,
  ArrowUpRight,
  Container,
  Anchor,
  Target,
  Zap,
  ShieldCheck,
  Package,
  Handshake,
  BadgePercent,
} from "lucide-react";

const TRADE_STATS = [
  {
    route: "Italy — Cyprus",
    value: "€988M",
    detail: "Total imports from Italy (2025)",
    growth: "+2%",
    note: "EUR 762M containerizable — 77% of total and growing year on year",
  },
  {
    route: "Greece — Cyprus",
    value: "$3.2B",
    detail: "Annual imports to Cyprus",
    growth: "+11.9%",
    note: "Greece is Cyprus's #1 import partner — highest level in a decade",
  },
  {
    route: "Italy — Greece",
    value: "$9.1B",
    detail: "Annual bilateral trade",
    growth: "+10.5%",
    note: "Italy is Greece's #1 export destination",
  },
];

const ITALY_IMPORTS = [
  { product: "Iron & steel", value: 90, growth: 12 },
  { product: "Metal articles", value: 80, growth: -9 },
  { product: "Apparel & fashion", value: 100, growth: -5 },
  { product: "Pharmaceuticals", value: 36, growth: 27 },
  { product: "Plastics", value: 32, growth: -3 },
  { product: "Machinery", value: 32, growth: -11 },
  { product: "Ceramics & tiles", value: 31, growth: 7 },
  { product: "Beverages & wine", value: 26, growth: 5 },
  { product: "Footwear", value: 25, growth: 8 },
  { product: "Food products", value: 41, growth: 13 },
];

const PORT_VOLUMES = [
  {
    port: "Limassol",
    country: "Cyprus",
    teu: "500K",
    year: "2024",
    growth: "+8-9%",
    flag: "\u{1F1E8}\u{1F1FE}",
  },
  {
    port: "Piraeus",
    country: "Greece",
    teu: "4.2M",
    year: "2024",
    growth: null,
    flag: "\u{1F1EC}\u{1F1F7}",
  },
  {
    port: "Venice",
    country: "Italy",
    teu: "533K",
    year: "2025",
    growth: "+11.2%",
    flag: "\u{1F1EE}\u{1F1F9}",
  },
];

const MARKET_HIGHLIGHTS = [
  {
    icon: DollarSign,
    stat: "€762M",
    label: "Containerizable",
    detail: "Italian goods arriving in Cyprus by container annually",
  },
  {
    icon: TrendingUp,
    stat: "77%",
    label: "And Growing",
    detail: "Share of containerizable imports — up from 60% in 2021",
  },
  {
    icon: BarChart3,
    stat: "500K",
    label: "TEU",
    detail: "Containers through Limassol yearly — and growing",
  },
  {
    icon: Globe,
    stat: "$13.6B",
    label: "Corridor",
    detail: "Combined Italy-Greece-Cyprus bilateral trade",
  },
];

const PAIN_POINTS = [
  {
    icon: Package,
    title: "Opaque Pricing",
    problem:
      "You request quotes by email, wait hours or days, and never know if you're getting a fair rate. Every shipment is a negotiation.",
    solution:
      "Instant online quotes with transparent dynamic pricing. See exactly how the rate is calculated.",
  },
  {
    icon: Ship,
    title: "Unreliable Schedules",
    problem:
      "Mainline carriers deprioritize feeder routes. Your containers get rolled, delayed, or rerouted through hubs that add days.",
    solution:
      "Dedicated weekly service, Venice-Piraeus-Limassol direct. Fixed schedule, guaranteed space.",
  },
  {
    icon: BarChart3,
    title: "Cost Volatility",
    problem:
      "Med freight rates swung from $2,500 to $4,000+ per FEU in 2024. You can't plan procurement costs when freight is a moving target.",
    solution:
      "Dynamic pricing that trends down when you book early. Lock in rates 24h. Predictable costs.",
  },
];

const PARTNER_BENEFITS = [
  {
    icon: BadgePercent,
    title: "Preferential Rates",
    detail:
      "Investor-partners get founding shipper pricing — locked-in discounts below market rate for the first 2 years.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Allocation",
    detail:
      "Priority container space on every sailing. No rollovers, no bumping — your cargo moves on schedule.",
  },
  {
    icon: Handshake,
    title: "Equity Upside",
    detail:
      "Invest in the shipping line that serves your own supply chain. As the service grows, so does your return.",
  },
  {
    icon: Target,
    title: "Advisory Role",
    detail:
      "Shape the service. Your import expertise helps us optimize routes, schedules, and cargo mix.",
  },
];

const BUSINESS_MODEL = [
  {
    icon: Ship,
    title: "Experienced Operator",
    points: [
      "Managed by Shoham — shipping agents since 1956",
      "80+ years combined management experience",
      "Deep Mediterranean port relationships and trade knowledge",
    ],
  },
  {
    icon: Zap,
    title: "Technology Platform",
    points: [
      "Dynamic pricing engine delivers fair, transparent rates",
      "Online booking replaces phone calls and email chains",
      "Real-time tracking and digital documentation",
    ],
  },
  {
    icon: Target,
    title: "Asset-Light Model",
    points: [
      "Chartered vessel and leased containers — low fixed overhead",
      "Capital deployed into service quality and technology",
      "Scalable: add vessels and routes as demand grows",
    ],
  },
  {
    icon: Container,
    title: "Proven Economics",
    points: [
      "Revenue per sailing: ~$250K-400K at target utilization",
      "Break-even at moderate vessel fill rates",
      "Dynamic pricing improves yield vs. fixed-rate competitors",
    ],
  },
];

export default function Investors() {
  return (
    <section id="investors" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-ocean-500 font-semibold text-sm uppercase tracking-widest mb-3">
            For Cyprus Importers &amp; Investors
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Your supply chain.
            <br />
            Your shipping line.
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
            EUR 762 million in containerizable goods flow from Italy to
            Cyprus every year &mdash; steel, fashion, ceramics, food, wine,
            pharmaceuticals. Every container arrives through agents, opaque
            pricing, and unpredictable schedules. We&apos;re building the
            alternative &mdash; and inviting the importers who feel this
            pain to own a piece of it.
          </p>
        </div>

        {/* Market Highlights - 4 big stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {MARKET_HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 border border-slate-100 text-center"
            >
              <div className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-ocean-500" />
              </div>
              <div className="text-3xl font-bold text-navy-900 mb-1">
                {item.stat}
              </div>
              <div className="text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-2">
                {item.label}
              </div>
              <div className="text-sm text-slate-500">{item.detail}</div>
            </div>
          ))}
        </div>

        {/* The Problem — Cyprus Importer Pain Points */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            The problem you know too well
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            If you import goods to Cyprus from Italy or Greece, this is your
            reality today.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
              >
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h4 className="font-bold text-navy-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.problem}
                  </p>
                </div>
                <div className="p-6 bg-ocean-50/50">
                  <div className="text-xs font-bold text-ocean-600 uppercase tracking-wider mb-2">
                    With ShippingLine
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner — Benefits for Importer-Investors */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            Why invest as an importer
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            You&apos;re not just an investor &mdash; you&apos;re a founding
            shipper. You save on freight and earn on growth.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARTNER_BENEFITS.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 text-center"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h4 className="font-bold text-navy-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trade Corridor Stats */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            The trade flowing into Cyprus
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            Billions in bilateral trade &mdash; growing every year &mdash;
            with no dedicated digital shipping service.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {TRADE_STATS.map((stat) => (
              <div
                key={stat.route}
                className="bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-700">
                    {stat.route}
                  </span>
                  {stat.growth && (
                    <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <ArrowUpRight className="w-3 h-3" />
                      {stat.growth}
                    </span>
                  )}
                </div>
                <div className="text-3xl font-bold text-navy-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mb-3">
                  {stat.detail}
                </div>
                <div className="text-xs text-slate-400 border-t border-slate-100 pt-3">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Italy Import Breakdown */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            What Cyprus imports from Italy
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            EUR 762M in containerizable goods (2025). These are the products
            your businesses import &mdash; and the cargo our vessels will
            carry.
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-3 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
              <div className="col-span-5">Product</div>
              <div className="col-span-4 text-right">Annual Value</div>
              <div className="col-span-3 text-right">YoY Change</div>
            </div>
            {ITALY_IMPORTS.map((item) => (
              <div
                key={item.product}
                className="grid grid-cols-12 px-6 py-3 border-b border-slate-50 last:border-0 items-center"
              >
                <div className="col-span-5 font-medium text-navy-900 text-sm">
                  {item.product}
                </div>
                <div className="col-span-4 text-right text-sm text-slate-600">
                  EUR {item.value}M
                </div>
                <div className="col-span-3 text-right">
                  <span
                    className={`text-sm font-semibold ${
                      item.growth > 0 ? "text-emerald-600" : "text-slate-400"
                    }`}
                  >
                    {item.growth > 0 ? "+" : ""}
                    {item.growth}%
                  </span>
                </div>
              </div>
            ))}
            <div className="px-6 py-3 bg-slate-50 text-xs text-slate-400 border-t border-slate-100">
              Source: Cyprus Statistical Service (CyStat) — Foreign Trade
              Statistics, 2025 data
            </div>
          </div>
        </div>

        {/* Port Volumes */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            Port throughput on our route
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            All three ports are investing in container infrastructure and
            showing strong volume growth.
          </p>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden max-w-3xl mx-auto">
            <div className="grid grid-cols-5 px-6 py-3 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
              <div className="col-span-2">Port</div>
              <div className="text-right">Volume</div>
              <div className="text-right">Year</div>
              <div className="text-right">Growth</div>
            </div>
            {PORT_VOLUMES.map((port) => (
              <div
                key={port.port}
                className="grid grid-cols-5 px-6 py-4 border-b border-slate-50 last:border-0 items-center"
              >
                <div className="col-span-2">
                  <span className="mr-2">{port.flag}</span>
                  <span className="font-semibold text-navy-900">
                    {port.port}
                  </span>
                  <span className="text-slate-400 text-sm ml-1.5">
                    {port.country}
                  </span>
                </div>
                <div className="text-right font-bold text-navy-900">
                  {port.teu} TEU
                </div>
                <div className="text-right text-sm text-slate-500">
                  {port.year}
                </div>
                <div className="text-right">
                  {port.growth ? (
                    <span className="text-sm font-semibold text-emerald-600">
                      {port.growth}
                    </span>
                  ) : (
                    <span className="text-sm text-slate-400">&mdash;</span>
                  )}
                </div>
              </div>
            ))}
            <div className="px-6 py-3 bg-slate-50 text-xs text-slate-400">
              Sources: Eurogate Limassol, Piraeus Port Authority, North
              Adriatic Sea Port Authority
            </div>
          </div>
        </div>

        {/* How it works for you */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            How it works for you
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            You invest, you ship, you earn. Shoham runs the operations
            so you can focus on your business.
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  <Handshake className="w-3.5 h-3.5" />
                  What you get
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">
                  As a Founding Shipper
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    Preferential freight rates locked in for 2 years
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    Guaranteed container space on every sailing
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    Equity participation with returns as the service scales
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    Advisory input on routes, schedules, and cargo priorities
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <div className="inline-flex items-center gap-2 bg-navy-900 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  <Ship className="w-3.5 h-3.5" />
                  What Shoham delivers
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">
                  As the Operator
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy-900 mt-1.5 shrink-0" />
                    Professional vessel management backed by 70 years of experience
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy-900 mt-1.5 shrink-0" />
                    Reliable weekly schedule with on-time performance
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy-900 mt-1.5 shrink-0" />
                    Digital platform for instant booking and cargo visibility
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy-900 mt-1.5 shrink-0" />
                    Transparent reporting with quarterly audited financials
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-8 py-4 bg-slate-50 text-center text-sm text-slate-500 border-t border-slate-100">
              Your shipping benefits are contractual &bull; Your investment is structurally protected &bull; Your capital is ring-fenced
            </div>
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            The business model
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            Experienced operator. Smart technology. Committed shippers.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {BUSINESS_MODEL.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h4 className="font-bold text-navy-900 text-lg">
                    {item.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Roadmap */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            Growth roadmap
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            Prove the model on one route, then expand across the Mediterranean.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />

              {[
                {
                  phase: "Phase 1",
                  title: "Launch",
                  timeline: "Months 1-6",
                  items: [
                    "Charter 500 TEU feeder vessel with experienced crew",
                    "Lease initial container fleet (200-300 units)",
                    "Launch Venice-Piraeus-Limassol weekly service",
                    "Onboard 5-10 founding shipper-investors with preferential rates",
                  ],
                },
                {
                  phase: "Phase 2",
                  title: "Optimize",
                  timeline: "Months 6-12",
                  items: [
                    "Refine dynamic pricing with real booking data",
                    "Add reefer and special cargo capabilities",
                    "Achieve 70%+ utilization and profitability",
                    "Build shipper base of 50+ recurring customers",
                  ],
                },
                {
                  phase: "Phase 3",
                  title: "Scale",
                  timeline: "Year 2+",
                  items: [
                    "Add second vessel for bi-weekly service",
                    "Expand to Adriatic ports (Trieste, Koper, Durres)",
                    "Launch East Med hub connections (Alexandria, Haifa)",
                    "License platform technology to other operators",
                  ],
                },
              ].map((phase, i) => (
                <div key={phase.phase} className="relative pl-16 pb-10 last:pb-0">
                  <div
                    className={`absolute left-3.5 w-5 h-5 rounded-full border-2 ${
                      i === 0
                        ? "bg-ocean-500 border-ocean-500"
                        : "bg-white border-slate-300"
                    }`}
                  />
                  <div className="bg-white rounded-2xl p-6 border border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-ocean-500 bg-ocean-50 px-2 py-0.5 rounded-full uppercase">
                        {phase.phase}
                      </span>
                      <span className="font-bold text-navy-900">
                        {phase.title}
                      </span>
                      <span className="text-sm text-slate-400 ml-auto">
                        {phase.timeline}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-navy-950 rounded-3xl p-10 sm:p-14">
          <Anchor className="w-10 h-10 text-gold-400 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Become a founding shipper-investor
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            We&apos;re inviting a select group of Cyprus importers to join
            as founding shippers. Preferential rates, guaranteed space, and
            equity in the service that powers your supply chain.
          </p>
          <a
            href="mailto:invest@shippingline.com"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-3.5 rounded-xl font-bold transition-colors"
          >
            Partner With Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
