"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getIcon } from "@/components/IconMap";
import type { FunFact } from "@/data/polystyrene-data";

const categoryColors: Record<string, string> = {
  production: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  waste: "bg-red-500/15 text-red-400 border-red-500/30",
  recycling: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  environment: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  science: "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

interface FunFactsCarouselProps {
  facts: FunFact[];
}

export default function FunFactsCarousel({ facts }: FunFactsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setDirection("right");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % facts.length);
      setIsTransitioning(false);
    }, 200);
  }, [facts.length]);

  const goToPrevious = useCallback(() => {
    setDirection("left");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length);
      setIsTransitioning(false);
    }, 200);
  }, [facts.length]);

  const goToIndex = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? "right" : "left");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 200);
    },
    [currentIndex]
  );

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isHovered || facts.length <= 1) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isHovered, goToNext, facts.length]);

  if (!facts || facts.length === 0) return null;

  const currentFact = facts[currentIndex];
  const colorClass =
    categoryColors[currentFact.category?.toLowerCase() || ""] ||
    "bg-secondary text-secondary-foreground border-border";

  return (
    <div
      className="relative w-full max-w-2xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="bg-card border-border/50 overflow-hidden">
        <CardContent className="p-8 sm:p-10 relative min-h-[220px] flex flex-col justify-center">
          {/* Fact content with transition */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isTransitioning
                ? `opacity-0 ${
                    direction === "right"
                      ? "translate-x-4"
                      : "-translate-x-4"
                  }`
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="outline"
                className={`capitalize text-[11px] ${colorClass}`}
              >
                {currentFact.category}
              </Badge>
              <div className="text-primary/70">
                {getIcon(currentFact.iconName || "help-circle", "w-5 h-5")}
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                {currentFact.stat}
              </span>
              {currentFact.unit && (
                <span className="text-base font-medium text-muted-foreground">
                  {currentFact.unit}
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {currentFact.description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Arrows */}
      {facts.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all shadow-lg"
            aria-label="Previous fact"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all shadow-lg"
            aria-label="Next fact"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {facts.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {facts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to fact ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
