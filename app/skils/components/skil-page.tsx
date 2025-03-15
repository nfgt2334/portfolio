'use client'

import style from './skil-page.module.css'
import SkilList from './skil-list'
import { useSkils } from '../hooks/useSkils'

export default function SkilsClient() {
  const { timeElapsed } = useSkils()

  return (
    <div className={style.SkilPageContainerDiv}>
      <p className={style.SkilPageTitleP}>Skil set</p>
      <div className={style.WorkExperienceDiv}>
        Work experience <br />
        <p>
          {timeElapsed.years} years, {timeElapsed.months} months,{' '}
          {timeElapsed.days} days
        </p>
        {/* 初回ロード時(サーバー側での初回レンダリング時)と、ブラウザリロード時の時間に差が出てしまうため、コメントアウト */}
        {/* <p>{timeElapsed.formattedTime}</p> */}
      </div>
      <SkilList />
    </div>
  )
}
