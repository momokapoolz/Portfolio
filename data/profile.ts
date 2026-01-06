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
  cvPath: "/cv.pdf",
  email: "lgbao2004@gmail.com",
  skills: {
    backend: [
      {
        name: "Ruby on Rails",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
      },
      {
        name: "Golang",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "NodeJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "NestJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
    ],
    frontend: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    database: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
    ],
    tools: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },

  experience: [
    {
      title: "Backend Engineer",
      company: "Luvina",
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
      company: "Luvina",
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
        { name: "Ruby on Rails", variant: "red" },
        { name: "PostgreSQL", variant: "blue" },
        { name: "Redis", variant: "red" },
        { name: "Docker", variant: "blue" },
      ],
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      name: "Real-time Chat System",
      description:
        "Developed a scalable real-time messaging system using WebSockets, supporting group chats and file sharing.",
      techStack: [
        { name: "Golang", variant: "blue" },
        { name: "PostgreSQL", variant: "blue" },
        { name: "WebSocket", variant: "green" },
        { name: "Docker", variant: "blue" },
      ],
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      name: "Microservices Dashboard",
      description:
        "Created a monitoring dashboard for microservices architecture with health checks and performance metrics.",
      techStack: [
        { name: "NestJS", variant: "red" },
        { name: "MySQL", variant: "blue" },
        { name: "React.js", variant: "blue" },
        { name: "Docker", variant: "blue" },
      ],
      githubUrl: "https://github.com/yourusername/project",
    },
  ],

  interests: [
    { name: "Open Source" },
    { name: "System Design" },
    { name: "DevOps" },
    { name: "Reading Tech Blogs" },
    { name: "Hiking" },
    { name: "Photography" },
  ],
}
