export interface QuizProgress {
  id?: string
  user_id: string
  book_id: string
  quiz_type: 'connaissance' | 'vocabulaire'
  question_id: number
  answer_status: 'known' | 'unknown_answered' | 'unknown'
  created_at?: string
  updated_at?: string
}

export interface QuizStats {
  total: number
  known: number
  unknown: number
  remaining: number
}

class QuizService {
  
  // Sauvegarder une réponse dans localStorage
  async saveQuizAnswer(
    bookId: string, 
    quizType: 'connaissance' | 'vocabulaire', 
    questionId: number, 
    answerStatus: 'known' | 'unknown_answered' | 'unknown'
  ) {
    try {
      const key = `quiz_answers_${bookId}_${quizType}`
      const answers = this.getStoredAnswers(bookId, quizType)
      answers[questionId] = answerStatus
      localStorage.setItem(key, JSON.stringify(answers))
      return { success: true }
    } catch (error) {
      console.error('Erreur dans saveQuizAnswer:', error)
      throw error
    }
  }

  // Obtenir les réponses stockées
  private getStoredAnswers(bookId: string, quizType: 'connaissance' | 'vocabulaire') {
    const key = `quiz_answers_${bookId}_${quizType}`
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : {}
  }

  // Sauvegarder la position actuelle dans le quiz
  async saveQuizPosition(
    bookId: string, 
    quizType: 'connaissance' | 'vocabulaire', 
    currentQuestionIndex: number
  ) {
    try {
      const key = `quiz_position_${bookId}_${quizType}`
      localStorage.setItem(key, currentQuestionIndex.toString())
    } catch (error) {
      console.error('Erreur dans saveQuizPosition:', error)
    }
  }

  // Charger la dernière position dans le quiz
  async loadQuizPosition(
    bookId: string, 
    quizType: 'connaissance' | 'vocabulaire'
  ): Promise<number> {
    try {
      const key = `quiz_position_${bookId}_${quizType}`
      const saved = localStorage.getItem(key)
      return saved ? parseInt(saved, 10) : 0
    } catch (error) {
      console.error('Erreur dans loadQuizPosition:', error)
      return 0
    }
  }

  // Charger les réponses d'un quiz spécifique
  async loadQuizAnswers(bookId: string, quizType: 'connaissance' | 'vocabulaire') {
    try {
      return this.getStoredAnswers(bookId, quizType)
    } catch (error) {
      console.error('Erreur dans loadQuizAnswers:', error)
      return {}
    }
  }

  // Réinitialiser un quiz spécifique
  async resetQuiz(bookId: string, quizType: 'connaissance' | 'vocabulaire') {
    try {
      const answersKey = `quiz_answers_${bookId}_${quizType}`
      const positionKey = `quiz_position_${bookId}_${quizType}`
      
      localStorage.removeItem(answersKey)
      localStorage.removeItem(positionKey)

      return { success: true }
    } catch (error) {
      console.error('Erreur dans resetQuiz:', error)
      throw error
    }
  }

  // Réinitialiser tous les quiz d'un utilisateur
  async resetAllQuizzes() {
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith('quiz_answers_') || key.startsWith('quiz_position_')
      )
      keys.forEach(key => localStorage.removeItem(key))

      return { success: true }
    } catch (error) {
      console.error('Erreur dans resetAllQuizzes:', error)
      throw error
    }
  }

  // Obtenir les statistiques globales de tous les quiz
  async getOverallStats() {
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('quiz_answers_'))
      
      let total = 0
      let known = 0
      let unknown = 0

      keys.forEach(key => {
        const answers = JSON.parse(localStorage.getItem(key) || '{}')
        Object.values(answers).forEach((status: any) => {
          total++
          if (status === 'known') known++
          if (status === 'unknown_answered') unknown++
        })
      })

      return {
        total,
        known,
        unknown,
        remaining: total - known - unknown
      }
    } catch (error) {
      console.error('Erreur dans getOverallStats:', error)
      return { total: 0, known: 0, unknown: 0, remaining: 0 }
    }
  }
}

export const quizService = new QuizService()
