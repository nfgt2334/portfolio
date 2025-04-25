'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

import { LoadingProvider } from '@/context/LoadingContext'
import { FlashMessageProvider } from '@/context/FlashMessageContext'

export default function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10 * 1000,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <FlashMessageProvider>{children}</FlashMessageProvider>
      </LoadingProvider>
    </QueryClientProvider>
  )
}
