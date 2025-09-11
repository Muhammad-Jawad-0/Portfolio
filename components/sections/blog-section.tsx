import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const recentPosts = [
  {
    id: "modern-react-patterns",
    title: "Modern React Patterns for 2024",
    description: "Exploring the latest React patterns and best practices that every developer should know in 2024.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    featured: true,
  },
  {
    id: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization Techniques",
    description:
      "A comprehensive guide to optimizing your Next.js applications for better performance and user experience.",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Next.js",
    featured: false,
  },
  {
    id: "typescript-advanced-types",
    title: "Advanced TypeScript Types You Should Know",
    description: "Deep dive into advanced TypeScript features that can make your code more robust and maintainable.",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "TypeScript",
    featured: false,
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Blog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Latest Articles
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Sharing insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={post.featured ? "default" : "secondary"}>{post.category}</Badge>
                  {post.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-pretty line-clamp-3">{post.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Button variant="ghost" size="sm" asChild className="group/button p-0 h-auto">
                  <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
