"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Brain, Trophy, Target, Sparkles, Award, Users, Clock, RotateCcw } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { quizService } from "@/lib/quiz-service"

const books = [
  {
    id: "verne",
    title: "Vingt mille lieues sous les mers",
    author: "Jules Verne",
    description: "Explorez les profondeurs maritimes avec le Capitaine Nemo",
    color: "from-blue-500 via-cyan-500 to-blue-700",
    textColor: "text-blue-700",
    theme: "L'exploration scientifique et technique"
  },
  {
    id: "haushofer",
    title: "Le Mur invisible",
    author: "Marlen Haushofer",
    description: "Une réflexion profonde sur l'isolement et la nature",
    color: "from-emerald-500 via-teal-500 to-emerald-700",
    textColor: "text-emerald-700",
    theme: "La solitude et la réconciliation avec la nature"
  },
  {
    id: "canguilhem",
    title: "La Connaissance de la vie",
    author: "Georges Canguilhem",
    description: "Philosophie et sciences du vivant",
    color: "from-purple-500 via-violet-500 to-purple-700",
    textColor: "text-purple-700",
    theme: "L'épistémologie du vivant"
  }
]

export default function QuizPage() {
  const [isResetting, setIsResetting] = useState(false)

  const resetAllQuizzes = async () => {
    
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser TOUS les quiz ? Cette action est irréversible.')) {
      setIsResetting(true)
      try {
        await quizService.resetAllQuizzes()
        alert('Tous les quiz ont été réinitialisés avec succès !')
      } catch (error) {
        console.error('Erreur lors de la réinitialisation:', error)
        alert('Erreur lors de la réinitialisation. Veuillez réessayer.')
      } finally {
        setIsResetting(false)
      }
    }
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <div className="flex justify-between items-center mb-6">
              <div className="flex-1">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Quiz d'Entraînement
                </h1>
                <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                  Maîtrisez les œuvres au programme de français-philosophie grâce à nos quiz interactifs
                </p>
              </div>
              
              <Button 
                onClick={resetAllQuizzes}
                disabled={isResetting}
                className="ml-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                {isResetting ? 'Réinitialisation...' : 'Réinitialiser tous les quiz'}
              </Button>
            </div>
          </div>

          {/* Grille des œuvres avec quiz intégrés */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {books.map((book) => (
              <Card 
                key={book.id}
                className="transition-all duration-300 hover:shadow-2xl border-0 overflow-hidden h-full flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${book.color}`} />
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-bold mb-2">{book.title}</CardTitle>
                  <p className="text-sm text-gray-600 font-medium">{book.author}</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  {/* Boutons de quiz */}
                  <div className="space-y-3 mt-auto">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => {
                        window.location.href = `/dashboard/quiz/${book.id}/connaissance`
                      }}
                    >
                      <Brain className="mr-2 h-4 w-4" />
                      Test de Connaissance
                    </Button>
                    
                    <Button 
                      className="w-full bg-green-50 hover:bg-green-100 text-green-700 border border-green-200"
                      onClick={() => {
                        window.location.href = `/dashboard/quiz/${book.id}/vocabulaire`
                      }}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Test de Vocabulaire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rectangle coloré avec conseils en bas */}
          <div className="bg-blue-100 rounded-xl p-8 mt-12 max-w-5xl mx-auto border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-6 text-center">Conseils pour Réussir vos Quiz</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Colonne 1 : Préparation */}
              <div className="space-y-5">
                <h4 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-2">Préparation Efficace</h4>
                
                <div>
                  <p className="mb-2 text-blue-800">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <strong>Lecture active :</strong> Relisez les passages clés avant de commencer le quiz pour rafraîchir votre mémoire.
                  </p>
                </div>
                
                <div>
                  <p className="mb-2 text-blue-800">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <strong>Vocabulaire spécialisé :</strong> Maîtrisez les termes techniques et philosophiques propres à chaque œuvre.
                  </p>
                </div>
                
                <div>
                  <p className="mb-2 text-blue-800">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <strong>Contexte historique :</strong> Situez chaque œuvre dans son époque et son mouvement littéraire ou philosophique.
                  </p>
                </div>
              </div>

              {/* Colonne 2 : Stratégies */}
              <div className="space-y-5">
                <h4 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-2">Stratégies de Réussite</h4>
                
                <div>
                  <p className="mb-2 text-blue-800">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <strong>Analyse minutieuse :</strong> Lisez attentivement chaque question et toutes les options avant de répondre.
                  </p>
                </div>
                
                <div>
                  <p className="mb-2 text-blue-800">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <strong>Élimination progressive :</strong> Écartez d'abord les réponses manifestement incorrectes.
                  </p>
                </div>
                
                <div>
                  <p className="mb-2 text-blue-800">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <strong>Entraînement régulier :</strong> Alternez entre les deux types de quiz pour une préparation complète.
                  </p>
                </div>
              </div>
            </div>

            {/* Section conseil central */}
            <div className="mt-8 pt-6 border-t border-blue-300">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm text-blue-800"><strong className="text-blue-900">Astuce clé :</strong> Commencez par les quiz de vocabulaire pour vous familiariser avec les termes, puis passez aux tests de connaissance pour approfondir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}