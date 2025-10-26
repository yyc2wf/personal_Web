import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "Stock Market Predictor",
      description:
        "Developed a predictive model to forecast stock prices using historical market data via Yfinance and OpenAI APIs. Automated extraction of historical/real-time stock prices and news articles using Playwright web scraping. Achieved ~65% accuracy rate through mock trades in Webull Paper Trading.",
      technologies: ["Python", "OpenAI API", "Playwright", "Yfinance", "Machine Learning"],
      image: "/stock-market-chart.png",
    },
    {
      title: "TransLoc Remodel",
      description:
        "Redesigned campus bus navigation application's features and UI using React.js to improve functionality and user experience. Integrated TransLoc API handling 1,000+ data points per hour using Django. Built a 'Best Route' feature with Google Maps API for efficient, real-time route planning.",
      technologies: ["React.js", "Django", "Google Maps API", "TransLoc API"],
      image: "/bus-tracking-app.png",
    },
    {
      title: "Cell Analysis Automation - Smith Lab",
      description:
        "Deployed an application for automating cell analysis of microscope videos containing 50+ microfluidic chips. Engineered a full data pipeline using MATLAB for image processing and R for post-processing. Reduced 8+ hours of manual analysis to under a minute, contributing to a PhD defense manuscript.",
      technologies: ["MATLAB", "R", "Image Processing", "Data Pipeline"],
      image: "/microscope-analysis.png",
    },
    {
      title: "FedRAMP Documentation Automation",
      description:
        "Automated FedRAMP government security documentation at Animo Government Consulting, reducing file preparation time by over 40%. Implemented document formatting and validation with TypeScript & XML to ensure FedRAMP-approved deliverables. Wrote comprehensive unit tests for XSLT transforms.",
      technologies: ["TypeScript", "XML", "XSLT", "Automation"],
      image: "/document-automation.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects spanning full-stack development, machine learning, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
