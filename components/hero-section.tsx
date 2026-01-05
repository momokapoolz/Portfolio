"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface HeroSectionProps {
  name: string
  title: string
  tagline: string
  cvPath: string
}

export function HeroSection({ name, title, tagline, cvPath }: HeroSectionProps) {
  const handleDownloadCV = () => {
    // Open CV in new tab for download
    window.open(cvPath, "_blank")
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle grid background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-4 inline-block">
          <span className="text-accent text-sm font-mono tracking-wider uppercase">Hello, I'm</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">{name}</h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-mono">
          <span className="text-accent">&lt;</span>
          {title}
          <span className="text-accent">/&gt;</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          {tagline}
        </p>

        <Button
          onClick={handleDownloadCV}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-background font-semibold transition-all hover:scale-105"
        >
          <Download className="mr-2 h-5 w-5" />
          Download CV
        </Button>
      </div>
    </section>
  )
}
