'use client'

import Image from 'next/image'
import { MotionWrapper } from '@/components/MotionWrapper'

export function ProfileHeader() {
  return (
    <div>
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
        {/* Header */}
        <Image
          src="/profile-icon.jpeg"
          alt="プロフィール画像"
          width={120}
          height={120}
          className="rounded-full shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Takeshi Fujiki</h1>
        <p className="text-gray-600 dark:text-gray-300">
          フロントエンドエンジニア / アニメ好き
        </p>
      </MotionWrapper>
    </div>
  )
}
