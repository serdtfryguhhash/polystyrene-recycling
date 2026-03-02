import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import MythCard from "@/components/MythCard";
import { mythsFacts } from "@/data/polystyrene-data";

export const metadata: Metadata = {
  title: "Myths vs Facts",
  description: "Common misconceptions about polystyrene recycling debunked with science-backed facts. Separate truth from fiction.",
  openGraph: {
    title: "Polystyrene Myths vs Facts | PolyRecycle",
    description: "Common misconceptions about polystyrene recycling debunked with science-backed facts.",
    images: [{ url: "/images/myths-debunked.jpg" }],
  },
};

export default function MythsVsFactsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Myths vs Facts
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Common misconceptions about polystyrene recycling debunked with
          science-backed facts. Separate truth from fiction.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Click on each myth to reveal the truth
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-12">
        <Image
          src="/images/hero-factory.jpg"
          alt="Polystyrene manufacturing and recycling facility"
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-primary/20" />
      </div>

      {/* Myths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mythsFacts.map((myth, index) => (
          <MythCard key={index} myth={myth} index={index} />
        ))}
      </div>
    </div>
  );
}
