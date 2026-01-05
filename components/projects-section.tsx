"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/data/profile"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-20 px-4 bg-muted/20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent font-mono">05.</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{project.name}</h3>

              <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-accent/10 text-accent rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-accent/30 hover:bg-accent/10 bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-accent/30 hover:bg-accent/10 bg-transparent"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
