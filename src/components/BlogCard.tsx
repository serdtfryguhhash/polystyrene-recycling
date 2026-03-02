import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/data/polystyrene-data";

interface BlogCardProps {
  post: BlogPost;
}

const categoryGradients: Record<string, string> = {
  guide: "from-emerald-600/80 to-teal-600/80",
  myths: "from-purple-600/80 to-indigo-600/80",
  diy: "from-orange-600/80 to-amber-600/80",
  policy: "from-blue-600/80 to-cyan-600/80",
  technology: "from-cyan-600/80 to-blue-600/80",
  innovation: "from-green-600/80 to-emerald-600/80",
  environment: "from-teal-600/80 to-green-600/80",
  economics: "from-emerald-600/80 to-cyan-600/80",
};

export default function BlogCard({ post }: BlogCardProps) {
  const gradient = categoryGradients[post.category] || "from-emerald-600/80 to-teal-600/80";

  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <Card className="bg-card border-border/50 hover:border-primary/30 hover:scale-[1.01] transition-all duration-300 h-full flex flex-col overflow-hidden">
        {/* Image Banner */}
        {post.image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              width={1200}
              height={600}
              unoptimized
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60`} />
          </div>
        )}

        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge
              variant="outline"
              className="capitalize text-[11px] bg-primary/10 text-primary border-primary/30"
            >
              {post.category}
            </Badge>
            {post.featured && (
              <Badge
                variant="outline"
                className="text-[11px] bg-amber-500/15 text-amber-400 border-amber-500/30"
              >
                Featured
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
