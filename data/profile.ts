export interface Skill {
  name: string
  icon?: string
}

export type TechVariant = "default" | "blue" | "lightBlue" | "purple" | "green" | "orange" | "red" | "yellow" | "pink" | "white"

export interface TechStackItem {
  name: string
  variant?: TechVariant
}

export interface Experience {
  title: string
  company: string
  duration: string
  description?: string
  logoUrl?: string
  techStack?: TechStackItem[]
}

export interface Education {
  degree: string
  institution: string
  year: string
  description?: string
}

export interface Project {
  name: string
  description: string
  techStack: TechStackItem[]
  githubUrl?: string
  liveUrl?: string
}

export interface Interest {
  name: string
  icon?: string
}

export interface ProfileData {
  name: string
  title: string
  tagline: string
  about: string
  cvPath: string // Path to CV PDF in public folder
  email: string

  skills: {
    backend: Skill[]
    frontend: Skill[]
    database: Skill[]
    tools: Skill[]
  }

  experience: Experience[]
  education: Education[]
  projects: Project[]
  interests: Interest[]
}

export const profileData: ProfileData = {
  name: "Le Gia Bao | Momoka",
  title: "Backend Engineer",
  tagline: "Building scalable systems and robust APIs that power modern applications",
  about: "I’m a Backend Engineer focused on building scalable, efficient, and maintainable systems. I enjoy solving complex problems and developing robust APIs. Always learning and exploring new technologies.",
  cvPath: "/cv.pdf",
  email: "lgbao2004@gmail.com",
  skills: {
    backend: [
      {
        name: "Ruby on Rails"
      },
      {
        name: "Golang"
      },
      {
        name: "Java"
      },
      {
        name: "Spring Boot"
      },
      {
        name: "NodeJS"
      },
      {
        name: "Python"
      },
      {
        name: "NestJS"
      },
    ],
    frontend: [
      {
        name: "React.js"
      },
      {
        name: "Next.js"
      },
      {
        name: "Bootstrap"
      },
      {
        name: "HTML"
      },
      {
        name: "CSS"
      },
      {
        name: "JavaScript"
      },
      {
        name: "TypeScript"
      },
    ],
    database: [
      {
        name: "MySQL"
      },
      {
        name: "PostgreSQL"
      },
      {
        name: "MongoDB"
      },
      {
        name: "Redis"
      },
      {
        name: "SQLite"
      },
    ],
    tools: [
      {
        name: "AWS"
      },
      {
        name: "Docker"
      },
      {
        name: "Git"
      },
      {
        name: "Linux"
      },
    ],
  },

  experience: [
    {
      title: "Backend Engineer",
      company: "Luvina JSC",
      duration: "7 months",
      description: "Assisted in building backend services, wrote unit tests, and contributed to code reviews.",
      logoUrl: "/logos/luvina-logo.png",
      techStack: [
        { name: "Ruby On Rails", variant: "red" },
        { name: "NodeJS", variant: "green" },
        { name: "NestJS", variant: "pink" },
        { name: "React.js", variant: "lightBlue" },
        { name: "PostgreSQL", variant: "blue" },
        { name: "Docker", variant: "lightBlue" },
        { name: "Git", variant: "orange" },
      ],
    },
    {
      title: "Backend Intern",
      company: "Luvina JSC",
      duration: "2 months",
      description:
        `• 2-month internship as a Software Developer on a POS system project

         • Wrote unit tests using Java and JUnit for core system functionalities

         • Achieved over 90% branch coverage (C1)

         • Developed REST APIs using Springboot
         
         • Read and analyzed technical documentation and system design specifications to understand requirements and logic`,
      logoUrl: "/logos/luvina-logo.png",
      techStack: [
        { name: "Java", variant: "red" },
        { name: "Springboot", variant: "green" },
        { name: "JUnit", variant: "yellow" },
        { name: "MySQL", variant: "blue" },
        { name: "Gitlab", variant: "orange" },
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Greenwich FPT- Vietnam | Bachelor's Degree of Computing",
      year: "2022 - 2026",
      description: "Focused on software engineering, algorithms, and distributed systems.",
    },
  ],

  projects: [
    {
      name: "E-Commerce API",
      description:
        "Built a comprehensive REST API for an e-commerce platform with payment integration, inventory management, and order processing.",
      techStack: [
        { name: "NestJS", variant: "pink" },
        { name: "Next.js", variant: "white" },
        { name: "PostgreSQL", variant: "blue" },
        { name: "PrismaORM", variant: "green" },
        { name: "Redis", variant: "red" },
        { name: "Docker", variant: "blue" },
      ],
      githubUrl: "https://github.com/momokapoolz/eCommerce-Backend-Amazon-based.git",
    },
    {
      name: "Calories Tracker API",
      description:
        "Developed a RESTful API for a calories tracking application that allows users to log meals, track nutrition, and set fitness goals.",
      techStack: [
        { name: "Golang", variant: "blue" },
        { name: "Gin", variant: "lightBlue" },
        { name: "PostgreSQL", variant: "blue" },
        { name: "GORM", variant: "lightBlue" },
        { name: "Redis", variant: "red" },
        { name: "Docker", variant: "blue" },
        { name: "JWT", variant: "yellow" }
      ],
      githubUrl: "https://github.com/momokapoolz/Calories-app-like-cronometer.git",
    },
    {
      name: "Calories Tracker Web App",
      description:
        "Created a responsive web application for tracking daily calorie intake, meal planning, and nutritional analysis integrated with Calories Tracker API.",
      techStack: [
        { name: "Next.js", variant: "white" },
        { name: "TypeScript", variant: "blue" },
        { name: "React.js", variant: "lightBlue" },
        { name: "Tailwind CSS", variant: "blue" },
      ],
      githubUrl: "https://github.com/momokapoolz/Calories-app-Frontend.git",
    },
  ],

  interests: [
    { name: "Open Source" },
    { name: "System Design" },
    { name: "Reading Tech Blogs" },
    { name: "Gym" },
    { name: "Martial Arts" },
    { name: "Anime" },
  ],
}
