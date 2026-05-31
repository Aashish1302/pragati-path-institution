"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "Simply create an account, browse our courses, and click 'Enroll' on your chosen course. You can pay securely using various payment methods including UPI, cards, and net banking.",
  },
  {
    question: "Are the classes live or recorded?",
    answer: "We offer both! Live classes allow real-time interaction with educators, while recorded sessions are available for revision. All live classes are automatically recorded and added to your course library.",
  },
  {
    question: "Can I access courses on mobile?",
    answer: "Absolutely! Our platform is fully responsive and works seamlessly on all devices. You can also download lessons for offline viewing in our mobile app.",
  },
  {
    question: "How does the doubt resolution work?",
    answer: "Post your doubts in the dedicated forum for each course. Our educators and expert mentors respond within 24 hours. You can also join live doubt-clearing sessions scheduled regularly.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with your course, you can request a full refund within the first 7 days of enrollment.",
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes! Each course includes comprehensive study materials, PDFs, practice sheets, and formula guides. All materials are downloadable for offline study.",
  },
  {
    question: "How are the test series structured?",
    answer: "Our test series mimics actual exam patterns with chapter-wise tests, mock tests, and previous year papers. You get detailed analytics and performance reports after each test.",
  },
  {
    question: "Can I switch between courses?",
    answer: "Yes, you can upgrade or change courses. Contact our support team, and we'll help you transfer to a different course with adjusted pricing.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="mr-1 h-3 w-3" />
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-4"
              >
                <AccordionTrigger className="text-left font-medium text-card-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
