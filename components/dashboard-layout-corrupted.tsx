"use client"

import Link from "next/link"
import type React from "react"
                <p className="text-sm font-medium text-gray-900">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Utilisateur'}
                </p>
                <p className="text-xs text-muted-foreground">
                  CPGE
                </p>
              </div> { Button } from "@/components/ui/button"
import { Home, FileText, Brain, Bot, BookOpen, Menu, LogOut, Settings } from "lucide-react"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { signOut, user } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  const navigation = [
    { name: "Accueil", href: "/dashboard", icon: Home },
    { name: "Fiches", href: "/dashboard/fiches", icon: FileText },
    { name: "Quiz", href: "/dashboard/quiz", icon: Brain },
    { name: "Méthodo", href: "/dashboard/methodo", icon: BookOpen },
    { name: "Entraînements IA", href: "/dashboard/correction", icon: Bot },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo-philow-hd.png" alt="Logo Philow" className="w-8 h-8 rounded-lg" />
              <span className="text-2xl font-serif font-bold text-gray-900 tracking-wide">Philow</span>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href + "/"))
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ${isActive ? "bg-gray-100 text-gray-900" : ""}`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center gap-3 px-4 py-3 mb-2">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-700 font-medium">
                  {user?.user_metadata?.first_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Utilisateur'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {user?.user_metadata?.filiere?.toUpperCase() || 'CPGE'}
                </p>
              </div>
            </div>
            <Link
              href="/dashboard/parametres"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 mb-2 ${pathname === "/dashboard/parametres" ? "bg-gray-100 text-gray-900" : ""}`}
            >
              <Settings className="h-5 w-5" />
              <span>Paramètres</span>
            </Link>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Se déconnecter
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-sm">
          <div className="flex h-16 items-center px-6 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo-philow-hd.png" alt="Logo Philow" className="w-8 h-8 rounded-lg" />
              <span className="text-2xl font-serif font-bold text-gray-900 tracking-wide">Philow</span>
            </Link>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href + "/"))
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ${isActive ? "bg-gray-100 text-gray-900" : ""}`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center gap-3 px-4 py-3 mb-2">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-700 font-medium">
                  {user?.user_metadata?.first_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Utilisateur'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {user?.user_metadata?.filiere?.toUpperCase() || 'CPGE'}
                </p>
              </div>
            </div>
            <Link
              href="/dashboard/parametres"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 mb-2 ${pathname === "/dashboard/parametres" ? "bg-gray-100 text-gray-900" : ""}`}
            >
              <Settings className="h-5 w-5" />
              <span>Paramètres</span>
            </Link>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Se déconnecter
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center">
              <h1 className="text-xl font-serif font-semibold text-gray-900">
                {pathname === "/dashboard" && "Tableau de bord"}
                {pathname.startsWith("/dashboard/fiches") && "Fiches littéraires"}
                {pathname.startsWith("/dashboard/quiz") && "Quiz"}
                {pathname.startsWith("/dashboard/methodo") && "Méthodologie"}
                {pathname.startsWith("/dashboard/correction") && "Entraînements IA"}
                {pathname === "/dashboard/parametres" && "Paramètres"}
              </h1>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">{children}</main>
      </div>
    </div>
  )
}
