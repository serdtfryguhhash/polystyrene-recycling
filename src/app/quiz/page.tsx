import type { Metadata } from "next";
import { Brain } from "lucide-react";
import RecyclingQuiz from "@/components/RecyclingQuiz";

export const metadata: Metadata = {
  title: "Recycling Quiz",
  description:
    "Test your knowledge about polystyrene recycling with our interactive quiz. Learn fun facts while answering questions about EPS, recycling methods, and environmental impact.",
  openGraph: {
    title: "Polystyrene Recycling Quiz | PolyRecycle",
    description:
      "How much do you know about polystyrene recycling? Take the quiz and find out!",
  },
};

export default function QuizPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <Brain className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Recycling Quiz
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Test your polystyrene recycling knowledge! Answer 10 questions and see
          how you score. Learn something new with every answer.
        </p>
      </div>

      {/* Quiz Component */}
      <RecyclingQuiz />
    </div>
  );
}
