export default function ProblemStatement() {
  return (
    <section className="py-24 bg-background border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">O Problema</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Dívidas, nome sujo e score baixo podem impedir você de conquistar seus sonhos. Muitas pessoas sofrem com
                restrições de crédito e não sabem como resolver.
              </p>
              <div className="h-1 w-20 bg-blue-dark/80 rounded-full"></div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Nossa Solução</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Oferecemos um caminho completo para recuperação financeira, com estratégias personalizadas para limpar
                seu nome, aumentar seu score e reconquistar seu crédito.
              </p>
              <div className="h-1 w-20 bg-blue-sky/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

