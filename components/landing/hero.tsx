"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Play, ArrowRight, BookOpen, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">Trusted by 50,000+ Students</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Your Path to{" "}
              <span className="text-gradient">Academic Excellence</span>{" "}
              Starts Here
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Join India&apos;s most trusted platform for School, School, School & more. 
              Learn from top educators, practice with adaptive tests, and achieve your dreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link href="/sign-up">
                <Button size="lg" className="w-full gap-2 sm:w-auto">
                  Start Learning Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">100+</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Courses</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <Users className="h-5 w-5 text-secondary" />
                  <span className="text-2xl font-bold text-foreground">50K+</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Students</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <Trophy className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-foreground">95%</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 rounded-2xl border border-border bg-card p-6 shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Hindi - School Advanced</h3>
                    <p className="text-sm text-muted-foreground">Live class starting soon</p>
                  </div>
                </div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg">
                    <Play className="h-8 w-8 ml-1" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-card bg-muted"
                      />
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-primary text-xs font-medium text-primary-foreground">
                      +99
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">1.2K watching</span>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 -top-4 rounded-xl border border-border bg-card p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-card-foreground">AIR 23 in School</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-card-foreground">Live Doubt Session</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
