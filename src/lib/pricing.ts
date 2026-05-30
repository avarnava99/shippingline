export type Port = "VCE" | "PIR" | "LCA";
export type ContainerType = "20ft" | "40ft" | "40HC" | "Reefer";

export const PORT_NAMES: Record<Port, string> = {
  VCE: "Venice",
  PIR: "Piraeus",
  LCA: "Limassol",
};

export const CONTAINER_LABELS: Record<ContainerType, string> = {
  "20ft": "20' Standard",
  "40ft": "40' Standard",
  "40HC": "40' High Cube",
  Reefer: "40' Reefer",
};

const BASE_RATES: Record<string, Record<ContainerType, number>> = {
  "VCE-PIR": { "20ft": 850, "40ft": 1350, "40HC": 1450, Reefer: 2200 },
  "VCE-LCA": { "20ft": 1200, "40ft": 1900, "40HC": 2050, Reefer: 3100 },
  "PIR-LCA": { "20ft": 650, "40ft": 1050, "40HC": 1150, Reefer: 1750 },
  "PIR-VCE": { "20ft": 750, "40ft": 1200, "40HC": 1300, Reefer: 1950 },
  "LCA-PIR": { "20ft": 600, "40ft": 950, "40HC": 1050, Reefer: 1600 },
  "LCA-VCE": { "20ft": 1100, "40ft": 1750, "40HC": 1900, Reefer: 2850 },
};

const TRANSIT_DAYS: Record<string, number> = {
  "VCE-PIR": 2,
  "VCE-LCA": 4,
  "PIR-LCA": 2,
  "PIR-VCE": 2,
  "LCA-PIR": 2,
  "LCA-VCE": 4,
};

function getUtilizationMultiplier(utilization: number): number {
  if (utilization < 0.5) return 0.95;
  if (utilization < 0.7) return 1.0;
  if (utilization < 0.85) return 1.15;
  if (utilization < 0.95) return 1.35;
  return 1.55;
}

function getUrgencyMultiplier(daysToSailing: number): number {
  if (daysToSailing > 14) return 0.95;
  if (daysToSailing > 7) return 1.0;
  if (daysToSailing > 3) return 1.1;
  return 1.25;
}

function getSeasonalMultiplier(month: number): number {
  const peak = [5, 6, 7, 8, 9];
  const shoulder = [3, 4, 10, 11];
  if (peak.includes(month)) return 1.15;
  if (shoulder.includes(month)) return 1.0;
  return 0.9;
}

export interface QuoteResult {
  baseRate: number;
  finalPrice: number;
  transitDays: number;
  utilization: number;
  utilizationMultiplier: number;
  urgencyMultiplier: number;
  seasonalMultiplier: number;
  savings: number | null;
}

export function calculateQuote(
  origin: Port,
  destination: Port,
  containerType: ContainerType,
  daysToSailing: number = 10
): QuoteResult | null {
  const routeKey = `${origin}-${destination}`;
  const rates = BASE_RATES[routeKey];
  if (!rates) return null;

  const baseRate = rates[containerType];
  const transitDays = TRANSIT_DAYS[routeKey];
  const utilization = 0.55 + Math.random() * 0.3;
  const month = new Date().getMonth() + 1;

  const utilizationMultiplier = getUtilizationMultiplier(utilization);
  const urgencyMultiplier = getUrgencyMultiplier(daysToSailing);
  const seasonalMultiplier = getSeasonalMultiplier(month);

  const finalPrice = Math.round(
    baseRate * utilizationMultiplier * urgencyMultiplier * seasonalMultiplier
  );

  const maxPrice = Math.round(baseRate * 1.55 * 1.25 * 1.15);
  const savings = maxPrice > finalPrice ? maxPrice - finalPrice : null;

  return {
    baseRate,
    finalPrice,
    transitDays,
    utilization,
    utilizationMultiplier,
    urgencyMultiplier,
    seasonalMultiplier,
    savings,
  };
}

export function getNextSailings() {
  const now = new Date();
  const sailings = [];

  for (let i = 0; i < 6; i++) {
    const departure = new Date(now);
    departure.setDate(departure.getDate() + 3 + i * 7);
    const utilization = 0.35 + Math.random() * 0.5;

    sailings.push({
      id: `SL-${2025}${String(departure.getMonth() + 1).padStart(2, "0")}${String(departure.getDate()).padStart(2, "0")}`,
      vessel: "MV Mediterranean Spirit",
      departure,
      route: ["Venice", "Piraeus", "Limassol"] as const,
      utilization,
      capacity: Math.round((1 - utilization) * 500),
      totalTEU: 500,
    });
  }

  return sailings;
}
