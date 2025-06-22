'use client'

import Link from 'next/link'
import Image from 'next/image'
import ErrorSheet from '@/components/ErrorSheet'
import LoadingSpinner from '@/components/LoadingSpinner'

import { SiZenn } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
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

interface ProfileInfo {
  name: string
  bio: string
  age: number
  located: string
  occupation: string
}

interface ProfileData {
  getProfile: {
    info: ProfileInfo
    skills: string[]
    descriptions: string[]
  }
}

export function ProfileContent() {
  const { data, loading, error } = useQuery<ProfileData>(GET_PROFILE)

  if (loading) return <LoadingSpinner />
  if (error)
    return (
      <ErrorSheet statusCode={400} statusText="test" message={error.message} />
    )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="py-6"
      >
        <div className="text-center">
          <h1 className="font-extrabold text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-2 font-medium">
            プロフィール
          </p>
        </div>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="relative mb-6">
          <Image
            src="/profile-icon.jpeg"
            alt="プロフィール画像"
            width={140}
            height={140}
            className="rounded-full shadow-xl ring-4 ring-white dark:ring-gray-700 transition-transform hover:scale-105"
            priority
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
        </div>
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          {data?.getProfile.info.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-md">
          {data?.getProfile.info.bio}
        </p>
      </MotionWrapper>

      {/* Informations */}
      <MotionWrapper
        className="grid sm:grid-cols-2 gap-8 mb-16 w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <InfoItem label="年齢" value={`${data?.getProfile.info.age}歳`} />
        <InfoItem label="拠点" value={data?.getProfile.info.located} />
        <InfoItem label="職種" value={data?.getProfile.info.occupation} />
        <InfoItem
          label="SNS"
          value={
            <div className="flex gap-4">
              <SocialIcon
                href="https://github.com/nfgt2334"
                icon={<FaGithub size="24" />}
              />
              <SocialIcon
                href="https://x.com/2334_nfgt"
                icon={<FaXTwitter size="24" />}
              />
              <SocialIcon
                href="https://zenn.dev/nfgt2486"
                icon={<SiZenn size="24" />}
              />
            </div>
          }
        />
      </MotionWrapper>

      {/* Skills */}
      <MotionWrapper
        className="mb-16 w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">技術スタック</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {data?.getProfile.skills.map((skill: string) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </MotionWrapper>

      {/* About Me */}
      <MotionWrapper
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              幅広く活躍できるエンジニアを目指しています
            </p>
          </div>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-center max-w-3xl mx-auto">
            {data?.getProfile.descriptions.map((description: string) => (
              <p key={description} className="text-lg">
                {description}
              </p>
            ))}
          </div>
        </div>
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
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">{label}</p>
    <div className="text-xl font-semibold text-gray-900 dark:text-white">{value}</div>
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
    className="group relative"
  >
    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
      {icon}
    </div>
  </Link>
)

const SkillBadge = ({ label }: { label: string }) => (
  <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-sm font-medium rounded-full text-gray-800 dark:text-white shadow-md border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
    {label}
  </span>
)
