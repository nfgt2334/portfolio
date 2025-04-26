import { Metadata } from 'next'

import { ProfileContent } from './_components/ProfileContent'

export const metadata: Metadata = {
  title: 'Works | Portfolio',
  description: 'Works page.',
}

export default function Profile() {
  return <ProfileContent />
}
