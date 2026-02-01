import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo-philow-hd.png" alt="Logo Philow" className="w-8 h-8 rounded-lg" />
              <span className="text-2xl font-serif font-bold text-gray-900 tracking-wide">Philow</span>
            </Link>
            <p className="text-gray-600">La plateforme d'aide pour réussir en philosophie en prépa scientifique.</p>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4 text-gray-900">Ressources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/fiches" className="hover:text-brand-blue transition-colors">
                  Fiches des œuvres
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-brand-violet transition-colors">
                  Quiz d'entraînement
                </Link>
              </li>
              <li>
                <Link href="/methodo" className="hover:text-brand-blue transition-colors">
                  Méthodologie
                </Link>
              </li>
              <li>
                <Link href="/coach-ia" className="hover:text-brand-violet transition-colors">
                  Coach IA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/aide" className="hover:text-brand-blue transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-violet transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-blue transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4 text-gray-900">Légal</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/cgu" className="hover:text-brand-blue transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-brand-violet transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-brand-blue transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Philow. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
