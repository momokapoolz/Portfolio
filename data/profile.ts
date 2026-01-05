// CUSTOMIZATION: Edit this file to update your portfolio content
// All data here is dynamically rendered across the website components

export interface Skill {
  name: string
  icon?: string // Optional: can add icon names later
}

export interface Experience {
  title: string
  company: string
  duration: string
  description?: string
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
  techStack: string[]
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

// CUSTOMIZATION: Update this data with your actual information
export const profileData: ProfileData = {
  name: "Your Name",
  title: "Backend Engineer",
  tagline: "Building scalable systems and robust APIs that power modern applications",
  cvPath: "/cv.pdf", // Place your CV in the public folder

  skills: {
    backend: [{ name: "Ruby on Rails" }, { name: "Golang" }, { name: "Java" }, { name: "NestJS" }],
    frontend: [{ name: "React.js" }, { name: "Bootstrap" }],
    database: [{ name: "MySQL" }, { name: "PostgreSQL" }],
    tools: [{ name: "Docker" }, { name: "Git" }],
  },

  experience: [
    {
      title: "Backend Engineer",
      company: "Luvina",
      duration: "7 months",
      description:
        "Developed and maintained scalable backend systems, implemented RESTful APIs, and optimized database queries for improved performance.",
    },
    {
      title: "Backend Intern",
      company: "Luvina",
      duration: "2 months",
      description: "Assisted in building backend services, wrote unit tests, and contributed to code reviews.",
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Your University",
      year: "2020 - 2024",
      description: "Focused on software engineering, algorithms, and distributed systems.",
    },
  ],

  projects: [
    {
      name: "E-Commerce API",
      description:
        "Built a comprehensive REST API for an e-commerce platform with payment integration, inventory management, and order processing.",
      techStack: ["Ruby on Rails", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      name: "Real-time Chat System",
      description:
        "Developed a scalable real-time messaging system using WebSockets, supporting group chats and file sharing.",
      techStack: ["Golang", "PostgreSQL", "WebSocket", "Docker"],
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      name: "Microservices Dashboard",
      description:
        "Created a monitoring dashboard for microservices architecture with health checks and performance metrics.",
      techStack: ["NestJS", "MySQL", "React.js", "Docker"],
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
