'use client'

import Link from 'next/link'
import { Code2, User, Briefcase, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight">
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
    className="flex flex-col items-center justify-center py-12 px-6 border rounded-3xl shadow-md hover:shadow-2xl transition-all hover:bg-slate-100 hover:scale-105 group"
  >
    <Icon className="h-12 w-12 mb-4 text-gray-600 group-hover:text-black transition-colors" />
    <span className="text-xl font-semibold text-gray-700 group-hover:text-black transition-colors">
      {label}
    </span>
  </Link>
)
