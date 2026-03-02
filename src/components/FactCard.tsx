import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/components/IconMap";
import type { FunFact } from "@/data/polystyrene-data";

const categoryColors: Record<string, string> = {
  production: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  waste: "bg-red-500/15 text-red-400 border-red-500/30",
  recycling: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  environment: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  science: "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

interface FactCardProps {
  fact: FunFact;
}

export default function FactCard({ fact }: FactCardProps) {
  const colorClass =
    categoryColors[fact.category?.toLowerCase() || ""] ||
    "bg-secondary text-secondary-foreground border-border";

  return (
    <Card className="bg-card border-border/50 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 group h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <Badge
            variant="outline"
            className={`capitalize text-[11px] ${colorClass}`}
          >
            {fact.category}
          </Badge>
          <div className="text-primary/60 group-hover:text-primary transition-colors">
            {getIcon(fact.iconName || "help-circle", "w-6 h-6")}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Big stat number */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            {fact.stat}
          </span>
          {fact.unit && (
            <span className="text-sm font-medium text-muted-foreground">
              {fact.unit}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {fact.description}
        </p>
      </CardContent>
    </Card>
  );
}
