// 表示用の職務経歴の型
export type DisplayWork = {
  slug: string
  title: string
  period: string
  description: string
  selfMade?: boolean
}

export type DisplayWorkDetail = {
  title: string
  description: string
  phase: string
  content: string
  environment: string
  framework: string
  teamSize: string
  url?: string
}
