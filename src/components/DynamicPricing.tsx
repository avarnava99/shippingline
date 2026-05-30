"use client";

import { TrendingDown, Clock, BarChart3, Sun } from "lucide-react";

const FACTORS = [
  {
    icon: BarChart3,
    title: "Vessel Utilization",
    description: "Prices adjust based on available capacity. Book when space is plentiful for the best rates.",
    example: "50% full = base rate  |  85% full = +35%",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Booking Lead Time",
    description: "Early birds get rewarded. The closer to departure, the higher the premium.",
    example: "14+ days out = -5%  |  3 days out = +25%",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Sun,
    title: "Seasonal Demand",
    description: "Peak season rates reflect higher demand. Off-peak gives you the best value.",
    example: "Off-peak = -10%  |  Peak (Jun-Sep) = +15%",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: TrendingDown,
    title: "Route Imbalance",
    description: "When containers flow one direction, the return leg gets discounted to reposition empties.",
    example: "High demand leg = standard  |  Return leg = -15%",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export default function DynamicPricing() {
  return (
    <section id="pricing" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Smart Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Dynamic pricing that works for you
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our algorithm considers multiple factors to optimize rates. The
            result: fair prices that reward early booking and smart planning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {FACTORS.map((factor) => (
            <div
              key={factor.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div
                className={`w-10 h-10 ${factor.bg} rounded-xl flex items-center justify-center mb-4`}
              >
                <factor.icon className={`w-5 h-5 ${factor.color}`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {factor.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                {factor.description}
              </p>
              <div className="bg-navy-900/50 rounded-lg px-3 py-2 font-mono text-xs text-ocean-300">
                {factor.example}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$600</div>
              <div className="text-slate-400 text-xs">From / TEU</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-slate-400 text-xs">Port Pairs</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24h</div>
              <div className="text-slate-400 text-xs">Quote Validity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
