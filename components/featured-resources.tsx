import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, FileText } from "lucide-react"

export default function FeaturedResources() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ressources populaires</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez nos ressources les plus consultées par les étudiants en CPGE
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge>Fiche d'œuvre</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>10 min</span>
                </div>
              </div>
              <CardTitle className="mt-2">L'Éthique de Spinoza : résumé complet</CardTitle>
              <CardDescription>Structure, thèses principales et citations essentielles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Une analyse détaillée des cinq parties de l'Éthique, avec un focus sur les concepts de puissance,
                liberté et servitude.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/fiches/ethique" className="text-sm text-primary hover:underline inline-flex items-center">
                Lire la fiche
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Thématique</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>15 min</span>
                </div>
              </div>
              <CardTitle className="mt-2">Le pouvoir et ses limites</CardTitle>
              <CardDescription>Analyse comparative entre Spinoza, Machiavel et Wharton</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Comment les trois auteurs au programme abordent-ils la question du pouvoir, ses mécanismes et ses
                limites ?
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/thematiques/pouvoir-limites"
                className="text-sm text-primary hover:underline inline-flex items-center"
              >
                Lire l'analyse
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">Citations</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="mr-1 h-3 w-3" />
                  <span>50 citations</span>
                </div>
              </div>
              <CardTitle className="mt-2">Citations clés sur le pouvoir</CardTitle>
              <CardDescription>Sélection commentée pour vos dissertations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Les citations incontournables sur le pouvoir, classées par auteur et par thème, avec des conseils
                d'utilisation.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/citations/pouvoir" className="text-sm text-primary hover:underline inline-flex items-center">
                Voir les citations
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Link href="/ressources" className="inline-flex items-center text-primary hover:underline">
            Voir toutes les ressources
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
