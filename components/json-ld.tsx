export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DC Assessoria e Consultoria",
    url: "https://dcassessoria.com.br",
    logo: "https://dcassessoria.com.br/logo.png",
    description: "Especialistas em limpeza de nome, aprovação de crédito, reabilitação de CPF/CNPJ e aumento de score.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-9999-9999",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: [
      "https://www.facebook.com/dcassessoria",
      "https://www.instagram.com/dcassessoria",
      "https://www.linkedin.com/company/dcassessoria",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
    },
    offers: {
      "@type": "AggregateOffer",
      offers: [
        {
          "@type": "Offer",
          name: "Limpeza de Nome",
          description: "Remoção de restrições e negativações do SPC, Serasa e demais órgãos de proteção ao crédito.",
        },
        {
          "@type": "Offer",
          name: "Aprovação de Crédito",
          description:
            "Facilitamos sua aprovação para empréstimos, financiamentos e cartões de crédito com as melhores taxas do mercado.",
        },
        {
          "@type": "Offer",
          name: "Reabilitação de Crédito",
          description: "Estratégias personalizadas para recuperar sua credibilidade no mercado financeiro.",
        },
        {
          "@type": "Offer",
          name: "Limpeza de CPF e CNPJ",
          description: "Soluções específicas para pessoas físicas e jurídicas com problemas de crédito.",
        },
        {
          "@type": "Offer",
          name: "Restauração de Score",
          description: "Técnicas comprovadas para aumentar seu score e melhorar sua classificação de crédito.",
        },
        {
          "@type": "Offer",
          name: "Blindagem contra Negativações",
          description: "Proteção preventiva para evitar futuras restrições e manter seu nome limpo.",
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

