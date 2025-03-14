'use client'

import style from './skil-page.module.css'
import SkilList from './skil-list'
import { useSkils } from '../hooks/useSkils'

import { Text } from '@mantine/core'

export default function SkilsClient() {
  const { timeElapsed } = useSkils()

  return (
    <div className={style.SkilPageContainerDiv}>
      <p className={style.SkilPageTitleP}>Skil set</p>
      <div className={style.WorkExperienceDiv}>
        Work experience <br />
        <Text
          size="xl"
          fw={500}
          variant="gradient"
          gradient={{ from: 'yellow', to: 'pink', deg: 90 }}
        >
          {timeElapsed.years} years, {timeElapsed.months} months,{' '}
          {timeElapsed.days} days
        </Text>
        <Text
          size="xl"
          fw={500}
          variant="gradient"
          gradient={{ from: 'rgba(0, 237, 36, 1)', to: 'yellow', deg: 129 }}
        >
          {timeElapsed.formattedTime}
        </Text>
      </div>
      <SkilList />
    </div>
  )
}
