import { describe, test, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useExperience } from '../useExperience'

describe('useExperience', () => {
  test('calculates experience in years correctly', () => {
    const { result } = renderHook(() => useExperience())
    const mockDate = new Date()
    mockDate.setFullYear(mockDate.getFullYear() - 3) // 3年前

    const experience = result.current.calculateExperience(
      mockDate.toISOString(),
    )
    expect(experience).toBe(3)
  })
})
