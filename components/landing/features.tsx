"use client"

import { motion } from "framer-motion"
import {
  Video,
  FileText,
  MessageCircle,
  BarChart3,
  Award,
  Smartphone,
  Clock,
  Shield,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Video,
    title: "Live & Recorded Classes",
    description: "Interactive live sessions with replay access. Learn at your own pace anytime, anywhere.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FileText,
    title: "Comprehensive Test Series",
    description: "Practice with 10,000+ questions. Get detailed analysis and improve your weak areas.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MessageCircle,
    title: "24/7 Doubt Resolution",
    description: "Get your doubts cleared instantly by expert educators through our dedicated forum.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your progress with detailed insights. Know exactly where you stand.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Earn certificates on course completion. Showcase your achievements to the world.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Learning",
    description: "Access courses on any device. Download lessons for offline viewing.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn according to your schedule. Pause, resume, and replay as needed.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Expert Support",
    description: "Dedicated mentors to guide you throughout your preparation journey.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to <span className="text-gradient">Succeed</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete learning ecosystem designed to maximize your potential and help you achieve your goals
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/20"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
