import { Spinner } from '@radix-ui/themes'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type LoadingContextType = {
  setLoading: (loading: boolean) => void
  isLoading: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  return (
    <LoadingContext.Provider value={{ setLoading, isLoading }}>
      {children}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
