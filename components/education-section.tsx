"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import type { Education } from "@/data/profile"
import { motion } from "framer-motion"
import { useState } from "react"

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">04.</span> Education
        </motion.h2>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 border-2 hover:border-accent/50">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-2 bg-accent/10 rounded-lg"
                      animate={{ 
                        rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                        scale: hoveredIndex === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl font-semibold text-foreground mb-1"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.div 
                        className="flex flex-wrap items-center gap-2 mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      >
                        <span className="text-accent font-semibold tracking-wide">
                          {edu.institution}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {edu.year}
                        </span>
                      </motion.div>
                      {edu.description && (
                        <motion.p 
                          className="text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                        >
                          {edu.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
