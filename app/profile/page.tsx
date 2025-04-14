'use client'

import { SiWantedly } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'
import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <Image
          src="/profile-icon.jpeg"
          alt="プロフィール画像"
          width={120}
          height={120}
          className="rounded-full shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Takeshi Fujiki</h1>
        <p className="text-gray-600">フロントエンドエンジニア / アニメ好き</p>
      </div>

      {/* Basic Info */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <InfoItem label="年齢" value="25歳" />
        <InfoItem label="拠点" value="神奈川県" />
        <InfoItem label="職種" value="フロントエンドエンジニア" />
        <InfoItem
          label="SNS"
          value={
            <div className="flex gap-4">
              <SocialIcon
                href="https://github.com/nfgt2334"
                icon={<FaGithub size="24" />}
              />
              <SocialIcon
                href="https://www.wantedly.com/id/fujiki_takeshi"
                icon={<SiWantedly size="24" />}
              />
              <SocialIcon href="/contact" icon={<CiMail size="24" />} />
            </div>
          }
        />
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <SkillBadge label="HTML" />
          <SkillBadge label="CSS" />
          <SkillBadge label="JavaScript" />
          <SkillBadge label="Vue.js" />
          <SkillBadge label="Nuxt.js" />
          <SkillBadge label="TypeScript" />
          <SkillBadge label="React" />
          <SkillBadge label="Next.js" />
        </div>
      </div>

      {/* Self Introduction */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-center text-center gap-1 sm:gap-2">
          <span>About Me</span>
          <span>ー</span>
          <span className="text-gray-600">
            幅広く活躍できるエンジニアを目指しています
          </span>
        </h2>
        <p className="text-gray-700 leading-relaxed space-y-4">
          <span className="block">
            フロントエンドエンジニアとして2年の経験があり、Vue.jsやNuxt.jsを中心としたWebアプリケーション開発を得意としています。
            現在はバックエンドにも関心を持ち、PythonとDjango REST
            Frameworkを用いたAPI開発を独学で行っています。
          </span>
          <span className="block">
            最近はNext.jsやTypeScriptの学習にも力を入れており、個人開発を通じて実践中です。
          </span>
          <span className="block">
            将来的にはフロントエンドからバックエンドまで幅広く対応できるエンジニアとして、
            プロダクト開発に深く関わり、価値のある機能を届けていける存在を目指しています。
          </span>
        </p>
      </div>
    </div>
  )
}

const InfoItem = ({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <div className="text-lg font-medium">{value}</div>
  </div>
)

const SkillBadge = ({ label }: { label: string }) => (
  <span className="px-3 py-1 bg-slate-100 text-sm rounded-full text-gray-800 shadow-sm">
    {label}
  </span>
)

const SocialIcon = ({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <div className="w-6 h-6 text-gray-600 hover:text-black mt-1 ml-0.5">
      {icon}
    </div>
  </Link>
)
