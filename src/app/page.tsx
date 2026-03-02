import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import FunFactsCarousel from "@/components/FunFactsCarousel";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import RecyclingMap from "@/components/RecyclingMap";
import { funFacts } from "@/data/polystyrene-data";
import {
  Recycle,
  Coffee,
  Zap,
  Factory,
  Brain,
  BookOpen,
  Info,
  ArrowRight,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const quickLinks = [
  {
    title: "Fun Facts",
    description: "Discover surprising statistics and facts about polystyrene production, waste, and recycling.",
    href: "/fun-facts",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Blog",
    description: "Read the latest articles on polystyrene recycling technology, policy, and innovation.",
    href: "/blog",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "About Polystyrene",
    description: "Learn what polystyrene is, its types, history, and where it is commonly found.",
    href: "/about",
    icon: <Info className="w-6 h-6" />,
  },
  {
    title: "How to Recycle",
    description: "Step-by-step guides, recycling methods, and find drop-off locations near you.",
    href: "/how-to-recycle",
    icon: <Recycle className="w-6 h-6" />,
  },
  {
    title: "Environmental Impact",
    description: "See why polystyrene recycling is better for the environment than banning it.",
    href: "/environmental-impact",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Myths vs Facts",
    description: "Separate truth from fiction with common misconceptions about polystyrene debunked.",
    href: "/myths-vs-facts",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-background to-emerald-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-sm px-4 py-1"
            >
              <Recycle className="w-4 h-4 mr-2" />
              Polystyrene Recycling Education
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Making Polystyrene{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Recycling Accessible
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Polystyrene is 100% recyclable, lighter than paper alternatives, and better
              for the environment when properly recycled. Learn why bans do more harm than good.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/how-to-recycle"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
              >
                Start Recycling <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-emerald-500/50 text-foreground font-medium transition-colors hover:bg-emerald-500/5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            stat="25B"
            label="Cups/Year"
            icon={<Coffee className="w-6 h-6" />}
            description="Styrofoam cups used annually in the US, all of which are recyclable"
          />
          <StatCard
            stat="100%"
            label="Recyclable"
            icon={<Recycle className="w-6 h-6" />}
            description="Polystyrene can be fully recycled through mechanical and chemical processes"
          />
          <StatCard
            stat="88%"
            label="Energy Saved"
            icon={<Zap className="w-6 h-6" />}
            description="Energy saved by recycling polystyrene vs producing new material"
          />
          <StatCard
            stat="50:1"
            label="Compaction"
            icon={<Factory className="w-6 h-6" />}
            description="Polystyrene can be compressed to 1/50th its volume for efficient recycling"
          />
        </div>
      </section>

      {/* Fun Facts Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Did You Know?
          </h2>
          <p className="text-muted-foreground">
            Surprising facts about polystyrene and recycling
          </p>
        </div>
        <FunFactsCarousel facts={funFacts.slice(0, 6)} />
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            See Recycling in Action
          </h2>
          <p className="text-muted-foreground">
            Watch how polystyrene cups are recycled into new products
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed
            videoId="JxO_601oru8"
            title="Chick-fil-A Polystyrene Cup Recycling Process"
          />
        </div>
      </section>

      {/* Recycling Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <RecyclingMap />
      </section>

      {/* Quick Links Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Explore &amp; Learn
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about polystyrene recycling
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group block">
              <Card className="h-full bg-card border-border/50 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-primary/60 group-hover:text-primary transition-colors mb-4">
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-primary mt-4 group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
