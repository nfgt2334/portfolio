import Provider from '@/providers/Provider'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/Navigation'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme>
            <Provider>
              <Navigation />
              {children}
              <Analytics />
            </Provider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}
