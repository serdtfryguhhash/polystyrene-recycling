import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RecyclingMapProps {
  className?: string;
}

export default function RecyclingMap({ className }: RecyclingMapProps) {
  return (
    <Card className={cn("bg-card border-border/50 overflow-hidden", className)}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <CardTitle className="text-xl text-foreground">
            Find Recycling Locations Near You
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          Use the interactive map below to find polystyrene and EPS foam
          recycling drop-off locations in your area. Enter your zip code or
          allow location access to find the nearest facilities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full rounded-lg overflow-hidden border border-border/50 shadow-inner">
          <iframe
            src="https://www.epsindustry.org/recycling-map"
            title="EPS Recycling Location Map"
            className="w-full h-[400px] md:h-[500px] border-0"
            loading="lazy"
            allow="geolocation"
            referrerPolicy="no-referrer"
          />
        </div>
      </CardContent>
    </Card>
  );
}
