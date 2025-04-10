"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Hero from "@/components/hero"
import ProblemStatement from "@/components/problem-statement"
import Servicos from "@/components/servicos"
import Solucoes from "@/components/solucoes"
import AnimatedTestimonials from "@/components/animated-testimonials"
import Contato from "@/components/contato"
import Faq from "@/components/faq"
import JsonLd from "@/components/json-ld"
import StatsSection from "@/components/stats-section"
import VideoSection from "@/components/video-section"
import CreditCalculator from "@/components/credit-calculator"
import ChatWidget from "@/components/chat-widget"
import PollWidget from "@/components/poll-widget"
import AnimatedSection from "@/components/animated-section"

export default function LandingPage() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    })
  }, [controls])

  return (
    <motion.main className="min-h-screen" initial={{ opacity: 0, y: 20 }} animate={controls}>
      <JsonLd />
      <Hero />
      <AnimatedSection>
        <ProblemStatement />
      </AnimatedSection>
      <AnimatedSection>
        <Servicos />
      </AnimatedSection>
      <StatsSection />
      <AnimatedSection>
        <Solucoes />
      </AnimatedSection>
      {/* <VideoSection /> */}
      {/* <AnimatedSection>
        <CreditCalculator />
      </AnimatedSection> */}
      <AnimatedTestimonials />
      <PollWidget />
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
      <AnimatedSection>
        <Contato />
      </AnimatedSection>
    </motion.main>
  )
}

