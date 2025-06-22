'use client'

import { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react'
import { MotionWrapper } from '@/components/MotionWrapper'
import type { DisplayWorkDetail } from '../types'

const works: Record<string, DisplayWorkDetail> = {
  'portfolio-1': {
    title: '自社サービス開発',
    description:
      'IPO (新規上場) を目指す企業向けに、タスク管理や情報共有、進捗管理などを一元化して支援するSaaS型クラウドサービス。\nIPO準備クラウド、および上場企業の決算開示業務を支援する「クラウド決算開示」の機能追加・改修。',
    phase: '基本設計・詳細設計・実装・単体テスト',
    content:
      '▼フロントエンド（Nuxt3）\n ・仕様把握〜実装・テスト・バグ修正まで一貫して対応 \n ・CSVインポート機能にて、段階的バリデーション設計（ファイル取得→ヘッダー確認→行・カラム検証）により、バグ発生を1件に抑制。エラーハンドリングの徹底でユーザビリティを向上 \n ・UI実装時にはデザイナーと直接連携し、整合性のズレを解消・改善提案も実施 \n\n ▼バックエンド（Python）\n ・小規模タスクの詳細設計から担当 \n ・API設計・実装（新規/既存）、DB設計、他社連携機能の改修を担当 \n ・OpenAPIに基づき、フロントとの整合性を確認しながらAPI仕様を作成 \n\n 【成果・工夫】 \n ・曖昧な仕様や分岐が多い中、実装前後で仕様の整理と提案を行い、品質・効率を向上 \n ・UI仕様の認識ずれによる手戻りを減らすため、デザイナーと密な連携体制を構築 \n ・レビュー属人化の課題に対し、ペアレビューや観点の標準化を提案し、改善に貢献 \n ・小規模タスクを一人称で完結できるスキルを評価され、詳細設計や工数見積も担当',
    environment: 'Windows / Visual Studio Code / GitHub / Docker',
    framework: 'TypeScript / Vue 3 / Nuxt 3 / Vuetify',
    teamSize:
      '15名（フロントエンド5名、バックエンド3名、プロダクト3名、QA2名、デザイナー2名）',
  },
  'portfolio-2': {
    title: '保険契約者向けLIFFアプリ開発',
    description:
      '個人のお客様向けの保険加入WebサイトをLIFFアプリにて開発。\nLINE連携により、ユーザーはチャット内で手軽に保険申込が可能。',
    phase: '設計・実装・単体テスト',
    content:
      '▼フロントエンド（Nuxt3） \n ・プラン選択、日時選択、ユーザー情報登録などの画面を実装 \n ・2週間スプリントで開発を進め、ペアプログラミング形式にて品質・仕様理解を高めながら実装 \n ・オーナー・デザイナーと連携し、会話ベースの要件から具体的な実装へ落とし込みを担当 \n\n ▼バックエンド（Node.js / AWS Lambda） \n ・LIFF連携によるLINEメッセージ送信や、Twilioを用いたSMS送信機能を実装 \n ・Vitestでのユニットテストにて、UI操作やAPIレスポンスに対する動作検証を実施 \n\n 【成果・工夫】 \n ・Nuxtとフルスタック開発が初経験ながら、積極的にドライバー役を担い早期にキャッチアップ \n ・外部APIとの連携で発生しうる不具合に備え、検証・ユニットテストの強化を通じて障害リスクを低減 \n ・フロント／バックエンドを横断的に担当したことで、仕様全体の把握と改善提案が可能に  ',
    environment:
      'AWS Lambda / ApiGateway / CodeCommit / S3 / CodePipeline / Slack / Git',
    framework: 'Node.js / Nuxt 3 (Vue 3) / axios / Pinia / Vitest',
    teamSize: '15人(開発者8名、デザイナー4名、オーナー2名)',
  },
  'portfolio-3': {
    title: '官公庁向け経営所得安定対策情報管理システム開発',
    description:
      '官公庁向けの経営所得安定対策情報管理システムの開発にSESとして常駐。\n既存VB.NETプロジェクトをPythonへリプレイスする業務。',
    phase: 'コードリファクタリング・実装・単体テスト',
    content:
      '・約2万行に及ぶVB.NETコードをPythonベースへ移行 \n ・CSVデータをもとに前年度データとの比較差分を出力するバッチ処理を実装 \n ・チーム内で仕様確認・設計・開発・テストを一貫して担当 \n\n 【成果・工夫】 \n ・初学習のPythonでも、処理の調査・実装を通じて短期間でキャッチアップし戦力化 \n ・CSV差分比較の実装を通じて、バッチ処理やデータ変換の知見を獲得し、後続機能にも展開  ',
    environment: 'AWS Cloud9 / CodeCommit / S3 / Slack / Git',
    framework: 'Python / Django',
    teamSize: '8人（エンジニア中心）',
  },
  'portfolio-5': {
    title: 'ケーキ・洋菓子専門サイト\n「FUJIKI CAKE」HP制作',
    description:
      '小規模店舗向けに「想い」と「世界観」を丁寧に伝えるブランドサイトを制作。\n' +
      '両親が自営業で営むFujikiCAKEのホームページを自作しました。',
    phase: 'デザイン、実装、SEO設計、デプロイ',
    content:
      '店舗の雰囲気やお菓子へのこだわりが伝わるよう、カラー設計・写真配置・フォント選びを丁寧に調整。\n' +
      '特にファーストビューには動的な背景やアニメーションを用いて、世界観を印象づける構成に。\n' +
      'SEO対策として、構造化マークアップ・meta設計も対応。\n' +
      'また、Googleアナリティクスやサーチコンソールとの連携も実装し、運用後の改善にも配慮。\n' +
      'XServerでの独自ドメイン作成から公開まで一貫して担当。',
    environment: 'Mac / Visual Studio Code / GitHub / XServer',
    framework: 'Vue.js / Nuxt.js / Vuetify / axios',
    teamSize: '1人（デザイン〜実装〜公開まで全て担当）',
    url: 'https://fujikicake.com/',
  },
}

export default function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const work = works[slug as keyof typeof works]

  if (!work) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-4 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">一覧に戻る</span>
          </Link>
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 whitespace-pre-line">
            {work.title}
          </h1>
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              概要
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line text-center">
              {work.description}
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              担当工程
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium text-center whitespace-pre-line">
              {work.phase}
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              業務内容
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {work.content}
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              技術情報
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  開発環境
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {work.environment}
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  使用技術・フレームワーク
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {work.framework}
                </p>
              </div>
              <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border border-blue-200 dark:border-gray-600">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  チーム体制
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {work.teamSize}
                </p>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {work.url && (
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                公開URL
              </h2>
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-5 h-5" />
                <span>サイトを見る</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 break-all">
                {work.url}
              </p>
            </div>
          </MotionWrapper>
        )}
      </div>
    </div>
  )
}
