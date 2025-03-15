import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiNuxtdotjs } from 'react-icons/si'

import { useState } from 'react'
import { useElapsedTime } from './useElapsedTime'
import type { Skill, DisplayForm } from '../types'

export const useSkils = () => {
  const getElpassedYearsAndMonth = (year: number, month: number) => {
    const startDate = new Date(year, month - 1)
    const today = new Date()

    let years = today.getFullYear() - startDate.getFullYear()
    let months = today.getMonth() - startDate.getMonth()

    if (months < 0) {
      years -= 1
      months += 12
    }

    return `${years}年${months}ヶ月`
  }

  const skils: Skill[] = [
    {
      name: 'HTML',
      icon: FaHtml5,
      color: '#e34c26',
      passedYear: getElpassedYearsAndMonth(2023, 2),
      modifier: '--html',
    },
    {
      name: 'CSS',
      icon: FaCss3Alt,
      color: '#264de4',
      passedYear: getElpassedYearsAndMonth(2023, 2),
      modifier: '--css',
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      color: '#f7df1e',
      passedYear: getElpassedYearsAndMonth(2023, 2),
      modifier: '--javascript',
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#007acc',
      passedYear: getElpassedYearsAndMonth(2023, 9),
      modifier: '--typescript',
    },
    {
      name: 'Vue.js',
      icon: FaVuejs,
      color: '#4fc08d',
      passedYear: getElpassedYearsAndMonth(2023, 9),
      modifier: '--vuejs',
    },
    {
      name: 'Nuxt.js',
      icon: SiNuxtdotjs,
      color: '#00dc82',
      passedYear: getElpassedYearsAndMonth(2023, 9),
      modifier: '--nuxtjs',
    },
    {
      name: 'React',
      icon: FaReact,
      color: '#61DAFB',
      passedYear: getElpassedYearsAndMonth(2025, 3),
      modifier: '--react',
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: '#ffff',
      passedYear: getElpassedYearsAndMonth(2025, 3),
      modifier: '--nextjs',
    },
  ]

  const startDate = new Date('2023-02-01T00:00:00')
  const timeElapsed = useElapsedTime(startDate)

  const [displayForm, setDisplayForm] = useState<DisplayForm>({
    isShowModal: false,
  })

  const onClickOpenModal = () => {
    setDisplayForm({ isShowModal: true })
  }

  const onCloseModal = () => {
    setDisplayForm({ isShowModal: false })
  }

  return { skils, displayForm, timeElapsed, onClickOpenModal, onCloseModal }
}
