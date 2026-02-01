import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Search, Tag } from "lucide-react"

export default function ThematiquesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Thématiques & Synthèses</h1>
          <p className="text-muted-foreground">
            Explorez les analyses transversales et les comparaisons entre les œuvres
          </p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Rechercher..."
              className="h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:w-[200px] lg:w-[300px]"
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="thematiques" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="thematiques">Thématiques</TabsTrigger>
          <TabsTrigger value="comparaisons">Comparaisons</TabsTrigger>
          <TabsTrigger value="tableaux">Tableaux synthétiques</TabsTrigger>
        </TabsList>
        <TabsContent value="thematiques" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Thématique</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>15 min</span>
                  </div>
                </div>
                <CardTitle className="mt-2">Le pouvoir et ses limites</CardTitle>
                <CardDescription>Analyse transversale du thème du pouvoir</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comment les trois auteurs au programme abordent-ils la question du pouvoir, ses mécanismes et ses
                  limites ?
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/thematiques/pouvoir-limites">Lire l'analyse</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Thématique</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>12 min</span>
                  </div>
                </div>
                <CardTitle className="mt-2">Liberté et déterminisme</CardTitle>
                <CardDescription>La question de la liberté dans les œuvres au programme</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyse des conceptions de la liberté et du déterminisme chez Spinoza, Machiavel et Wharton.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/thematiques/liberte-determinisme">Lire l'analyse</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Thématique</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>18 min</span>
                  </div>
                </div>
                <CardTitle className="mt-2">Individu et société</CardTitle>
                <CardDescription>Les rapports entre l'individu et le collectif</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comment les trois auteurs conçoivent-ils les relations entre l'individu et la société ? Quelles
                  tensions émergent ?
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/thematiques/individu-societe">Lire l'analyse</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Thématique</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>14 min</span>
                  </div>
                </div>
                <CardTitle className="mt-2">Éthique et politique</CardTitle>
                <CardDescription>Les relations entre morale et politique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyse des rapports entre considérations éthiques et exercice du pouvoir politique chez les trois
                  auteurs.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/thematiques/ethique-politique">Lire l'analyse</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Thématique</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>16 min</span>
                  </div>
                </div>
                <CardTitle className="mt-2">Passion et raison</CardTitle>
                <CardDescription>Le rôle des affects et de la raison</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comment les trois auteurs conçoivent-ils les rapports entre passions et raison ? Quelle place
                  accordent-ils aux affects ?
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/thematiques/passion-raison">Lire l'analyse</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Thématique</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>13 min</span>
                  </div>
                </div>
                <CardTitle className="mt-2">Nature et culture</CardTitle>
                <CardDescription>Les conceptions de la nature humaine</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyse des conceptions de la nature humaine et du rôle de la culture dans les œuvres au programme.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/thematiques/nature-culture">Lire l'analyse</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="comparaisons">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>Spinoza et Machiavel</CardTitle>
                <CardDescription>Comparaison des conceptions du pouvoir</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyse comparative des conceptions du pouvoir politique chez Spinoza et Machiavel : points communs et
                  divergences.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/comparaisons/spinoza-machiavel">Lire la comparaison</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>Spinoza et Wharton</CardTitle>
                <CardDescription>Liberté et déterminisme</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comparaison des conceptions de la liberté et du déterminisme chez Spinoza et dans l'œuvre de Wharton.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/comparaisons/spinoza-wharton">Lire la comparaison</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>Machiavel et Wharton</CardTitle>
                <CardDescription>Pouvoir et conventions sociales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyse comparative des mécanismes du pouvoir et des conventions sociales chez Machiavel et Wharton.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/comparaisons/machiavel-wharton">Lire la comparaison</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="tableaux">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tableau comparatif : Le pouvoir</CardTitle>
                <CardDescription>Synthèse des conceptions du pouvoir dans les trois œuvres</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left font-medium">Auteur</th>
                        <th className="py-2 px-4 text-left font-medium">Conception du pouvoir</th>
                        <th className="py-2 px-4 text-left font-medium">Limites du pouvoir</th>
                        <th className="py-2 px-4 text-left font-medium">Citations clés</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">Spinoza</td>
                        <td className="py-2 px-4 text-sm">Puissance d'agir, conatus</td>
                        <td className="py-2 px-4 text-sm">Affects, passions, ignorance</td>
                        <td className="py-2 px-4 text-sm">
                          "Le droit de chacun s'étend jusqu'où s'étend sa puissance."
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">Machiavel</td>
                        <td className="py-2 px-4 text-sm">Art de gouverner, virtù</td>
                        <td className="py-2 px-4 text-sm">Fortune, instabilité politique</td>
                        <td className="py-2 px-4 text-sm">"Il est bien plus sûr d'être craint que d'être aimé."</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Wharton</td>
                        <td className="py-2 px-4 text-sm">Conventions sociales, influence</td>
                        <td className="py-2 px-4 text-sm">Désirs individuels, évolution des mœurs</td>
                        <td className="py-2 px-4 text-sm">
                          "Dans la société de New York, on ne fait pas ce qu'on veut."
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/tableaux/pouvoir">Voir le tableau complet</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tableau comparatif : Liberté et déterminisme</CardTitle>
                <CardDescription>Synthèse des conceptions de la liberté dans les trois œuvres</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left font-medium">Auteur</th>
                        <th className="py-2 px-4 text-left font-medium">Conception de la liberté</th>
                        <th className="py-2 px-4 text-left font-medium">Formes de déterminisme</th>
                        <th className="py-2 px-4 text-left font-medium">Citations clés</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">Spinoza</td>
                        <td className="py-2 px-4 text-sm">Connaissance des causes, libération des passions</td>
                        <td className="py-2 px-4 text-sm">Déterminisme causal, nécessité</td>
                        <td className="py-2 px-4 text-sm">
                          "Un homme libre est celui qui vit selon les seuls commandements de la raison."
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">Machiavel</td>
                        <td className="py-2 px-4 text-sm">Maîtrise de la fortune, virtù politique</td>
                        <td className="py-2 px-4 text-sm">Fortune, circonstances historiques</td>
                        <td className="py-2 px-4 text-sm">"La fortune est l'arbitre de la moitié de nos actions."</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Wharton</td>
                        <td className="py-2 px-4 text-sm">Choix individuels, émancipation</td>
                        <td className="py-2 px-4 text-sm">Conventions sociales, pressions familiales</td>
                        <td className="py-2 px-4 text-sm">"Chacun de nous a une cage qu'il appelle liberté."</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/tableaux/liberte">Voir le tableau complet</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
