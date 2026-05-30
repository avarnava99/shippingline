import Header from "@/components/Header";
import RouteMap from "@/components/RouteMap";
import QuoteWidget from "@/components/QuoteWidget";
import Features from "@/components/Features";
import Schedule from "@/components/Schedule";
import DynamicPricing from "@/components/DynamicPricing";
import About from "@/components/About";
import Investors from "@/components/Investors";
import Footer from "@/components/Footer";
import { ArrowRight, Ship } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-16 overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <Ship className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-slate-300">
                  Venice &bull; Piraeus &bull; Limassol
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Book container
                <br />
                freight{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-ocean-300">
                  online
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 max-w-lg mb-8 leading-relaxed">
                Instant quotes with dynamic pricing. Guaranteed space on weekly
                sailings across the Eastern Mediterranean. No calls, no emails
                &mdash; just book.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Get Instant Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  View Schedule
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-white">2-4</div>
                  <div className="text-sm text-slate-500">Days transit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$600</div>
                  <div className="text-sm text-slate-500">From / TEU</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-slate-500">Digital</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <RouteMap />
              <QuoteWidget />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <Features />
      <Schedule />
      <DynamicPricing />
      <About />
      <Investors />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-500 to-ocean-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to ship smarter?
          </h2>
          <p className="text-ocean-100 text-lg mb-8 max-w-2xl mx-auto">
            Join the shippers who&apos;ve already switched to transparent,
            instant freight booking. Get your first quote in under 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-ocean-600 hover:bg-ocean-50 px-8 py-3.5 rounded-xl font-bold transition-colors"
            >
              Get Your Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
