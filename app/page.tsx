"use client"

import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { InterestsSection } from "@/components/interests-section"
import { Footer } from "@/components/footer"
import { profileData } from "@/data/profile"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection
        name={profileData.name}
        title={profileData.title}
        tagline={profileData.tagline}
        cvPath={profileData.cvPath}
      />

      <SkillsSection skills={profileData.skills} />

      <ExperienceSection experience={profileData.experience} />

      <EducationSection education={profileData.education} />

      <ProjectsSection projects={profileData.projects} />

      <InterestsSection interests={profileData.interests} />

      <Footer name={profileData.name} />
    </main>
  )
}
