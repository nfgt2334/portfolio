'use client'

import { useEffect, useState, useCallback } from 'react'

export function EngineerExperienceYear() {
  const calculateEngineerExperience = useCallback((startDate: string) => {
    const startTime = new Date(startDate).getTime()
    const now = new Date().getTime()
    const timeElapsed = Math.floor((now - startTime) / 1000)

    const years = Math.floor(timeElapsed / (365 * 24 * 60 * 60))
    const months = Math.floor(
      (timeElapsed % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60),
    )
    const days = Math.floor(
      (timeElapsed % (30 * 24 * 60 * 60)) / (24 * 60 * 60),
    )
    const hours = Math.floor((timeElapsed % (24 * 60 * 60)) / (60 * 60))
    const minutes = Math.floor((timeElapsed % (60 * 60)) / 60)
    const secs = timeElapsed % 60

    return {
      years,
      months,
      days,
      hours,
      minutes,
      secs,
    }
  }, [])

  const [experience, setExperience] = useState<ReturnType<
    typeof calculateEngineerExperience
  > | null>(null)

  useEffect(() => {
    const update = () =>
      setExperience(calculateEngineerExperience('2023-02-01'))
    update() // 初回呼び出し

    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [calculateEngineerExperience])

  if (!experience) return null

  const { years, months, days, hours, minutes, secs } = experience
  // フォーマットされた時間を作成
  const formattedExperience = `${years}年${months}ヶ月${days}日 ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  return <div className="text-5xl">{formattedExperience}</div>
}
