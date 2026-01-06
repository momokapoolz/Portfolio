"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import type { Education } from "@/data/profile"

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent font-mono">04.</span> Education
        </h2>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-accent font-semibold tracking-wide">
                      {edu.institution}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {edu.year}
                    </span>
                  </div>
                  {edu.description && <p className="text-muted-foreground leading-relaxed">{edu.description}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
