import { SkillsContent } from './_components/SkillsContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: 'Skills page.',
}

export default function Skills() {
  return <SkillsContent />
}
