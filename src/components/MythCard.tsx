"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/components/IconMap";
import type { MythFact } from "@/data/polystyrene-data";

interface MythCardProps {
  myth: MythFact;
  index: number;
}

export default function MythCard({ myth, index }: MythCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      onClick={() => setRevealed(!revealed)}
      className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      aria-expanded={revealed}
    >
      <Card
        className={`transition-all duration-500 cursor-pointer overflow-hidden ${
          revealed
            ? "bg-emerald-950/50 border-emerald-500/40 hover:border-emerald-500/60"
            : "bg-red-950/30 border-red-500/30 hover:border-red-500/50"
        }`}
      >
        <CardContent className="p-6">
          {/* Header with badge, number, and icon */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background/50 text-sm font-bold text-muted-foreground shrink-0">
                {index + 1}
              </span>
              <Badge
                variant="outline"
                className={`text-[11px] ${
                  revealed
                    ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                    : "bg-red-500/15 text-red-400 border-red-500/30"
                }`}
              >
                {revealed ? "FACT" : "MYTH"}
              </Badge>
            </div>
            <div
              className={`transition-colors ${
                revealed ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {getIcon(myth.iconName || "help-circle", "w-5 h-5")}
            </div>
          </div>

          {/* Myth text */}
          <div
            className={`transition-opacity duration-300 ${
              revealed ? "opacity-60" : "opacity-100"
            }`}
          >
            <p
              className={`font-medium leading-relaxed ${
                revealed
                  ? "text-sm text-muted-foreground line-through decoration-red-400/50"
                  : "text-foreground"
              }`}
            >
              {myth.myth}
            </p>
          </div>

          {/* Fact reveal */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              revealed
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pt-4 border-t border-emerald-500/20 space-y-2">
                <p className="font-medium text-emerald-400 leading-relaxed">
                  {myth.fact}
                </p>
                {myth.explanation && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {myth.explanation}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Click hint */}
          <p className="text-[11px] text-muted-foreground/60 mt-3">
            {revealed ? "Click to hide fact" : "Click to reveal the truth"}
          </p>
        </CardContent>
      </Card>
    </button>
  );
}
