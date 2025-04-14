import { useCallback } from 'react'

export function useEngineerExperience() {
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

  return {
    calculateEngineerExperience,
  }
}
