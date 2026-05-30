import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShippingLine | Container Freight Booking — Venice, Piraeus, Limassol",
  description:
    "Book container freight online with instant dynamic pricing. Serving the Venice-Piraeus-Limassol corridor with weekly sailings. Get a quote in seconds.",
  keywords: [
    "container shipping",
    "freight booking",
    "Mediterranean shipping",
    "Venice Piraeus Limassol",
    "dynamic pricing",
    "container freight",
    "East Mediterranean",
    "online freight booking",
  ],
  openGraph: {
    title: "ShippingLine — Book Container Freight Online",
    description:
      "Instant quotes, dynamic pricing, guaranteed space. The smart way to ship containers across the Eastern Mediterranean.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
