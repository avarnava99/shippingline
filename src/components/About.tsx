import {
  Ship,
  Container,
  Anchor,
  Users,
  ShieldCheck,
  Settings,
  Calendar,
  Award,
  Eye,
  Landmark,
} from "lucide-react";

const STATS = [
  { icon: Ship, value: "500 TEU", label: "Vessel Capacity" },
  { icon: Container, value: "3", label: "Ports Served" },
  { icon: Anchor, value: "Weekly", label: "Fixed Sailings" },
  { icon: Users, value: "24/7", label: "Support" },
];

const SAFEGUARDS = [
  {
    icon: Landmark,
    title: "Ring-Fenced Capital",
    detail:
      "Investor funds held in a dedicated SPV with milestone-based releases. Your capital is protected by structure, not promises.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    detail:
      "Real-time investor dashboard showing vessel utilization, revenue, costs, and bookings. Quarterly audited financials.",
  },
  {
    icon: Award,
    title: "Performance-Linked Fees",
    detail:
      "Shoham's management fee is tied to utilization and profitability. When the service performs, everyone wins.",
  },
  {
    icon: ShieldCheck,
    title: "Governed Exit",
    detail:
      "Clear provisions for investor exit, service wind-down, or expansion. No lock-in without liquidity path.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-ocean-500 font-semibold text-sm uppercase tracking-widest mb-3">
              About ShippingLine
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              The Eastern Mediterranean&apos;s digital shipping line
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                ShippingLine is a next-generation container shipping company
                serving the Venice-Piraeus-Limassol corridor. We combine the
                reliability of traditional liner shipping with the convenience
                of modern digital platforms.
              </p>
              <p>
                Our asset-light model &mdash; chartering vessels and leasing
                containers &mdash; allows us to focus on what matters most:
                delivering an exceptional booking experience with transparent,
                fair pricing powered by our dynamic rate engine.
              </p>
              <p>
                For shippers, this means instant quotes, guaranteed space, and
                full visibility from booking to delivery. No middlemen, no
                hidden fees, no waiting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-50 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-ocean-500" />
                </div>
                <div className="text-2xl font-bold text-navy-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Operator Section */}
        <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Operated by Shoham
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Shipping agents since 1956
              </h3>
              <p className="text-ocean-300 text-lg font-medium mb-6">
                Nearly 70 years in Mediterranean shipping.
                <br />
                80+ years combined management experience.
              </p>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  ShippingLine is managed and operated by Shoham, one of the
                  longest-established shipping agencies in the region.
                  Since 1956, Shoham has built deep relationships across
                  Mediterranean ports, carriers, and trade networks.
                </p>
                <p>
                  Our management team brings over 80 years of combined
                  experience in vessel operations, commercial shipping,
                  and cargo logistics &mdash; the expertise to run a
                  liner service, paired with the vision to digitize it.
                </p>
              </div>

              {/* Heritage stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span className="text-2xl font-bold text-white">1956</span>
                  </div>
                  <div className="text-xs text-slate-500">Established</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Users className="w-4 h-4 text-gold-400" />
                    <span className="text-2xl font-bold text-white">80+</span>
                  </div>
                  <div className="text-xs text-slate-500">Years experience</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Anchor className="w-4 h-4 text-gold-400" />
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="text-xs text-slate-500">Med ports</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center mb-3">
                  <Settings className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="text-white font-bold mb-1">
                  Technical Management
                </h4>
                <p className="text-slate-400 text-sm">
                  Vessel maintenance, crewing, safety compliance, and
                  class certification
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center mb-3">
                  <Ship className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="text-white font-bold mb-1">
                  Commercial Operations
                </h4>
                <p className="text-slate-400 text-sm">
                  Cargo planning, port coordination, schedule management,
                  and rate optimization
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center mb-3">
                  <Container className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="text-white font-bold mb-1">
                  Container Fleet
                </h4>
                <p className="text-slate-400 text-sm">
                  Container leasing, repositioning, maintenance, and
                  tracking across the network
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="text-white font-bold mb-1">
                  Regulatory &amp; Compliance
                </h4>
                <p className="text-slate-400 text-sm">
                  ISM, ISPS, MLC compliance, flag state requirements, and
                  port authority liaison
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Investor Safeguards */}
        <div>
          <div className="text-center mb-10">
            <p className="text-ocean-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Investor Protection
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              Built on structure, not just trust
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto">
              70 years of track record speaks for itself &mdash; but we go
              further. Every investor is protected by structural safeguards
              that make the partnership transparent and accountable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SAFEGUARDS.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-10 h-10 bg-ocean-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-ocean-500" />
                </div>
                <h4 className="font-bold text-navy-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
