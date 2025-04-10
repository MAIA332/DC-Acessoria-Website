"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun, BadgeCheck } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    if (window.location.pathname !== "/") {
      router.push("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 500) // Aguarda o carregamento da página
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-foreground flex items-center">
              <span className="bg-slate-700 dark:bg-blue-950 w-16 h-12 rounded-md mr-3 flex items-center justify-center">
                <Image src="/logodc .png" width={150} height={150} alt="Logo" />
              </span>
              <span>
                DC <span className="font-normal text-blue-medium">Assessoria</span>
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Depoimentos
            </button>
            <a
              href="https://wa.me/5511912694748" // Substitua pelo número real com DDI e DDD
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-primary hover:bg-blue-sky text-white">
                Fale Conosco
              </Button>
            </a>


            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Alternar tema"
                onClick={toggleTheme}
                className="text-foreground"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </nav>

          <div className="flex items-center md:hidden space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Alternar tema"
                onClick={toggleTheme}
                className="text-foreground"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left text-lg"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("solucoes")}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left text-lg"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left text-lg"
              >
                Depoimentos
              </button>
              <a
                href="https://wa.me/5511912694748" // Substitua pelo número real com DDI e DDD
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-primary hover:bg-blue-sky text-white">
                  Fale Conosco
                </Button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
