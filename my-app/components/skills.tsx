import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL", "MATLAB", "R", "HTML/CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django", "Spring Boot", "React", "Angular", "Node.js", "Express", "Flask", "PyTorch"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Docker", "Kubernetes", "Linux", "Heroku", "REST APIs"],
    },
    {
      title: "Certifications",
      skills: ["AWS Cloud Practitioner", "Dean's List"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-4 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
