'use client'

import { MotionWrapper } from '@/components/MotionWrapper'

export function SkillBadge() {
  return (
    <div>
      <MotionWrapper
        className="mb-12 w-full max-w-2xl text-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Skills */}
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <Badge label="HTML" />
          <Badge label="CSS" />
          <Badge label="JavaScript" />
          <Badge label="Vue.js" />
          <Badge label="Nuxt.js" />
          <Badge label="TypeScript" />
          <Badge label="React" />
          <Badge label="Next.js" />
        </div>
      </MotionWrapper>
    </div>
  )
}

const Badge = ({ label }: { label: string }) => (
  <span className="px-3 py-1 bg-slate-100 text-sm rounded-full text-gray-800 dark:bg-slate-700 dark:text-white shadow-sm">
    {label}
  </span>
)
