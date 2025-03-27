import { CreditCard, Shield, TrendingUp, FileCheck, UserCheck, AlertTriangle } from "lucide-react"

export default function Servicos() {
  const servicos = [
    {
      icon: <CreditCard className="h-10 w-10 text-blue-primary" />,
      title: "Aprovação de Crédito",
      description:
        "Facilitamos sua aprovação para empréstimos, financiamentos e cartões de crédito com as melhores taxas do mercado.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-blue-sky" />,
      title: "Limpeza de Nome",
      description: "Removemos restrições e negativações do SPC, Serasa e demais órgãos de proteção ao crédito.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-lighter" />,
      title: "Reabilitação de Crédito",
      description: "Estratégias personalizadas para recuperar sua credibilidade no mercado financeiro.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-medium" />,
      title: "Limpeza de CPF e CNPJ",
      description: "Soluções específicas para pessoas físicas e jurídicas com problemas de crédito.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-primary" />,
      title: "Restauração de Score",
      description: "Técnicas comprovadas para aumentar seu score e melhorar sua classificação de crédito.",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-sky" />,
      title: "Blindagem contra Negativações",
      description: "Proteção preventiva para evitar futuras restrições e manter seu nome limpo.",
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-blue-medium"></div>
              <span className="text-blue-medium font-medium text-sm">SERVIÇOS DA DC ASSESSORIA</span>
              <div className="h-px w-8 bg-blue-medium"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Soluções Financeiras Completas</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A DC Assessoria e Consultoria oferece um conjunto abrangente de serviços para resolver seus problemas
              financeiros
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-6">{servico.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{servico.title}</h3>
                <p className="text-foreground/70">{servico.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-dark/10 dark:bg-blue-dark/30 rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-12 w-10 h-10 md:h-12 flex-shrink-0 rounded-full bg-blue-primary/20 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-blue-primary" />
            </div>
            <p className="text-foreground/80 text-center md:text-left">
              <span className="font-semibold">Saia do negativo agora com a DC Assessoria!</span> Não deixe que dívidas e
              restrições limitem seu futuro. Nossa equipe está pronta para ajudar você a recuperar sua liberdade
              financeira.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

