import Link from "next/link";
import { Recycle, Heart } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Fun Facts", href: "/fun-facts" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "How to Recycle", href: "/how-to-recycle" },
  { name: "Impact", href: "/environmental-impact" },
  { name: "Myths vs Facts", href: "/myths-vs-facts" },
];

const quickFacts = [
  "Polystyrene takes 500+ years to decompose in landfills.",
  "Less than 5% of polystyrene waste is currently recycled in the US.",
  "EPS (Styrofoam) is 95% air by volume, making it lightweight but bulky.",
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              <Recycle className="w-6 h-6" />
              <span className="text-lg font-bold tracking-tight">
                PolyRecycle
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An educational resource dedicated to raising awareness about
              polystyrene recycling, its environmental impact, and practical
              solutions for a more sustainable future.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Facts Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Facts
            </h3>
            <ul className="space-y-3">
              {quickFacts.map((fact, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                >
                  <span className="text-primary mt-0.5 shrink-0">
                    &bull;
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 PolyRecycle. Educational resource about polystyrene
            recycling.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with{" "}
            <Heart className="w-3 h-3 text-primary fill-primary" /> and{" "}
            <Recycle className="w-3 h-3 text-primary" /> for a cleaner planet
          </p>
        </div>
      </div>
    </footer>
  );
}
