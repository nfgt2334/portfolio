import { Metadata } from 'next'
import { WorksContent } from './_components/WorksContetnt'

export const metadata: Metadata = {
  title: 'Works | Portfolio',
  description: 'Works page.',
}

export default function WorksPage() {
  return <WorksContent />
}
