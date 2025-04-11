import { renderHook } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'

/** mock */
vi.mock('@/app/skils/hooks/useElapsedTime', () => ({
  useElapsedTime: vi.fn(() => ({
    years: 2,
    months: 3,
    days: 15,
    formattedTime: '00:00:00',
  })),
}))

const mockSkils = [
  {
    name: 'HTML',
    icon: () => <></>,
    color: '#e34c26',
    passedYear: '2年3ヶ月',
    modifier: '--html',
  },
]
const mocktimeElapsed = {
  years: 2,
  months: 3,
  days: 15,
  formattedTime: '00:00:00',
}
const useSkilsMock = vi.fn().mockReturnValue({
  skils: mockSkils,
  timeElapsed: {
    years: 2,
    months: 3,
    days: 15,
    formattedTime: '00:00:00',
  },
})

/** test */
describe('useSkils', () => {
  test('戻り値のskilsに正しい値が入っていること', () => {
    const { result } = renderHook(() => useSkilsMock())

    expect(result.current.skils).toEqual(mockSkils)
  })

  test('戻り値のtimeElapsedに正しい値が入っていること', () => {
    const { result } = renderHook(() => useSkilsMock())

    expect(result.current.timeElapsed).toEqual(mocktimeElapsed)
  })
})
