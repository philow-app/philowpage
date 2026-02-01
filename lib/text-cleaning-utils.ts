import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function cleanText(rawText: string) {
  console.log("🧹 === TEXT CLEANING START ===")
  console.log("📝 Input text length:", rawText.length)

  try {
    // Basic text cleaning first
    let basicCleanedText = rawText

    // Remove excessive whitespace
    basicCleanedText = basicCleanedText.replace(/\s+/g, " ")

    // Remove page separators for cleaning
    basicCleanedText = basicCleanedText.replace(/--- PAGE \d+ ---/g, "")

    // Remove common OCR artifacts
    basicCleanedText = basicCleanedText.replace(/= LES SHERPAS/g, "")
    basicCleanedText = basicCleanedText.replace(/(Cmp|CMP)/g, "")
    basicCleanedText = basicCleanedText.replace(/Concours commun\s*Mines-Ponts/g, "")
    basicCleanedText = basicCleanedText.replace(/Épreuve:\s*Français?/g, "")
    basicCleanedText = basicCleanedText.replace(/Les feuilles dont l'entête d'identi?[^\n]*/g, "")

    // Trim
    basicCleanedText = basicCleanedText.trim()

    // If text is long enough, use AI for advanced cleaning
    if (basicCleanedText.length > 1000) {
      console.log("🤖 Using AI for advanced text cleaning...")
      
      const result = await generateText({
        model: openai('gpt-3.5-turbo'),
        prompt: `Tu es un expert en nettoyage de texte issu d'OCR. Tu dois nettoyer ce texte de dissertation en français en:

1. Corrigeant les erreurs OCR évidentes (caractères mal reconnus)
2. Rétablissant la ponctuation correcte
3. Organisant les paragraphes de façon logique
4. Supprimant les artefacts d'en-tête et de mise en page
5. Gardant EXACTEMENT le même contenu et les mêmes idées
6. NE PAS ajouter ou modifier le sens du texte

IMPORTANT: Tu dois uniquement nettoyer et corriger, PAS réécrire ou améliorer le contenu intellectuel.

Texte à nettoyer:
"""${basicCleanedText}"""

Réponds uniquement avec le texte nettoyé, sans commentaires ni explications.`,
        maxTokens: 4000,
      });

      const aiCleanedText = result.text.trim()
      
      console.log("📝 AI cleaned text length:", aiCleanedText.length)
      console.log("✅ Advanced AI text cleaning completed")

      return {
        cleanedText: aiCleanedText,
        cleanedLength: aiCleanedText.length,
        originalLength: rawText.length,
      }
    } else {
      console.log("📝 Basic cleaned text length:", basicCleanedText.length)
      console.log("✅ Basic text cleaning completed")

      return {
        cleanedText: basicCleanedText,
        cleanedLength: basicCleanedText.length,
        originalLength: rawText.length,
      }
    }
  } catch (error) {
    console.error("❌ Text cleaning failed:", error)
    
    // Fallback to basic cleaning if AI fails
    let fallbackText = rawText.replace(/\s+/g, " ").trim()
    return {
      cleanedText: fallbackText,
      cleanedLength: fallbackText.length,
      originalLength: rawText.length,
    }
  }
}
