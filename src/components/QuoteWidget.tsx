"use client";

import { useState, useCallback } from "react";
import {
  ArrowRight,
  Container,
  TrendingDown,
  Clock,
  Ship,
} from "lucide-react";
import {
  type Port,
  type ContainerType,
  PORT_NAMES,
  CONTAINER_LABELS,
  calculateQuote,
  type QuoteResult,
} from "@/lib/pricing";

const PORTS: Port[] = ["VCE", "PIR", "LCA"];
const CONTAINER_TYPES: ContainerType[] = ["20ft", "40ft", "40HC", "Reefer"];

export default function QuoteWidget() {
  const [origin, setOrigin] = useState<Port>("VCE");
  const [destination, setDestination] = useState<Port>("LCA");
  const [containerType, setContainerType] = useState<ContainerType>("40ft");
  const [quote, setQuote] = useState<QuoteResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleQuote = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const result = calculateQuote(origin, destination, containerType);
      setQuote(result);
      setLoading(false);
    }, 800);
  }, [origin, destination, containerType]);

  const availableDestinations = PORTS.filter((p) => p !== origin);

  return (
    <div id="quote" className="bg-white rounded-2xl shadow-2xl shadow-navy-950/20 p-6 sm:p-8 w-full max-w-md">
      <h3 className="text-navy-900 font-bold text-xl mb-1">Instant Quote</h3>
      <p className="text-slate-500 text-sm mb-6">
        Get real-time pricing in seconds
      </p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Origin
            </label>
            <select
              value={origin}
              onChange={(e) => {
                const newOrigin = e.target.value as Port;
                setOrigin(newOrigin);
                if (newOrigin === destination) {
                  setDestination(
                    PORTS.find((p) => p !== newOrigin) as Port
                  );
                }
                setQuote(null);
              }}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-navy-900 font-medium text-sm focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
            >
              {PORTS.map((p) => (
                <option key={p} value={p}>
                  {PORT_NAMES[p]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Destination
            </label>
            <select
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value as Port);
                setQuote(null);
              }}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-navy-900 font-medium text-sm focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
            >
              {availableDestinations.map((p) => (
                <option key={p} value={p}>
                  {PORT_NAMES[p]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Container Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            {CONTAINER_TYPES.map((ct) => (
              <button
                key={ct}
                onClick={() => {
                  setContainerType(ct);
                  setQuote(null);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  containerType === ct
                    ? "bg-ocean-500 text-white shadow-md"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {CONTAINER_LABELS[ct]}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleQuote}
          disabled={loading}
          className="w-full bg-navy-900 hover:bg-navy-800 disabled:bg-slate-300 text-white py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Get Quote <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {quote && (
        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-3xl font-bold text-navy-900">
                ${quote.finalPrice.toLocaleString()}
              </span>
              <span className="text-slate-400 text-sm ml-1">USD</span>
            </div>
            {quote.savings && (
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-semibold">
                <TrendingDown className="w-3 h-3" />
                Save ${quote.savings.toLocaleString()}
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-slate-50 rounded-lg p-2.5">
              <Ship className="w-4 h-4 text-ocean-500 mx-auto mb-1" />
              <div className="text-xs text-slate-500">Transit</div>
              <div className="text-sm font-bold text-navy-900">
                {quote.transitDays}d
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-2.5">
              <Container className="w-4 h-4 text-ocean-500 mx-auto mb-1" />
              <div className="text-xs text-slate-500">Capacity</div>
              <div className="text-sm font-bold text-navy-900">
                {Math.round(quote.utilization * 100)}%
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-2.5">
              <Clock className="w-4 h-4 text-ocean-500 mx-auto mb-1" />
              <div className="text-xs text-slate-500">Valid</div>
              <div className="text-sm font-bold text-navy-900">24h</div>
            </div>
          </div>

          <button className="w-full mt-4 bg-ocean-500 hover:bg-ocean-400 text-white py-3 rounded-xl font-semibold text-sm transition-colors">
            Book This Rate
          </button>
        </div>
      )}
    </div>
  );
}
