import { useState, useEffect } from 'react'
import { quizService } from '@/lib/quiz-service'
import { useAuth } from './use-auth'

type AnswerStatus = "unknown" | "known" | "unknown_answered"

export const useQuizPersistence = (bookId: string, quizType: 'connaissance' | 'vocabulaire') => {
  const { user } = useAuth()
  const [answers, setAnswers] = useState<Record<number, AnswerStatus>>({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isResetting, setIsResetting] = useState(false)

  // Charger les réponses sauvegardées et la position
  useEffect(() => {
    const loadSavedData = async () => {
      if (user) {
        try {
          const [savedAnswers, savedPosition] = await Promise.all([
            quizService.loadQuizAnswers(bookId, quizType),
            quizService.loadQuizPosition(bookId, quizType)
          ])
          setAnswers(savedAnswers)
          setCurrentQuestionIndex(savedPosition)
        } catch (error) {
          console.error('Erreur lors du chargement des données:', error)
        } finally {
          setIsLoading(false)
        }
      } else {
        setIsLoading(false)
      }
    }

    loadSavedData()
  }, [user, bookId, quizType])

  // Sauvegarder une réponse
  const saveAnswer = async (questionId: number, answerStatus: AnswerStatus) => {
    // Mettre à jour localement
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerStatus
    }))
    
    // Sauvegarder dans Supabase si connecté
    if (user) {
      try {
        await quizService.saveQuizAnswer(bookId, quizType, questionId, answerStatus)
      } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error)
        // Optionnel: revenir en arrière en cas d'erreur
        setAnswers(prev => {
          const newAnswers = { ...prev }
          delete newAnswers[questionId]
          return newAnswers
        })
      }
    }
  }

  // Sauvegarder la position actuelle
  const savePosition = async (position: number) => {
    setCurrentQuestionIndex(position)
    if (user) {
      try {
        await quizService.saveQuizPosition(bookId, quizType, position)
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de position:', error)
      }
    }
  }

  // Réinitialiser le quiz
  const resetQuiz = async () => {
    if (!user) return
    
    setIsResetting(true)
    try {
      await quizService.resetQuiz(bookId, quizType)
      setAnswers({})
      setCurrentQuestionIndex(0)
    } catch (error) {
      console.error('Erreur lors de la réinitialisation:', error)
      throw error
    } finally {
      setIsResetting(false)
    }
  }

  return {
    answers,
    currentQuestionIndex,
    isLoading,
    isResetting,
    saveAnswer,
    savePosition,
    resetQuiz
  }
}
