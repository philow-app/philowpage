'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import DashboardLayout from "@/components/dashboard-layout"
import { User, Settings, Shield, Trash2, Save, AlertTriangle, Users } from "lucide-react"
import { supabase } from '@/lib/supabase/client'

export default function ParametresPage() {
  const router = useRouter()
  
  // États pour les informations personnelles
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [filiere, setFiliere] = useState('')
  const [user, setUser] = useState<any>(null)
  
  // États pour le changement de mot de passe
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  // États de l'interface
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  // Charger les données utilisateur au montage
  useEffect(() => {
    const loadUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      if (user) {
        console.log('Données utilisateur actuelles:', user)
        console.log('Métadonnées utilisateur:', user.user_metadata)
        setFirstName(user.user_metadata?.first_name || '')
        setLastName(user.user_metadata?.last_name || '')
        setEmail(user.email || '')
        setFiliere(user.user_metadata?.filiere || '')
      }
    }
    loadUser()
  }, [])

  const showMessage = (text: string, type: 'success' | 'error' = 'success') => {
    setMessage(text)
    setMessageType(type)
    setTimeout(() => setMessage(''), 5000)
  }

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      console.log('Mise à jour du profil avec:', { firstName, lastName, filiere })
      
      const { data, error } = await supabase.auth.updateUser({
        data: {
          first_name: firstName,
          last_name: lastName,
          filiere: filiere,
          full_name: `${firstName} ${lastName}`
        }
      })

      console.log('Résultat de la mise à jour:', { data, error })

      if (error) {
        console.error('Erreur Supabase:', error)
        showMessage(`Erreur lors de la mise à jour du profil: ${error.message}`, 'error')
      } else {
        console.log('Profil mis à jour avec succès')
        showMessage('Profil mis à jour avec succès')
      }
    } catch (err) {
      console.error('Erreur générale:', err)
      showMessage('Une erreur est survenue', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (newPassword !== confirmPassword) {
      showMessage('Les nouveaux mots de passe ne correspondent pas', 'error')
      setIsLoading(false)
      return
    }

    if (newPassword.length < 6) {
      showMessage('Le nouveau mot de passe doit contenir au moins 6 caractères', 'error')
      setIsLoading(false)
      return
    }

    try {
      console.log('Changement de mot de passe en cours...')
      
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword
      })

      console.log('Résultat du changement de mot de passe:', { data, error })

      if (error) {
        console.error('Erreur Supabase:', error)
        showMessage(`Erreur lors du changement de mot de passe: ${error.message}`, 'error')
      } else {
        console.log('Mot de passe modifié avec succès')
        showMessage('Mot de passe modifié avec succès')
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
      }
    } catch (err) {
      console.error('Erreur générale:', err)
      showMessage('Une erreur est survenue', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteAccount = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
      try {
        // Note: Supabase ne permet pas la suppression automatique du compte côté client
        // Dans un vrai projet, il faudrait créer une API route pour cela
        showMessage('Pour supprimer votre compte, contactez le support', 'error')
      } catch (err) {
        showMessage('Une erreur est survenue', 'error')
      }
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Paramètres</h1>
          <p className="text-gray-600 mt-2">
            Gérez vos informations personnelles et préférences de compte
          </p>
        </div>

        {/* Message d'état */}
        {message && (
          <Alert className={messageType === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
            <AlertDescription className={messageType === 'success' ? 'text-green-800' : 'text-red-800'}>
              {message}
            </AlertDescription>
          </Alert>
        )}

        {/* Onglets */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profil
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Sécurité
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Compte
            </TabsTrigger>
          </TabsList>

          {/* Onglet Profil */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>
                  Modifiez vos informations personnelles et votre filière
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input 
                        id="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input 
                        id="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email}
                      disabled
                      className="bg-gray-50"
                    />
                    <p className="text-sm text-gray-500">
                      L'adresse email ne peut pas être modifiée
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="filiere">Filière</Label>
                    <Select value={filiere} onValueChange={setFiliere}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre filière" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pcsi">PCSI</SelectItem>
                        <SelectItem value="ptsi">PTSI</SelectItem>
                        <SelectItem value="mpsi">MPSI</SelectItem>
                        <SelectItem value="mp">MP</SelectItem>
                        <SelectItem value="pc">PC</SelectItem>
                        <SelectItem value="psi">PSI</SelectItem>
                        <SelectItem value="pt">PT</SelectItem>
                        <SelectItem value="khagne">Khâgne</SelectItem>
                        <SelectItem value="hypokhagne">Hypokhâgne</SelectItem>
                        <SelectItem value="bcpst">BCPST</SelectItem>
                        <SelectItem value="tb">TB</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" disabled={isLoading} className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    {isLoading ? 'Mise à jour...' : 'Sauvegarder'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">Comment ça marche ?</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <p>Partagez votre code de parrainage ou votre lien avec vos amis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <p>Ils s'inscrivent en utilisant votre code</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <p>Après 3 amis invités, vous obtenez une récompense et le cycle recommence !</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Prochainement :</strong> Les récompenses incluront des mois d'abonnement gratuits, 
                      des fonctionnalités premium et bien plus encore !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Sécurité */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Changer le mot de passe</CardTitle>
                <CardDescription>
                  Modifiez votre mot de passe pour sécuriser votre compte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                    <Input 
                      id="currentPassword" 
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Votre mot de passe actuel"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                    <Input 
                      id="newPassword" 
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Nouveau mot de passe (min. 6 caractères)"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmer le nouveau mot de passe</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirmez le nouveau mot de passe"
                      required
                    />
                  </div>
                  
                  <Button type="submit" disabled={isLoading} className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    {isLoading ? 'Modification...' : 'Changer le mot de passe'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Compte */}
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations du compte</CardTitle>
                <CardDescription>
                  Détails de votre compte et actions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Email</Label>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Membre depuis</Label>
                    <p className="text-sm text-gray-600">
                      {user?.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR') : 'N/A'}
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium text-red-600">Zone de danger</h4>
                  
                  <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <h5 className="font-medium text-red-800">Supprimer le compte</h5>
                        <p className="text-sm text-red-700 mt-1">
                          Cette action est irréversible. Toutes vos données seront perdues.
                        </p>
                        <Button 
                          variant="destructive" 
                          className="mt-3 flex items-center gap-2"
                          onClick={handleDeleteAccount}
                        >
                          <Trash2 className="h-4 w-4" />
                          Supprimer le compte
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
