import { notFound } from 'next/navigation'

const works = {
  portfolio: {
    title: 'ポートフォリオサイト',
    content:
      'このポートフォリオは Next.js と Tailwind CSS、Radix UI を使って構築しました。デザインとUXの両立を意識しています。',
  },
  'internal-tool': {
    title: '業務改善ツール',
    content:
      '社内フローを自動化するためのツールです。Nuxt 3 + Pinia + Composition API を活用して構築されました。',
  },
}

export default async function WorkDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const work = works[slug as keyof typeof works]

  if (!work) return notFound()

  return (
    <div className="min-h-screen px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{work.title}</h1>
      <p className="text-gray-700 leading-relaxed text-lg">{work.content}</p>
    </div>
  )
}
