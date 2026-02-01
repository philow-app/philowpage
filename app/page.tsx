import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirection directe vers le dashboard pour bypasser l'authentification
  redirect('/dashboard')
}
