"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"
import VerneConnaissancePage from "@/app/dashboard/quiz/verne/connaissance/page"
import VerneVocabulairePage from "@/app/dashboard/quiz/verne/vocabulaire/page"
import HaushoferConnaissancePage from "@/app/dashboard/quiz/haushofer/connaissance/page"
import HaushoferVocabulairePage from "@/app/dashboard/quiz/haushofer/vocabulaire/page"
import CanguilhemConnaissancePage from "@/app/dashboard/quiz/canguilhem/connaissance/page"
import CanguilhemVocabulairePage from "@/app/dashboard/quiz/canguilhem/vocabulaire/page"

export default function DynamicQuizPage() {
  const params = useParams()
  const book = params?.book as string
  const type = params?.type as string

  // Mapper les book/type vers les composants appropriés
  const getComponent = () => {
    if (book === "verne" && type === "connaissance") return <VerneConnaissancePage />
    if (book === "verne" && type === "vocabulaire") return <VerneVocabulairePage />
    if (book === "haushofer" && type === "connaissance") return <HaushoferConnaissancePage />
    if (book === "haushofer" && type === "vocabulaire") return <HaushoferVocabulairePage />
    if (book === "canguilhem" && type === "connaissance") return <CanguilhemConnaissancePage />
    if (book === "canguilhem" && type === "vocabulaire") return <CanguilhemVocabulairePage />
    
    return <div className="text-center p-8">Quiz non trouvé</div>
  }

  return getComponent()
}
