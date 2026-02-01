"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface PdfDownloadProps {
  cleanedText: string
  subject: string
  stats: {
    textExtracted: number
    processingTime: number
    filesProcessed: number
    totalFiles: number
  }
}

export const PdfDownload: React.FC<PdfDownloadProps> = ({ 
  cleanedText, 
  subject, 
  stats 
}) => {
  
  const formatTextForPDF = (text: string): string[] => {
    // Nettoyer et formater le texte pour le PDF
    let formattedText = text
      // Supprimer les marques de watermark répétitives
      .replace(/= LES SHERPAS\s*/g, '')
      .replace(/LES SHERPAS\s*/g, '')
      // Supprimer les références d'examen répétitives
      .replace(/Cmp\s*Concours commun\s*Mines-Ponts\s*/g, '')
      .replace(/Épreuve:\s*français\.?\s*/g, '')
      .replace(/Les feuilles dont l'entête d'identification.*?\s*/g, '')
      // Nettoyer les espaces multiples
      .replace(/\s+/g, ' ')
      // Nettoyer les sauts de ligne multiples
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim()

    // Découper en paragraphes
    const paragraphs = formattedText.split('\n\n').filter(p => p.trim().length > 0)
    
    return paragraphs.map(p => p.trim())
  }

  const downloadPDF = async () => {
    try {
      // Import dynamique de jsPDF
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF()
      
      // Configuration de la police et des marges
      const margin = 20
      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()
      const maxWidth = pageWidth - (margin * 2)
      let yPosition = margin

      // En-tête du document
      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.text("Dissertation de Français-Philosophie", margin, yPosition)
      yPosition += 10
      
      doc.setFontSize(12)
      doc.setFont("helvetica", "normal")
      doc.text(`Sujet : ${subject.substring(0, 100)}${subject.length > 100 ? '...' : ''}`, margin, yPosition)
      yPosition += 15

      // Statistiques du traitement
      doc.setFontSize(10)
      doc.setFont("helvetica", "italic")
      doc.text(`Texte extrait : ${stats.textExtracted} caractères | Pages traitées : ${stats.filesProcessed}/${stats.totalFiles}`, margin, yPosition)
      yPosition += 10
      
      // Ligne de séparation
      doc.setLineWidth(0.5)
      doc.line(margin, yPosition, pageWidth - margin, yPosition)
      yPosition += 15

      // Contenu de la dissertation
      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      
      const paragraphs = formatTextForPDF(cleanedText)
      
      for (const paragraph of paragraphs) {
        // Découper le paragraphe en lignes pour respecter la largeur de page
        const lines = doc.splitTextToSize(paragraph, maxWidth)
        
        // Vérifier si on a assez de place sur la page
        if (yPosition + (lines.length * 6) > pageHeight - margin) {
          doc.addPage()
          yPosition = margin
        }
        
        // Ajouter les lignes du paragraphe
        for (const line of lines) {
          doc.text(line, margin, yPosition)
          yPosition += 6
        }
        
        // Espacement entre paragraphes
        yPosition += 4
      }

      // Pied de page avec date
      const date = new Date().toLocaleDateString('fr-FR')
      doc.setFontSize(8)
      doc.setFont("helvetica", "italic")
      doc.text(`Document généré le ${date} - PhiloW Platform`, margin, pageHeight - 10)

      // Télécharger le PDF
      const fileName = `dissertation_${date.replace(/\//g, '-')}.pdf`
      doc.save(fileName)
      
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error)
      alert('Erreur lors de la génération du PDF. Veuillez réessayer.')
    }
  }

  return (
    <Button 
      onClick={downloadPDF}
      variant="outline" 
      size="sm"
      className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
    >
      <Download className="h-4 w-4" />
      Télécharger le texte en PDF
    </Button>
  )
}
