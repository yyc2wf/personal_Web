import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Users, Heart, Code, Award } from "lucide-react"

export default function LeadershipPage() {
  const leadership = [
    {
      org: "ColorStack",
      role: "Fellow",
      period: "Oct 2025 - Present",
      description:
        "Member of a community of Black and Latinx computer science students, participating in professional development workshops and networking events.",
      icon: Users,
    },
    {
      org: "Society of Hispanic Professional Engineers",
      role: "Fellow",
      period: "Jan 2024 - Present",
      description:
        "Active member promoting STEM education and professional development within the Hispanic community, attending conferences and mentorship programs.",
      icon: Award,
    },
    {
      org: "Starr Hill Pathways",
      role: "Tutor/Mentor",
      period: "Mar 2024 - Present",
      description:
        "Volunteer tutor providing academic support and mentorship to local students, helping them achieve their educational goals.",
      icon: Heart,
    },
    {
      org: "Code for Charlottesville",
      role: "Website Consultant",
      period: "Aug 2023 - Oct 2025",
      description:
        "Contributed to civic tech projects, providing web development expertise to improve local community services and digital infrastructure.",
      icon: Code,
    },
    {
      org: "Microsoft Learn",
      role: "Student Ambassador",
      period: "Jan 2024 - Apr 2024",
      description:
        "Represented Microsoft on campus, organizing tech workshops and events to help students learn about Microsoft technologies and cloud computing.",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Leadership & Involvement</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My commitment to community service, mentorship, and professional development
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{item.org}</h3>
                    <p className="text-sm text-primary mb-1">{item.role}</p>
                    <p className="text-xs text-muted-foreground mb-3">{item.period}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
