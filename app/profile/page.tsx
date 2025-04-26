import { Metadata } from 'next'

import { ProfileHeader } from './_components/ProfileHeader'
import { InfoItem } from './_components/InfoItem'
import { SkillBadge } from './_components/SkillBadge'
import { AboutMe } from './_components/AboutMe'

export const metadata: Metadata = {
  title: 'Works | Portfolio',
  description: 'Works page.',
}

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white text-black dark:bg-gray-900 dark:text-white">
        <ProfileHeader />
        <InfoItem />
        <SkillBadge />
        <AboutMe />
      </div>
    </div>
  )
}
