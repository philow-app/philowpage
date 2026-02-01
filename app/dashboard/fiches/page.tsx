"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, User, Calendar } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

const literaryWorks = [
  {
    id: "canguilhem",
    title: "La connaissance de la vie",
    author: "Georges Canguilhem",
    subtitle:
      "« Introduction : La pensée et le vivant », « I. Méthode », « III. Philosophie – chapitres II, III, IV et V »",
    description:
      "Une réflexion fondamentale sur les rapports entre la pensée scientifique et le vivant, explorant les concepts de normalité, pathologie et connaissance biologique.",
    theme: "Philosophie des sciences",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    textColor: "text-blue-700",
    href: "/dashboard/fiches/canguilhem",
  },
  {
    id: "verne",
    title: "Vingt mille lieues sous les mers",
    author: "Jules Verne (1828-1905)",
    subtitle: "Roman d'aventures scientifiques publié en 1870",
    description:
      "Chef-d'œuvre de la littérature d'anticipation, ce roman suit le professeur Aronnax et ses compagnons, prisonniers du mystérieux capitaine Nemo à bord du Nautilus. Verne explore les thèmes de l'exploration scientifique et de la relation entre l'homme et la nature marine.",
    biography:
      "Jules Verne (1828-1905) est considéré comme l'un des pères de la science-fiction moderne. Né à Nantes, il développe très tôt une passion pour les voyages et les découvertes scientifiques. Auteur prolifique, il écrit plus de 60 romans d'aventures scientifiques dans sa série des 'Voyages extraordinaires'. Son œuvre, traduite dans le monde entier, influence profondément la littérature d'anticipation et inspire de nombreuses innovations technologiques.",
    plotSummary:
      "En 1866, un monstre marin mystérieux terrorise les océans. Le professeur Pierre Aronnax, naturaliste français, embarque sur l'Abraham Lincoln pour capturer cette créature. Après un naufrage, Aronnax, son fidèle domestique Conseil et le harponneur canadien Ned Land se retrouvent prisonniers à bord du Nautilus, un sous-marin révolutionnaire commandé par l'énigmatique capitaine Nemo. Pendant dix mois, ils parcourent les océans du globe, découvrant les merveilles et les dangers des profondeurs marines, tout en tentant de percer le mystère de leur geôlier.",
    keyCharacters: [
      {
        name: "Capitaine Nemo",
        description:
          "Commandant mystérieux du Nautilus, génie scientifique torturé par un passé douloureux. Misanthrope cultivé qui a rompu avec la société terrestre pour vivre dans les océans.",
      },
      {
        name: "Professeur Pierre Aronnax",
        description:
          "Naturaliste français, narrateur de l'histoire. Homme de science fasciné par les découvertes marines, partagé entre l'admiration pour Nemo et le désir de liberté.",
      },
      {
        name: "Conseil",
        description:
          "Domestique fidèle et dévoué d'Aronnax, passionné de classification scientifique. Personnage loyal qui suit son maître dans toutes ses aventures.",
      },
      {
        name: "Ned Land",
        description:
          "Harponneur canadien pragmatique et courageux. Représente l'homme d'action qui aspire à la liberté et refuse la captivité dorée du Nautilus.",
      },
    ],
    majorThemes: [
      {
        theme: "L'exploration scientifique",
        description:
          "Le roman célèbre la découverte et l'étude méthodique du monde naturel, incarnée par les observations d'Aronnax et les inventions de Nemo.",
      },
      {
        theme: "Le progrès technologique",
        description:
          "Le Nautilus représente les possibilités infinies de la science et de la technique, anticipant de nombreuses innovations futures.",
      },
      {
        theme: "La relation homme-nature",
        description:
          "Verne explore notre rapport ambivalent à la nature : fascination, exploitation, respect et destruction.",
      },
      {
        theme: "L'isolement et la liberté",
        description:
          "Le conflit entre l'indépendance absolue de Nemo et le désir de liberté des prisonniers questionne les notions d'autonomie et d'appartenance sociale.",
      },
      {
        theme: "L'inconnu et le mystère",
        description:
          "Les profondeurs océaniques symbolisent l'immensité de ce qui reste à découvrir et la part d'inconnu qui fascine l'humanité.",
      },
    ],
    impact:
      "Vingt mille lieues sous les mers révolutionne la littérature d'aventures en y intégrant une dimension scientifique rigoureuse. L'œuvre inspire de nombreux inventeurs et explorateurs, contribuant au développement de la navigation sous-marine. Le personnage de Nemo devient un archétype littéraire, influençant la science-fiction moderne. Le roman anticipe remarquablement les développements technologiques du XXe siècle et reste une référence majeure de la littérature d'anticipation.",
    theme: "Science-fiction",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    textColor: "text-green-700",
    href: "/dashboard/fiches/verne",
  },
  {
    id: "haushofer",
    title: "Le Mur invisible",
    author: "Marlen Haushofer",
    subtitle: "Traduction de Liselotte Bodo et Jacqueline Chambon",
    description:
      "Un récit troublant d'isolement et de survie qui explore les thèmes de la solitude, de la nature et de la condition humaine.",
    theme: "Littérature contemporaine",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    textColor: "text-purple-700",
    href: "/dashboard/fiches/haushofer",
  },
]

export default function FichesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Fiches littéraires CPGE 2025-2026</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les trois œuvres au programme de français-philosophie pour l'année 2025-2026, organisées autour du
            thème <span className="font-semibold text-gray-900">"Expériences de la Nature"</span>
          </p>
        </div>

        {/* Theme of the year */}
        <Card className="bg-gradient-to-r from-grey-50 to-emerald-50 border-black-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-grey-900">
              <Calendar className="h-5 w-5" />
              Thème de l'année 2025-2026
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-serif font-bold text-grey-900 mb-3">Expériences de la Nature</h3>
            <p className="text-grey-800 leading-relaxed">
              Ce thème invite à explorer les multiples façons dont l'humanité entre en relation avec la nature :
              scientifique, poétique, philosophique et existentielle. Comment percevons-nous et comprenons-nous le monde
              naturel ? Quelles expériences la nature nous offre-t-elle ? Les trois œuvres au programme révèlent des
              perspectives complémentaires sur notre rapport fondamental au vivant et à l'environnement qui nous
              entoure.
            </p>
          </CardContent>
        </Card>

        {/* Literary works */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {literaryWorks.map((work) => (
            <Link key={work.id} href={work.href}>
              <Card className={`h-full transition-all duration-200 ${work.color} cursor-pointer`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className={work.textColor}>
                      {work.theme}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-serif leading-tight">{work.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {work.author}
                  </CardDescription>
                  {work.subtitle && <p className="text-sm text-gray-600 italic">{work.subtitle}</p>}
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{work.description}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 pt-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Continuer la lecture</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Study tips */}
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">Conseil pour l'analyse des oeuvres</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Lecture active :</strong> Prenez des notes sur les thèmes principaux et les citations
                  importantes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Liens thématiques :</strong> Identifiez les connexions entre les trois œuvres autour du thème
                  de la connaissance.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Fiches de révision :</strong> Créez des synthèses pour chaque œuvre avec les concepts clés.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-amber-800">
                  <strong>Entraînement régulier :</strong> Utilisez nos quiz et exercices pour tester vos connaissances.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
