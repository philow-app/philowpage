"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Brain, CheckCircle, XCircle, Eye, EyeOff, RotateCcw } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { haushoferConnaissance } from "@/lib/quiz-data"
import { quizService } from "@/lib/quiz-service"

type AnswerStatus = "unknown" | "known" | "unknown_answered"

export default function HaushoferConnaissancePage() {
  const router = useRouter()
  const questions = haushoferConnaissance
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, AnswerStatus>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isResetting, setIsResetting] = useState(false)
  
  const currentQuestion = questions?.[currentQuestionIndex]
  const currentAnswer = currentQuestion ? (answers[currentQuestion.id] || "unknown") : "unknown"

  // Charger les réponses sauvegardées et la position au montage
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const [savedAnswers, savedPosition] = await Promise.all([
          quizService.loadQuizAnswers('haushofer', 'connaissance'),
          quizService.loadQuizPosition('haushofer', 'connaissance')
        ])
        setAnswers(savedAnswers)
        setCurrentQuestionIndex(savedPosition)
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadSavedData()
  }, [])

  const handleAnswer = async (status: AnswerStatus) => {
    // Mettre à jour localement
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: status
    }))
    
    // Sauvegarder dans localStorage
    try {
      await quizService.saveQuizAnswer('haushofer', 'connaissance', currentQuestion.id, status)
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
    }
    
    setShowAnswer(true)
  }

  const goToQuestion = async (index: number) => {
    setCurrentQuestionIndex(index)
    try {
      await quizService.saveQuizPosition('haushofer', 'connaissance', index)
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de position:', error)
    }
    setShowAnswer(false)
  }

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      const newIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(newIndex)
      try {
        await quizService.saveQuizPosition('haushofer', 'connaissance', newIndex)
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de position:', error)
      }
      setShowAnswer(false)
    }
  }

  const prevQuestion = async () => {
    if (currentQuestionIndex > 0) {
      const newIndex = currentQuestionIndex - 1
      setCurrentQuestionIndex(newIndex)
      try {
        await quizService.saveQuizPosition('haushofer', 'connaissance', newIndex)
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de position:', error)
      }
      setShowAnswer(false)
    }
  }

  const resetQuiz = async () => {
    setIsResetting(true)
    try {
      await quizService.resetQuiz('haushofer', 'connaissance')
      setAnswers({})
      setCurrentQuestionIndex(0)
      setShowAnswer(false)
    } catch (error) {
      console.error('Erreur lors de la réinitialisation:', error)
    } finally {
      setIsResetting(false)
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

  return (
    <DashboardLayout>
      <div className="flex h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
        {/* Contenu principal */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-emerald-100 p-8 shadow-sm">
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
                  <div className="w-1 h-12 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
                  <div>
                    <h1 className="text-3xl font-light text-gray-800 tracking-tight">
                      Le Mur invisible
                    </h1>
                    <p className="text-sm text-gray-500 font-normal mt-1">Marlen Haushofer • Test de Connaissance</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline"
                  onClick={resetQuiz}
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
                    className="bg-gradient-to-r from-emerald-400 to-teal-500 h-1.5 rounded-full transition-all duration-700 ease-out" 
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                  <p className="text-gray-800 hover:text-gray-800 leading-relaxed text-lg font-medium">
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
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-inner">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <h4 className="font-semibold text-emerald-800">Réponse</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {currentQuestion.answer}
                      </p>
                    </div>
                    
                    <div className="flex gap-4 justify-center">
                      <Button 
                        onClick={prevQuestion}
                        disabled={currentQuestionIndex === 0}
                        className="px-8 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 disabled:opacity-50"
                      >
                        ← Question précédente
                      </Button>
                      <Button 
                        onClick={nextQuestion}
                        disabled={currentQuestionIndex === questions.length - 1}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl shadow-lg"
                      >
                        Question suivante →
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar navigation des questions */}
        <div className="w-80 bg-white/95 backdrop-blur-sm border-l border-emerald-200 p-6 shadow-lg h-screen overflow-y-auto">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Navigation</h3>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="text-center bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-green-700 font-semibold">Je sais</span>
                  <div className="text-green-800 font-bold text-lg">{stats.known}</div>
                </div>
                <div className="text-center bg-red-50 p-3 rounded-lg border border-red-200">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-red-700 font-semibold">Je ne sais pas</span>
                  <div className="text-red-800 font-bold text-lg">{stats.unknown}</div>
                </div>
                <div className="text-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="w-4 h-4 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <span className="text-gray-700 font-semibold">Restant</span>
                  <div className="text-gray-800 font-bold text-lg">{stats.remaining}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {questions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => goToQuestion(index)}
                  className={`h-9 w-9 text-xs font-bold rounded-lg transition-all duration-300 cursor-pointer ${getQuestionStatus(question.id)} ${
                    index === currentQuestionIndex ? "ring-3 ring-emerald-300 ring-offset-1 scale-110 shadow-lg" : "hover:scale-105"
                  }`}
                >
                  {question.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
