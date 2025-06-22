'use client'

import Link from 'next/link'
import { Code2, User, Briefcase, Mail, FileText } from 'lucide-react'
import { MotionWrapper } from '@/components/MotionWrapper'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <MotionWrapper
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="text-center">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to
          </h1>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-4 font-medium">
            エンジニアとしての技術と経験をご紹介します
          </p>
        </div>
      </MotionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {cardList.map((card, index) => (
          <MotionWrapper
            key={card.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <Card {...card} />
          </MotionWrapper>
        ))}
      </div>
    </div>
  )
}

const cardList = [
  { href: '/profile', label: 'Profile', Icon: User },
  { href: '/skills', label: 'Skills', Icon: Code2 },
  { href: '/works', label: 'Works', Icon: Briefcase },
  { href: '/articles', label: 'Articles', Icon: FileText },
  { href: '/contact', label: 'Contact', Icon: Mail },
]

type CardProps = {
  href: string
  label: string
  Icon: React.ElementType
}

const Card = ({ href, label, Icon }: CardProps) => (
  <Link
    href={href}
    className="group block h-full"
  >
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group-hover:border-blue-200 dark:group-hover:border-blue-700">
      <div className="p-8 h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-900 dark:group-hover:to-purple-900 transition-all duration-300">
          <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {label}
        </h3>
      </div>
    </div>
  </Link>
)
