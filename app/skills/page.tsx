import { SkillList } from './_components/SkillList'
import { EngineerExperienceYear } from './_components/EngineerExperienceYear'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: 'Skills page.',
}

export default function Skills() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto bg-white text-black">
      <h1 className="font-extrabold text-4xl font-bold mb-8 flex justify-center items-center space-x-2">
        <span>
          Skills <span className="text-gray-500 text-sm">技術スタック</span>
        </span>
      </h1>

      {/* エンジニア経験年数 */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Engineer Experience</h2>

        {/* カウントアップ */}
        <EngineerExperienceYear />
        <p className="text-lg text-gray-700 mt-2">日々学び、成長しています！</p>
      </div>

      {/* Skills */}
      <SkillList />
    </div>
  )
}
