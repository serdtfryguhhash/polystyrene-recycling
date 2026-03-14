"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  Trophy,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Brain,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

const allQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What resin identification code identifies polystyrene?",
    options: ["#1 (PET)", "#4 (LDPE)", "#6 (PS)", "#7 (Other)"],
    correctIndex: 2,
    explanation:
      "Polystyrene is identified by resin code #6. Look for this symbol on the bottom of containers to identify recyclable polystyrene.",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What percentage of air makes up expanded polystyrene (EPS)?",
    options: ["50%", "75%", "90-95%", "99%"],
    correctIndex: 2,
    explanation:
      "EPS is approximately 90-95% air by volume, which makes it extremely lightweight but also challenging to transport for recycling without compaction.",
    difficulty: "easy",
  },
  {
    id: 3,
    question:
      "How much energy is saved by recycling polystyrene vs. producing new material?",
    options: ["25%", "50%", "75%", "88%"],
    correctIndex: 3,
    explanation:
      "Recycling polystyrene saves approximately 88% of the energy compared to producing new virgin material, making it highly energy-efficient to recycle.",
    difficulty: "medium",
  },
  {
    id: 4,
    question: "What is \"Styrofoam\" actually a trademark of?",
    options: [
      "All foam cups",
      "Dow Chemical XPS insulation",
      "EPS food packaging",
      "Any polystyrene product",
    ],
    correctIndex: 1,
    explanation:
      "\"Styrofoam\" is actually a Dow Chemical trademark referring specifically to XPS (extruded polystyrene) insulation boards, not the EPS foam cups most people associate with the name.",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "When was polystyrene first discovered?",
    options: ["1750", "1839", "1920", "1955"],
    correctIndex: 1,
    explanation:
      "Polystyrene was first discovered in 1839 by German apothecary Eduard Simon, who isolated it from a natural resin called storax.",
    difficulty: "hard",
  },
  {
    id: 6,
    question:
      "How much can polystyrene be compacted for efficient recycling?",
    options: ["1/5th", "1/10th", "1/25th", "1/50th"],
    correctIndex: 3,
    explanation:
      "Polystyrene can be compressed to 1/50th of its original volume using compaction machines, making recycling transport much more economical.",
    difficulty: "medium",
  },
  {
    id: 7,
    question: "How many polystyrene cups are used in the US annually?",
    options: ["1 billion", "10 billion", "25 billion", "50 billion"],
    correctIndex: 2,
    explanation:
      "Americans use approximately 25 billion polystyrene cups every year, all of which are technically recyclable through existing processes.",
    difficulty: "easy",
  },
  {
    id: 8,
    question: "What happens to polystyrene in a landfill?",
    options: [
      "It biodegrades in 10 years",
      "It dissolves in rain",
      "It lasts 500+ years",
      "It turns into soil in 50 years",
    ],
    correctIndex: 2,
    explanation:
      "Polystyrene is extremely durable and can last over 500 years in a landfill, which is exactly why recycling it into new products is so important.",
    difficulty: "easy",
  },
  {
    id: 9,
    question: "What is chemical recycling of polystyrene called?",
    options: [
      "Melting",
      "Depolymerization",
      "Combustion",
      "Fermentation",
    ],
    correctIndex: 1,
    explanation:
      "Depolymerization breaks polystyrene back down into its styrene monomer, which can then be repolymerized into new, food-grade polystyrene.",
    difficulty: "hard",
  },
  {
    id: 10,
    question:
      "Why do paper alternatives often have a higher environmental cost than polystyrene?",
    options: [
      "They weigh more to transport",
      "They use 3-4x more water to manufacture",
      "They require more chemical processing",
      "All of the above",
    ],
    correctIndex: 3,
    explanation:
      "Paper alternatives typically weigh more (increasing transport emissions), use 3-4 times more water, and require significant chemical processing, giving them a higher overall environmental footprint.",
    difficulty: "medium",
  },
  {
    id: 11,
    question:
      "What percentage of US polystyrene is currently recycled?",
    options: ["~5%", "~20%", "~45%", "~70%"],
    correctIndex: 0,
    explanation:
      "Only about 5% of polystyrene is recycled in the US currently, despite being 100% recyclable. This highlights the need for more recycling infrastructure, not bans.",
    difficulty: "easy",
  },
  {
    id: 12,
    question:
      "Which process converts polystyrene back to food-grade material?",
    options: [
      "Mechanical grinding",
      "Chemical depolymerization",
      "UV exposure",
      "Thermal cracking only",
    ],
    correctIndex: 1,
    explanation:
      "Chemical depolymerization breaks polystyrene down to its original styrene monomer, which can be repolymerized into food-safe material. This became a commercial milestone in 2025.",
    difficulty: "hard",
  },
  {
    id: 13,
    question: "How many EPS drop-off recycling locations exist in the US?",
    options: ["Around 100", "Around 350", "Over 680", "Over 2,000"],
    correctIndex: 2,
    explanation:
      "There are over 680 EPS-specific recycling drop-off locations across the US, and this number continues to grow as recycling infrastructure expands.",
    difficulty: "medium",
  },
  {
    id: 14,
    question:
      "What is the main reason polystyrene recycling is expensive at small scale?",
    options: [
      "The material is toxic",
      "It's mostly air, making transport costly",
      "There's no market for recycled PS",
      "It requires rare chemicals",
    ],
    correctIndex: 1,
    explanation:
      "Because EPS is 95% air, transporting it without compaction means hauling mostly air. Compaction technology reduces volume by 50:1, dramatically improving economics.",
    difficulty: "medium",
  },
  {
    id: 15,
    question: "Recycling one ton of polystyrene saves how much CO₂?",
    options: [
      "0.5 tons",
      "1.0 ton",
      "2.3 tons",
      "5.0 tons",
    ],
    correctIndex: 2,
    explanation:
      "Recycling one ton of polystyrene prevents approximately 2.3 tons of CO₂ emissions compared to making new material from scratch.",
    difficulty: "hard",
  },
  {
    id: 16,
    question: "What is EPS commonly used for besides food containers?",
    options: [
      "Clothing fiber",
      "Building insulation",
      "Paint pigment",
      "Rubber tires",
    ],
    correctIndex: 1,
    explanation:
      "EPS is widely used as building insulation because it is lightweight, an excellent thermal insulator, moisture-resistant, and very cost-effective.",
    difficulty: "easy",
  },
  {
    id: 17,
    question: "What does 'EPS' stand for?",
    options: [
      "Environmental Plastic Standard",
      "Expanded Polystyrene",
      "Extruded Polymer Sheet",
      "Eco-Plastic Solution",
    ],
    correctIndex: 1,
    explanation:
      "EPS stands for Expanded Polystyrene. It is the white, beaded foam commonly used in cups, packaging, and insulation. It is made by expanding polystyrene beads with steam.",
    difficulty: "easy",
  },
  {
    id: 18,
    question: "How does polystyrene insulation compare to fiberglass for R-value per inch?",
    options: [
      "Much lower",
      "About the same",
      "Higher",
      "It doesn't insulate",
    ],
    correctIndex: 2,
    explanation:
      "EPS and XPS polystyrene insulation both offer higher R-values per inch compared to standard fiberglass batts, making them more space-efficient thermal barriers.",
    difficulty: "hard",
  },
  {
    id: 19,
    question: "What natural foods contain styrene (the monomer)?",
    options: [
      "Strawberries and cinnamon",
      "Bananas and apples",
      "Only synthetic sources",
      "Rice and wheat",
    ],
    correctIndex: 0,
    explanation:
      "Styrene occurs naturally in many foods including strawberries, cinnamon, coffee beans, and peanuts. It's a naturally occurring organic compound, not just a synthetic chemical.",
    difficulty: "hard",
  },
  {
    id: 20,
    question: "What is the first step to recycle polystyrene at home?",
    options: [
      "Melt it with a heat gun",
      "Clean it and check for #6 symbol",
      "Crush it into powder",
      "Dissolve it in water",
    ],
    correctIndex: 1,
    explanation:
      "The first step is always to clean the polystyrene (remove food residue) and verify it has the #6 recycling symbol, then find a drop-off location that accepts it.",
    difficulty: "easy",
  },
];

export default function RecyclingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [difficulty, setDifficulty] = useState<
    "all" | "easy" | "medium" | "hard"
  >("all");
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = useMemo(() => {
    const filtered =
      difficulty === "all"
        ? allQuestions
        : allQuestions.filter((q) => q.difficulty === difficulty);
    // Shuffle and pick 10
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, [difficulty, quizStarted]); // eslint-disable-line react-hooks/exhaustive-deps

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;

  const handleAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setQuizStarted((prev) => !prev);
  };

  const getScoreMessage = () => {
    const pct = (score / totalQuestions) * 100;
    if (pct === 100) return "Perfect Score! You're a Polystyrene Master! 🏆";
    if (pct >= 80)
      return "Excellent! You really know your polystyrene facts! 🌟";
    if (pct >= 60) return "Good job! You know more than most people! 👍";
    if (pct >= 40) return "Not bad! Keep learning about recycling! 📚";
    return "Keep exploring! There's so much to learn about recycling! 💪";
  };

  const getScoreColor = () => {
    const pct = (score / totalQuestions) * 100;
    if (pct >= 80) return "text-emerald-400";
    if (pct >= 60) return "text-amber-400";
    return "text-red-400";
  };

  // Difficulty selection screen
  if (!quizStarted || questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card border-border/50">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 mb-6">
              <Brain className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Polystyrene Recycling Quiz
            </h2>
            <p className="text-muted-foreground mb-8">
              Test your knowledge with 10 random questions. Choose your
              difficulty level to get started!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {(
                [
                  { key: "all", label: "Mixed", desc: "All levels" },
                  { key: "easy", label: "Easy", desc: "Beginner" },
                  { key: "medium", label: "Medium", desc: "Intermediate" },
                  { key: "hard", label: "Hard", desc: "Expert" },
                ] as const
              ).map((d) => (
                <button
                  key={d.key}
                  onClick={() => setDifficulty(d.key)}
                  className={cn(
                    "p-4 rounded-xl border text-center transition-all",
                    difficulty === d.key
                      ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                      : "bg-card border-border/50 text-muted-foreground hover:border-emerald-500/20"
                  )}
                >
                  <div className="font-semibold text-sm">{d.label}</div>
                  <div className="text-xs opacity-70">{d.desc}</div>
                </button>
              ))}
            </div>

            <Button
              onClick={() => setQuizStarted(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-base"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Quiz complete screen
  if (quizComplete) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card border-border/50">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 mb-6">
              <Trophy className={cn("w-10 h-10", getScoreColor())} />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Quiz Complete!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {getScoreMessage()}
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className={cn("text-4xl font-bold", getScoreColor())}>
                  {score}/{totalQuestions}
                </div>
                <div className="text-sm text-muted-foreground">
                  Correct Answers
                </div>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <div className={cn("text-4xl font-bold", getScoreColor())}>
                  {Math.round((score / totalQuestions) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={restartQuiz}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Question screen
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span className="flex items-center gap-1">
            <Target className="w-4 h-4" />
            Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </span>
        </div>
        <div className="h-2 bg-card rounded-full overflow-hidden border border-border/30">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500 rounded-full"
            style={{
              width: `${((currentQuestion + (showExplanation ? 1 : 0)) / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      <Card className="bg-card border-border/50">
        <CardContent className="p-6 md:p-8">
          {/* Difficulty badge */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className={cn(
                "text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md",
                question.difficulty === "easy" &&
                  "bg-emerald-500/15 text-emerald-400",
                question.difficulty === "medium" &&
                  "bg-amber-500/15 text-amber-400",
                question.difficulty === "hard" && "bg-red-500/15 text-red-400"
              )}
            >
              {question.difficulty}
            </span>
          </div>

          {/* Question */}
          <h3 className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctIndex;
              const showResult = showExplanation;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-3",
                    !showResult &&
                      !isSelected &&
                      "border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5",
                    !showResult &&
                      isSelected &&
                      "border-emerald-500/50 bg-emerald-500/10",
                    showResult &&
                      isCorrect &&
                      "border-emerald-500/50 bg-emerald-500/10",
                    showResult &&
                      isSelected &&
                      !isCorrect &&
                      "border-red-500/50 bg-red-500/10",
                    showResult &&
                      !isCorrect &&
                      !isSelected &&
                      "opacity-50"
                  )}
                >
                  <span
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium shrink-0 border",
                      !showResult && "border-border/50 text-muted-foreground",
                      showResult &&
                        isCorrect &&
                        "border-emerald-500/50 text-emerald-400 bg-emerald-500/10",
                      showResult &&
                        isSelected &&
                        !isCorrect &&
                        "border-red-500/50 text-red-400 bg-red-500/10"
                    )}
                  >
                    {showResult && isCorrect ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : showResult && isSelected && !isCorrect ? (
                      <XCircle className="w-5 h-5" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      showResult && isCorrect && "text-emerald-400",
                      showResult &&
                        isSelected &&
                        !isCorrect &&
                        "text-red-400",
                      !showResult && "text-foreground"
                    )}
                  >
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="rounded-xl bg-emerald-950/30 border border-emerald-500/20 p-4 mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-emerald-400">
                  Explanation:{" "}
                </span>
                {question.explanation}
              </p>
            </div>
          )}

          {/* Next button */}
          {showExplanation && (
            <Button
              onClick={nextQuestion}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
            >
              {currentQuestion < totalQuestions - 1
                ? "Next Question"
                : "See Results"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
