import { useCallback } from 'react'

export function useExperience() {
  const calculateExperience = useCallback((startDate: string) => {
    const start = new Date(startDate)
    const today = new Date()
    
    // 年と月を正確に計算
    let years = today.getFullYear() - start.getFullYear()
    let months = today.getMonth() - start.getMonth()
    
    // 月がマイナスの場合、年を1減らして月を調整
    if (months < 0) {
      years--
      months += 12
    }
    
    // 日付も考慮して調整
    if (today.getDate() < start.getDate()) {
      months--
      if (months < 0) {
        years--
        months += 12
      }
    }
    
    // 表示形式を決定
    if (years >= 1) {
      if (months > 0) {
        return `${years}年${months}ヶ月`
      } else {
        return `${years}年`
      }
    } else {
      return `${months}ヶ月`
    }
  }, [])

  return {
    calculateExperience,
  }
}
