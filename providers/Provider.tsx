'use client'

import { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apolloClient'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <FlashMessageProvider>{children}</FlashMessageProvider>
        </LoadingProvider>
      </QueryClientProvider>
    </ApolloProvider>
  )
}
