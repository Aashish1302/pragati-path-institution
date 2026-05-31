"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, Clock, Users, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const courses = [
  {
    id: 1,
    title: "Hindi",
    category: "School",
    level: "Advanced",
    image: "/placeholder.svg",
    rating: 4.9,
    students: 12500,
    lessons: 250,
    duration: "180 hrs",
    price: 14999,
    originalPrice: 24999,
    teacher: "Rohit Singh",
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "English",
    category: "School",
    level: "Intermediate",
    image: "/placeholder.svg",
    rating: 4.8,
    students: 18000,
    lessons: 200,
    duration: "150 hrs",
    price: 12999,
    originalPrice: 19999,
    teacher: "Aashish Kumar",
    badge: "Popular",
  },
  {
    id: 3,
    title: "Mathematics",
    category: "School",
    level: "Beginner",
    image: "/placeholder.svg",
    rating: 4.7,
    students: 8500,
    lessons: 180,
    duration: "200 hrs",
    price: 19999,
    originalPrice: 34999,
    teacher: "Rohit Singh",
    badge: "New",
  },
  {
    id: 4,
    title: "Science",
    category: "School",
    level: "Intermediate",
    image: "/placeholder.svg",
    rating: 4.9,
    students: 15000,
    lessons: 120,
    duration: "100 hrs",
    price: 7999,
    originalPrice: 12999,
    teacher: "Aashish Kumar",
    badge: null,
  },
  {
    id: 5,
    title: "Social Science",
    category: "School",
    level: "Advanced",
    image: "/placeholder.svg",
    rating: 4.8,
    students: 11000,
    lessons: 150,
    duration: "130 hrs",
    price: 9999,
    originalPrice: 15999,
    teacher: "Dr. Vikram Singh",
    badge: null,
  },
  {
    id: 6,
    title: "Social Science",
    category: "Board",
    level: "Intermediate",
    image: "/placeholder.svg",
    rating: 4.6,
    students: 22000,
    lessons: 80,
    duration: "60 hrs",
    price: 4999,
    originalPrice: 7999,
    teacher: "Dr. Neha Gupta",
    badge: "Top Rated",
  },
]

const badgeColors: Record<string, string> = {
  Bestseller: "bg-accent text-accent-foreground",
  Popular: "bg-secondary text-secondary-foreground",
  New: "bg-primary text-primary-foreground",
  "Top Rated": "bg-green-500 text-white",
}

export function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4">
            <BookOpen className="mr-1 h-3 w-3" />
            Our Courses
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Our <span className="text-gradient">Top Courses</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Comprehensive courses designed by India&apos;s best educators to help you crack any competitive exam
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    {course.badge && (
                      <Badge className={`absolute left-3 top-3 ${badgeColors[course.badge] || ""}`}>
                        {course.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-primary/30" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {course.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <h3 className="mb-2 line-clamp-2 font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">{course.teacher}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium text-foreground">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{(course.students / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-foreground">
                      {"\u20B9"}{course.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {"\u20B9"}{course.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Enroll
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/courses">
            <Button size="lg" variant="outline" className="gap-2">
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
