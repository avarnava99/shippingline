import {
  Ship,
  Shield,
  DollarSign,
  Vote,
  FileText,
  Scale,
  Lock,
  ArrowUpRight,
  Anchor,
} from "lucide-react";

export const metadata = {
  title: "ShippingLine | Internal — Shoham Operational Notes",
  robots: "noindex, nofollow",
};

export default function InternalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-navy-950 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-ocean-500 rounded-lg flex items-center justify-center">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg">ShippingLine</span>
              <span className="text-red-400 text-xs block -mt-1 tracking-widest uppercase font-bold">
                Internal — Not for distribution
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Warning banner */}
        <div className="bg-red-50 border border-red-200 rounded-xl px-6 py-4 mb-12 flex items-start gap-3">
          <Lock className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-red-800 font-semibold text-sm">
              Confidential — Shoham internal use only
            </p>
            <p className="text-red-600 text-sm">
              This page contains operational strategy, governance structure, and
              financial terms that are not for investor or public view.
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-navy-900 mb-2">
          Shoham Operational Playbook
        </h1>
        <p className="text-slate-500 mb-12">
          Control mechanisms, fee structure, governance, and risk mitigation
          for the ShippingLine venture.
        </p>

        {/* Governance & Control */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
              <Vote className="w-5 h-5 text-gold-400" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              Governance &amp; Control
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Voting Structure
              </h3>
              <p className="text-sm text-slate-600">
                Shoham holds 51%+ voting rights via weighted shares. Importers
                receive economic shares (dividends, profit participation) with
                limited voting. Key operational decisions (pricing, scheduling,
                crewing, vessel selection) require only Shoham approval.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Board Composition
              </h3>
              <p className="text-sm text-slate-600">
                Shoham appoints 3 of 5 board seats. Importers collectively
                appoint 2 advisory seats. Importers may observe but cannot
                block operational decisions. Supermajority (75%) required to
                terminate the Ship Management Agreement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Operational Autonomy
              </h3>
              <p className="text-sm text-slate-600">
                The Ship Management Agreement grants Shoham full autonomy over:
                dynamic pricing algorithm, sailing schedule, crew hiring,
                vessel maintenance, port agent selection, and commercial
                negotiations. These are not subject to investor vote.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-gold-400" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              Management Fee Structure
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Fee Component
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Amount
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Base Management Fee
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    3% of gross vessel revenue
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    Industry standard 2-4%. Benchmarked to BIMCO terms.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Performance Bonus
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    1.5% of revenue above 70% utilization
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    Aligns Shoham incentive with vessel performance.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Platform Fee
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    $2 per TEU booked online
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    Covers platform development and maintenance.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Shoham Co-Investment
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    10-15% of the round
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    Skin in the game. Signals alignment to importers.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Investor Management */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-gold-400" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              Managing Investor Expectations
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Rate Conflict Mitigation
              </h3>
              <p className="text-sm text-slate-600">
                Founding shipper rates are set as a fixed percentage discount
                off the dynamic price (e.g., 10-15% below market). They cannot
                negotiate custom rates — the algorithm sets the base, the
                discount is contractual. This prevents importers from using
                their investor status to push rates below sustainable levels.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Volume Commitments
              </h3>
              <p className="text-sm text-slate-600">
                Each founding shipper signs a minimum volume commitment
                (e.g., 5-10 TEU/month). If they fail to ship, they lose
                preferential rates but keep their investment. This ensures
                the vessel has base utilization from day one.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Cap on Individual Investment
              </h3>
              <p className="text-sm text-slate-600">
                No single importer-investor may hold more than 10% of the
                round. This prevents any one shipper from gaining
                disproportionate influence. Target: 5-10 importers at
                roughly equal stakes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Exit &amp; Liquidity
              </h3>
              <p className="text-sm text-slate-600">
                Investors may sell shares after a 12-month lock-up, subject
                to right of first refusal by Shoham. If the service is
                wound down, vessel charter is terminated and remaining
                capital is returned pro-rata after obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Structure */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
              <Scale className="w-5 h-5 text-gold-400" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              Recommended Legal Structure
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Entity Structure
              </h3>
              <p className="text-sm text-slate-600">
                ShippingLine Ltd (Cyprus or Malta SPV) — holds the vessel
                charter, container leases, and platform IP. Shoham enters a
                Ship Management Agreement with the SPV. Importer-investors
                hold shares in the SPV.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Key Agreements
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>
                  &bull; Ship Management Agreement (Shoham &harr; SPV) — BIMCO
                  SHIPMAN template
                </li>
                <li>
                  &bull; Founding Shipper Agreement (Importer &harr; SPV) — rates,
                  volume commitments, space guarantees
                </li>
                <li>
                  &bull; Shareholders Agreement — voting rights, board
                  composition, transfer restrictions
                </li>
                <li>
                  &bull; Subscription Agreement — investment terms, milestones,
                  capital calls
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                IP Ownership
              </h3>
              <p className="text-sm text-slate-600">
                The dynamic pricing algorithm and booking platform IP remain
                with Shoham (licensed to the SPV). If the venture is wound
                down, the platform reverts fully to Shoham for reuse on
                other routes.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Register */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-gold-400" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">
              Risk Register
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Risk
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Mitigation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Importers push for below-cost rates
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    Rates set by algorithm. Founding discount is a fixed %, not
                    negotiable per shipment.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    One large importer dominates
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    10% cap per investor. 5-10 importers at equal stakes.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Importers try to replace Shoham
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    75% supermajority required to terminate Ship Management
                    Agreement. Shoham holds 51%+ votes.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Self-dealing accusation on fees
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    Fees benchmarked to BIMCO industry standard. Independent
                    audit. Fee structure disclosed upfront.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Importer stops shipping
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    Loses preferential rates. Investment remains. Volume filled
                    by open market bookings.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    Low vessel utilization
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    Founding shipper volume commitments provide base load.
                    Dynamic pricing fills remaining capacity.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Back link */}
        <div className="text-center pt-8 border-t border-slate-200">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-ocean-500 hover:text-ocean-400 font-semibold text-sm"
          >
            Back to public site <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
