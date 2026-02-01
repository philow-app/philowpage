'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function FichesPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/dashboard/fiches')
  }, [router])
  
  return null
}
