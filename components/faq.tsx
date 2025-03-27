"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqItems = [
    {
      question: "Como a DC Assessoria e Consultoria pode limpar meu nome?",
      answer:
        "A DC Assessoria e Consultoria utiliza estratégias legais e eficazes para remover restrições do seu nome junto aos órgãos de proteção ao crédito como SPC, Serasa e outros. Nosso processo inclui análise detalhada da sua situação, identificação de irregularidades nas negativações e implementação de ações específicas para cada caso.",
    },
    {
      question: "Quanto tempo leva para limpar meu nome?",
      answer:
        "O tempo para limpar seu nome pode variar de 15 a 60 dias, dependendo da complexidade do seu caso, quantidade de restrições e órgãos envolvidos. A DC Assessoria e Consultoria trabalha com agilidade para garantir os resultados no menor prazo possível.",
    },
    {
      question: "É possível aumentar meu score de crédito?",
      answer:
        "Sim, a DC Assessoria e Consultoria possui técnicas comprovadas para aumentar seu score de crédito. Nosso processo inclui limpeza de negativações, orientações para comportamento financeiro adequado e estratégias específicas que impactam positivamente seu score junto às instituições financeiras.",
    },
    {
      question: "A DC Assessoria trabalha com limpeza de CNPJ para empresas?",
      answer:
        "Sim, oferecemos serviços especializados para pessoas jurídicas, incluindo limpeza de CNPJ, regularização de pendências fiscais e tributárias, e estratégias para recuperação de crédito empresarial. Nossa equipe possui expertise em resolver restrições que afetam a saúde financeira da sua empresa.",
    },
    {
      question: "Como funciona o processo de aprovação de crédito?",
      answer:
        "Nosso processo de aprovação de crédito inclui análise da sua situação financeira atual, identificação das melhores opções de crédito disponíveis para seu perfil, preparação da documentação necessária e acompanhamento da solicitação junto às instituições financeiras, aumentando significativamente suas chances de aprovação.",
    },
    {
      question: "Quais regiões a DC Assessoria e Consultoria atende?",
      answer:
        "A DC Assessoria e Consultoria atende clientes em todo o Brasil. Nossos serviços são prestados remotamente, permitindo que você resolva sua situação financeira de qualquer lugar do país, com a mesma eficiência e qualidade.",
    },
    {
      question: "Quanto custam os serviços da DC Assessoria e Consultoria?",
      answer:
        "Os valores dos nossos serviços variam de acordo com a complexidade do seu caso e os serviços necessários. Oferecemos uma consulta inicial gratuita para avaliar sua situação e apresentar um orçamento personalizado. Trabalhamos com preços justos e condições de pagamento facilitadas.",
    },
    {
      question: "A DC Assessoria oferece garantia de resultados?",
      answer:
        "Sim, a DC Assessoria e Consultoria trabalha com garantia de resultados. Caso não consigamos cumprir o que foi acordado no contrato, devolvemos o valor investido. Temos confiança no nosso trabalho e nos comprometemos com a satisfação dos nossos clientes.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">Perguntas Frequentes</h2>
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
            Tire suas dúvidas sobre os serviços da DC Assessoria e Consultoria
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{item.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/70">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-foreground/70">Ainda tem dúvidas? Entre em contato com nossa equipe de atendimento</p>
            <button
              onClick={() => {
                const element = document.getElementById("contato")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="mt-4 text-blue-primary hover:text-blue-dark font-medium"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

