'use client'

import Link from 'next/link'
import type { DisplayWork } from '../types'
import { MotionWrapper } from '@/components/MotionWrapper'

const works: DisplayWork[] = [
  {
    slug: 'portfolio-1',
    title: '自社サービス開発',
    period: '2024年2月〜2025年3月',
    description:
      'IPO (新規上場) を目指す企業向けに、タスク・進捗管理や情報共有を一元化するSaaS型クラウドサービス。IPO準備クラウド、および上場企業の決算開示業務を支援する「クラウド決算開示」の機能追加・改修を担当。',
  },
  {
    slug: 'portfolio-2',
    title: '保険契約者向けWebアプリ開発（LIFFアプリ開発）',
    period: '2023年9月〜2023年12月',
    description: '個人向け保険の加入をLINE上で完結できるLIFFアプリを開発。LINE連携により、ユーザーはチャット内で手軽に保険申込が可能。',
  },
  {
    slug: 'portfolio-3',
    title: '官公庁向け経営所得安定対策情報管理システム開発',
    period: '2023年5月〜2023年8月',
    description:
      '官公庁向けの経営所得安定対策情報管理システムにおいて、既存VB.NETプロジェクトをPythonへリプレイスする業務。',
  },
  {
    slug: 'portfolio-5',
    title: '個人店向けHP',
    period: '2023年3月〜2023年5月',
    description: '両親が自営業で営むFujikiCAKEのホームページを自作しました。',
    selfMade: true,
  },
]

export function WorksContent() {
  const careerWorks = works.filter((w) => !w.selfMade)
  const selfMadeWorks = works.filter((w) => w.selfMade)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors duration-300">
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Works
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
          職務経歴・個人制作
        </p>
      </MotionWrapper>

      {/* 職務経歴 */}
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-6xl mb-16"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Career Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerWorks.map((work, index) => (
              <MotionWrapper
                key={work.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={`/works/${work.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 h-full border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group-hover:border-blue-200 dark:group-hover:border-blue-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {work.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </MotionWrapper>

      {/* 個人制作 */}
      {selfMadeWorks.length > 0 && (
        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-6xl"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Personal Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selfMadeWorks.map((work, index) => (
                <MotionWrapper
                  key={work.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    href={`/works/${work.slug}`}
                    className="group block h-full"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 h-full border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group-hover:border-purple-200 dark:group-hover:border-purple-700">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {work.title}
                      </h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-3">
                        {work.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </Link>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </MotionWrapper>
      )}
    </div>
  )
}
