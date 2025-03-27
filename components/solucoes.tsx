export default function Solucoes() {
  const steps = [
    {
      number: "01",
      title: "Análise Financeira",
      description:
        "Realizamos um diagnóstico completo da sua situação financeira, identificando todas as restrições, dívidas e oportunidades de recuperação.",
    },
    {
      number: "02",
      title: "Plano Personalizado",
      description:
        "Desenvolvemos uma estratégia sob medida para seu caso, com ações específicas para limpar seu nome, aumentar seu score e recuperar seu crédito.",
    },
    {
      number: "03",
      title: "Implementação e Resultados",
      description:
        "Nossa equipe executa todas as ações necessárias, desde negociações com credores até procedimentos legais, garantindo resultados rápidos e eficazes.",
    },
  ]

  return (
    <section id="solucoes" className="py-24 bg-background border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-blue-medium"></div>
              <span className="text-blue-medium font-medium text-sm">COMO TRABALHAMOS</span>
              <div className="h-px w-8 bg-blue-medium"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nosso Processo</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Metodologia comprovada para recuperar sua saúde financeira em três etapas
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4 flex flex-col">
                    <span className="text-5xl font-bold text-blue-sky/40">{step.number}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.5rem] top-full h-16 w-px bg-blue-sky/30 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

