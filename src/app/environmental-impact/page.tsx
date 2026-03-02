import { Card, CardContent } from "@/components/ui/card";
import { environmentalStats } from "@/data/polystyrene-data";
import {
  BarChart3,
  Trash2,
  Waves,
  Cloud,
  Fish,
  Zap,
  Leaf,
  Recycle,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

const textColorMap: Record<string, string> = {
  emerald: "text-emerald-400",
  red: "text-red-400",
  blue: "text-blue-400",
  orange: "text-orange-400",
  yellow: "text-yellow-400",
  purple: "text-purple-400",
  green: "text-green-400",
  teal: "text-teal-400",
};

export default function EnvironmentalImpactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <BarChart3 className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Environmental Impact
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Polystyrene waste is one of the most persistent environmental
          challenges we face. From overflowing landfills to ocean pollution, the
          numbers paint a stark picture -- but also point toward solutions.
        </p>
      </div>

      {/* Stats Dashboard */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          By the Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {environmentalStats.map((stat) => (
            <Card
              key={stat.label}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${
                    textColorMap[stat.color] || "text-primary"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Landfill Crisis */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/10">
                <Trash2 className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                The Landfill Crisis
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Polystyrene occupies approximately <strong className="text-foreground">30% of all landfill space
                </strong> worldwide, making it one of the single largest contributors to
                landfill volume. Despite being lightweight, its bulky nature
                means it takes up disproportionate space that could be used for
                biodegradable waste.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Once in a landfill, polystyrene persists for over 500 years. It
                does not biodegrade in any meaningful timeframe. Instead, it
                slowly breaks into smaller and smaller fragments, eventually
                becoming microplastics that can leach into soil and groundwater.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The problem is compounded by the fact that less than 1% of
                polystyrene waste is recycled. The remaining 99% ends up in
                landfills, incinerators, or -- increasingly -- in natural
                environments where it causes severe ecological damage.
              </p>
            </div>
          </div>
          <Card className="bg-red-950/20 border-red-500/20">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Landfill Impact Facts
              </h3>
              {[
                "30% of landfill volume is polystyrene and foam products",
                "500+ years to decompose in landfill conditions",
                "Less than 1% recycling rate in the United States",
                "Microplastics from degradation contaminate soil and water",
                "Volume cannot be compacted effectively in landfills",
                "Leachate from landfills can carry styrene compounds",
              ].map((fact, i) => (
                <div key={i} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Marine Pollution */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="bg-blue-950/20 border-blue-500/20 md:order-2">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Ocean Impact
              </h3>
              {[
                "#2 most common debris found on beaches worldwide",
                "100,000+ marine animals killed annually by plastic pollution",
                "Microplastics found in the Mariana Trench, the deepest point on Earth",
                "Polystyrene absorbs and concentrates toxins from seawater",
                "Fragments are ingested by marine life at every level of the food chain",
                "Cleanup of ocean microplastics is virtually impossible with current technology",
              ].map((fact, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Waves className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Waves className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Marine Pollution
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Polystyrene is the <strong className="text-foreground">#2 most common type of beach debris
                </strong> found worldwide, second only to cigarette butts. Its
                lightweight nature means it is easily carried by wind and water
                into rivers, lakes, and oceans.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                An estimated <strong className="text-foreground">100,000+ marine animals</strong> die each year
                from plastic pollution, with polystyrene being a significant
                contributor. Sea turtles mistake foam fragments for jellyfish,
                seabirds feed small pieces to their chicks, and fish ingest
                microplastic particles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Research has shown that polystyrene in seawater absorbs and
                concentrates toxic chemicals including pesticides and industrial
                pollutants, creating a particularly dangerous form of pollution
                when ingested by marine organisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Footprint */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-purple-500/10">
            <Cloud className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Carbon Footprint
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Production Emissions
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Manufacturing polystyrene from petroleum feedstock generates
                significant CO2 emissions. Each ton of virgin polystyrene
                produced releases approximately 3.4 tons of CO2 equivalent,
                including raw material extraction, transportation, and energy
                consumption during polymerization.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Disposal Emissions
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When incinerated, polystyrene releases CO2 and potentially
                toxic byproducts. Even in landfills, slow degradation releases
                greenhouse gases over centuries. Improper burning at low
                temperatures produces carbon monoxide and hazardous styrene
                vapors.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Compared to Alternatives
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                While polystyrene production is carbon-intensive, lifecycle
                analyses show its lightweight nature means lower transportation
                emissions. Paper alternatives require 3-4x more water and can
                have higher overall carbon footprints when accounting for
                forestry, production, and heavier shipping weights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wildlife Effects */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <Fish className="w-6 h-6 text-amber-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Wildlife Effects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Ingestion",
              description:
                "Marine animals mistake polystyrene fragments for food. Ingestion can cause internal blockages, starvation, and death. Over 700 marine species are affected by plastic pollution.",
            },
            {
              title: "Entanglement",
              description:
                "Six-pack rings, foam debris, and packaging waste can trap and entangle wildlife. Animals may suffer injuries, restricted movement, and inability to feed or escape predators.",
            },
            {
              title: "Food Chain Impact",
              description:
                "Microplastics ingested by small organisms accumulate up the food chain through bioaccumulation. Toxins absorbed by polystyrene concentrate in predator species, including fish consumed by humans.",
            },
            {
              title: "Habitat Damage",
              description:
                "Polystyrene debris accumulates in critical habitats including coral reefs, mangroves, and nesting beaches. Contaminated environments affect breeding success and biodiversity.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-5">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Positive Impact of Recycling */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Leaf className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            The Positive Impact of Recycling
          </h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          When polystyrene is properly recycled, the environmental benefits are
          substantial. Every ton recycled represents significant savings in
          energy, emissions, and natural resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border-emerald-500/30">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 mb-4">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                88%
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Energy Savings
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recycling polystyrene saves up to 88% of the energy required to
                produce new polystyrene from virgin petroleum feedstock. This is
                equivalent to saving roughly 1,000 gallons of gasoline per ton.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border-emerald-500/30">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 mb-4">
                <TrendingDown className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                2.3 tons
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                CO2 Reduction
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Each ton of polystyrene recycled prevents approximately 2.3 tons
                of CO2 from entering the atmosphere, compared to producing new
                polystyrene and landfilling the old material.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border-emerald-500/30">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 mb-4">
                <Recycle className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                100%
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Resource Recovery
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Through chemical recycling, polystyrene can be returned to
                virgin-quality styrene monomer, achieving near-complete resource
                recovery and enabling a true circular economy for this material.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
