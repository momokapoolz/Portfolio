"use client"

import { Card } from "@/components/ui/card"
import { TechBadge } from "@/components/ui/tech-badge"
import { Briefcase } from "lucide-react"
import Image from "next/image"
import type { Experience } from "@/data/profile"

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="py-20 px-4 bg-muted/20" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent font-mono">03.</span> Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-accent/30" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-4 h-4 -translate-x-[7px] rounded-full bg-accent ring-4 ring-background" />

                <Card className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-3">
                      {exp.logoUrl ? (
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 p-1">
                          <Image
                            src={exp.logoUrl}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Briefcase className="h-5 w-5 text-accent" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3 text-muted-foreground">
                        <span className="font-mono text-sm">{exp.company}</span>
                        <span className="text-accent">•</span>
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      {exp.description && <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>}
                      {exp.techStack && exp.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.techStack.map((tech) => (
                            <TechBadge key={tech.name} tech={tech.name} variant={tech.variant || "default"} size="sm" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
