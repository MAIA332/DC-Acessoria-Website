"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calculator, ArrowRight } from "lucide-react"

export default function CreditCalculator() {
  const [debtAmount, setDebtAmount] = useState(5000)
  const [interestRate, setInterestRate] = useState(15)
  const [months, setMonths] = useState(12)
  const [showResults, setShowResults] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12
    const payment =
      (debtAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    return payment.toFixed(2)
  }

  const calculateTotalInterest = () => {
    const monthlyPayment = Number.parseFloat(calculateMonthlyPayment())
    const totalPaid = monthlyPayment * months
    const totalInterest = totalPaid - debtAmount
    return totalInterest.toFixed(2)
  }

  const handleCalculate = () => {
    setShowResults(true)
  }

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-blue-medium"></div>
              <span className="text-blue-medium font-medium text-sm">CALCULADORA FINANCEIRA</span>
              <div className="h-px w-8 bg-blue-medium"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Calcule o Impacto das Suas Dívidas</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Veja quanto você está perdendo com juros altos e descubra como a DC Assessoria pode ajudar
            </p>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-foreground font-medium">Valor da Dívida</label>
                    <span className="text-blue-primary font-bold">R$ {debtAmount.toLocaleString()}</span>
                  </div>
                  <Slider
                    value={[debtAmount]}
                    min={1000}
                    max={50000}
                    step={1000}
                    onValueChange={(value) => setDebtAmount(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-foreground/60">
                    <span>R$ 1.000</span>
                    <span>R$ 50.000</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-foreground font-medium">Taxa de Juros Anual</label>
                    <span className="text-blue-primary font-bold">{interestRate}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    min={5}
                    max={30}
                    step={0.5}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-foreground/60">
                    <span>5%</span>
                    <span>30%</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-foreground font-medium">Prazo (meses)</label>
                    <span className="text-blue-primary font-bold">{months} meses</span>
                  </div>
                  <Slider
                    value={[months]}
                    min={6}
                    max={60}
                    step={6}
                    onValueChange={(value) => setMonths(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-foreground/60">
                    <span>6 meses</span>
                    <span>60 meses</span>
                  </div>
                </div>

                <Button onClick={handleCalculate} className="w-full bg-blue-primary hover:bg-blue-dark">
                  Calcular <Calculator className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-blue-dark/5 dark:bg-blue-dark/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Resultado</h3>

                {showResults ? (
                  <div className="space-y-6">
                    <div>
                      <p className="text-foreground/70 mb-1">Pagamento Mensal:</p>
                      <p className="text-3xl font-bold text-blue-primary">
                        R${" "}
                        {Number.parseFloat(calculateMonthlyPayment()).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>

                    <div>
                      <p className="text-foreground/70 mb-1">Total de Juros:</p>
                      <p className="text-3xl font-bold text-blue-primary">
                        R${" "}
                        {Number.parseFloat(calculateTotalInterest()).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>

                    <div>
                      <p className="text-foreground/70 mb-1">Total Pago:</p>
                      <p className="text-3xl font-bold text-blue-primary">
                        R${" "}
                        {(Number.parseFloat(calculateMonthlyPayment()) * months).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/20">
                      <p className="text-foreground font-medium mb-4">
                        Com a DC Assessoria, você pode economizar até 70% desse valor!
                      </p>
                      <Button
                        onClick={() => {
                          const element = document.getElementById("contato")
                          if (element) element.scrollIntoView({ behavior: "smooth" })
                        }}
                        className="w-full bg-blue-primary hover:bg-blue-dark"
                      >
                        Fale com um Consultor <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <Calculator className="h-12 w-12 text-blue-primary/30 mb-4" />
                    <p className="text-foreground/70">
                      Ajuste os valores ao lado e clique em "Calcular" para ver quanto você está pagando em juros
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

