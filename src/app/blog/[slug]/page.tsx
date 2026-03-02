import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/polystyrene-data";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Post Not Found | PolyRecycle" };
  }
  return {
    title: `${post.title} | PolyRecycle Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Hero Image */}
      {post.image && (
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            width={1200}
            height={600}
            unoptimized
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      )}

      {/* Article header */}
      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="outline"
              className="capitalize bg-primary/10 text-primary border-primary/30"
            >
              {post.category}
            </Badge>
            {post.featured && (
              <Badge
                variant="outline"
                className="bg-amber-500/15 text-amber-400 border-amber-500/30"
              >
                Featured
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-invert prose-emerald max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted-foreground leading-relaxed mb-6 text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Post Navigation */}
      <nav className="mt-16 pt-8 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-4">
        {previousPost ? (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Previous
            </div>
            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {previousPost.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all text-right"
          >
            <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
              Next
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {nextPost.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
