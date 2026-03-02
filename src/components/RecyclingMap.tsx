"use client";

import { useState } from "react";
import { MapPin, ExternalLink, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RecyclingMapProps {
  className?: string;
}

export default function RecyclingMap({ className }: RecyclingMapProps) {
  const [showMap, setShowMap] = useState(false);

  return (
    <Card
      className={cn("bg-card border-border/50 overflow-hidden", className)}
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <CardTitle className="text-xl text-foreground">
            Find Recycling Locations Near You
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          Search for polystyrene and EPS foam recycling drop-off locations in
          your area. Enter a material type and your zip code to find the nearest
          facilities.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Earth911 Search Embed */}
        <div className="relative w-full rounded-lg overflow-hidden border border-border/50">
          {!showMap ? (
            <div className="flex flex-col items-center justify-center py-16 px-6 bg-secondary/30">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Recycling Location Finder
              </h3>
              <p className="text-sm text-muted-foreground text-center max-w-md mb-6">
                Powered by Earth911 — Search over 100,000 recycling locations
                across North America. Find polystyrene drop-off points near
                you.
              </p>
              <button
                onClick={() => setShowMap(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Search className="w-4 h-4" />
                Load Recycling Search
              </button>
            </div>
          ) : (
            <iframe
              src="https://search.earth911.com/iframe/"
              title="Earth911 Recycling Location Search"
              className="w-full h-[500px] md:h-[640px] border-0 bg-white rounded-lg"
              loading="lazy"
              allow="geolocation"
            />
          )}
        </div>

        {/* Additional map links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://www.epsindustry.org/recycling-map"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground flex items-center gap-1.5">
                EPS Industry Alliance Map
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                680+ EPS-specific drop-off locations across North America
              </p>
            </div>
          </a>
          <a
            href="https://search.earth911.com/?what=Polystyrene"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground flex items-center gap-1.5">
                Earth911 Full Search
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                100,000+ recycling locations for all material types
              </p>
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
