import Provider from '@/providers/Provider'
import { Navigation } from '@/components/Navigation'
import { Theme } from '@radix-ui/themes'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Provider>
            <Navigation />
            {children}
          </Provider>
        </Theme>
      </body>
    </html>
  )
}
