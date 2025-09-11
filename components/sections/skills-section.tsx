"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    title: "Styling & Design",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: 92 },
      { name: "Sass/SCSS", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 65 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "stripe", level: 85 },
      { name: "Cloudinary", level: 90 },
    ],
  },
];

const additionalSkills = [
  "Firebase",
  "Vercel/Netlify",
  "Nodemailer (emails)",
  "JWT Authentication",
  "Problem Solving",
  "Time Management",
  "ShadCN/UI",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Skills & Expertise
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Technologies I work with
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            A comprehensive overview of my technical skills and proficiency
            levels across different areas of web development.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="h-5 w-5 text-primary" />
                      </motion.div>
                      <CardTitle className="text-lg">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{
                            duration: 0.8,
                            delay:
                              categoryIndex * 0.1 + skillIndex * 0.05 + 0.4,
                          }}
                          viewport={{ once: true }}
                        >
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Additional Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="outline"
                  className="text-sm py-1 px-3 cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
