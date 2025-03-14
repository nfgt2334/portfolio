import { useState, useEffect } from 'react'

type TimeElapsed = {
  years: number
  months: number
  days: number
  formattedTime: string // "hh:mm:ss" 形式
}

const calculateElapsedTime = (start: Date): TimeElapsed => {
  const now = new Date()
  const diff = now.getTime() - start.getTime()

  const seconds = Math.floor(diff / 1000) % 60
  const minutes = Math.floor(diff / (1000 * 60)) % 60
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

  // "hh:mm:ss" 形式に整形
  const formattedTime = [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
  ].join(':')

  return { years, months, days, formattedTime }
}

export function useElapsedTime(startDate: Date) {
  const [timeElapsed, setTimeElapsed] = useState(() =>
    calculateElapsedTime(startDate),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateElapsedTime(startDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [startDate])

  return timeElapsed
}
