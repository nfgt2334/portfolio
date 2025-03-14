import { Metadata } from 'next'
import SkilPage from './components/skil-page' // クライアントコンポーネントを呼び出す

export const metadata: Metadata = {
  title: 'Skils | Portfolio',
}

export default function Skils() {
  return <SkilPage />
}
