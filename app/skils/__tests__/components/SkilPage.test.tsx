import { describe } from 'node:test'
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import SkilsPage from '@/app/skils/components/SkilsPage'

vi.mock('@/app/skils/hooks/useSkils', () => ({
  useSkils: () => ({
    skils: [],
    timeElapsed: {
      years: 2,
      months: 3,
      days: 15,
      formattedTime: '00:00:00',
    },
  }),
}))

describe('SkilsPage', () => {
  describe('初期表示時', () => {
    test('SkilsPageに表示されるテキストが正しいこと', () => {
      render(<SkilsPage />)
      expect(screen.getByText('Skil set')).toBeDefined()
      expect(screen.getByText('Work experience')).toBeDefined()
      expect(screen.getByText('2 years, 3 months, 15 days')).toBeDefined()
    })
  })
})
