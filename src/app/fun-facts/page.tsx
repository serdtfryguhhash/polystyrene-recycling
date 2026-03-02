"use client";

import { useState } from "react";
import { Brain } from "lucide-react";
import FactCard from "@/components/FactCard";
import { funFacts } from "@/data/polystyrene-data";

const categories = ["All", "Production", "Waste", "Recycling", "Environment", "Science"] as const;

export default function FunFactsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFacts =
    activeCategory === "All"
      ? funFacts
      : funFacts.filter((f) => f.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <Brain className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Fun Facts
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover surprising statistics and little-known facts about
          polystyrene production, recycling, and its environmental impact.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-card text-muted-foreground border border-border/50 hover:text-foreground hover:border-primary/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Facts count */}
      <p className="text-sm text-muted-foreground text-center mb-8">
        Showing {filteredFacts.length} of {funFacts.length} facts
      </p>

      {/* Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacts.map((fact, index) => (
          <FactCard key={index} fact={fact} />
        ))}
      </div>
    </div>
  );
}
