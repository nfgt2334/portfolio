'use client'

import Link from 'next/link'
import type { DisplayWork } from '../types'
import { MotionWrapper } from '@/components/MotionWrapper'

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

export function WorksContent() {
  const careerWorks = works.filter((w) => !w.selfMade)
  const selfMadeWorks = works.filter((w) => w.selfMade)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white text-black dark:bg-gray-900 dark:text-white">
      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="font-extrabold text-4xl mb-8 flex justify-center items-center space-x-2">
          <span>
            Works{' '}
            <span className="text-gray-500 text-sm dark:text-gray-400">
              職務経歴
            </span>
          </span>
        </h1>
      </MotionWrapper>

      {/* 職務経歴 */}
      <section>
        <div className="grid sm:grid-cols-2 gap-6 mb-12 w-full max-w-4xl">
          {careerWorks.map((work, index) => (
            <MotionWrapper
              key={work.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <Link
                key={work.slug}
                href={`/works/${work.slug}`}
                className="block h-42 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md hover:shadow-lg transition-all hover:bg-slate-50 dark:hover:bg-gray-700"
              >
                <h2 className="text-xl font-semibold">{work.title}</h2>
                <span className="text-sm">{work.period}</span>
                <p className="text-gray-600 text-sm mt-2 dark:text-gray-300">
                  {work.description}
                </p>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* 自作 */}
      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="font-extrabold text-4xl mb-8 flex justify-center items-center space-x-2">
          <span>
            Personal Works{' '}
            <span className="text-gray-500 text-sm dark:text-gray-400">
              個人制作
            </span>
          </span>
        </h1>
      </MotionWrapper>
      {selfMadeWorks.length > 0 && (
        <section>
          <div className="grid sm:grid-cols-2 gap-6 mb-12 w-full max-w-4xl">
            {selfMadeWorks.map((work, index) => (
              <MotionWrapper
                key={work.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <Link
                  key={work.slug}
                  href={`/works/${work.slug}`}
                  className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md hover:shadow-lg transition-all hover:bg-slate-50 dark:hover:bg-gray-700"
                >
                  <h2 className="text-xl font-semibold">{work.title}</h2>
                  <span className="text-sm">{work.period}</span>
                  <p className="text-gray-600 text-sm mt-2 dark:text-gray-300">
                    {work.description}
                  </p>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
