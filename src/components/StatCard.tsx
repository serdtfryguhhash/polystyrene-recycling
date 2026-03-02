import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  stat: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
}

export default function StatCard({ stat, label, icon, description }: StatCardProps) {
  return (
    <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
      <CardContent className="p-6 relative">
        {/* Icon - top right */}
        <div className="absolute top-5 right-5 text-primary/60 group-hover:text-primary transition-colors">
          {icon}
        </div>

        {/* Stat */}
        <div className="space-y-2 pr-10">
          <p className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            {stat}
          </p>
          <p className="text-sm font-medium text-foreground">
            {label}
          </p>
          {description && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
