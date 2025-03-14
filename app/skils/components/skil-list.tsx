'use client'

import style from './skil-list.module.scss'

import PrimaryCard from '@/components/ui/card/card'
import { useSkils } from '../hooks/useSkils'

export default function SkilList() {
  const { skils } = useSkils()

  return (
    <div className={style.SkilListDiv}>
      {skils.map((skil) => (
        <PrimaryCard hoverEffect key={skil.name}>
          <div className={style.SkilListItemDiv}>
            <skil.icon color={skil.color} size={64} />
            <p>{skil.name}</p>
            <p>経験年数：{skil.passedYear}</p>
          </div>
        </PrimaryCard>
      ))}
    </div>
  )
}
