import { BadgeCheck, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="bg-blue-primary dark:bg-blue-sky w-10 h-10 rounded-md mr-3 flex items-center justify-center">
                  <BadgeCheck size={24} className="text-white" />
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
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da DC Assessoria"
                  className="text-foreground/60 hover:text-blue-primary transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da DC Assessoria"
                  className="text-foreground/60 hover:text-blue-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da DC Assessoria"
                  className="text-foreground/60 hover:text-blue-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#servicos" className="text-foreground/70 hover:text-blue-primary transition-colors">
                    Limpeza de Nome
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-foreground/70 hover:text-blue-primary transition-colors">
                    Aprovação de Crédito
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-foreground/70 hover:text-blue-primary transition-colors">
                    Reabilitação de Crédito
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-foreground/70 hover:text-blue-primary transition-colors">
                    Limpeza de CPF/CNPJ
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-foreground/70 hover:text-blue-primary transition-colors">
                    Restauração de Score
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-primary flex-shrink-0" />
                  <span className="text-foreground/70">(11) 9999-9999</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-primary flex-shrink-0" />
                  <span className="text-foreground/70">contato@dcassessoria.com.br</span>
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
                &copy; {currentYear} DC Assessoria e Consultoria. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/politica-de-privacidade"
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="/termos-de-uso"
                  className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

