"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 gradient-primary opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Start Your Journey to Success Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Join 50,000+ students who are already learning with India&apos;s top educators. 
            Your dream rank is just a click away.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/sign-up">
              <Button size="lg" variant="secondary" className="w-full gap-2 sm:w-auto">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#courses">
              <Button size="lg" variant="outline" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
                Explore Courses
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-white/60">
            No credit card required. Start learning immediately.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
