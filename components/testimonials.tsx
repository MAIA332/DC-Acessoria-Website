"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Depois de 3 anos com nome sujo, achei que nunca mais conseguiria crédito. A DC Assessoria limpou meu nome em apenas 45 dias e hoje tenho cartão de crédito e financiamento aprovado!",
    name: "Carlos Silva",
    location: "São Paulo, SP",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Minha empresa estava com restrições no CNPJ que impediam novos contratos. A equipe da DC resolveu tudo em 60 dias e ainda me ajudou a conseguir uma linha de crédito empresarial.",
    name: "Mariana Costa",
    location: "Rio de Janeiro, RJ",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Meu score estava abaixo de 300 e não conseguia aprovar nem um cartão básico. Com a ajuda da DC Assessoria, em 3 meses meu score passou para 750 e hoje tenho crédito aprovado em todos os bancos!",
    name: "Pedro Oliveira",
    location: "Belo Horizonte, MG",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Tentei resolver minhas pendências sozinho por mais de um ano sem sucesso. A DC Assessoria conseguiu limpar meu nome em apenas 30 dias. Profissionais sérios e competentes!",
    name: "Ana Beatriz",
    location: "Curitiba, PR",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Estava prestes a perder meu apartamento por causa de dívidas. A DC me ajudou a negociar com os credores, limpar meu nome e ainda conseguir um empréstimo com taxa reduzida para quitar tudo.",
    name: "Roberto Mendes",
    location: "Fortaleza, CE",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Setup autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  // Calculate visible slides
  const slidesToShow = isMobile ? 1 : 2

  // Calculate translation percentage
  const translatePercentage = (currentIndex * 100) / slidesToShow

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">Histórias de Sucesso</h2>
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
            Veja como ajudamos nossos clientes a recuperar sua liberdade financeira.
          </p>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={carouselRef}>
            {/* Carousel Navigation - Previous */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 hover:bg-background rounded-full p-2 shadow-md hidden md:block"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6 text-blue-primary" />
            </button>

            {/* Testimonials */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`w-full ${isMobile ? "" : "md:w-1/2"} flex-shrink-0 px-4`}>
                    <div
                      className={`bg-${index % 2 === 0 ? "blue-lighter" : "blue-sky"}/10 dark:bg-blue-dark/30 rounded-xl p-8 relative h-full`}
                    >
                      <div
                        className={`absolute top-0 left-8 transform -translate-y-1/2 text-6xl text-${index % 2 === 0 ? "blue-sky" : "blue-lighter"}`}
                      >
                        "
                      </div>
                      <p className="text-foreground/80 mb-6 pt-4 relative z-10">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-foreground/60">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation - Next */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 hover:bg-background rounded-full p-2 shadow-md hidden md:block"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6 text-blue-primary" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => {
                // For mobile, only highlight current slide
                if (isMobile) {
                  return (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? "bg-blue-primary" : "bg-blue-primary/30"
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  )
                }

                // For desktop, highlight current and next slide (2 visible at once)
                const isActive = index === currentIndex || index === (currentIndex + 1) % testimonials.length

                return (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      isActive ? "bg-blue-primary" : "bg-blue-primary/30"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                )
              })}
            </div>
          </div>

          {/* Destaque de resultado */}
          <div className="mt-16 bg-gradient-to-r from-blue-dark to-blue-primary rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Resultados Comprovados</h3>
                <p className="text-blue-100 mb-6">
                  Mais de 5.000 clientes atendidos com 98% de satisfação. Nossa metodologia exclusiva garante resultados
                  rápidos e eficazes para sua recuperação financeira.
                </p>
                <div>
                  <Button
                    onClick={() => {
                      const element = document.getElementById("contato")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="bg-white text-blue-dark px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    Quero Resultados
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Resultados"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

