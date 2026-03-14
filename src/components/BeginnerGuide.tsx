"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Recycle,
  Search,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GuideStep {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  tip: string;
}

const steps: GuideStep[] = [
  {
    id: 1,
    title: "Identify Your Polystyrene",
    description: "Learn to spot the #6 recycling symbol",
    details:
      "Look at the bottom of your container for a triangle with the number 6 inside. This identifies the item as polystyrene (PS). Common items include foam cups, takeout containers, egg cartons, and packaging peanuts. The two main types are EPS (expanded polystyrene, which is the white beady foam) and XPS (extruded polystyrene, which is smooth, dense, and often colored).",
    icon: <Search className="w-5 h-5" />,
    tip: 'Remember: "Styrofoam" is actually a brand name for XPS insulation, not all foam products!',
  },
  {
    id: 2,
    title: "Clean It",
    description: "Remove food residue with a quick rinse",
    details:
      "Give your polystyrene containers a quick rinse to remove food residue. You do not need to scrub them spotless, just remove visible grease and food particles. Heavily contaminated items (like a foam plate covered in barbecue sauce) may be too dirty to recycle. Light residue from drinks is usually fine after a quick rinse.",
    icon: <Sparkles className="w-5 h-5" />,
    tip: "A 5-second rinse is usually enough. If it's covered in grease or paint, it's better to trash it.",
  },
  {
    id: 3,
    title: "Find a Drop-Off Location",
    description: "Locate your nearest EPS recycling center",
    details:
      "Most curbside programs don't accept polystyrene, but there are over 680 EPS-specific drop-off locations in the US. Use our recycling map on the home page, check Earth911.com, or call your local recycling center. Many UPS Stores accept packing peanuts, and some grocery stores have foam collection bins.",
    icon: <MapPin className="w-5 h-5" />,
    tip: "Search on our How to Recycle page for the interactive recycling map and Earth911 lookup tool.",
  },
  {
    id: 4,
    title: "Drop It Off",
    description: "Take your clean polystyrene to the recycling center",
    details:
      "Bag your clean, dry polystyrene and bring it to the drop-off location. Break large pieces (like coolers) into smaller chunks for easier transport. Keep polystyrene separate from other recyclables because mixing it with paper or cans can contaminate the batch. Some facilities even have drive-through drop-off for convenience!",
    icon: <Recycle className="w-5 h-5" />,
    tip: "Pro tip: Save up polystyrene over a few weeks and make one trip instead of many small ones.",
  },
];

export default function BeginnerGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(
    new Set()
  );

  const toggleStep = (id: number) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  const markComplete = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <BookOpen className="w-7 h-7" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Beginner&apos;s Recycling Guide
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          New to polystyrene recycling? Follow these 4 simple steps to start
          recycling like a pro. Click each step to learn more!
        </p>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="text-sm text-muted-foreground">
          {completedSteps.size} of {steps.length} steps completed
        </div>
        <div className="w-32 h-2 bg-card rounded-full overflow-hidden border border-border/30">
          <div
            className="h-full bg-emerald-500 transition-all duration-500 rounded-full"
            style={{
              width: `${(completedSteps.size / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {steps.map((step) => {
          const isExpanded = expandedStep === step.id;
          const isCompleted = completedSteps.has(step.id);

          return (
            <Card
              key={step.id}
              className={cn(
                "bg-card border-border/50 transition-all duration-300",
                isCompleted && "border-emerald-500/30 bg-emerald-500/5"
              )}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full text-left p-5 flex items-center gap-4"
                >
                  {/* Step number / check */}
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 transition-all",
                      isCompleted
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-primary/10 text-primary"
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>

                  {/* Title + description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {step.icon}
                      <h3
                        className={cn(
                          "font-semibold text-foreground",
                          isCompleted && "text-emerald-400"
                        )}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {step.description}
                    </p>
                  </div>

                  {/* Expand icon */}
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>

                {/* Expanded content */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0 space-y-4">
                      <div className="pl-14">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.details}
                        </p>
                        <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                          <p className="text-sm text-amber-400">
                            <span className="font-semibold">💡 Tip: </span>
                            {step.tip}
                          </p>
                        </div>
                        <button
                          onClick={(e) => markComplete(step.id, e)}
                          className={cn(
                            "mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                            isCompleted
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              : "bg-card text-muted-foreground border border-border/50 hover:text-foreground hover:border-primary/20"
                          )}
                        >
                          <CheckCircle className="w-4 h-4" />
                          {isCompleted ? "Completed!" : "Mark as Done"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CTA after guide */}
      {completedSteps.size === steps.length && (
        <div className="text-center mt-8 animate-in fade-in duration-500">
          <p className="text-emerald-400 font-semibold mb-3">
            🎉 You&apos;re ready to start recycling!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/how-to-recycle"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
            >
              Find Recycling Locations <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-emerald-500/50 text-foreground text-sm font-medium transition-colors hover:bg-emerald-500/5"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
