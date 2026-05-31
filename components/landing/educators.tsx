"use client"

import { motion } from "framer-motion"
import { Star, Users, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const educators = [
  {
    id: 1,
    name: "Rohit Singh",
    subject: "Hindi",
    experience: "15+ years",
    students: "50K+",
    rating: 4.9,
    specialization: "Crash Course",
    achievements: ["IIT Bombay Alumni", "Author of 5 Books"],
    color: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    name: "Aashish Kumar",
    subject: "English",
    experience: "12+ years",
    students: "45K+",
    rating: 4.8,
    specialization: "Full Syllabus in One Shot",
    achievements: ["AIIMS Doctor", "School Topper Mentor"],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    id: 3,
    name: "Rohit Singh",
    subject: "Social Science",
    experience: "18+ years",
    students: "35K+",
    rating: 4.9,
    specialization: "Crash Course",
    achievements: ["IAS Officer (Retd.)", "100+ IAS Selections"],
    color: "from-accent/20 to-accent/5",
  },
  {
    id: 4,
    name: "Aashish Kumar",
    subject: "Mathematics",
    experience: "14+ years",
    students: "60K+",
    rating: 4.9,
    specialization: "Full Syllabus in One Shot",
    achievements: ["IMO Gold Medalist", "MIT Research Fellow"],
    color: "from-primary/20 to-primary/5",
  },
]

export function Educators() {
  return (
    <section id="educators" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4">
            <Award className="mr-1 h-3 w-3" />
            Our Educators
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Learn from <span className="text-gradient">India&apos;s Best</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our educators are industry leaders with proven track records of producing top rankers
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {educators.map((educator, index) => (
            <motion.div
              key={educator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className={`h-32 bg-gradient-to-br ${educator.color}`} />
                <CardContent className="relative px-4 pb-4">
                  <Avatar className="absolute -top-10 left-4 h-20 w-20 border-4 border-card shadow-lg">
                    <AvatarFallback className="bg-primary text-2xl font-bold text-primary-foreground">
                      {educator.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="pt-12">
                    <h3 className="font-semibold text-card-foreground">{educator.name}</h3>
                    <p className="text-sm text-primary font-medium">{educator.subject}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{educator.specialization}</p>
                    
                    <div className="mt-4 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-medium">{educator.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{educator.students}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-1">
                      {educator.achievements.map((achievement) => (
                        <Badge key={achievement} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
