'use client'

import Link from 'next/link'
import { Code2, User, Briefcase, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900 transition-colors">
      <h1 className="text-5xl font-extrabold text-center mt-8 mb-12 tracking-tight text-black dark:text-white">
        Welcome to My Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <Card href="/profile" label="Profile" Icon={User} />
        <Card href="/skills" label="Skills" Icon={Code2} />
        <Card href="/works" label="Works" Icon={Briefcase} />
        <Card href="/contact" label="Contact" Icon={Mail} />
      </div>
    </div>
  )
}

type CardProps = {
  href: string
  label: string
  Icon: React.ElementType
}

const Card = ({ href, label, Icon }: CardProps) => (
  <Link
    href={href}
    className="flex flex-col items-center justify-center py-12 px-6 border rounded-3xl shadow-md hover:shadow-lg transition-all 
      bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 
      hover:bg-slate-50 dark:hover:bg-gray-700"
  >
    <Icon className="h-12 w-12 mb-4 text-gray-600 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white transition-colors" />
    <span className="text-xl font-semibold text-gray-700 group-hover:text-black dark:text-gray-200 dark:group-hover:text-white transition-colors">
      {label}
    </span>
  </Link>
)
