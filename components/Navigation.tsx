'use client'

import Link from 'next/link'
import { Menu, X, Home, User, Code2, Briefcase, Mail, FileText } from 'lucide-react'
import { useState } from 'react'
import ColorThemeSelector from '@/components/ColorThemeSelector'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/skills', label: 'Skills', icon: Code2 },
    { href: '/works', label: 'Works', icon: Briefcase },
    { href: '/articles', label: 'Articles', icon: FileText },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
        >
          My Portfolio
        </Link>

        {/* モバイルメニューアイコン */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* PC用ナビゲーション */}
        <div className="hidden lg:flex items-center space-x-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="relative flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-gray-300 dark:border-gray-600">
            <ColorThemeSelector />
          </div>
        </div>
      </div>

      {/* モバイル用ドロワー */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="p-4 space-y-2">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
                <span className="text-base font-medium">{label}</span>
              </Link>
            ))}

            {/* モバイル用テーマ切り替え */}
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 flex justify-center">
              <ColorThemeSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
