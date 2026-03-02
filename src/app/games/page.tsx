import type { Metadata } from "next";
import { Gamepad2 } from "lucide-react";
import SortingGame from "@/components/SortingGame";

export const metadata: Metadata = {
  title: "Recycling Games",
  description:
    "Play fun recycling games! Sort polystyrene items into recycle or trash bins and learn what's actually recyclable.",
  openGraph: {
    title: "Recycling Sorting Game | PolyRecycle",
    description:
      "Can you sort polystyrene waste correctly? Play our recycling sorting game and find out!",
  },
};

export default function GamesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <Gamepad2 className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Recycling Games
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn while you play! Sort waste items, test your reflexes, and master
          the art of polystyrene recycling through interactive games.
        </p>
      </div>

      {/* Sorting Game */}
      <SortingGame />
    </div>
  );
}
