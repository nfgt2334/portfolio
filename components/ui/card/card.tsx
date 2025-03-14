import { Card } from '@mantine/core'

import style from './card.module.scss'

type PrimaryCardProps = {
  children: React.ReactNode
  hoverEffect?: boolean
}

export default function PrimaryCard({
  children,
  hoverEffect,
}: PrimaryCardProps) {
  return (
    <>
      <Card
        shadow="sm"
        className={`${style.PrimaryCard} ${
          hoverEffect ? style.hoverEffect : ''
        }`}
      >
        {children}
      </Card>
    </>
  )
}
