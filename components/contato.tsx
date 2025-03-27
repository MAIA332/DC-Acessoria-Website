import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-dark/50 via-blue-sky/20 to-background border border-blue-lighter/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Recupere Seu Crédito com a DC Assessoria
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Preencha o formulário abaixo e um de nossos consultores entrará em contato para uma análise gratuita
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Nome Completo"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary text-foreground"
                required
                aria-label="Nome Completo"
              />
              <input
                type="tel"
                placeholder="Telefone com DDD"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary text-foreground"
                required
                aria-label="Telefone com DDD"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary text-foreground"
                required
                aria-label="E-mail"
              />
              <select
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary text-foreground"
                defaultValue=""
                required
                aria-label="Selecione o Serviço Desejado"
              >
                <option value="" disabled>
                  Selecione o Serviço Desejado
                </option>
                <option value="limpeza-nome">Limpeza de Nome</option>
                <option value="aprovacao-credito">Aprovação de Crédito</option>
                <option value="reabilitacao">Reabilitação de Crédito</option>
                <option value="limpeza-cpf-cnpj">Limpeza de CPF/CNPJ</option>
                <option value="score">Restauração de Score</option>
                <option value="blindagem">Blindagem contra Negativações</option>
              </select>
              <Button size="lg" className="w-full bg-blue-primary hover:bg-blue-sky py-6 h-auto text-lg">
                Solicitar Consulta Gratuita
              </Button>
              <p className="text-xs text-center text-foreground/50 mt-4">
                Seus dados estão seguros e não serão compartilhados com terceiros
              </p>
            </form>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-primary" />
                <span className="text-foreground/70">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-primary" />
                <span className="text-foreground/70">contato@dcassessoria.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-primary" />
                <span className="text-foreground/70">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

