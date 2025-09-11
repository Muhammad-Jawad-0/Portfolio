import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | John Doe - Frontend Developer",
  description: "Insights, tutorials, and thoughts on web development, design, and technology.",
  openGraph: {
    title: "Blog | John Doe - Frontend Developer",
    description: "Insights, tutorials, and thoughts on web development, design, and technology.",
    type: "website",
  },
}

export default function BlogPage() {
  const allPosts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Blog Articles
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Insights, tutorials, and thoughts on web development, design, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={post.featured ? "default" : "secondary"}>{post.category}</Badge>
                    {post.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-pretty">{post.description}</CardDescription>
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
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
