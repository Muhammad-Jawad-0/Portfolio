"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface AboutProps {
  profileImageUrl?: string
  resumeUrl?: string
  name?: string
  bio?: string[]
  skills?: string[]
}

const defaultSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Figma",
  "Responsive Design",
  "Performance Optimization",
]

const defaultBio = [
  "With over 5 years of experience in frontend development, I specialize in building scalable, user-friendly web applications. I'm passionate about clean code, modern design principles, and staying up-to-date with the latest web technologies.",
  "When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through technical blog posts and community meetups.",
]

export function About({
  profileImageUrl = "/professional-headshot-of-a-frontend-developer.jpg",
  resumeUrl = "/resume.pdf",
  name = "John Doe - Frontend Developer",
  bio = defaultBio,
  skills = defaultSkills,
}: AboutProps) {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      {/* Profile Image */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-square relative bg-muted">
              <Image
                src={profileImageUrl || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bio and Skills */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="lg:max-w-lg">
          {bio.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg leading-8 text-muted-foreground text-pretty mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Skills */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="group">
              <Link href={resumeUrl} target="_blank">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
