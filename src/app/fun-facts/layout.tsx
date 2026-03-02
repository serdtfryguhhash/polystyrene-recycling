import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Facts About Polystyrene",
  description: "Discover surprising statistics about polystyrene production, recycling, and environmental impact.",
  openGraph: {
    title: "Fun Facts About Polystyrene | PolyRecycle",
    description: "Discover surprising statistics and little-known facts about polystyrene.",
    images: [{ url: "/images/hero-recycling.jpg" }],
  },
};

export default function FunFactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
