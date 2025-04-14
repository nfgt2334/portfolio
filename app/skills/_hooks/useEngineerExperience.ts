import { useState, useEffect } from 'react'

const useEngineerExperience = (startDate: string) => {
  const [timeElapsed, setTimeElapsed] = useState(0) // 経過時間（秒単位）

  useEffect(() => {
    const startTime = new Date(startDate).getTime() // 経験開始時刻
    const interval = setInterval(() => {
      const now = new Date().getTime()
      setTimeElapsed(Math.floor((now - startTime) / 1000)) // 経過時間を秒で計算
    }, 1000) // 1秒ごとに更新

    return () => clearInterval(interval) // クリーンアップ
  }, [startDate])

  // 経過時間を「年」「月」「日」「時間」「分」「秒」に分けて表示
  const seconds = timeElapsed
  const years = Math.floor(seconds / (365 * 24 * 60 * 60))
  const months = Math.floor(
    (seconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60),
  )
  const days = Math.floor((seconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60))
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((seconds % (60 * 60)) / 60)
  const secs = seconds % 60

  return {
    years,
    months,
    days,
    hours,
    minutes,
    secs,
  }
}

export default useEngineerExperience
