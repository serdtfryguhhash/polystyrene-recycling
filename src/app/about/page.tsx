import { Card, CardContent } from "@/components/ui/card";
import ComparisonCard from "@/components/ComparisonCard";
import { polystyreneTypes } from "@/data/polystyrene-data";
import {
  Info,
  Coffee,
  Package,
  Home,
  UtensilsCrossed,
  Snowflake,
  Stethoscope,
  Cpu,
  Building2,
  Factory,
  Users,
  MapPin,
  TrendingUp,
} from "lucide-react";

const commonApplications = [
  { name: "Cups & Containers", icon: <Coffee className="w-5 h-5" />, description: "Disposable coffee cups, food takeout containers" },
  { name: "Protective Packaging", icon: <Package className="w-5 h-5" />, description: "Product cushioning, shipping materials" },
  { name: "Building Insulation", icon: <Home className="w-5 h-5" />, description: "Wall and roof insulation panels" },
  { name: "Food Containers", icon: <UtensilsCrossed className="w-5 h-5" />, description: "Meat trays, egg cartons, deli containers" },
  { name: "Coolers & Ice Chests", icon: <Snowflake className="w-5 h-5" />, description: "Portable coolers, cold chain packaging" },
  { name: "Medical Supplies", icon: <Stethoscope className="w-5 h-5" />, description: "Lab trays, medical packaging, test kits" },
  { name: "Electronics", icon: <Cpu className="w-5 h-5" />, description: "TV and computer protective packaging" },
  { name: "Construction", icon: <Building2 className="w-5 h-5" />, description: "ICF forms, geofoam, decorative molding" },
];

const industryStats = [
  { value: "$0.7B", label: "US Market Value", icon: <TrendingUp className="w-5 h-5" />, description: "Annual market for recycled polystyrene products" },
  { value: "32%", label: "Recycling Access", icon: <Users className="w-5 h-5" />, description: "Of Americans have access to PS recycling" },
  { value: "12+", label: "State Bans", icon: <MapPin className="w-5 h-5" />, description: "States with polystyrene restrictions" },
  { value: "15M", label: "Tons/Year", icon: <Factory className="w-5 h-5" />, description: "Global annual polystyrene production" },
];

const manufacturingSteps = [
  { step: 1, title: "Raw Material", description: "Styrene monomer is derived from petroleum through the dehydrogenation of ethylbenzene." },
  { step: 2, title: "Polymerization", description: "Styrene monomer undergoes polymerization to create solid polystyrene beads or pellets." },
  { step: 3, title: "Expansion (EPS)", description: "For EPS, beads are impregnated with pentane gas and then expanded with steam to 40-50x their original volume." },
  { step: 4, title: "Molding", description: "Expanded beads are molded into final shapes using steam chests and custom molds under controlled conditions." },
  { step: 5, title: "Extrusion (XPS)", description: "For XPS, polystyrene is melted and forced through a die with a blowing agent to create dense, uniform foam boards." },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <Info className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          About Polystyrene
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Polystyrene is one of the most widely used plastics in the world.
          Understanding its properties, types, and lifecycle is the first step
          toward making informed recycling decisions.
        </p>
      </div>

      {/* What is Polystyrene? */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          What is Polystyrene?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Polystyrene is a versatile synthetic polymer made from styrene
              monomer, classified under <strong className="text-foreground">resin code #6</strong>. It is a
              thermoplastic, meaning it can be repeatedly melted and reformed
              without significant degradation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              First discovered in <strong className="text-foreground">1839</strong> by Eduard Simon, a German
              apothecary, polystyrene remained a laboratory curiosity until
              commercial production began in the 1930s. It quickly became one of
              the most produced plastics globally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The brand name <strong className="text-foreground">Styrofoam</strong> is actually a registered
              trademark of Dow Chemical Company, specifically for their extruded
              polystyrene (XPS) insulation product. The white foam cups and
              containers commonly called &quot;Styrofoam&quot; are actually expanded
              polystyrene (EPS) -- a different product entirely.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { label: "Resin Code", value: "#6 (PS)" },
              { label: "Type", value: "Thermoplastic Polymer" },
              { label: "Discovered", value: "1839 by Eduard Simon" },
              { label: "Commercial Production", value: "1930s (BASF/Dow)" },
              { label: "Composition", value: "Carbon and Hydrogen (C8H8)n" },
              { label: "Melting Point", value: "~240 degrees F (115 degrees C)" },
              { label: "Density (EPS)", value: "15-30 kg/m3 (95% air)" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 px-4 rounded-lg bg-card border border-border/50"
              >
                <span className="text-sm text-muted-foreground">{item.label}</span>
                <span className="text-sm font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPS vs XPS Comparison */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          EPS vs XPS
        </h2>
        <p className="text-muted-foreground mb-8">
          The two main forms of polystyrene foam have distinct properties and recycling challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {polystyreneTypes.map((type) => (
            <ComparisonCard key={type.id} type={type} />
          ))}
        </div>
      </section>

      {/* Where It's Found */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Where It&apos;s Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Polystyrene is used in a wide range of everyday products and industrial applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {commonApplications.map((app) => (
            <Card
              key={app.name}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <CardContent className="p-5">
                <div className="text-primary/60 group-hover:text-primary transition-colors mb-3">
                  {app.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {app.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industry Stats */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Industry at a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industryStats.map((stat) => (
            <Card
              key={stat.label}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex text-primary/60 group-hover:text-primary transition-colors mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          How Polystyrene is Made
        </h2>
        <p className="text-muted-foreground mb-8">
          The manufacturing process from raw petroleum to finished polystyrene products.
        </p>
        <div className="space-y-0">
          {manufacturingSteps.map((step, index) => (
            <div key={step.step} className="relative flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 border-2 border-primary text-primary font-bold text-sm shrink-0 z-10">
                  {step.step}
                </div>
                {index < manufacturingSteps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border/50 mt-2" />
                )}
              </div>
              <div className="pb-10">
                <h3 className="text-lg font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
