import { Ship, Container, Anchor, Users } from "lucide-react";

const STATS = [
  { icon: Ship, value: "500 TEU", label: "Vessel Capacity" },
  { icon: Container, value: "3", label: "Ports Served" },
  { icon: Anchor, value: "Weekly", label: "Fixed Sailings" },
  { icon: Users, value: "24/7", label: "Support" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
      </div>
    </section>
  );
}
