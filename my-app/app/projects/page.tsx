import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Stock Market Predictor",
      description:
        "Developed a machine learning model to predict stock market trends using historical data and technical indicators. Implemented data preprocessing, feature engineering, and model evaluation techniques.",
      technologies: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
      highlights: [
        "Achieved 75% accuracy in predicting short-term price movements",
        "Implemented multiple ML algorithms including Random Forest and LSTM",
        "Created interactive visualizations for data analysis",
      ],
    },
    {
      title: "TransLoc Remodel",
      description:
        "Redesigned and rebuilt the UVA bus tracking application with improved UI/UX and real-time tracking capabilities. Enhanced user experience with modern design patterns and responsive layouts.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      highlights: [
        "Improved app performance by 40% through code optimization",
        "Implemented real-time bus location updates",
        "Created intuitive interface for route planning",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects and personal work
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
