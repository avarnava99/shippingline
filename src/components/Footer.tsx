import { Anchor } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-ocean-500 rounded-lg flex items-center justify-center">
                <Anchor className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                ShippingLine
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Digital container shipping for the Eastern Mediterranean.
              Venice &bull; Piraeus &bull; Limassol
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#quote" className="hover:text-white transition-colors">Get Quote</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Container Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ShippingLine Mediterranean. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span>IMO Registered</span>
            <span>&bull;</span>
            <span>ISO 9001</span>
            <span>&bull;</span>
            <span>IMDG Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
