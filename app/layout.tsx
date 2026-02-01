import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { inter, crimsonText } from "./fonts"

export const metadata = {
  title: "PhiloCPGE - Aide aux élèves de CPGE en français-philosophie",
  description: "Plateforme d'aide ciblée pour les élèves de classes préparatoires en français-philosophie",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${crimsonText.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
