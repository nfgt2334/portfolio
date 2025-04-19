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
    <div className="px-6 py-12 max-w-4xl mx-auto">
      {/* フロントエンド */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Front-end Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            {
              icon: <FaHtml5 size={40} className="text-red-600" />,
              label: 'HTML',
              experience: calculateExperience('2023-02-01'),
            },
            {
              icon: <FaCss3Alt size={40} className="text-blue-600" />,
              label: 'CSS',
              experience: calculateExperience('2023-02-01'),
            },
            {
              icon: <IoLogoJavascript size={40} className="text-yellow-400" />,
              label: 'JavaScript',
              experience: calculateExperience('2023-02-01'),
            },
            {
              icon: <FaVuejs size={40} className="text-green-600" />,
              label: 'Vue.js',
              experience: calculateExperience('2023-02-01'),
            },
            {
              icon: <SiNuxtdotjs size={40} className="text-green-500" />,
              label: 'Nuxt.js',
              experience: calculateExperience('2023-02-01'),
            },
            {
              icon: <SiTypescript size={40} className="text-blue-500" />,
              label: 'TypeScript',
              experience: calculateExperience('2024-02-01'),
            },
            {
              icon: <FaReact size={40} className="text-blue-500" />,
              label: 'React',
              experience: '2ヶ月 (独学)',
            },
            {
              icon: <RiNextjsFill size={40} />,
              label: 'Next.js',
              experience: '2ヶ月 (独学)',
            },
          ].map((skill) => (
            <div key={skill.label} className="flex items-center gap-4">
              {skill.icon}
              <div>
                <h3 className="font-medium">{skill.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.experience} 年
                </p>
              </div>
            </div>
          ))}
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
              <p className="text-sm text-gray-500 dark:text-gray-400">6ヶ月</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhp size={40} className="text-indigo-600" />
            <div>
              <h3 className="font-medium">PHP</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">独学</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
