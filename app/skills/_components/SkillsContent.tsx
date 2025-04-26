'use client'

import { SkillList } from './SkillList'
import { EngineerExperienceYear } from './EngineerExperienceYear'
import { MotionWrapper } from '@/components/MotionWrapper'

export function SkillsContent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white text-black dark:bg-gray-900 dark:text-white">
      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-4"
      >
        <h1 className="font-extrabold text-4xl mb-8 flex justify-center items-center space-x-2">
          <span>
            Skills{' '}
            <span className="text-gray-500 text-sm dark:text-gray-400">
              技術スタック
            </span>
          </span>
        </h1>
      </MotionWrapper>

      {/* エンジニア経験年数 */}
      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-4"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Engineer Experience</h2>
          <EngineerExperienceYear />
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            日々学び、成長しています！
          </p>
        </div>
      </MotionWrapper>

      {/* Skills */}
      <SkillList />
    </div>
  )
}
