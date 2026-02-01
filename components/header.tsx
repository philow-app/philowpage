import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo-philow-hd.png" alt="Logo Philow" className="w-8 h-8 rounded-lg" />
            <span className="text-2xl font-serif font-bold text-gray-900 tracking-wide">Philow</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/fiches" className="text-gray-900 hover:text-brand-blue transition-colors font-medium">
              Fiches
            </Link>
            <Link href="/quiz" className="text-gray-900 hover:text-brand-violet transition-colors font-medium">
              Quiz
            </Link>
            <Link href="/methodo" className="text-gray-900 hover:text-brand-blue transition-colors font-medium">
              Méthodo
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
