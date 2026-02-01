import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ArrowRight } from "lucide-react"

export default function ThemeHighlight() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Thème de l'année 2025-2026
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">L'Humain et la Science</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explorez le thème de l'humain et la science à travers les œuvres au programme : "Vingt mille lieues sous
                les mers" de Jules Verne, "Le Mur invisible" de Marlen Haushofer et "La Connaissance de la vie" de
                Georges Canguilhem.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/theme/humain-science">
                  Explorer le thème
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/fiches">Voir les œuvres</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex flex-col items-start gap-2 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Vingt mille lieues sous les mers</h3>
                  <p className="text-sm text-muted-foreground">Jules Verne</p>
                  <Link href="/fiches/vingt-mille-lieues" className="text-sm text-primary hover:underline">
                    Voir la fiche
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Le Mur invisible</h3>
                  <p className="text-sm text-muted-foreground">Marlen Haushofer</p>
                  <Link href="/fiches/mur-invisible" className="text-sm text-primary hover:underline">
                    Voir la fiche
                  </Link>
                </CardContent>
              </Card>
              <Card className="sm:col-span-2">
                <CardContent className="flex flex-col items-start gap-2 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">La Connaissance de la vie</h3>
                  <p className="text-sm text-muted-foreground">Georges Canguilhem</p>
                  <Link href="/fiches/connaissance-vie" className="text-sm text-primary hover:underline">
                    Voir la fiche
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
