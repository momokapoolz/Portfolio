"use client"

import { Card } from "@/components/ui/card"
import type { ProfileData } from "@/data/profile"

interface SkillsSectionProps {
  skills: ProfileData["skills"]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const skillCategories = [
    { title: "Backend", items: skills.backend, color: "border-l-accent" },
    { title: "Frontend", items: skills.frontend, color: "border-l-chart-2" },
    { title: "Database", items: skills.database, color: "border-l-chart-3" },
    { title: "Tools", items: skills.tools, color: "border-l-chart-4" },
  ]

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent font-mono">02.</span> Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className={`p-6 bg-card/50 backdrop-blur-sm border-l-4 ${category.color} hover:bg-card/80 transition-all duration-300 hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-muted-foreground hover:text-accent transition-colors cursor-default font-mono text-sm"
                  >
                    • {skill.name}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
