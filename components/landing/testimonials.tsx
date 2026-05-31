"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    exam: "School Advanced 2024",
    rank: "AIR 23",
    content: "Pragati Path transformed my preparation completely. The structured approach and expert guidance helped me achieve what I once thought was impossible. Forever grateful!",
    rating: 5,
    image: null,
  },
  {
    id: 2,
    name: "Priya Patel",
    exam: "School 2024",
    rank: "AIR 156",
    content: "The biology lectures are exceptional! Dr. Sharma&apos;s teaching style made complex concepts so easy to understand. The test series was exactly like the real exam.",
    rating: 5,
    image: null,
  },
  {
    id: 3,
    name: "Amit Verma",
    exam: "Crash Course 2023",
    rank: "AIR 45",
    content: "After failing twice, I joined Pragati Path. The personalized mentorship and comprehensive study material made all the difference. Cleared with an excellent rank!",
    rating: 5,
    image: null,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    exam: "School Mains 2024",
    rank: "99.8 Percentile",
    content: "The math problem-solving sessions are incredible. Every concept is explained with multiple approaches. Best decision I made for my School preparation.",
    rating: 5,
    image: null,
  },
  {
    id: 5,
    name: "Vikram Singh",
    exam: "School 2024",
    rank: "AIR 89",
    content: "The doubt resolution feature is a lifesaver! Got all my queries answered within hours. The educators are really dedicated to student success.",
    rating: 5,
    image: null,
  },
  {
    id: 6,
    name: "Anjali Reddy",
    exam: "School Advanced 2024",
    rank: "AIR 78",
    content: "Coming from a small town, I had limited access to quality education. Pragati Path bridged that gap completely. The quality rivals any coaching in Kota or Delhi.",
    rating: 5,
    image: null,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Students <span className="text-gradient">Inspire Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Hear from students who transformed their dreams into reality with Pragati Path
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">{testimonial.exam}</span>
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {testimonial.rank}
                        </Badge>
                      </div>
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
