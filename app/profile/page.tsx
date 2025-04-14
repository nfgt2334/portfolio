'use client'

import { Github, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <Image
          src="/next.svg"
          alt="プロフィール画像"
          width={120}
          height={120}
          className="rounded-full shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Takeshi Fujiki</h1>
        <p className="text-gray-600">フロントエンドエンジニア / UI好き</p>
      </div>

      {/* Basic Info */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <InfoItem label="年齢" value="25歳" />
        <InfoItem label="拠点" value="東京都" />
        <InfoItem label="職種" value="フロントエンドエンジニア" />
        <InfoItem
          label="SNS"
          value={
            <div className="flex gap-4">
              <SocialIcon
                href="https://github.com/yourname"
                icon={<Github />}
              />
              <SocialIcon
                href="https://twitter.com/yourname"
                icon={<Twitter />}
              />
              <SocialIcon href="mailto:your@email.com" icon={<Mail />} />
            </div>
          }
        />
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <SkillBadge label="TypeScript" />
          <SkillBadge label="React" />
          <SkillBadge label="Next.js" />
          <SkillBadge label="Tailwind CSS" />
          <SkillBadge label="Git / GitHub" />
        </div>
      </div>

      {/* Self Introduction */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          フロントエンドを中心に学習・開発を行っています。
          UI/UXにこだわった開発が好きで、日々スキルアップを目指しています。
          最近はReact QueryやtRPCにも興味があります。
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
    <div className="w-6 h-6 text-gray-600 hover:text-black">{icon}</div>
  </Link>
)
