"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-lighter/20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-12 bg-blue-medium"></div>
            <span className="text-blue-medium font-medium">DC ASSESSORIA E CONSULTORIA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Recupere seu <span className="text-blue-primary">Crédito</span> e Conquiste sua Liberdade Financeira
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed max-w-3xl">
            A DC Assessoria e Consultoria oferece soluções completas para limpar seu nome, restaurar seu score e
            garantir sua aprovação de crédito.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-blue-primary hover:bg-blue-dark text-white px-8 py-6 text-lg h-auto"
            >
              Fale com um Consultor
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("servicos")}
              className="text-foreground border-foreground/20 hover:bg-foreground/5 px-8 py-6 text-lg h-auto group"
            >
              Conheça Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Simple decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  )
}

