"use client"

import { useRouter } from "next/navigation"
import { BadgeCheck, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      router.push("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 500)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="bg-slate-700 dark:bg-blue-950 w-12 h-12 rounded-md mr-3 flex items-center justify-center">
                  <Image src="/logodcpng.png" width={100} height={100} alt="Logo" />
                </span>
                <span className="text-2xl font-bold text-foreground">
                  DC <span className="font-normal text-blue-medium">Assessoria</span>
                </span>
              </div>
              <p className="text-foreground/70 mb-6">
                Especialistas em limpeza de nome, aprovação de crédito, reabilitação de CPF/CNPJ e aumento de score.
                Recupere sua liberdade financeira com a DC Assessoria e Consultoria.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/dcconsultoriaofc?igsh=MWJzdHBpanU1c3g0dQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da DC Assessoria"
                  className="text-foreground/60 hover:text-blue-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-foreground/70 hover:text-blue-primary transition-colors"
                  >
                    Limpeza de Nome
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-foreground/70 hover:text-blue-primary transition-colors"
                  >
                    Aprovação de Crédito
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-foreground/70 hover:text-blue-primary transition-colors"
                  >
                    Reabilitação de Crédito
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-foreground/70 hover:text-blue-primary transition-colors"
                  >
                    Limpeza de CPF/CNPJ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-foreground/70 hover:text-blue-primary transition-colors"
                  >
                    Restauração de Score
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-primary flex-shrink-0" />
                  <span className="text-foreground/70">(11) 3785-7582</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-primary flex-shrink-0" />
                  <span className="text-foreground/70">dc.assessoriaconsultoria@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/70">
                    Av. Paulista, 1000, Bela Vista
                    <br />
                    São Paulo - SP, 01310-100
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-foreground/60 mb-4 md:mb-0">
                &copy; {currentYear} DC Assessoria e Consultoria CNPJ: 34.694.912/0001-22. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <a
                  href="/privacyPolicy"
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                >
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
