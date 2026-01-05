"use client"

import type { Interest } from "@/data/profile"

interface InterestsSectionProps {
  interests: Interest[]
}

export function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <section className="py-20 px-4" id="interests">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent font-mono">06.</span> Interests
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-mono text-sm hover:bg-accent/20 transition-colors cursor-default"
            >
              {interest.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
