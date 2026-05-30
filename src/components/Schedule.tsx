"use client";

import { Ship, ArrowRight, MapPin } from "lucide-react";
import { getNextSailings } from "@/lib/pricing";

function CapacityBar({ utilization }: { utilization: number }) {
  const pct = Math.round(utilization * 100);
  const color =
    pct < 60
      ? "bg-emerald-500"
      : pct < 80
        ? "bg-amber-500"
        : "bg-red-500";
  const label =
    pct < 60
      ? "Available"
      : pct < 80
        ? "Filling Fast"
        : "Almost Full";

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span
        className={`text-xs font-semibold whitespace-nowrap ${
          pct < 60
            ? "text-emerald-600"
            : pct < 80
              ? "text-amber-600"
              : "text-red-600"
        }`}
      >
        {label} ({100 - pct}%)
      </span>
    </div>
  );
}

export default function Schedule() {
  const sailings = getNextSailings();

  return (
    <section id="schedule" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-ocean-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Sailing Schedule
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Upcoming departures
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Weekly fixed-day sailings. Book early for the best rates and
            guaranteed space.
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {sailings.map((sailing) => (
            <div
              key={sailing.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-100 hover:border-ocean-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center shrink-0">
                    <Ship className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-navy-900">
                        {sailing.vessel}
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-mono">
                        {sailing.id}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {sailing.route.map((port, i) => (
                        <span key={port} className="flex items-center gap-1.5">
                          <span>{port}</span>
                          {i < sailing.route.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-slate-300" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-right">
                    <div className="text-xs text-slate-400 uppercase tracking-wider">
                      Departure
                    </div>
                    <div className="font-bold text-navy-900">
                      {sailing.departure.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>

                  <div className="w-36 hidden sm:block">
                    <CapacityBar utilization={sailing.utilization} />
                  </div>

                  <a
                    href="#quote"
                    className="bg-ocean-500 hover:bg-ocean-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    Book
                  </a>
                </div>
              </div>

              <div className="sm:hidden mt-3">
                <CapacityBar utilization={sailing.utilization} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
