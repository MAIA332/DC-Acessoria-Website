"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import AnimatedCounter from "./animated-counter"
import { Users, Award, Clock, TrendingUp } from "lucide-react"

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-primary" />,
      value: 5000,
      label: "Clientes Atendidos",
      suffix: "+",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-sky" />,
      value: 98,
      label: "Taxa de Sucesso",
      suffix: "%",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-lighter" />,
      value: 15,
      label: "Anos de Experiência",
      suffix: "+",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-medium" />,
      value: 850,
      label: "Aumento Médio de Score",
      suffix: " pts",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-background rounded-full shadow-sm">{stat.icon}</div>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                className="text-3xl md:text-4xl font-bold text-blue-primary mb-2"
              />
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

