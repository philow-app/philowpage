"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"
import VerneConnaissancePage from "../../../verne/connaissance/page"
import VerneVocabulairePage from "../../../verne/vocabulaire/page"
import HaushoferConnaissancePage from "../../../haushofer/connaissance/page"
import HaushoferVocabulairePage from "../../../haushofer/vocabulaire/page"
import CanguilhemConnaissancePage from "../../../canguilhem/connaissance/page"
import CanguilhemVocabulairePage from "../../../canguilhem/vocabulaire/page"

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
