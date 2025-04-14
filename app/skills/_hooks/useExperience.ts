import { useCallback } from 'react'

export function useExperience() {
  const calculateExperience = useCallback((startDate: string) => {
    const start = new Date(startDate)
    const today = new Date()
    const diffInTime = today.getTime() - start.getTime()
    const diffInYears = diffInTime / (1000 * 3600 * 24 * 365)
    return Math.floor(diffInYears)
  }, [])

  return {
    calculateExperience,
  }
}
