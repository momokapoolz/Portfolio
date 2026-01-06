"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  name: string
  title: string
  tagline: string
  cvPath: string
}

export function HeroSection({ name, title, tagline, cvPath }: HeroSectionProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const handleDownloadCV = () => {
    // Open CV in new tab for download
    window.open(cvPath, "_blank")
  }

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const typingSpeed = 50 // milliseconds per character

    const typingInterval = setInterval(() => {
      if (index < tagline.length) {
        setDisplayedText(tagline.substring(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [tagline])

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

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty min-h-16">
          {displayedText}
          {!isTypingComplete && (
            <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-blink align-middle" />
          )}
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
