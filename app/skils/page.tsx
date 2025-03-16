import { Metadata } from 'next'
import SkilsPage from './components/SkilsPage' // クライアントコンポーネントを呼び出す

export const metadata: Metadata = {
  title: 'Skils | Portfolio',
}

export default function Skils() {
  return <SkilsPage />
}
