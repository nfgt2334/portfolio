'use client'

import Link from 'next/link'
import { Menu, X, Home, User, Code2, Briefcase, Mail } from 'lucide-react'
import { useState } from 'react'
import ColorThemeSelector from '@/components/ColorThemeSelector'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/skills', label: 'Skills', icon: Code2 },
    { href: '/works', label: 'Works', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <nav className="w-full sticky top-0 z-50 bg-white dark:bg-black border-b dark:border-gray-700 shadow-sm dark:shadow-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-black dark:text-white transition-colors"
        >
          My Portfolio
        </Link>

        {/* モバイルメニューアイコン */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-black dark:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* PC用ナビゲーション */}
        <div className="hidden sm:flex space-x-6">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
          <ColorThemeSelector />
        </div>
      </div>

      {/* モバイル用ドロワー */}
      {isOpen && (
        <div className="sm:hidden p-4 border-t dark:border-gray-700 bg-white dark:bg-black transition-colors">
          <div className="flex flex-col space-y-3">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span className="text-base font-medium">{label}</span>
              </Link>
            ))}

            {/* モバイル用テーマ切り替え */}
            <div className="pt-2 border-t dark:border-gray-700 flex justify-end">
              <ColorThemeSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
