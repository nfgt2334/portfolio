'use client'

import { useExperience } from '../_hooks/useExperience'
import { MotionWrapper } from '@/components/MotionWrapper'
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

  const fronrendSkillList = [
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
      experience: calculateExperience('2025-03-01') + ' (独学)',
    },
    {
      icon: <RiNextjsFill size={40} />,
      label: 'Next.js',
      experience: calculateExperience('2025-03-01') + ' (独学)',
    },
  ]

  const backendSkillList = [
    {
      icon: <FaPython size={40} className="text-blue-500" />,
      label: 'Python',
      experience: calculateExperience('2024-05-01'),
    },
    {
      icon: <FaPhp size={40} className="text-indigo-600" />,
      label: 'PHP',
      experience: calculateExperience('2024-07-01') + ' (独学)',
    },
  ]

  return (
    <div className="space-y-12">
      {/* フロントエンド */}
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Front-end Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fronrendSkillList.map((skill, index) => (
              <MotionWrapper
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
                  <div className="flex justify-center mb-3">{skill.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {skill.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {skill.experience}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </MotionWrapper>

      {/* バックエンド */}
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Back-end Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {backendSkillList.map((skill, index) => (
              <MotionWrapper
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
                  <div className="flex justify-center mb-3">{skill.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {skill.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {skill.experience}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </MotionWrapper>
    </div>
  )
}
