'use client'

import useExperience from '../_hooks/useExperience'
import { FaReact, FaCss3Alt, FaPython } from 'react-icons/fa'
import { SiTypescript, SiVuedotjs } from 'react-icons/si'

export function SkillList() {
  // スキルごとの経験年数を取得
  const htmlCssJs = useExperience('2023-02-01')
  const tsVueNuxt = useExperience('2023-09-01')
  const reactNext = useExperience('2025-03-01')
  const pythonPhp = '独学'
  const engineer = useExperience('2023-02-01')

  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      {/* フロントエンド */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Front-end Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <FaCss3Alt size={40} className="text-blue-600" />
            <div>
              <h3 className="font-medium">HTML, CSS, JavaScript</h3>
              <p className="text-sm text-gray-500">{htmlCssJs} 年</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SiVuedotjs size={40} className="text-green-500" />
            <div>
              <h3 className="font-medium">Vue.js, Nuxt.js</h3>
              <p className="text-sm text-gray-500">{tsVueNuxt} 年</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaReact size={40} className="text-blue-500" />
            <div>
              <h3 className="font-medium">React, Next.js</h3>
              <p className="text-sm text-gray-500">{reactNext} 年 (独学)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SiTypescript size={40} className="text-blue-500" />
            <div>
              <h3 className="font-medium">TypeScript</h3>
              <p className="text-sm text-gray-500">{tsVueNuxt} 年</p>
            </div>
          </div>
        </div>
      </div>

      {/* バックエンド */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Back-end Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <FaPython size={40} className="text-blue-500" />
            <div>
              <h3 className="font-medium">Python, PHP</h3>
              <p className="text-sm text-gray-500">{pythonPhp}</p>
            </div>
          </div>
        </div>
      </div>

      {/* エンジニア全般 */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Engineer</h2>
        <p className="text-lg">{engineer} 年</p>
      </div>
    </div>
  )
}
