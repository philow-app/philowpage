import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb, 
  Target, 
  Trophy,
  Clock
} from "lucide-react"

interface CorrectionDisplayProps {
  correction: string
  grade: number | null
  subject: string
  cleanedText: string
  exerciseType?: "dissertation" | "resume"
  stats: {
    textExtracted: number
    processingTime: number
    filesProcessed: number
    totalFiles: number
  }
}

export const CorrectionDisplay: React.FC<CorrectionDisplayProps> = ({ 
  correction, 
  grade, 
  subject,
  cleanedText,
  exerciseType = "dissertation",
  stats 
}) => {
  // Parse the correction text to extract sections
  const parseCorrectionSections = (text: string) => {
    const sections = {
      analyse: "",
      structure: "",
      pointsForts: "",
      pointsAmeliorer: "",
      suggestions: "",
      evaluation: ""
    }

    const lines = text.split('\n')
    let currentSection: keyof typeof sections | "" = ""

    for (const line of lines) {
      // Format pour les dissertations
      if (line.includes("Appréciation Générale") || line.includes("ANALYSE GÉNÉRALE")) {
        currentSection = "analyse"
      } else if (line.includes("Analyse Détaillée") || line.includes("Structure du Plan") || line.includes("STRUCTURE ET ARGUMENTATION")) {
        currentSection = "structure"
      } else if (line.includes("Problématisation") || line.includes("Qualité de l'Argumentation") || line.includes("POINTS FORTS")) {
        currentSection = "pointsForts"
      } else if (line.includes("Utilisation des Œuvres") || line.includes("Langue et Style") || line.includes("POINTS À AMÉLIORER")) {
        currentSection = "pointsAmeliorer"
      } else if (line.includes("Axes d'Amélioration") || line.includes("SUGGESTIONS CONCRÈTES")) {
        currentSection = "suggestions"
      } else if (line.includes("Note Proposée") || line.includes("ÉVALUATION")) {
        currentSection = "evaluation"
      }
      
      // Format spécifique pour les résumés
      else if (line.includes("**ANALYSE PAR CRITÈRES**") || line.includes("ANALYSE PAR CRITÈRES")) {
        currentSection = "analyse"
      } else if (line.includes("**POINTS FORTS**") || line.includes("POINTS FORTS")) {
        currentSection = "pointsForts"
      } else if (line.includes("**ERREURS À CORRIGER**") || line.includes("ERREURS À CORRIGER") || line.includes("**AXES D'AMÉLIORATION**") || line.includes("AXES D'AMÉLIORATION")) {
        currentSection = "pointsAmeliorer"
      } else if (line.includes("**CONSEILS**") || line.includes("CONSEILS")) {
        currentSection = "suggestions"
      } else if (line.includes("**JUSTIFICATION**") || line.includes("JUSTIFICATION") || line.includes("**NOTE FINALE**") || line.includes("NOTE FINALE")) {
        currentSection = "evaluation"
      }
      
      // Ajouter le contenu à la section courante
      else if (currentSection && !line.startsWith("##") && !line.includes("Correction de votre dissertation") && !line.includes("Correction de votre résumé")) {
        // Ignorer les lignes vides multiples
        if (line.trim() !== "" || !sections[currentSection].endsWith("\n\n")) {
          sections[currentSection] += line + "\n"
        }
      }
    }

    // Nettoyer les sections
    Object.keys(sections).forEach(key => {
      sections[key as keyof typeof sections] = sections[key as keyof typeof sections].trim()
    })

    return sections
  }

  const sections = parseCorrectionSections(correction)

  const getGradeColor = (grade: number | null) => {
    if (!grade) return "text-gray-500 bg-gray-50 border-gray-200"
    if (grade >= 16) return "text-emerald-700 bg-emerald-50 border-emerald-200"
    if (grade >= 14) return "text-blue-700 bg-blue-50 border-blue-200"
    if (grade >= 12) return "text-amber-700 bg-amber-50 border-amber-200"
    if (grade >= 10) return "text-orange-700 bg-orange-50 border-orange-200"
    return "text-red-700 bg-red-50 border-red-200"
  }

  const getGradeLabel = (grade: number | null) => {
    if (!grade) return "Non évaluée"
    if (grade >= 16) return "Excellent"
    if (grade >= 14) return "Très bien"
    if (grade >= 12) return "Bien"
    if (grade >= 10) return "Passable"
    return "Insuffisant"
  }

  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/^- (.+)$/gm, '<div class="flex items-start gap-2 mb-2"><span class="text-blue-500 mt-1">•</span><span>$1</span></div>')
      .replace(/\n\n/g, '<div class="mb-4"></div>')
      .replace(/\n/g, '<br/>')
  }

  return (
    <div className="space-y-6">
      {/* Header with subject and grade */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className={exerciseType === "dissertation" 
              ? "bg-blue-50 text-blue-700 border-blue-200" 
              : "bg-green-50 text-green-700 border-green-200"
            }>
              <BookOpen className="mr-1 h-3 w-3" />
              {exerciseType === "dissertation" ? "Dissertation" : "Résumé"}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              <span>Correction : {Math.round(stats.processingTime / 1000)}s</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-2 text-gray-900">
            Correction de votre {exerciseType === "dissertation" ? "dissertation" : "résumé"}
          </h2>
          <p className="text-muted-foreground text-sm bg-gray-50 p-3 rounded-lg border-l-4 border-blue-200">
            <strong>Sujet :</strong> {subject}
          </p>
        </div>
        
        {/* Grade Card */}
        <Card className={`border-2 ${getGradeColor(grade).split(' ').slice(2).join(' ')} min-w-[200px]`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Trophy className={`h-5 w-5 ${getGradeColor(grade).split(' ')[0]}`} />
              <Badge className={getGradeColor(grade)} variant="outline">
                {getGradeLabel(grade)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${getGradeColor(grade).split(' ')[0]}`}>
                {grade ? `${grade}/20` : "-/20"}
              </div>
              <div className="text-xs text-gray-500">
                {grade ? `${Math.round((grade / 20) * 100)}% de réussite` : "Non évaluée"}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">
              {stats.filesProcessed}/{stats.totalFiles}
            </div>
            <div className="text-sm text-blue-600">Images traitées</div>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">{stats.textExtracted}</div>
            <div className="text-sm text-green-600">Caractères extraits</div>
          </CardContent>
        </Card>
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">
              {Math.round(stats.processingTime / 1000)}s
            </div>
            <div className="text-sm text-purple-600">Temps total</div>
          </CardContent>
        </Card>
      </div>

      {/* Correction Content */}
      <Tabs defaultValue="analyse" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="analyse">Analyse</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="points-forts">Points forts</TabsTrigger>
          <TabsTrigger value="ameliorer">À améliorer</TabsTrigger>
          <TabsTrigger value="suggestions">Conseils</TabsTrigger>
          <TabsTrigger value="evaluation">Évaluation</TabsTrigger>
        </TabsList>

        {/* Debug information */}
        {(sections.analyse === "" && sections.structure === "" && sections.pointsForts === "" && sections.pointsAmeliorer === "" && sections.suggestions === "" && sections.evaluation === "") && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <h3 className="font-medium text-yellow-800 mb-2">⚠️ Sections non reconnues - Affichage du texte brut</h3>
            <div className="bg-white p-4 rounded border max-h-96 overflow-y-auto">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">{correction}</pre>
            </div>
          </div>
        )}

        <TabsContent value="analyse" className="mt-6">
          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <BookOpen className="h-5 w-5" />
                Analyse générale
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {sections.analyse.trim() ? (
                <div 
                  className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatText(sections.analyse.trim()) }}
                />
              ) : (
                <div className="text-gray-500 italic">Aucune analyse détectée dans cette correction.</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="structure" className="mt-6">
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-2 text-purple-900">
                <Target className="h-5 w-5" />
                Structure et argumentation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {sections.structure.trim() ? (
                <div 
                  className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatText(sections.structure.trim()) }}
                />
              ) : (
                <div className="text-gray-500 italic">Aucune analyse de structure détectée dans cette correction.</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="points-forts" className="mt-6">
          <Card className="border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-900">
                <CheckCircle className="h-5 w-5" />
                Points forts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {sections.pointsForts.trim() ? (
                <div 
                  className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatText(sections.pointsForts.trim()) }}
                />
              ) : (
                <div className="text-gray-500 italic">Aucun point fort détecté dans cette correction.</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ameliorer" className="mt-6">
          <Card className="border-orange-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <AlertTriangle className="h-5 w-5" />
                Points à améliorer
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {sections.pointsAmeliorer.trim() ? (
                <div 
                  className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatText(sections.pointsAmeliorer.trim()) }}
                />
              ) : (
                <div className="text-gray-500 italic">Aucun point à améliorer détecté dans cette correction.</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions" className="mt-6">
          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50">
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <Lightbulb className="h-5 w-5" />
                Suggestions concrètes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {sections.suggestions.trim() ? (
                <div 
                  className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatText(sections.suggestions.trim()) }}
                />
              ) : (
                <div className="text-gray-500 italic">Aucune suggestion détectée dans cette correction.</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evaluation" className="mt-6">
          <Card className={`border-2 ${getGradeColor(grade).split(' ').slice(2).join(' ')}`}>
            <CardHeader className={getGradeColor(grade).split(' ').slice(1, 2).join(' ')}>
              <CardTitle className={`flex items-center gap-2 ${getGradeColor(grade).split(' ')[0]}`}>
                <Trophy className="h-5 w-5" />
                Évaluation détaillée
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {sections.evaluation.trim() ? (
                <div 
                  className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatText(sections.evaluation.trim()) }}
                />
              ) : (
                <div className="text-gray-500 italic">Aucune évaluation détaillée détectée dans cette correction.</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
