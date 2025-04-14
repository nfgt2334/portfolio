'use client'

import Link from 'next/link'
import { Briefcase } from 'lucide-react'

const works = [
  {
    slug: 'portfolio',
    title: 'ポートフォリオサイト',
    description:
      'Next.js + Tailwind CSS + Radix UI を使ったポートフォリオサイト。',
  },
  {
    slug: 'internal-tool',
    title: '業務改善ツール',
    description: '社内業務を効率化するためのVue/Nuxt製のツール。',
  },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 flex items-center space-x-2">
        <Briefcase className="w-8 h-8" />
        <span>Works</span>
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {works.map((work) => (
          <Link
            key={work.slug}
            href={`/works/${work.slug}`}
            className="block p-6 border rounded-3xl shadow-md hover:shadow-lg transition-all hover:bg-slate-50"
          >
            <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
            <p className="text-gray-600 text-sm">{work.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
