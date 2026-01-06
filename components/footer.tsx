"use client"

interface FooterProps {
  name: string
}

export function Footer({ name }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
