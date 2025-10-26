import { Card } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a third-year Computer Science major at the University of Virginia with a 3.66 GPA, driven by a passion
              for creating meaningful technology that solves real-world problems. I've had the opportunity to work on
              diverse projects ranging from automating government security documentation to developing cell analysis
              applications for medical research.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My experience spans full-stack development, data analysis, and automation. I've worked with companies like
              Actors Pocket Guide and Animo Government Consulting, where I've contributed to building scalable
              applications and improving operational efficiency by over 40%.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond coding, I'm actively involved in the tech community through organizations like ColorStack and the
              Society of Hispanic Professional Engineers. I also enjoy mentoring students at Starr Hill Pathways and
              contributing to local tech initiatives.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-15 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/uva-rotunda.png)" }}
              />
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg backdrop-blur-sm">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    B.S. in Computer Science
                    <br />
                    University of Virginia
                    <br />
                    GPA: 3.66 | Expected: May 2027
                    <br />
                    <span className="text-sm">Dean's List</span>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Focus Areas</h3>
                  <p className="text-muted-foreground">
                    Full-Stack Development, Software Engineering, Data Structures & Algorithms, Computer Systems,
                    Machine Learning
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interests</h3>
                  <p className="text-muted-foreground">
                    Coffee enthusiast, Chess (1650 ranked), Cooking, Solo backpacking, Basketball, and Fitness
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
