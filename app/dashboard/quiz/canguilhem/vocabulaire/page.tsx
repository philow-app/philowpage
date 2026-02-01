"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { canguilhemVocabulaire } from "@/lib/quiz-data"
import { quizService } from "@/lib/quiz-service"

type AnswerStatus = "correct" | "incorrect" | "unanswered"

interface Answer {
  selected: number
  status: AnswerStatus
}

export default function CanguilhemVocabulairePage() {
  const router = useRouter()
  const questions = canguilhemVocabulaire
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, Answer>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isResetting, setIsResetting] = useState(false)
  
  const currentQuestion = questions?.[currentQuestionIndex]
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null

  // Charger les réponses sauvegardées et la position au montage
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const [savedAnswers, savedPosition] = await Promise.all([
          quizService.loadQuizAnswers('canguilhem', 'vocabulaire'),
          quizService.loadQuizPosition('canguilhem', 'vocabulaire')
        ])
        
        // Convertir les réponses au format du vocabulaire
        const convertedAnswers: Record<number, { selected: number; status: AnswerStatus }> = {}
        Object.entries(savedAnswers).forEach(([questionId, status]) => {
          if (status === 'known') {
            convertedAnswers[parseInt(questionId)] = { selected: -1, status: 'correct' }
          } else if (status === 'unknown_answered') {
            convertedAnswers[parseInt(questionId)] = { selected: -1, status: 'incorrect' }
          }
        })
        
        setAnswers(convertedAnswers)
        setCurrentQuestionIndex(savedPosition)
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadSavedData()
  }, [])

  const handleAnswer = async (selectedIndex: number) => {
    const isCorrect = selectedIndex === currentQuestion.correctAnswer
    const answerData = {
      selected: selectedIndex,
      status: isCorrect ? "correct" as AnswerStatus : "incorrect" as AnswerStatus
    }
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerData
    }))
    
    // Sauvegarder dans localStorage
    try {
      const supabaseStatus = isCorrect ? 'known' : 'unknown_answered'
      await quizService.saveQuizAnswer('canguilhem', 'vocabulaire', currentQuestion.id, supabaseStatus)
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
    }
    
    setShowAnswer(true)
  }

  const goToQuestion = async (index: number) => {
    setCurrentQuestionIndex(index)
    try {
      await quizService.saveQuizPosition('canguilhem', 'vocabulaire', index)
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de position:', error)
    }
    setShowAnswer(!!answers[questions[index].id])
  }

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      const newIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(newIndex)
      try {
        await quizService.saveQuizPosition('canguilhem', 'vocabulaire', newIndex)
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de position:', error)
      }
      setShowAnswer(!!answers[questions[newIndex].id])
    }
  }

  const prevQuestion = async () => {
    if (currentQuestionIndex > 0) {
      const newIndex = currentQuestionIndex - 1
      setCurrentQuestionIndex(newIndex)
      try {
        await quizService.saveQuizPosition('canguilhem', 'vocabulaire', newIndex)
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de position:', error)
      }
      setShowAnswer(!!answers[questions[newIndex].id])
    }
  }

  const resetQuiz = async () => {
    setIsResetting(true)
    try {
      await quizService.resetQuiz('canguilhem', 'vocabulaire')
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
    const answer = answers[questionId]
    if (!answer) return "bg-gray-200 text-gray-700 hover:bg-gray-300"
    if (answer.status === "correct") return "bg-green-500 text-white"
    if (answer.status === "incorrect") return "bg-red-500 text-white"
    return "bg-gray-200 text-gray-700 hover:bg-gray-300"
  }

  const getStats = () => {
    const total = questions.length
    const correct = Object.values(answers).filter(a => a.status === "correct").length
    const incorrect = Object.values(answers).filter(a => a.status === "incorrect").length
    const remaining = total - correct - incorrect
    return { total, correct, incorrect, remaining }
  }

  const stats = getStats()

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex">
        {/* Contenu principal */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 p-8 shadow-sm">
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
                  <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                  <div>
                    <h1 className="text-3xl font-light text-gray-800 tracking-tight">
                      La Connaissance de la Vie
                    </h1>
                    <p className="text-sm text-gray-500 font-normal mt-1">Georges Canguilhem • Quiz Vocabulaire</p>
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
                    className="bg-gradient-to-r from-purple-400 to-pink-500 h-1.5 rounded-full transition-all duration-700 ease-out" 
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {currentQuestion.word}
                  </p>
                </div>

                {!showAnswer ? (
                  <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full text-left p-6 h-auto bg-white hover:bg-purple-50 text-gray-700 border-2 border-gray-200 hover:border-purple-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        variant="outline"
                      >
                        <span className="font-medium text-base">{option}</span>
                      </Button>
                    ))}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                      <p className="text-sm text-purple-700 font-medium">📚 Voir les fiches de révisions pour des définitions plus détaillées</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      {currentQuestion.options.map((option, index) => {
                        let className = "w-full text-left p-6 h-auto border-2 rounded-xl transition-all duration-300 "
                        
                        if (index === currentQuestion.correctAnswer) {
                          className += "bg-green-50 border-green-500 text-green-800"
                        } else if (currentAnswer && index === currentAnswer.selected && index !== currentQuestion.correctAnswer) {
                          className += "bg-red-50 border-red-500 text-red-800"
                        } else {
                          className += "bg-gray-50 border-gray-200 text-gray-600"
                        }

                        return (
                          <div key={index} className={className}>
                            <div className="flex items-center gap-3">
                              {index === currentQuestion.correctAnswer && (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              )}
                              {currentAnswer && index === currentAnswer.selected && index !== currentQuestion.correctAnswer && (
                                <XCircle className="h-5 w-5 text-red-600" />
                              )}
                              <span className="font-medium text-base">{option}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    
                    {showAnswer && currentQuestion.explanation && (
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-inner">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <h4 className="font-semibold text-purple-800">Explication</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    )}
                    
                    {showAnswer && (
                      <div className="flex gap-4 justify-center">
                        <Button 
                          onClick={prevQuestion}
                          disabled={currentQuestionIndex === 0}
                          className="px-8 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 disabled:opacity-50"
                        >
                          ← Question précédente
                        </Button>
                        <Button 
                          onClick={nextQuestion}
                          disabled={currentQuestionIndex === questions.length - 1}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl shadow-lg"
                        >
                          Question suivante →
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar navigation des questions */}
        <div className="w-80 bg-white/95 backdrop-blur-sm border-l border-purple-200 p-6 shadow-lg h-screen overflow-y-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Progression</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total :</span>
                  <span className="font-bold text-gray-800 text-lg">{stats.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600">Correctes :</span>
                  <span className="font-bold text-green-600 text-lg">{stats.correct}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-600">Incorrectes :</span>
                  <span className="font-bold text-red-600 text-lg">{stats.incorrect}</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500 shadow-sm" 
                  style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                ></div>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600">
                  {Math.round((stats.correct / stats.total) * 100)}% de réussite
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-200">
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Navigation</h3>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="text-center bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <span className="text-green-700 font-semibold">Correct</span>
                    <div className="text-green-800 font-bold text-lg">{stats.correct}</div>
                  </div>
                  <div className="text-center bg-red-50 p-3 rounded-lg border border-red-200">
                    <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
                    <span className="text-red-700 font-semibold">Incorrect</span>
                    <div className="text-red-800 font-bold text-lg">{stats.incorrect}</div>
                  </div>
                  <div className="text-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="w-4 h-4 bg-gray-400 rounded-full mx-auto mb-2"></div>
                    <span className="text-gray-700 font-semibold">Restant</span>
                    <div className="text-gray-800 font-bold text-lg">{stats.remaining}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {questions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => goToQuestion(index)}
                  className={`h-9 w-9 text-xs font-bold rounded-lg transition-all duration-300 cursor-pointer ${getQuestionStatus(question.id)} ${
                    index === currentQuestionIndex ? "ring-3 ring-purple-300 ring-offset-1 scale-110 shadow-lg" : "hover:scale-105"
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
