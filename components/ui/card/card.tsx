import { Card } from '@mantine/core'

import style from './card.module.scss'

type PrimaryCardProps = {
  children: React.ReactNode
}

export default function PrimaryCard({ children }: PrimaryCardProps) {
  return (
    <>
      <Card shadow="sm" className={style.PrimaryCard}>
        {children}
      </Card>
    </>
  )
}
