import { useState, useEffect } from 'react'

// 経験年数を計算するカスタムフック
const useExperience = (startDate: string) => {
  const [experience, setExperience] = useState(0)

  useEffect(() => {
    const calculateExperience = () => {
      const start = new Date(startDate)
      const today = new Date()
      const diffInTime = today.getTime() - start.getTime()
      const diffInYears = diffInTime / (1000 * 3600 * 24 * 365) // 年数に換算
      return Math.floor(diffInYears) // 切り捨て
    }

    setExperience(calculateExperience())
  }, [startDate])

  return experience
}

export default useExperience
