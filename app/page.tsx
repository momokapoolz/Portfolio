"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { profileData } from "@/data/profile"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div id="home">
        <HeroSection
          name={profileData.name}
          title={profileData.title}
          tagline={profileData.tagline}
          cvPath={profileData.cvPath}
        />
      </div>

      <div id="skills">
        <SkillsSection skills={profileData.skills} />
      </div>

      <div id="experience">
        <ExperienceSection experience={profileData.experience} />
      </div>

      <div id="education">
        <EducationSection education={profileData.education} />
      </div>

      <div id="projects">
        <ProjectsSection projects={profileData.projects} />
      </div>

      <div id="interests">
        <InterestsSection interests={profileData.interests} />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer name={profileData.name} />
    </main>
  )
}
