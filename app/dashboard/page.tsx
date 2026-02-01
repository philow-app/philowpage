'use client'

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DashboardLayout from "@/components/dashboard-layout"
import { BookOpen, Brain, FileText, PenTool, ArrowRight, Zap, Users, BookMarked, HelpCircle } from "lucide-react"

export default function DashboardPage() {
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-brand rounded-xl p-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-serif font-bold mb-2">
                Bonjour !
              </h1>
              <p className="text-white/90 text-lg">
                Votre plateforme pour le français/philosophie en CPGE
              </p>
            </div>
            <Link href="/dashboard/soutenir">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg text-lg px-8 py-6">
                Nous Soutenir
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Actions - Main Features */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Raccourcis principaux</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Correction IA */}
            <Link href="/dashboard/correction">
              <Card className="feature-card group cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4 flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                      <Brain className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-serif text-gray-900">Correction IA</CardTitle>
                  <CardDescription>Corrigez vos dissertations et résumés manuscrits</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-2 text-sm text-blue-600 group-hover:text-blue-700">
                    <Zap className="h-4 w-4" />
                    <span>Correction instantanée</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Quiz */}
            <Link href="/dashboard/quiz">
              <Card className="feature-card group cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4 flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300">
                      <HelpCircle className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-serif text-gray-900">Quiz</CardTitle>
                  <CardDescription>Testez vos connaissances sur les œuvres</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-2 text-sm text-indigo-600 group-hover:text-indigo-700">
                    <HelpCircle className="h-4 w-4" />
                    <span>Questions interactives</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Fiches par œuvre */}
            <Link href="/dashboard/fiches">
              <Card className="feature-card group cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4 flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-all duration-300">
                      <BookOpen className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-green-600 transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-serif text-gray-900">Fiches par œuvre</CardTitle>
                  <CardDescription>Canguilhem, Verne, Haushofer - Analyses détaillées</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-2 text-sm text-green-600 group-hover:text-green-700">
                    <BookMarked className="h-4 w-4" />
                    <span>3 œuvres au programme</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Méthodologie */}
            <Link href="/dashboard/methodo">
              <Card className="feature-card group cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4 flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                      <PenTool className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-purple-600 transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-serif text-gray-900">Méthodologie</CardTitle>
                  <CardDescription>Guides et conseils pour réussir vos exercices</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-2 text-sm text-purple-600 group-hover:text-purple-700">
                    <Users className="h-4 w-4" />
                    <span>Méthodes CPGE</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Quick Tips */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg font-serif text-gray-900 flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              Conseil du jour
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Pour une dissertation réussie, pensez à bien problématiser votre sujet dès l'introduction et à structurer 
              votre développement en parties claires avec des transitions fluides.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
