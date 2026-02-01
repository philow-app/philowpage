import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, CheckCircle, Clock, FileText, GraduationCap, ListChecks } from "lucide-react"

export default function ParcoursPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Mon parcours personnalisé</h1>
        <p className="text-muted-foreground">
          Suivez votre progression et accédez à des ressources adaptées à votre profil
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profil</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Filière</span>
                <span className="text-sm font-medium">MPSI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Concours visés</span>
                <span className="text-sm font-medium">Mines-Ponts, Centrale-Supélec</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Niveau actuel</span>
                <span className="text-sm font-medium">Intermédiaire</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Modifier mon profil
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Progression globale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progression totale</span>
                  <span className="font-medium">45%</span>
                </div>
                <Progress value={45} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold">3/5</div>
                  <div className="text-xs text-muted-foreground">Fiches lues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-xs text-muted-foreground">Entraînements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs text-muted-foreground">Citations</div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Voir les détails
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Prochaine échéance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Concours blanc</h3>
                <p className="text-sm text-muted-foreground">Dans 3 semaines</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Gérer mon calendrier
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="recommandations" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="recommandations">Recommandations</TabsTrigger>
          <TabsTrigger value="programme">Mon programme</TabsTrigger>
          <TabsTrigger value="historique">Historique</TabsTrigger>
        </TabsList>
        <TabsContent value="recommandations" className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Recommandations personnalisées</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Fiche prioritaire</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">Le pouvoir politique chez Machiavel</CardTitle>
                  <CardDescription>Recommandé pour votre niveau et vos concours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cette fiche approfondit la conception machiavélienne du pouvoir politique, un sujet fréquent aux
                    concours Mines-Ponts.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Consulter maintenant</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Entraînement recommandé</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">Dissertation guidée</CardTitle>
                  <CardDescription>Adapté à votre niveau actuel</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Entraînez-vous sur un sujet de dissertation avec un accompagnement étape par étape et des conseils
                    personnalisés.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Commencer l'entraînement</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ListChecks className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Citations à maîtriser</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">Citations clés de Spinoza</CardTitle>
                  <CardDescription>Essentiel pour vos concours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Une sélection des 10 citations les plus importantes de Spinoza à maîtriser pour les concours
                    Centrale-Supélec.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Mémoriser ces citations</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="programme">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Mon programme hebdomadaire</CardTitle>
                <CardDescription>
                  Programme personnalisé en fonction de vos objectifs et de votre disponibilité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div className="font-medium">Lundi</div>
                    <div className="text-sm text-muted-foreground">1h30 recommandée</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Lire la fiche "Le pouvoir politique chez Machiavel"</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mémoriser 5 citations clés</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div className="font-medium">Mercredi</div>
                    <div className="text-sm text-muted-foreground">2h recommandées</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Rédiger l'introduction de la dissertation guidée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Lire la fiche "Liberté et nécessité chez Spinoza"</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div className="font-medium">Samedi</div>
                    <div className="text-sm text-muted-foreground">3h recommandées</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Terminer la dissertation guidée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Réviser les fiches de la semaine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">S'entraîner sur 10 nouvelles citations</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  Ajuster mon programme
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="historique">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Activités récentes</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Fiche consultée</h3>
                    <p className="text-sm text-muted-foreground">L'Éthique de Spinoza : résumé complet</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Clock className="inline-block mr-1 h-3 w-3" />
                    Il y a 2 jours
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Entraînement complété</h3>
                    <p className="text-sm text-muted-foreground">
                      Dissertation : "Le pouvoir est-il nécessairement source de conflit ?"
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Clock className="inline-block mr-1 h-3 w-3" />
                    Il y a 3 jours
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Quiz complété</h3>
                    <p className="text-sm text-muted-foreground">Les concepts clés de Machiavel</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Clock className="inline-block mr-1 h-3 w-3" />
                    Il y a 1 semaine
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Statistiques</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Temps d'étude</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12h30</div>
                    <p className="text-sm text-muted-foreground">Ce mois-ci</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Fiches consultées</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">8</div>
                    <p className="text-sm text-muted-foreground">Sur 15 disponibles</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Entraînements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">5</div>
                    <p className="text-sm text-muted-foreground">Depuis votre inscription</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
