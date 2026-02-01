import type React from "react"

interface FormattedTextProps {
  text: string
  className?: string
}

export const FormattedText: React.FC<FormattedTextProps> = ({ text, className = "" }) => {
  // Convert markdown-like formatting to HTML
  const formatText = (text: string) => {
    return text
      // Headers with icons
      .replace(/^## (.+)$/gm, '<h3 class="text-lg font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200 flex items-center gap-2"><span class="text-blue-600">📋</span> $1</h3>')
      .replace(/^# (.+)$/gm, '<h2 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
      
      // Bold text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900 bg-yellow-50 px-1 rounded">$1</strong>')
      
      // Lists (enhanced)
      .replace(/^- (.+)$/gm, '<div class="ml-4 mb-2 flex items-start gap-2"><span class="text-blue-500 mt-1">•</span><span>$1</span></div>')
      
      // Separate sections with some spacing
      .replace(/\n\n(?=##)/g, '<div class="mt-8"></div>')
      
      // Line breaks
      .replace(/\n\n/g, '<div class="mb-4"></div>')
      .replace(/\n/g, '<br/>')
  }

  const formattedHtml = formatText(text)

  return (
    <div 
      className={`prose prose-sm max-w-none leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: formattedHtml }}
      style={{
        lineHeight: '1.7',
      }}
    />
  )
}
