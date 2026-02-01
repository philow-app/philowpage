import { Inter, Crimson_Text } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
})

// Futura normal (pas bold)
export const futura = {
  style: {
    fontFamily: '"Futura", "Futura PT", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif',
    fontWeight: "normal",
  },
}
