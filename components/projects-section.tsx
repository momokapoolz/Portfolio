"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TechBadge } from "@/components/ui/tech-badge"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/data/profile"
import { motion } from "framer-motion"
import { useState } from "react"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-muted/20" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono">05.</span> Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)"
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 flex flex-col h-full border-2 hover:border-accent/50">
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-3"
                    animate={{ 
                      color: hoveredIndex === index ? "rgb(var(--accent))" : "inherit"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.name}
                  </motion.h3>

                  <motion.p 
                    className="text-muted-foreground leading-relaxed mb-4 flex-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + 0.3 + techIndex * 0.05 
                          }}
                          whileHover={{ 
                            scale: 1.2, 
                            y: -3,
                            rotate: [0, -5, 5, 0]
                          }}
                        >
                          <TechBadge tech={tech.name} variant={tech.variant || "default"} size="sm" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    className="flex gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    {project.githubUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-accent/30 hover:bg-accent/10 bg-transparent"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Github className="h-4 w-4 mr-1" />
                            </motion.div>
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.liveUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-accent/30 hover:bg-accent/10 bg-transparent"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <motion.div
                              animate={{ 
                                rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0 
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                            </motion.div>
                            Live
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
