'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CiMail } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { SiWantedly } from 'react-icons/si'
import { MotionWrapper } from '@/components/MotionWrapper'

import { gql, useQuery } from '@apollo/client'

const GET_PROFILE = gql`
  query GetProfile {
    getProfile {
      info {
        name
        bio
        age
        located
        occupation
      }
      skills
      descriptions
    }
  }
`

export function ProfileContent() {
  const { data, loading, error } = useQuery(GET_PROFILE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-4"
      >
        <h1 className="font-extrabold text-4xl flex justify-center items-center space-x-2">
          <span>
            Profile{' '}
            <span className="text-gray-500 text-sm dark:text-gray-400">
              プロフィール
            </span>
          </span>
        </h1>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <Image
          src="/profile-icon.jpeg"
          alt="プロフィール画像"
          width={120}
          height={120}
          className="rounded-full shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{data.getProfile.info.name}</h1>
        <p className="text-gray-600 dark:text-gray-300">
          {data.getProfile.info.bio}
        </p>
      </MotionWrapper>

      {/* Informations */}
      <MotionWrapper
        className="grid sm:grid-cols-2 gap-6 mb-12 w-full max-w-2xl text-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <InfoItem label="年齢" value={`${data.getProfile.info.age}歳`} />
        <InfoItem label="拠点" value={data.getProfile.info.located} />
        <InfoItem label="職種" value={data.getProfile.info.occupation} />
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
      </MotionWrapper>

      {/* Skills */}
      <MotionWrapper
        className="mb-12 w-full max-w-2xl text-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {data.getProfile.skills.map((skill: string) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </MotionWrapper>

      {/* About Me */}
      <MotionWrapper
        className="w-full max-w-2xl text-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-center text-center gap-1 sm:gap-2">
          <span>About Me</span>
          <span>ー</span>
          <span className="text-gray-600 dark:text-gray-400">
            幅広く活躍できるエンジニアを目指しています
          </span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          {data.getProfile.descriptions.map((description: string) => (
            <span key={description} className="block">
              {description}
            </span>
          ))}
        </p>
      </MotionWrapper>
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

const SkillBadge = ({ label }: { label: string }) => (
  <span className="px-3 py-1 bg-slate-100 text-sm rounded-full text-gray-800 dark:bg-slate-700 dark:text-white shadow-sm">
    {label}
  </span>
)
