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
} from "lucide-react";

const TRADE_STATS = [
  {
    route: "Italy — Greece",
    value: "$9.1B",
    detail: "Annual bilateral trade",
    growth: "+10.5%",
    note: "Italy is Greece's #1 export destination",
  },
  {
    route: "Greece — Cyprus",
    value: "$3.5B",
    detail: "Annual bilateral trade",
    growth: "+11.9%",
    note: "Highest level in a decade (2024)",
  },
  {
    route: "Italy — Cyprus",
    value: "$1.0B",
    detail: "Annual imports to Cyprus",
    growth: null,
    note: "Italy is a top-3 import partner for Cyprus",
  },
];

const PORT_VOLUMES = [
  {
    port: "Venice",
    country: "Italy",
    teu: "533K",
    year: "2025",
    growth: "+11.2%",
    flag: "🇮🇹",
  },
  {
    port: "Piraeus",
    country: "Greece",
    teu: "4.2M",
    year: "2024",
    growth: null,
    flag: "🇬🇷",
  },
  {
    port: "Limassol",
    country: "Cyprus",
    teu: "500K",
    year: "2024",
    growth: "+8-9%",
    flag: "🇨🇾",
  },
];

const MARKET_HIGHLIGHTS = [
  {
    icon: TrendingUp,
    stat: "5.9%",
    label: "CAGR",
    detail: "Global feeder ship market growth rate through 2033",
  },
  {
    icon: Globe,
    stat: "$8.3B",
    label: "Market Size",
    detail: "Global feeder ship market (2025)",
  },
  {
    icon: BarChart3,
    stat: "100.9M",
    label: "TEU",
    detail: "EU container handling peak in 2024 (+4.4% YoY)",
  },
  {
    icon: DollarSign,
    stat: "$13.6B",
    label: "Trade Corridor",
    detail: "Combined Italy-Greece-Cyprus bilateral trade",
  },
];

const BUSINESS_MODEL = [
  {
    icon: Ship,
    title: "Asset-Light Operations",
    points: [
      "Charter vessel: ~$15-25K/day for a 500 TEU feeder",
      "Lease containers: ~$5-8/day per TEU",
      "No massive CapEx — focus capital on technology and growth",
    ],
  },
  {
    icon: Zap,
    title: "Technology Moat",
    points: [
      "Dynamic pricing engine optimizes revenue per TEU",
      "Real-time booking reduces overhead vs. traditional agents",
      "Data flywheel: every booking improves pricing accuracy",
    ],
  },
  {
    icon: Target,
    title: "Market Positioning",
    points: [
      "Underserved niche: no digital-first line on this corridor",
      "Compete on UX and price transparency, not fleet size",
      "Expand to additional East Med routes as demand proves out",
    ],
  },
  {
    icon: Container,
    title: "Unit Economics",
    points: [
      "Revenue per sailing: ~$250K-400K at 70-85% utilization",
      "Break-even at ~55% vessel utilization",
      "Dynamic pricing lifts yield 15-25% vs. fixed-rate competitors",
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
            Investment Opportunity
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            A $13.6B trade corridor,
            <br />
            zero digital-first shipping lines
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
            The Eastern Mediterranean moves billions in containerized trade
            between Italy, Greece, and Cyprus every year &mdash; yet shippers
            still book by phone, email, and spreadsheet. ShippingLine is
            changing that.
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

        {/* Trade Corridor Stats */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            The trade corridor
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            Three countries with deep, growing bilateral trade &mdash; and a
            shipping corridor that&apos;s ripe for digital disruption.
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
              Sources: North Adriatic Sea Port Authority, Piraeus Port
              Authority, Eurogate Limassol
            </div>
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            The business model
          </h3>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            Asset-light, tech-heavy, and designed to scale.
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
                    "Charter 500 TEU feeder vessel",
                    "Lease initial container fleet (200-300 units)",
                    "Launch Venice-Piraeus-Limassol weekly service",
                    "Target 50% utilization by month 6",
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
            Interested in investing?
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            We&apos;re raising a seed round to charter our first vessel and
            launch the Venice-Piraeus-Limassol service. Get in touch to learn
            more.
          </p>
          <a
            href="mailto:invest@shippingline.com"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-3.5 rounded-xl font-bold transition-colors"
          >
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
