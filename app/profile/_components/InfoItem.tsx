'use client'

import Link from 'next/link'
import { CiMail } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { SiWantedly } from 'react-icons/si'
import { MotionWrapper } from '@/components/MotionWrapper'

export function InfoItem() {
  return (
    <div>
      <MotionWrapper
        className="grid sm:grid-cols-2 gap-6 mb-12 w-full max-w-2xl text-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Item label="年齢" value="25歳" />
        <Item label="拠点" value="神奈川県" />
        <Item label="職種" value="フロントエンドエンジニア" />
        <Item
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
      </MotionWrapper>
    </div>
  )
}

const Item = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    <div className="text-lg font-medium">{value}</div>
  </div>
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
    <div className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white mt-1 ml-0.5">
      {icon}
    </div>
  </Link>
)
