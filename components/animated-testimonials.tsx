"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    quote:
      "",
    name: "",
    location: "",
    image: "",
    rating: 5,
  },
  {
    quote:
      "",
    name: "",
    location: "",
    image: "",
    rating: 5,
  }
]

export default function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Setup autoplay
  useEffect(() => {
    if (isAutoPlaying && inView) {
      const timer = setInterval(() => {
        nextSlide()
      }, 5000)

      return () => clearInterval(timer)
    }
  }, [isAutoPlaying, currentIndex, inView])

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">Histórias de Sucesso</h2>
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
            Veja como ajudamos nossos clientes a recuperar sua liberdade financeira.
          </p>

          <div
            ref={ref}
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <div className="bg-blue-dark/5 dark:bg-blue-dark/30 rounded-xl p-8 md:p-12 relative">
                  <div className="text-5xl text-blue-primary/20 font-serif absolute top-8 left-8">"</div>
                  <div className="mb-8 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-foreground/80 mb-8 relative z-10">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-foreground/60">{testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background z-10 hidden md:flex"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Anterior</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background z-10 hidden md:flex"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Próximo</span>
            </Button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-primary" : "bg-blue-primary/30"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Add your own testimonial */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Compartilhe Sua Experiência</h3>
            <p className="text-foreground/70 mb-6">Você também teve sucesso com nossos serviços? Conte sua história!</p>
            <Button
              onClick={() => {
                const element = document.getElementById("contato")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-blue-primary hover:bg-blue-dark"
            >
              Enviar Depoimento
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

