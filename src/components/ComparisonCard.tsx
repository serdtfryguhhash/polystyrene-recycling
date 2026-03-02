import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PolystyreneType } from "@/data/polystyrene-data";

const difficultyColors: Record<string, string> = {
  easy: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  moderate: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  difficult: "bg-red-500/15 text-red-400 border-red-500/30",
};

interface ComparisonCardProps {
  type: PolystyreneType;
}

export default function ComparisonCard({ type }: ComparisonCardProps) {
  const difficultyClass =
    difficultyColors[type.recyclingDifficulty?.toLowerCase() || ""] ||
    "bg-secondary text-secondary-foreground border-border";

  return (
    <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-xl text-foreground">{type.name}</CardTitle>
            {type.fullName && (
              <p className="text-sm text-muted-foreground mt-1">
                {type.fullName}
              </p>
            )}
          </div>
          <Badge
            variant="outline"
            className={`capitalize text-[11px] shrink-0 ${difficultyClass}`}
          >
            {type.recyclingDifficulty}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {type.description}
        </p>

        {/* Characteristics */}
        {type.characteristics && type.characteristics.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Characteristics
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {type.characteristics.map((char, index) => (
                <span
                  key={index}
                  className="inline-flex px-2.5 py-1 rounded-md bg-secondary/60 text-xs text-secondary-foreground border border-border/50"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Common Uses */}
        {type.commonUses && type.commonUses.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Common Uses
            </h4>
            <ul className="space-y-1">
              {type.commonUses.map((use, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary" />
                  {use}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
