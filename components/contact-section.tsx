"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profileData } from "@/data/profile"

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${profileData.email}`
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I'm always excited to explore new opportunities to collaborate and grow. If you have an idea, I'd be happy to hear from you.
            </p>
          </div>
          <Button
            size="lg"
            onClick={handleEmailClick}
            className="gap-2"
          >
            <Mail className="h-4 w-4" />
            {profileData.email}
          </Button>
        </div>
      </div>
    </section>
  )
}

