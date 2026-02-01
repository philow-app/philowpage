import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, FileText, Bot, ArrowLeft, Play, BookOpen } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Button asChild variant="outline" className="mb-6 bg-transparent">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Découvrez Philow en action</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explorez nos fonctionnalités principales et voyez comment Philow peut transformer votre apprentissage de
              la philosophie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-brand-blue" />
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">Fiches détaillées</CardTitle>
                <CardDescription>Accédez à des analyses complètes des œuvres au programme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">L'Éthique - Spinoza</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Chaque chose, autant qu'il est en elle, s'efforce de persévérer dans son être."
                  </p>
                  <div className="flex items-center gap-2 text-xs text-brand-blue">
                    <Play className="h-3 w-3" />
                    <span>Voir l'analyse complète</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/fiches/ethique">Essayer maintenant</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-brand-blue" />
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">Quiz interactifs</CardTitle>
                <CardDescription>Testez vos connaissances avec des quiz adaptatifs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Quiz : Le pouvoir chez Machiavel</h4>
                  <div className="space-y-2">
                    <div className="text-sm">Question 1/10</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-brand-blue h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-blue mt-3">
                    <Play className="h-3 w-3" />
                    <span>Continuer le quiz</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/quiz">Commencer un quiz</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-brand-blue" />
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">Méthodologie</CardTitle>
                <CardDescription>Maîtrisez l'art de la dissertation philosophique</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Guide : Rédiger une introduction</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Accroche et contextualisation</li>
                    <li>• Définition des termes</li>
                    <li>• Problématisation</li>
                    <li>• Annonce du plan</li>
                  </ul>
                  <div className="flex items-center gap-2 text-xs text-brand-blue mt-3">
                    <Play className="h-3 w-3" />
                    <span>Voir le guide complet</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/methodo">Explorer la méthodo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-brand-blue" />
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">Coach IA</CardTitle>
                <CardDescription>Correction personnalisée de vos dissertations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Correction en cours...</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    Dissertation : "La liberté est-elle une illusion ?"
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Note estimée : 15/20</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-blue mt-3">
                    <Play className="h-3 w-3" />
                    <span>Voir la correction détaillée</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/entrainement">Tester le coach IA</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Prêt à commencer votre parcours ?</h2>
              <p className="text-muted-foreground mb-6">
                Créez votre compte gratuit et accédez immédiatement à toutes ces fonctionnalités
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-brand-violet hover:bg-accent/90 text-white">
                  <Link href="/signup">Créer un compte gratuit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/login">J'ai déjà un compte</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
