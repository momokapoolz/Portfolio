"use client"

import { Card } from "@/components/ui/card"
import { TechBadge } from "@/components/ui/tech-badge"
import { Briefcase } from "lucide-react"
import Image from "next/image"
import type { Experience } from "@/data/profile"
import { motion } from "framer-motion"
import { useState } from "react"

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-muted/20" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">03.</span> Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-accent/30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-8 top-2 w-4 h-4 -translate-x-[7px] rounded-full bg-accent ring-4 ring-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  animate={{
                    scale: hoveredIndex === index ? 1.3 : 1,
                    boxShadow: hoveredIndex === index ? "0 0 20px rgba(var(--accent), 0.6)" : "none"
                  }}
                />

                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 border-2 hover:border-accent/50">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
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
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3
                          className="text-xl font-semibold text-foreground mb-1"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <div className="flex flex-wrap gap-2 mb-3 text-muted-foreground">
                          <span className="font-mono text-sm">{exp.company}</span>
                          <span className="text-accent">•</span>
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        {exp.description && <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">{exp.description}</p>}
                        {exp.techStack && exp.techStack.length > 0 && (
                          <motion.div
                            className="flex flex-wrap gap-2 mt-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                          >
                            {exp.techStack.map((tech, techIndex) => (
                              <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + techIndex * 0.05 }}
                                whileHover={{ scale: 1.15, y: -2 }}
                              >
                                <TechBadge tech={tech.name} variant={tech.variant || "default"} size="sm" />
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
