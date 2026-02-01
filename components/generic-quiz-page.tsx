"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Brain, CheckCircle, XCircle, Eye, EyeOff, RotateCcw } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { useQuizPersistence } from "@/hooks/use-quiz-persistence"

type AnswerStatus = "unknown" | "known" | "unknown_answered"

interface QuizQuestion {
  id: number
  question: string
  answer: string
}

interface QuizPageProps {
  bookId: string
  quizType: 'connaissance' | 'vocabulaire'
  questions: QuizQuestion[]
  bookTitle: string
  author: string
  color: string
}

export default function GenericQuizPage({ 
  bookId, 
  quizType, 
  questions, 
  bookTitle, 
  author, 
  color 
}: QuizPageProps) {
  const router = useRouter()
  const [showAnswer, setShowAnswer] = useState(false)
  
  // Utilisation du hook personnalisé pour la persistance
  const {
    answers,
    currentQuestionIndex,
    isLoading,
    isResetting,
    saveAnswer,
    savePosition,
    resetQuiz
  } = useQuizPersistence(bookId, quizType)
  
  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestion?.id] || "unknown"

  const handleAnswer = async (status: AnswerStatus) => {
    await saveAnswer(currentQuestion.id, status)
    setShowAnswer(true)
  }

  const goToQuestion = async (index: number) => {
    await savePosition(index)
    setShowAnswer(false)
  }

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      await savePosition(currentQuestionIndex + 1)
      setShowAnswer(false)
    }
  }

  const prevQuestion = async () => {
    if (currentQuestionIndex > 0) {
      await savePosition(currentQuestionIndex - 1)
      setShowAnswer(false)
    }
  }

  const handleReset = async () => {
    try {
      await resetQuiz()
      setShowAnswer(false)
    } catch (error) {
      console.error('Erreur lors de la réinitialisation:', error)
    }
  }

  const getQuestionStatus = (questionId: number) => {
    const status = answers[questionId]
    if (status === "known") return "bg-green-500 text-white"
    if (status === "unknown_answered") return "bg-red-500 text-white"
    return "bg-gray-200 text-gray-700 hover:bg-gray-300"
  }

  const getStats = () => {
    const total = questions.length
    const known = Object.values(answers).filter(a => a === "known").length
    const unknown = Object.values(answers).filter(a => a === "unknown_answered").length
    const remaining = total - known - unknown
    return { total, known, unknown, remaining }
  }

  const stats = getStats()

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Chargement de vos réponses...</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Contenu principal */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-blue-100 p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Button 
                  variant="ghost" 
                  onClick={() => router.push("/dashboard/quiz")}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full px-4 py-2"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour
                </Button>
                <div className="flex items-center gap-4">
                  <div className={`w-1 h-12 bg-gradient-to-b ${color} rounded-full`}></div>
                  <div>
                    <h1 className="text-3xl font-light text-gray-800 tracking-tight">
                      {bookTitle}
                    </h1>
                    <p className="text-sm text-gray-500 font-normal mt-1">
                      {author} • Test de {quizType === 'connaissance' ? 'Connaissance' : 'Vocabulaire'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline"
                  onClick={handleReset}
                  disabled={isResetting || isLoading}
                  className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  {isResetting ? 'Réinitialisation...' : 'Réinitialiser'}
                </Button>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="flex-1 p-8">
            <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="pb-8">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className={`bg-gradient-to-r ${color} h-1.5 rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {currentQuestion.question}
                  </p>
                </div>

                {!showAnswer ? (
                  <div className="flex gap-6 justify-center">
                    <Button 
                      onClick={() => handleAnswer("known")}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <CheckCircle className="h-5 w-5 mr-3" />
                      Je sais
                    </Button>
                    <Button 
                      onClick={() => handleAnswer("unknown_answered")}
                      className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <XCircle className="h-5 w-5 mr-3" />
                      Je ne sais pas
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-inner">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <h4 className="font-semibold text-blue-800">Réponse</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {currentQuestion.answer}
                      </p>
                    </div>
                    
                    <div className="flex gap-4 justify-center">
                      <Button 
                        onClick={prevQuestion}
                        disabled={currentQuestionIndex === 0}
                        variant="outline"
                        className="px-8 py-3 text-base font-medium"
                      >
                        Question précédente
                      </Button>
                      <Button 
                        onClick={nextQuestion}
                        disabled={currentQuestionIndex === questions.length - 1}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-3 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {currentQuestionIndex === questions.length - 1 ? "Terminé" : "Question suivante"}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar avec les numéros de questions */}
        <div className="w-80 bg-white/90 backdrop-blur-lg border-l border-gray-200 shadow-lg overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Progression</h3>
            
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{stats.known}</div>
                <div className="text-xs text-green-700 font-medium">Je sais</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl font-bold text-red-600">{stats.unknown}</div>
                <div className="text-xs text-red-700 font-medium">Je ne sais pas</div>
              </div>
            </div>
            
            <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-gray-600">{stats.remaining}</div>
              <div className="text-xs text-gray-700 font-medium">Restantes</div>
            </div>
          </div>
          
          {/* Grille des questions */}
          <div className="p-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Questions</h4>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((question, index) => (
                <Button
                  key={question.id}
                  onClick={() => goToQuestion(index)}
                  variant="ghost"
                  className={`w-12 h-12 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    index === currentQuestionIndex 
                      ? "ring-2 ring-blue-400 ring-offset-2" 
                      : ""
                  } ${getQuestionStatus(question.id)}`}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
