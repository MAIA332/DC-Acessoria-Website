"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function PollWidget() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pollOptions = [
    { id: "nome-sujo", text: "Nome sujo / negativado", votes: 65 },
    { id: "score-baixo", text: "Score de crédito baixo", votes: 20 },
    { id: "credito-negado", text: "Crédito negado recentemente", votes: 10 },
    { id: "dividas", text: "Muitas dívidas para organizar", votes: 5 },
  ]

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true)
    }
  }

  const getTotalVotes = () => {
    return pollOptions.reduce((acc, option) => acc + option.votes, 0)
  }

  const getPercentage = (votes: number) => {
    return Math.round((votes / getTotalVotes()) * 100)
  }

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

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Qual é o seu maior desafio financeiro?
            </h3>
            <p className="text-foreground/70 mb-8 text-center">
              Participe da nossa enquete e descubra como outras pessoas estão lidando com problemas semelhantes
            </p>

            <div className="space-y-4">
              {pollOptions.map((option) => (
                <div key={option.id} className="relative">
                  {hasVoted ? (
                    <div className="bg-background rounded-lg p-4 relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 bottom-0 bg-blue-primary/20 rounded-lg"
                        style={{ width: `${getPercentage(option.votes)}%` }}
                      ></div>
                      <div className="flex justify-between items-center relative z-10">
                        <span className="font-medium text-foreground">{option.text}</span>
                        <span className="font-bold text-blue-primary">{getPercentage(option.votes)}%</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelectedOption(option.id)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedOption === option.id
                          ? "bg-blue-primary text-white"
                          : "bg-background hover:bg-blue-primary/10"
                      }`}
                    >
                      {option.text}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {!hasVoted && (
              <Button
                onClick={handleVote}
                disabled={!selectedOption}
                className="w-full mt-6 bg-blue-primary hover:bg-blue-dark"
              >
                Votar
              </Button>
            )}

            {hasVoted && (
              <div className="mt-6 bg-blue-primary/10 p-4 rounded-lg flex items-center">
                <CheckCircle2 className="h-5 w-5 text-blue-primary mr-2" />
                <p className="text-foreground">
                  Obrigado por participar! A DC Assessoria tem soluções para todos esses desafios.
                </p>
              </div>
            )}

            <p className="text-xs text-foreground/50 mt-4 text-center">
              Total de {getTotalVotes()} votos. Esta enquete é apenas para fins informativos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

