"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Olá! Como posso ajudar você hoje?", isUser: false },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [showWidget, setShowWidget] = useState(false)

  // Simulate loading the chat widget after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Add user message
    setMessages((prev) => [...prev, { text: newMessage, isUser: true }])
    setNewMessage("")

    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "Obrigado pelo seu contato! Um de nossos consultores entrará em contato em breve.",
        "Entendo sua situação. A DC Assessoria tem soluções específicas para esse caso.",
        "Você pode agendar uma consulta gratuita através do nosso formulário de contato.",
        "Sim, trabalhamos com limpeza de nome em todo o Brasil.",
        "Nosso prazo médio para limpeza de nome é de 15 a 60 dias, dependendo do caso.",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages((prev) => [...prev, { text: randomResponse, isUser: false }])
    }, 1000)
  }

  return (
    <AnimatePresence>
      {showWidget && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Chat Button */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="bg-blue-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <MessageSquare className="h-6 w-6" />
          </motion.button>

          {/* Chat Window */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="absolute bottom-16 right-0 w-80 md:w-96 bg-background rounded-lg shadow-xl overflow-hidden border border-border"
              >
                {/* Header */}
                <div className="bg-blue-primary p-4 text-white flex justify-between items-center">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    <h3 className="font-medium">Chat com a DC Assessoria</h3>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Messages */}
                <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`${
                        message.isUser ? "ml-auto bg-blue-primary text-white" : "mr-auto bg-muted text-foreground"
                      } rounded-lg p-3 max-w-[80%]`}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="border-t border-border p-4 flex">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-muted rounded-l-md px-4 py-2 focus:outline-none"
                  />
                  <Button onClick={handleSendMessage} className="rounded-l-none bg-blue-primary hover:bg-blue-dark">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  )
}

