"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  level: number
}

interface SkillCardProps {
  title: string
  icon: LucideIcon
  skills: Skill[]
  index: number
}

export function SkillCard({ title, icon: IconComponent, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
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
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + skillIndex * 0.05 + 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between text-sm">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1 + skillIndex * 0.05 + 0.4,
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
  )
}
