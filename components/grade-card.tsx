import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Star, AlertTriangle } from "lucide-react"

interface GradeCardProps {
  grade: number | null
  totalPoints?: number
}

export const GradeCard: React.FC<GradeCardProps> = ({ grade, totalPoints = 20 }) => {
  if (grade === null) {
    return (
      <Card className="border-gray-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-gray-600">
            <AlertTriangle className="w-5 h-5" />
            Note
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-500">-/-</div>
            <div className="text-sm text-gray-500 mt-1">Note non disponible</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getGradeColor = (grade: number) => {
    if (grade >= 16) return "text-green-600 bg-green-50 border-green-200"
    if (grade >= 14) return "text-blue-600 bg-blue-50 border-blue-200"
    if (grade >= 12) return "text-orange-600 bg-orange-50 border-orange-200"
    if (grade >= 10) return "text-yellow-600 bg-yellow-50 border-yellow-200"
    return "text-red-600 bg-red-50 border-red-200"
  }

  const getGradeIcon = (grade: number) => {
    if (grade >= 16) return <Trophy className="w-5 h-5" />
    if (grade >= 14) return <Star className="w-5 h-5" />
    return <AlertTriangle className="w-5 h-5" />
  }

  const getGradeLabel = (grade: number) => {
    if (grade >= 16) return "Excellent"
    if (grade >= 14) return "Très bien"
    if (grade >= 12) return "Bien"
    if (grade >= 10) return "Passable"
    return "Insuffisant"
  }

  const colorClasses = getGradeColor(grade)

  return (
    <Card className={`border-2 ${colorClasses.split(' ').slice(2).join(' ')}`}>
      <CardHeader className="pb-3">
        <CardTitle className={`flex items-center gap-2 ${colorClasses.split(' ')[0]}`}>
          {getGradeIcon(grade)}
          Note obtenue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className={`text-4xl font-bold ${colorClasses.split(' ')[0]} mb-2`}>
            {grade}/{totalPoints}
          </div>
          <div className={`text-sm font-medium ${colorClasses.split(' ')[0]} opacity-80`}>
            {getGradeLabel(grade)}
          </div>
          <div className="mt-3 text-xs text-gray-500">
            {Math.round((grade / totalPoints) * 100)}% de réussite
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
