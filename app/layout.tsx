import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DC Assessoria e Consultoria | Limpeza de Nome e Aprovação de Crédito",
  description:
    "Especialistas em limpeza de nome, aprovação de crédito, reabilitação de CPF/CNPJ e aumento de score. Recupere sua liberdade financeira com a DC Assessoria e Consultoria.",
  keywords:
    "limpeza de nome, aprovação de crédito, reabilitação de crédito, limpeza de CPF, limpeza de CNPJ, aumento de score, negativação, serasa, spc, DC Assessoria, DC Consultoria",
  authors: [{ name: "DC Assessoria e Consultoria" }],
  creator: "DC Assessoria e Consultoria",
  publisher: "DC Assessoria e Consultoria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dcassessoria.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DC Assessoria e Consultoria | Especialistas em Limpeza de Nome",
    description:
      "Recupere seu crédito e limpe seu nome com a DC Assessoria e Consultoria. Soluções rápidas e eficazes para sua liberdade financeira.",
    url: "https://dcassessoria.com.br",
    siteName: "DC Assessoria e Consultoria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DC Assessoria e Consultoria - Soluções Financeiras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Assessoria e Consultoria | Limpeza de Nome",
    description:
      "Recupere seu crédito e limpe seu nome com a DC Assessoria e Consultoria. Soluções rápidas e eficazes para sua liberdade financeira.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'