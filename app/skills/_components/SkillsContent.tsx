'use client'

import { SkillList } from './SkillList'
import { EngineerExperienceYear } from './EngineerExperienceYear'
import { MotionWrapper } from '@/components/MotionWrapper'

export function SkillsContent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors duration-300">
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Skills
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
          技術スタック・経験年数
        </p>
      </MotionWrapper>

      {/* エンジニア経験年数 */}
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16 w-full max-w-4xl"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Engineer Experience
          </h2>
          <EngineerExperienceYear />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 font-medium">
            日々学び、成長を続けています！
          </p>
        </div>
      </MotionWrapper>

      <div className="w-full max-w-6xl">
        <SkillList />
      </div>
    </div>
  )
}
