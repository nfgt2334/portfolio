'use client'

import { SkillList } from './_components/SkillList'
import useEngineerExperience from './_hooks/useEngineerExperience'

export default function Skills() {
  const { years, months, days, hours, minutes, secs } =
    useEngineerExperience('2023-02-01')

  // フォーマットされた時間を作成
  const formattedExperience = `${years}年${months}ヶ月${days}日 ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto bg-white text-black">
      <h1 className="text-4xl font-extrabold text-center mb-8">Skills</h1>

      {/* エンジニア経験年数 */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Engineer Experience</h2>

        {/* カウントアップ */}
        <div className="text-5xl">{formattedExperience}</div>
        <p className="text-lg text-gray-700 mt-2">日々学び、成長しています！</p>
      </div>

      {/* Skills */}
      <SkillList />
    </div>
  )
}
