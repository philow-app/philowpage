"use client"

import Link from "next/link"
import type React from "react"
import { Button } from "@/components/ui/button"
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
  const { user, signOut } = useAuth()

  const navigationItems = [
    {
      name: 'Accueil',
      href: '/dashboard',
      icon: Home,
    },
    {
      name: 'Corrections',
      href: '/dashboard/correction',
      icon: FileText,
    },
    {
      name: 'Quiz',
      href: '/dashboard/quiz',
      icon: Brain,
    },
    {
      name: 'Méthodologie',
      href: '/dashboard/methodo',
      icon: BookOpen,
    },
    {
      name: 'Fiches',
      href: '/dashboard/fiches',
      icon: Bot,
    },
    {
      name: 'Paramètres',
      href: '/dashboard/parametres',
      icon: Settings,
    },
  ]

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar pour desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-2xl font-bold text-gray-900">Philow</h1>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      ${isActive
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                      group flex items-center px-2 py-2 text-sm font-medium border-l-4 rounded-r-md
                    `}
                  >
                    <item.icon
                      className={`
                        ${isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
                        mr-3 flex-shrink-0 h-6 w-6
                      `}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user?.user_metadata?.first_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Utilisateur'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      CPGE
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSignOut}
                    className="ml-2"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <span className="sr-only">Close sidebar</span>
              </Button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <h1 className="text-2xl font-bold text-gray-900">Philow</h1>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        ${isActive
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }
                        group flex items-center px-2 py-2 text-sm font-medium border-l-4 rounded-r-md
                      `}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon
                        className={`
                          ${isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
                          mr-3 flex-shrink-0 h-6 w-6
                        `}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user?.user_metadata?.first_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Utilisateur'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      CPGE
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSignOut}
                    className="ml-2"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
