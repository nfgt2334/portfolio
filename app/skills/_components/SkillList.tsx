'use client'

import { useExperience } from '../_hooks/useExperience'
import {
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaReact,
  FaPython,
  FaPhp,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTypescript, SiNuxtdotjs } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

export function SkillList() {
  const { calculateExperience } = useExperience()

  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      {/* フロントエンド */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Front-end Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <FaHtml5 size={40} className="text-red-600" />
            <div>
              <h3 className="font-medium">HTML</h3>
              <p className="text-sm text-gray-500">
                {calculateExperience('2023-02-01')} 年
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaCss3Alt size={40} className="text-blue-600" />
            <div>
              <h3 className="font-medium">CSS</h3>
              <p className="text-sm text-gray-500">
                {calculateExperience('2023-02-01')} 年
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IoLogoJavascript size={40} className="text-yellow-400" />
            <div>
              <h3 className="font-medium">JavaScript</h3>
              <p className="text-sm text-gray-500">
                {calculateExperience('2023-02-01')} 年
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaVuejs size={40} className="text-green-600" />
            <div>
              <h3 className="font-medium">Vue.js</h3>
              <p className="text-sm text-gray-500">
                {calculateExperience('2023-02-01')} 年
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SiNuxtdotjs size={40} className="text-green-500" />
            <div>
              <h3 className="font-medium">Nuxt.js</h3>
              <p className="text-sm text-gray-500">
                {calculateExperience('2023-02-01')} 年
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SiTypescript size={40} className="text-blue-500" />
            <div>
              <h3 className="font-medium">TypeScript</h3>
              <p className="text-sm text-gray-500">
                {calculateExperience('2024-02-01')} 年
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaReact size={40} className="text-blue-500" />
            <div>
              <h3 className="font-medium">React</h3>
              <p className="text-sm text-gray-500">2ヶ月 (独学)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RiNextjsFill size={40} />
            <div>
              <h3 className="font-medium">Next.js</h3>
              <p className="text-sm text-gray-500">2ヶ月 (独学)</p>
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
              <h3 className="font-medium">Python</h3>
              <p className="text-sm text-gray-500">6ヶ月</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhp size={40} className="text-indigo-600" />
            <div>
              <h3 className="font-medium">PHP</h3>
              <p className="text-sm text-gray-500">独学</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
