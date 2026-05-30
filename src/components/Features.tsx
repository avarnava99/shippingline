import {
  Zap,
  TrendingUp,
  Shield,
  Globe,
  Clock,
  BarChart3,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Quotes",
    description:
      "Get real-time freight rates in seconds. No waiting for email replies or phone callbacks.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description:
      "Our smart algorithm optimizes rates based on demand, capacity, and timing. Book early, save more.",
  },
  {
    icon: Shield,
    title: "Guaranteed Space",
    description:
      "Once booked, your container space is guaranteed. No rollovers, no surprises.",
  },
  {
    icon: Globe,
    title: "East Med Coverage",
    description:
      "Dedicated Venice-Piraeus-Limassol loop serving the Eastern Mediterranean corridor.",
  },
  {
    icon: Clock,
    title: "Fast Transit",
    description:
      "Direct port-to-port service with 2-4 day transit times. Weekly fixed-day departures.",
  },
  {
    icon: BarChart3,
    title: "Full Visibility",
    description:
      "Track your cargo in real-time. Digital documentation, automated notifications at every milestone.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-ocean-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Why ShippingLine
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Freight booking, reimagined
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We&apos;re bringing the ease of online booking to container
            shipping. Transparent pricing, instant confirmation, full control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-ocean-200 hover:shadow-lg hover:shadow-ocean-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-ocean-500 transition-colors">
                <feature.icon className="w-6 h-6 text-ocean-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-navy-900 font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
