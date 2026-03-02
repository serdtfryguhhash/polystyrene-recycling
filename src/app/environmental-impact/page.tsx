import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { environmentalStats } from "@/data/polystyrene-data";
import {
  CheckCircle,
  Leaf,
  Recycle,
  TrendingUp,
  Zap,
  TrendingDown,
  Scale,
  Factory,
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
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 mb-4">
          <Recycle className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          The Case for Polystyrene Recycling
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Polystyrene is 100% recyclable, remarkably resource efficient, and
          lighter than every common alternative. Banning it does not eliminate
          packaging waste. It simply replaces it with heavier, more
          resource intensive options that often cause greater environmental harm.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-16">
        <Image
          src="/images/hero-environment.jpg"
          alt="Environmental sustainability and polystyrene recycling"
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-emerald-900/40" />
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
              className="bg-card border-border/50 hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${
                    textColorMap[stat.color] || "text-emerald-400"
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

      {/* Why Polystyrene Makes Sense */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Why Polystyrene Makes Sense
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Polystyrene is <strong className="text-foreground">95% air by
                volume</strong>, making it one of the most
                resource efficient packaging materials ever developed. Its
                exceptional insulation properties mean it protects food, medicine,
                and electronics better than heavier alternatives while using a
                fraction of the raw material.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Compared to paper and cardboard alternatives, polystyrene
                requires significantly less energy and water to manufacture. A
                polystyrene cup uses roughly 50% less energy to produce than a
                paper cup of the same size, and the production process generates
                fewer waterborne pollutants.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most importantly, polystyrene is <strong className="text-foreground">100%
                recyclable</strong>. Through both mechanical and chemical recycling
                processes, used polystyrene can be transformed back into
                high quality material suitable for new products, including
                food grade packaging.
              </p>
            </div>
          </div>
          <Card className="bg-emerald-950/20 border-emerald-500/20">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Key Advantages
              </h3>
              {[
                "95% air by volume, minimizing raw material usage",
                "Superior insulation reduces food waste and spoilage",
                "50% less energy to produce than equivalent paper packaging",
                "100% recyclable through mechanical and chemical processes",
                "Lightweight design lowers transportation fuel consumption",
                "Inert material that does not leach chemicals under normal use",
              ].map((fact, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Recycling Solution */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="bg-emerald-950/20 border-emerald-500/20 md:order-2">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Recycling Breakthroughs
              </h3>
              {[
                "Chemical depolymerization converts used polystyrene back to food grade styrene monomer",
                "Compaction technology reduces volume by 50:1, making collection and transport economical",
                "Recycling saves 88% of the energy needed for virgin production",
                "Dissolved polystyrene can be reformed into new products with no loss in quality",
                "Closed loop recycling systems are already operating at commercial scale",
                "New solvent based processes recover 99%+ of the original material",
              ].map((fact, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Factory className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                The Recycling Solution
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Modern recycling technology has transformed what is possible with
                polystyrene. <strong className="text-foreground">Chemical recycling
                through depolymerization</strong> breaks polystyrene down to its
                original styrene monomer, which can then be repolymerized into
                brand new, food grade material that is indistinguishable from
                virgin product.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                One of the biggest practical challenges, the bulky nature of
                expanded polystyrene, has been solved by <strong className="text-foreground">compaction
                technology that achieves a 50:1 volume reduction</strong>. This
                makes collection, transportation, and processing economically
                viable even for curbside programs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Recycling polystyrene saves <strong className="text-foreground">88%
                of the energy</strong> compared to producing new material from
                petroleum feedstock. That is one of the highest energy savings
                ratios of any commonly recycled material, making polystyrene
                recycling both environmentally and economically compelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compared to Alternatives */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Scale className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Compared to Alternatives
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Water Usage
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Paper cups and containers require 3 to 4 times more water to
                manufacture than their polystyrene equivalents. Paper production
                is one of the most water intensive industrial processes,
                consuming vast quantities for pulping, bleaching, and coating.
                Polystyrene production uses a fraction of that water.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Carbon Footprint
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When full lifecycle emissions are considered, including forestry,
                pulp processing, chemical bleaching, and heavier shipping
                weights, paper alternatives often have a higher total carbon
                footprint than polystyrene. The lightweight nature of polystyrene
                means significantly lower transportation emissions per unit
                delivered.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Shipping Weight
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Paper and molded fiber alternatives weigh several times more than
                polystyrene for the same function. This added weight increases
                fuel consumption across every stage of the supply chain, from
                factory to warehouse to store. Lighter packaging means fewer
                trucks on the road and lower emissions per delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Cost of Bans */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            The Cost of Bans
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Heavier Alternatives",
              description:
                "When polystyrene is banned, businesses switch to paper, molded fiber, or thicker plastics. These replacements are significantly heavier, requiring more raw material per unit and increasing total waste by weight. The environmental footprint per container often goes up, not down.",
            },
            {
              title: "Higher Transport Emissions",
              description:
                "Heavier packaging means heavier trucks. Replacing lightweight polystyrene with paper or fiber alternatives increases fuel consumption and CO2 emissions across the entire distribution network. Some studies show a 40% increase in packaging related transport emissions after bans.",
            },
            {
              title: "More Water and Chemicals",
              description:
                "Paper production demands enormous quantities of water and uses chemical bleaching processes that generate waterborne pollutants. Switching from polystyrene to paper packaging dramatically increases industrial water consumption and the chemical load on wastewater treatment systems.",
            },
            {
              title: "Lost Recycling Opportunity",
              description:
                "Banning polystyrene eliminates the incentive to invest in recycling infrastructure that could process this valuable material. Instead of building a circular economy, bans push communities toward single use alternatives that have no viable recycling path of their own.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="bg-card border-border/50 hover:border-emerald-500/30 transition-all duration-300"
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

      {/* The Positive Impact of Recycling */}
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
          The path forward is not to ban polystyrene. It is to recycle it.
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
                virgin quality styrene monomer, achieving near complete resource
                recovery and enabling a true circular economy for this material.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
