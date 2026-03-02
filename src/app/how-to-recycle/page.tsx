import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProcessStep from "@/components/ProcessStep";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import RecyclingMap from "@/components/RecyclingMap";
import StatePolicyTabs from "@/components/StatePolicyTabs";
import { recyclingMethods, policyData } from "@/data/polystyrene-data";
import {
  Recycle,
  Search,
  Droplets,
  MapPin,
  Truck,
  CheckCircle,
  XCircle,
  Sparkles,
  Beaker,
  FlaskConical,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Recycle Polystyrene",
  description: "Step-by-step polystyrene recycling guide: identify, clean, find locations, and transport. Plus recycling methods and state policies.",
  openGraph: {
    title: "How to Recycle Polystyrene | PolyRecycle",
    description: "A complete guide to recycling polystyrene at home with drop-off locations and state policy info.",
    images: [{ url: "/images/recycling-guide.jpg" }],
  },
};

const consumerSteps = [
  {
    step: 1,
    title: "Identify",
    description:
      "Look for the recycling symbol with the number 6 (PS) on the bottom of containers. This indicates the item is made of polystyrene. Common items include foam cups, meat trays, egg cartons, and packaging materials.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    step: 2,
    title: "Clean",
    description:
      "Remove all food residue, labels, and tape from the polystyrene. Rinse containers with water and allow them to dry. Contaminated polystyrene cannot be recycled through most mechanical processes.",
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    step: 3,
    title: "Find a Location",
    description:
      "Use the recycling map below to find a polystyrene drop-off location near you. Many communities have dedicated collection points even if curbside pickup is not available. Some retailers and shipping stores also accept clean EPS.",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    step: 4,
    title: "Transport",
    description:
      "Bag polystyrene items separately from other recyclables. Because EPS is 95% air, it takes up a lot of space. Break down large pieces and compress when possible. Keep it dry during transport.",
    icon: <Truck className="w-5 h-5" />,
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  Traditional: <Recycle className="w-4 h-4" />,
  Advanced: <FlaskConical className="w-4 h-4" />,
  "Pre-processing": <Scale className="w-4 h-4" />,
  Thermal: <Sparkles className="w-4 h-4" />,
  Emerging: <Beaker className="w-4 h-4" />,
};

export default function HowToRecyclePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <Recycle className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          How to Recycle Polystyrene
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A complete guide to recycling polystyrene at home, finding drop-off
          locations, understanding recycling methods, and navigating state
          policies.
        </p>
      </div>

      {/* 4-Step Consumer Guide */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Consumer Recycling Guide
        </h2>
        <p className="text-muted-foreground mb-8">
          Follow these four steps to properly recycle polystyrene from your household.
        </p>
        <div className="space-y-0">
          {consumerSteps.map((step) => (
            <ProcessStep
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </section>

      {/* Watch How It's Done */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Watch How It&apos;s Done
        </h2>
        <p className="text-muted-foreground mb-8">
          See the polystyrene recycling process in action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <YouTubeEmbed
            videoId="JxO_601oru8"
            title="Chick-fil-A Polystyrene Cup Recycling"
          />
          <YouTubeEmbed
            videoId="9EQhl69naqE"
            title="EPS Foam Recycling at Scale"
          />
        </div>
      </section>

      {/* Recycling Map */}
      <section className="mb-16">
        <RecyclingMap />
      </section>

      {/* 6 Recycling Methods */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Recycling Methods
        </h2>
        <p className="text-muted-foreground mb-8">
          Six different approaches to processing polystyrene waste, from
          traditional mechanical recycling to emerging biological methods.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recyclingMethods.map((method) => (
            <Card
              key={method.name}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className="text-[11px] bg-primary/10 text-primary border-primary/30"
                  >
                    {categoryIcons[method.category]}
                    <span className="ml-1">{method.category}</span>
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground">
                  {method.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {method.description}
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="steps" className="border-border/50">
                    <AccordionTrigger className="text-sm hover:no-underline">
                      Process Steps
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="space-y-2">
                        {method.steps.map((step, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary font-medium shrink-0">
                              {i + 1}.
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="pros" className="border-border/50">
                    <AccordionTrigger className="text-sm hover:no-underline">
                      Advantages
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1.5">
                        {method.pros.map((pro, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cons" className="border-border/50">
                    <AccordionTrigger className="text-sm hover:no-underline">
                      Limitations
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1.5">
                        {method.cons.map((con, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* State Policies */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          State Policies &amp; Bans
        </h2>
        <p className="text-muted-foreground mb-8">
          All 50 US states and their current polystyrene policy status. Click on
          banned states to learn why they were banned and what efforts are
          underway to change the legislation.
        </p>
        <StatePolicyTabs policies={policyData} />
      </section>

      {/* 2025 Innovations */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          2025 Innovations
        </h2>
        <p className="text-muted-foreground mb-8">
          Emerging technologies and breakthroughs in polystyrene recycling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-primary mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Food-Grade Recycled PS
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                New purification processes are enabling food-contact-grade
                recycled polystyrene for the first time, opening up closed-loop
                recycling for food packaging. FDA approval is anticipated for
                multiple depolymerization-based processes.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-primary mb-3">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Styrenyx Developments
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Companies like Styrenyx are scaling catalytic depolymerization
                technology that converts post-consumer polystyrene back to
                virgin-quality styrene monomer at commercial scale, with
                multiple plants under construction.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-primary mb-3">
                <Beaker className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Catalytic Upcycling
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Researchers have developed catalytic processes that convert waste
                polystyrene into higher-value chemicals and materials, including
                surfactants, adhesives, and pharmaceutical intermediates,
                potentially making recycling more economically attractive.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
