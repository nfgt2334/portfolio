import { notFound } from 'next/navigation'
import { FaAngleLeft } from 'react-icons/fa6'
import Link from 'next/link'

const works = {
  'portfolio-1': {
    title: '自社サービス開発',
    description:
      'IPO (新規上場) を目指す企業向けに、タスク管理や情報共有、進捗管理などを一元化して支援するSaaS型クラウドサービス。',
    phase: '実装、単体テスト',
    content:
      'プロダクトチームが策定した仕様をもとに、UI改善‧バグ修正‧新機能追加などを担当。基本的にはテ ックリードのもとでサブタスクを進めるが、⼩規模な案件においては⼀⼈称で開発（仕様把握‧実装‧ テスト）までを⾏った。 特に、CSV⼀括インポート機能の開発では、ファイルの取得‧解析から、カラムごとの細かなバリデーシ ョン処理までをフロントエンドで⼀貫して実装。バックエンドと連携した登録処理のトリガーまでをス ムーズに繋げることで、ユーザーにとって使いやすく、かつシステムとしても堅牢な仕組みを構築し た。 また、チーム内では相互コードレビューの提案‧実施にも貢献し、レビュー負担の軽減およびメンバー の技術向上にも寄与。 ',
    environment: 'Windows / Visual Studio Code / GitHub / Docker',
    framework: 'TypeScript / Vue 3 / Nuxt 3 / Vuetify ',
    teamSize:
      '15名（フロントエンド5名、バックエンド3名、プロダクト3名、QA2名、デザイナー2名）',
  },
  'portfolio-2': {
    title: '保険契約者向けLIFFアプリ開発',
    description: '個人のお客様向けの保険加入WebサイトをLIFFアプリにて開発。',
    phase: '実装、単体テスト',
    content:
      'オーナー、デザイナー、開発者間の会話から⽣まれたタスク(機能)を2週間スパンで実装。開発はペア プロで⾏い、ドライバーとナビゲーターに分かれ作業を実施。 フロント側では、プラン‧⽇時選択画⾯、ユーザ情報登録画⾯などのUI実装を担当。 サーバー側では、APIの実装、LIFFを⽤いてメッセージを送信する機能や、twilioを⽤いたSMS送信機能 を実装。 また、担当した機能の単体テストをVitestを使⽤して実装。',
    environment:
      'AWS Lambda / ApiGateway / CodeCommit / S3 / CodePipeline / slack / Git',
    framework: 'Node.js / Nuxt(Vue3) / axios / Pinia / Vitest ',
    teamSize: '15⼈(開発者8名、デザイナー4名、オーナー2名) ',
  },
  'portfolio-3': {
    title: '官公庁向け経営所得安定対策情報管理システム開発',
    description:
      '官公庁向けの経営所得安定対策情報管理システムの開発にSESとして常駐。',
    phase: '実装',
    content:
      'vb.netで開発された既存のソースをDjangoでのプログラムにリファクタリングする作業を実施。アップロードされたcsvファイルの中身を前年度と比較し出力する機能を担当。4ヶ月間常駐し、約2万行あったソースコードのリファクタリングを行いました。',
    environment: 'AWS Cloud9 / CodeCommit / S3 / Slack / Git',
    framework: 'Python / React',
    teamSize: '8人',
  },
  'portfolio-4': {
    title: '資格取得用学習Webサイト開発',
    description:
      'P2MやJSTQBなどの資格を取得する為の勉強用Webサイトを社内で開発。',
    phase: 'テーブル定義書、ER図作成、実装',
    content:
      'DjangoRestframeworkを使用したユーザの新規登録/削除機能、パスワードリセット機能のAPI実装およびVue.js,Vuetifyを使用したUIを実装。',
    environment:
      'Docker / Github / Visual Studio Code / phpMyAdmin / SourceTree / Slack',
    framework:
      'Django(RESTframework) / Vue.js(compositionAPI) / axsios / Pinia',
    teamSize: '5人',
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
    <div className="min-h-screen px-4 py-12 max-w-3xl mx-auto space-y-8">
      <Link
        href="/works"
        className="inline-block text-gray-600 hover:underline"
      >
        <div className="flex items-center gap-1">
          <FaAngleLeft className="text-base" />
          <span>一覧に戻る</span>
        </div>
      </Link>

      <h1 className="text-4xl font-bold text-center border-b pb-4">
        {work.title}
      </h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">概要</h2>
        <p className="text-gray-700 leading-relaxed text-base">
          {work.description}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">担当工程</h2>
        <p className="text-gray-700 text-base whitespace-pre-line">
          {work.phase}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">業務内容</h2>
        <p className="text-gray-700 text-base whitespace-pre-line">
          {work.content}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-md font-semibold text-gray-800">開発環境</h3>
          <p className="text-gray-700 text-sm">{work.environment}</p>
        </div>
        <div>
          <h3 className="text-md font-semibold text-gray-800">
            使用技術・フレームワーク
          </h3>
          <p className="text-gray-700 text-sm">{work.framework}</p>
        </div>
        <div className="sm:col-span-2">
          <h3 className="text-md font-semibold text-gray-800">チーム体制</h3>
          <p className="text-gray-700 text-sm">{work.teamSize}</p>
        </div>
      </section>
    </div>
  )
}
