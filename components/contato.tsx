"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const servicoMap = {
    "limpeza-nome": "Limpeza de Nome",
    "aprovacao-credito": "Aprovação de Crédito",
    "reabilitacao": "Reabilitação de Crédito",
    "limpeza-cpf-cnpj": "Limpeza de CPF/CNPJ",
    "score": "Restauração de Score",
    "blindagem": "Blindagem contra Negativações"
  } as const;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.nome || !formData.telefone || !formData.email || !formData.servico) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }
  
    setLoading(true);
    setMessage("");
  
    try {
      // Substitua pela URL do seu Google Forms
      const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdf6Tfu8KjjcXnGq1uI6N4nqc28fPDmkJdI3e7cCTEK4MjJTA/formResponse";
    
      // Criar os dados no formato correto para envio
      const formDataToSend = new FormData();
      formDataToSend.append("entry.211771552", formData.nome); // Nome
      formDataToSend.append("entry.503865701", formData.telefone); // Telefone
      formDataToSend.append("entry.2029190028", formData.email); // Email
      formDataToSend.append("entry.1883844774", servicoMap[formData.servico as keyof typeof servicoMap]); // Serviço correto
    
      console.log("Enviando dados:", Object.fromEntries(formDataToSend));
    
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    
      setMessage("Consulta solicitada com sucesso! Em breve entraremos em contato.");
      setFormData({ nome: "", telefone: "", email: "", servico: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setMessage("Erro ao enviar a solicitação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

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
                Preencha o formulário abaixo e um de nossos consultores entrará em contato para uma análise gratuita.
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome Completo" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary text-foreground" required />
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone com DDD" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary text-foreground" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary text-foreground" required />
              <select name="servico" value={formData.servico} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary text-foreground" required>
                <option value="" disabled>Selecione o Serviço Desejado</option>
                <option value="limpeza-nome">Limpeza de Nome</option>
                <option value="aprovacao-credito">Aprovação de Crédito</option>
                <option value="reabilitacao">Reabilitação de Crédito</option>
                <option value="limpeza-cpf-cnpj">Limpeza de CPF/CNPJ</option>
                <option value="score">Restauração de Score</option>
                <option value="blindagem">Blindagem contra Negativações</option>
              </select>

              <Button size="lg" className="w-full bg-blue-primary hover:bg-blue-sky py-6 h-auto text-lg" disabled={loading}>
                {loading ? "Enviando..." : "Solicitar Consulta Gratuita"}
              </Button>
              <br /><br />
                <a
                href="https://wa.me/5511912694748" // Substitua pelo número real com DDI e DDD
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-400 hover:bg-blue-sky py-6 h-auto text-lg">
                  Fale conosco por WhatsApp
                </Button>
              </a>

              {message && <p className="text-center text-sm text-foreground mt-4">{message}</p>}

              <p className="text-xs text-center text-foreground/50 mt-4">
                Seus dados estão seguros e não serão compartilhados com terceiros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
