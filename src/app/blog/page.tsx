import { BookOpen } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/polystyrene-data";

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const remainingPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
          <BookOpen className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay informed with the latest articles on polystyrene recycling
          technology, environmental policy, and sustainable practices.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <BlogCard post={featuredPost} />
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {remainingPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
