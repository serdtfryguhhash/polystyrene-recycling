"use client";

import { useState, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Recycle,
  Trash2,
  RotateCcw,
  Trophy,
  Star,
  Timer,
  Sparkles,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WasteItem {
  id: number;
  name: string;
  description: string;
  isRecyclable: boolean;
  explanation: string;
  category: string;
}

const allItems: WasteItem[] = [
  {
    id: 1,
    name: "Clean EPS Foam Cup",
    description: "A rinsed #6 polystyrene cup from a coffee shop",
    isRecyclable: true,
    explanation:
      "Clean EPS foam cups marked #6 are recyclable at EPS drop-off locations and through some curbside programs.",
    category: "EPS Foam",
  },
  {
    id: 2,
    name: "Greasy Pizza Foam Box",
    description: "A foam container with heavy pizza grease stains",
    isRecyclable: false,
    explanation:
      "Heavily contaminated foam containers with food grease are generally not accepted for recycling. Light contamination can sometimes be cleaned off.",
    category: "Contaminated",
  },
  {
    id: 3,
    name: "EPS Packaging Peanuts",
    description: "White foam packing peanuts from a shipping box",
    isRecyclable: true,
    explanation:
      "EPS packing peanuts are recyclable! Many UPS Stores and shipping centers accept them for reuse, and EPS drop-off centers take them too.",
    category: "EPS Foam",
  },
  {
    id: 4,
    name: "Foam Meat Tray (Clean)",
    description: "A cleaned white foam tray from the grocery store",
    isRecyclable: true,
    explanation:
      "Once cleaned, EPS foam meat trays with the #6 symbol are recyclable at EPS collection points.",
    category: "EPS Foam",
  },
  {
    id: 5,
    name: "Styrofoam with Tape & Labels",
    description: "Foam packaging covered in tape, labels, and stickers",
    isRecyclable: false,
    explanation:
      "Tape, labels, and stickers contaminate the recycling stream. Remove all adhesives before recycling EPS, or dispose of heavily contaminated pieces.",
    category: "Contaminated",
  },
  {
    id: 6,
    name: "XPS Insulation Board",
    description: "A pink or blue rigid foam insulation board",
    isRecyclable: true,
    explanation:
      "XPS (extruded polystyrene) insulation boards are recyclable through construction recycling programs. This is what 'Styrofoam™' technically refers to.",
    category: "XPS Foam",
  },
  {
    id: 7,
    name: "Foam Egg Carton",
    description: "A clean polystyrene egg carton marked #6",
    isRecyclable: true,
    explanation:
      "Clean EPS egg cartons with #6 are recyclable. They're often accepted at EPS drop-off locations alongside cups and trays.",
    category: "EPS Foam",
  },
  {
    id: 8,
    name: "Styrofoam with Paint",
    description: "Foam pieces used for a craft project, covered in paint",
    isRecyclable: false,
    explanation:
      "Paint and other chemical coatings contaminate polystyrene and prevent it from being recycled. These must go to regular waste.",
    category: "Contaminated",
  },
  {
    id: 9,
    name: "Electronics Foam Insert",
    description: "The white foam cushioning inside a TV box",
    isRecyclable: true,
    explanation:
      "EPS protective packaging from electronics is recyclable! Many electronics stores and EPS centers accept these molded foam pieces.",
    category: "EPS Foam",
  },
  {
    id: 10,
    name: "Biodegradable Foam Cup",
    description: "A cup labeled 'compostable' or 'PLA' - not polystyrene",
    isRecyclable: false,
    explanation:
      "PLA (polylactic acid) 'compostable' cups are NOT polystyrene and should NOT go in PS recycling. They contaminate the stream and belong in commercial composting.",
    category: "Not PS",
  },
  {
    id: 11,
    name: "Foam Cooler",
    description: "A white EPS cooler used for keeping drinks cold",
    isRecyclable: true,
    explanation:
      "EPS coolers are highly recyclable! Break them into pieces and take them to an EPS drop-off center. Some stores also accept them.",
    category: "EPS Foam",
  },
  {
    id: 12,
    name: "Black Plastic Container",
    description: "A black takeout container - hard plastic, not foam",
    isRecyclable: false,
    explanation:
      "Black plastic containers are typically polypropylene (#5), not polystyrene (#6). They need different recycling streams and many facilities reject black plastic.",
    category: "Not PS",
  },
  {
    id: 13,
    name: "Foam Surfboard Blank",
    description: "An EPS foam core used in surfboard manufacturing",
    isRecyclable: true,
    explanation:
      "EPS surfboard blanks are recyclable. Some surfboard manufacturers run take-back programs, and EPS recyclers can process clean foam blanks.",
    category: "EPS Foam",
  },
  {
    id: 14,
    name: "Melted/Burned Foam",
    description: "Foam that was accidentally melted near a heat source",
    isRecyclable: false,
    explanation:
      "Melted or thermally damaged polystyrene changes chemical structure and cannot be recycled. It must be disposed of in regular waste.",
    category: "Contaminated",
  },
  {
    id: 15,
    name: "Foam Cup with Drink Residue",
    description: "A used foam cup that still has dried soda residue inside",
    isRecyclable: true,
    explanation:
      "A quick rinse can make this recyclable! Light beverage residue is easy to clean off. Rinse, dry, and take to an EPS recycling center.",
    category: "EPS Foam",
  },
  {
    id: 16,
    name: "Expanded Polystyrene Beads",
    description: "Loose white beads from a torn foam package",
    isRecyclable: true,
    explanation:
      "Loose EPS beads are recyclable but should be contained in a bag before taking to a drop-off center to prevent littering during transport.",
    category: "EPS Foam",
  },
  {
    id: 17,
    name: "Clear Plastic Cup (#1 PET)",
    description: "A clear disposable cup marked #1",
    isRecyclable: false,
    explanation:
      "This is PET plastic (#1), not polystyrene (#6). It's recyclable, but through PET recycling programs, NOT polystyrene recycling.",
    category: "Not PS",
  },
  {
    id: 18,
    name: "Foam with Embedded Metal",
    description: "Packaging foam that has staples and metal clips in it",
    isRecyclable: false,
    explanation:
      "Metal contaminants (staples, clips, wires) must be removed before recycling. If they can't be separated, the foam can't be properly processed.",
    category: "Contaminated",
  },
];

export default function SortingGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [answers, setAnswers] = useState<
    { item: WasteItem; correct: boolean }[]
  >([]);

  const items = useMemo(() => {
    const shuffled = [...allItems].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 12);
  }, [gameStarted]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentItem = items[currentItemIndex];
  const totalItems = items.length;

  const handleChoice = useCallback(
    (recyclable: boolean) => {
      if (showResult) return;
      const correct = recyclable === currentItem.isRecyclable;
      setLastAnswer(correct);
      setShowResult(true);
      setAnswers((prev) => [...prev, { item: currentItem, correct }]);

      if (correct) {
        setScore((prev) => prev + 1);
        setStreak((prev) => {
          const newStreak = prev + 1;
          setBestStreak((best) => Math.max(best, newStreak));
          return newStreak;
        });
      } else {
        setStreak(0);
      }
    },
    [showResult, currentItem]
  );

  const nextItem = () => {
    if (currentItemIndex < totalItems - 1) {
      setCurrentItemIndex((prev) => prev + 1);
      setShowResult(false);
      setLastAnswer(null);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setGameStarted((prev) => !prev);
    setCurrentItemIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setShowResult(false);
    setLastAnswer(null);
    setGameOver(false);
    setAnswers([]);
  };

  const getStarRating = () => {
    const pct = (score / totalItems) * 100;
    if (pct >= 90) return 3;
    if (pct >= 70) return 2;
    if (pct >= 50) return 1;
    return 0;
  };

  // Start screen
  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card border-border/50">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 mb-6">
              <Recycle className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Recycling Sorting Game
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Can you tell which polystyrene items are recyclable and which
              aren&apos;t? Sort 12 items correctly to test your knowledge!
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Recycle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-emerald-400">
                  Recycle
                </div>
                <div className="text-xs text-muted-foreground">
                  Clean, #6 PS items
                </div>
              </div>
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <Trash2 className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-red-400">Trash</div>
                <div className="text-xs text-muted-foreground">
                  Contaminated / Not PS
                </div>
              </div>
            </div>

            <Button
              onClick={() => setGameStarted(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-base"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Sorting
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Game over screen
  if (gameOver) {
    const stars = getStarRating();
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card border-border/50">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 mb-6">
              <Trophy className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Sorting Complete!
            </h2>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3].map((s) => (
                <Star
                  key={s}
                  className={cn(
                    "w-8 h-8",
                    s <= stars
                      ? "text-amber-400 fill-amber-400"
                      : "text-border/50"
                  )}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">
                  {score}/{totalItems}
                </div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">
                  {bestStreak}
                </div>
                <div className="text-sm text-muted-foreground">
                  Best Streak
                </div>
              </div>
            </div>

            {/* Results summary */}
            <div className="text-left max-w-md mx-auto mb-8 space-y-2">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Results:
              </h3>
              {answers.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm"
                >
                  {a.correct ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  )}
                  <span
                    className={cn(
                      a.correct ? "text-muted-foreground" : "text-red-400/80"
                    )}
                  >
                    {a.item.name}
                    {!a.correct && (
                      <span className="text-xs opacity-70">
                        {" "}
                        (actually {a.item.isRecyclable ? "recyclable" : "not recyclable"})
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            <Button
              onClick={restartGame}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Play Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Game screen
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress and score */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>
            Item {currentItemIndex + 1} of {totalItems}
          </span>
          <div className="flex items-center gap-4">
            {streak >= 3 && (
              <span className="text-amber-400 flex items-center gap-1 text-xs font-medium">
                <Timer className="w-3 h-3" />
                {streak}x streak!
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {score} pts
            </span>
          </div>
        </div>
        <div className="h-2 bg-card rounded-full overflow-hidden border border-border/30">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500 rounded-full"
            style={{
              width: `${((currentItemIndex + (showResult ? 1 : 0)) / totalItems) * 100}%`,
            }}
          />
        </div>
      </div>

      <Card className="bg-card border-border/50">
        <CardContent className="p-6 md:p-8">
          {/* Item info */}
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground bg-card border border-border/50 px-2.5 py-1 rounded-md mb-4 inline-block">
              {currentItem.category}
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {currentItem.name}
            </h3>
            <p className="text-muted-foreground">{currentItem.description}</p>
          </div>

          {/* Sorting buttons */}
          {!showResult && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleChoice(true)}
                className="p-6 rounded-xl border-2 border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15 hover:border-emerald-500/50 transition-all group"
              >
                <Recycle className="w-10 h-10 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-semibold text-emerald-400">
                  Recycle ♻️
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  This can be recycled
                </div>
              </button>
              <button
                onClick={() => handleChoice(false)}
                className="p-6 rounded-xl border-2 border-red-500/30 bg-red-500/5 hover:bg-red-500/15 hover:border-red-500/50 transition-all group"
              >
                <Trash2 className="w-10 h-10 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-semibold text-red-400">
                  Trash 🗑️
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Not recyclable
                </div>
              </button>
            </div>
          )}

          {/* Result feedback */}
          {showResult && (
            <>
              <div
                className={cn(
                  "rounded-xl p-4 mb-4 border",
                  lastAnswer
                    ? "bg-emerald-500/10 border-emerald-500/30"
                    : "bg-red-500/10 border-red-500/30"
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  {lastAnswer ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span
                    className={cn(
                      "font-semibold",
                      lastAnswer ? "text-emerald-400" : "text-red-400"
                    )}
                  >
                    {lastAnswer ? "Correct!" : "Not quite!"}
                  </span>
                  <span className="text-sm text-muted-foreground ml-auto">
                    {currentItem.isRecyclable
                      ? "♻️ Recyclable"
                      : "🗑️ Not recyclable"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentItem.explanation}
                </p>
              </div>

              <Button
                onClick={nextItem}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
              >
                {currentItemIndex < totalItems - 1 ? "Next Item" : "See Results"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
