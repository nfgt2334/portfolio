'use client'

import { SkilList } from './_components/SkilList'
export default function SkilsPage() {
  return (
    <div className="container mx-auto p-4">
      <p className="text-2xl font-bold mb-4">Skil set</p>
      <div className="mb-4">
        <p className="font-bold mb-2">Work experience</p>
        {/* <p>
          {timeElapsed.years} years, {timeElapsed.months} months,{' '}
          {timeElapsed.days} days
        </p> */}
        {/* 初回ロード時(サーバー側での初回レンダリング時)と、ブラウザリロード時の時間に差が出てしまうため、コメントアウト */}
        {/* <p>{timeElapsed.formattedTime}</p> */}
      </div>
      <SkilList />
    </div>
  )
}
