import Link from 'next/link'
import { Metadata } from 'next'
import type { DisplayWork } from './types'

export const metadata: Metadata = {
  title: 'Works | Portfolio',
  description: 'Works page.',
}

const works: DisplayWork[] = [
  {
    slug: 'portfolio-1',
    title: '自社サービス開発',
    period: '2024年2月〜在職中',
    description:
      'IPO (新規上場) を目指す企業向けに、タスク管理や情報共有、進捗管理などを一元化して支援するSaaS型クラウドサービス。',
  },
  {
    slug: 'portfolio-2',
    title: '保険契約者向けLIFFアプリ開発',
    period: '2023年9月〜2024年1月',
    description: '個人のお客様向けの保険加入WebサイトをLIFFアプリにて開発。',
  },
  {
    slug: 'portfolio-3',
    title: '官公庁向け経営所得安定対策情報管理システム開発',
    period: '2023年5月〜2023年8月',
    description:
      '官公庁向けの経営所得安定対策情報管理システムの開発にSESとして常駐。',
  },
  {
    slug: 'portfolio-4',
    title: '資格取得用学習Webサイト開発',
    period: '2023年2月〜2023年4月',
    description:
      'P2MやJSTQBなどの資格を取得する為の勉強用Webサイトを社内で開発。',
  },
  {
    slug: 'portfolio-5',
    title: '個人店向けHP',
    period: '2024年3月〜2023年5月',
    description: '両親が自営業で営むFujikiCAKEのホームページを自作しました。',
    selfMade: true,
  },
]

export default function WorksPage() {
  const careerWorks = works.filter((w) => !w.selfMade)
  const selfMadeWorks = works.filter((w) => w.selfMade)

  return (
    <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto space-y-16">
      {/* 職務経歴 */}
      <section>
        <h1 className="font-extrabold text-4xl font-bold mb-8 flex justify-center items-center space-x-2">
          <span>
            Works <span className="text-gray-500 text-sm">職務経歴</span>
          </span>
        </h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {careerWorks.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              className="block p-6 border rounded-3xl shadow-md hover:shadow-lg transition-all hover:bg-slate-50"
            >
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <span className="text-sm">{work.period}</span>
              <p className="text-gray-600 text-sm mt-2">{work.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 自作 */}
      {selfMadeWorks.length > 0 && (
        <section>
          <h2 className="font-extrabold text-3xl font-bold mb-8 flex justify-center items-center space-x-2">
            <span>
              Personal Works{' '}
              <span className="text-gray-500 text-sm">個人制作</span>
            </span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {selfMadeWorks.map((work) => (
              <Link
                key={work.slug}
                href={`/works/${work.slug}`}
                className="block p-6 border rounded-3xl shadow-md hover:shadow-lg transition-all hover:bg-slate-50"
              >
                <h2 className="text-xl font-semibold">{work.title}</h2>
                <span className="text-sm">{work.period}</span>
                <p className="text-gray-600 text-sm mt-2">{work.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
