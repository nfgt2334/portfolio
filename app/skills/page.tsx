import { SkillList } from './_components/SkillList'
import { EngineerExperienceYear } from './_components/EngineerExperienceYear'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: 'Skills page.',
}

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="font-extrabold text-4xl mb-8 flex justify-center items-center space-x-2">
        <span>
          Skills{' '}
          <span className="text-gray-500 text-sm dark:text-gray-400">
            技術スタック
          </span>
        </span>
      </h1>

      {/* エンジニア経験年数 */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Engineer Experience</h2>

        {/* カウントアップ */}
        <EngineerExperienceYear />
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          日々学び、成長しています！
        </p>
      </div>

      {/* Skills */}
      <SkillList />
    </div>
  )
}
