'use client'

import Link from 'next/link'
import { Code2, User, Briefcase, Mail } from 'lucide-react'
import { MotionWrapper } from '@/components/MotionWrapper'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <MotionWrapper
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl font-extrabold text-center tracking-tight text-black dark:text-white leading-tight">
          Welcome to
          <br />
          My Portfolio
        </h1>
      </MotionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {cardList.map((card, index) => (
          <MotionWrapper
            key={card.href}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
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
    className="group flex flex-col items-center justify-center py-14 px-8 border rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300
      bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 
      hover:scale-105 active:scale-95
      hover:bg-slate-50 dark:hover:bg-gray-700"
  >
    <Icon className="h-12 w-12 mb-6 text-gray-600 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400 transition-colors duration-300" />
    <span className="text-2xl font-semibold text-gray-700 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400 transition-colors duration-300">
      {label}
    </span>
  </Link>
)
