"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"
import { Heart, Users, BookOpen, Sparkles } from "lucide-react"

export default function SoutenirPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Nous Soutenir
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Aidez-nous à améliorer Philow et à continuer de vous accompagner
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Notre Histoire</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Nous sommes <span className="font-bold text-blue-600">trois étudiants</span> passionnés qui avons créé 
                      ce site <span className="font-bold">entièrement gratuitement</span> pour vous accompagner durant 
                      ces années difficiles de prépa.
                    </p>
                    
                    <p>
                      De la conception des <span className="font-semibold">fiches de révision détaillées</span>, 
                      à la création des <span className="font-semibold">quiz interactifs</span>, en passant par 
                      les <span className="font-semibold">guides méthodologiques</span>, chaque ressource a été 
                      pensée et réalisée avec soin pour vous aider à réussir.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-blue-900">
                          Des heures de travail incalculables ont été investies pour créer du contenu 
                          de qualité, accessible à tous, sans aucun frais.
                        </p>
                      </div>
                    </div>

                    <p>
                      Notre objectif est simple : <span className="font-bold">démocratiser l'accès aux ressources 
                      de qualité</span> pour tous les étudiants en prépa, quelle que soit leur situation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-7 w-7 text-green-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Pourquoi nous soutenir ?</h3>
                  </div>
                  
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Améliorer les fonctionnalités existantes (corrections IA, quiz personnalisés...)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Ajouter de nouveaux contenus et fiches de révision</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Maintenir le site accessible et performant pour tous</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Couvrir les frais d'hébergement et de développement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: PayPal QR Code */}
            <div>
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Faire un Don
                      </h3>
                      <p className="text-gray-600">
                        Chaque contribution compte et nous aide énormément !
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                      <Image 
                        src="/images/paypal.jpg"
                        alt="QR Code PayPal"
                        width={300}
                        height={300}
                        className="rounded-lg"
                        priority
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Scannez le QR code avec votre téléphone
                      </p>
                      <p className="text-xs text-gray-500 italic">
                        ou utilisez PayPal directement
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-800 text-sm font-medium">
                        💝 Merci pour votre générosité et votre soutien !
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Note */}
              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 text-center">
                  <BookOpen className="h-4 w-4 inline mr-2" />
                  Votre don nous permettra de consacrer encore plus de temps 
                  à la création de contenu de qualité pour vous aider à réussir vos concours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
