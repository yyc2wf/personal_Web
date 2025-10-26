import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Oshil Ghimire</span>
          </h1>

          <div className="flex justify-center py-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <Image src="/images/oshil-profile.jpg" alt="Oshil Ghimire" fill className="object-cover" priority />
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-foreground/90 text-balance font-medium">
            Third-year Computer Science student at the University of Virginia
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Passionate about building innovative software solutions and exploring the intersection of technology and
            creativity
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/experience">View My Experiences</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com/in/oshilghimire" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:oshil.america@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                oshil.america@gmail.com
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-bounce text-center">
          <a href="#about" className="inline-block text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
