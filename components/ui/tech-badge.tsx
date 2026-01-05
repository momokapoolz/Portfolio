import { cn } from "@/lib/utils"

interface TechBadgeProps {
  tech: string
  variant?: "default" | "blue" | "lightBlue" | "purple" | "green" | "orange" | "red" | "yellow" | "pink" | "white"
  size?: "sm" | "md" | "lg"
  className?: string
}

const variantStyles = {
  default: "bg-accent/10 text-accent",
  blue: "bg-blue-300/20 text-blue-400",
  lightBlue: "bg-sky-300/20 text-sky-400",
  purple: "bg-purple-300/20 text-purple-400",
  green: "bg-green-300/20 text-green-400",
  orange: "bg-orange-300/20 text-orange-400",
  red: "bg-red-300/20 text-red-400",
  yellow: "bg-yellow-300/20 text-yellow-400",
  pink: "bg-pink-300/20 text-pink-400",
  white: "bg-white/10 text-white",
}

const sizeStyles = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-2 py-1",
  lg: "text-sm px-3 py-1.5",
}

export function TechBadge({ tech, variant = "default", size = "md", className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "font-mono rounded inline-block transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {tech}
    </span>
  )
}

