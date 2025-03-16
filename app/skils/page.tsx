import { Metadata } from 'next'
import SkilsPage from './components/SkilsPage'

export const metadata: Metadata = {
  title: 'Skils | Portfolio',
}

export default function Skils() {
  return <SkilsPage />
}
