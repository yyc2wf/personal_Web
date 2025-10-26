import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Actors Pocket Guide",
      location: "Remote",
      period: "May 2025 - August 2025",
      description: [
        "Developed and refined core features using TypeScript & Angular, adding 7 new user-facing features",
        "Integrated frontend with Spring Boot REST APIs and SQL database for secure, scalable full-stack functionality",
        "Utilized Docker to containerize the application for consistent development and deployment",
      ],
      technologies: ["TypeScript", "Angular", "Spring Boot", "SQL", "Docker"],
      icon: Briefcase,
    },
    {
      title: "Software Engineering Intern/Co-op",
      company: "Animo Government Consulting Inc.",
      location: "Chantilly, VA",
      period: "Dec 2024 - May 2025",
      description: [
        "Automated FedRAMP government security documentation, reducing file preparation time by over 40%",
        "Implemented document formatting/validation with TypeScript & XML for FedRAMP-approved deliverables",
        "Wrote unit tests for XSLT transforms to verify generated pages match expected output",
      ],
      technologies: ["TypeScript", "XML", "XSLT", "Automation"],
      icon: Briefcase,
    },
    {
      title: "Research Assistant",
      company: "Smith Lab - UVA School of Medicine",
      location: "Charlottesville, VA",
      period: "Aug 2024 - May 2025",
      description: [
        "Deployed application to automate cell analysis of microscope videos with 50+ microfluidic chips",
        "Engineered full data pipeline: MATLAB for image processing, R for post-processing and data summaries",
        "Eliminated 8+ hours of manual analysis, providing results in under a minute",
        "Contributed to PhD candidate's final defense manuscript as coauthor",
      ],
      technologies: ["MATLAB", "R", "Image Processing", "Data Analysis"],
      icon: Briefcase,
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "University of Virginia Engineering School",
      location: "Charlottesville, VA",
      period: "Jan 2024 - May 2024",
      description: [
        "Designed course plan with professor in Python/Machine Learning: scikit-learn, pandas, flask, prediction models",
        "Improved retention rates through tutoring sessions and office hours",
        "Graded 500+ student codes and exams",
      ],
      technologies: ["Python", "scikit-learn", "pandas", "Flask", "Machine Learning"],
      icon: GraduationCap,
    },
  ]

  const leadership = [
    { org: "ColorStack", role: "Fellow", period: "Oct 2025 - Present" },
    { org: "Society of Hispanic Professional Engineers", role: "Fellow", period: "Jan 2024 - Present" },
    { org: "Starr Hill Pathways", role: "Tutor/Mentor", period: "Mar 2024 - Present" },
    { org: "Code for Charlottesville", role: "Website Consultant", period: "Aug 2023 - Oct 2025" },
    { org: "Microsoft Learn", role: "Student Ambassador", period: "Jan 2024 - Apr 2024" },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <exp.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} • {exp.location}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Leadership & Involvement</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadership.map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-1">{item.org}</h4>
                <p className="text-sm text-muted-foreground mb-1">{item.role}</p>
                <p className="text-xs text-muted-foreground">{item.period}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
