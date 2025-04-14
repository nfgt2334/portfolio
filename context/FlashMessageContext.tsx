'use client'

import { Text } from '@radix-ui/themes'
import { Toast } from 'radix-ui'
import React, { createContext, useContext, useState, ReactNode } from 'react'

export type FlashMessage = {
  type: 'success' | 'error' | 'info'
  message: string
  title?: string
}

type FlashMessageContextType = {
  showMessage: (message: FlashMessage) => void
}

const FlashMessageContext = createContext<FlashMessageContextType | undefined>(
  undefined,
)

export function FlashMessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<FlashMessage | null>(null)
  const [open, setOpen] = useState(false)

  const showMessage = ({ message, type, title }: FlashMessage) => {
    setMessage({ message, type, title })
    setOpen(true)
  }

  return (
    <FlashMessageContext.Provider value={{ showMessage }}>
      {children}
      {message && (
        <Toast.Provider>
          <Toast.Root
            open={open}
            onOpenChange={setOpen}
            className={`p-4 rounded-md shadow-md z-50 
            ${message.type === 'success' ? 'bg-green-100' : ''} 
            ${message.type === 'error' ? 'bg-red-100' : ''} 
            ${message.type === 'info' ? 'bg-blue-100' : ''}
            `}
          >
            {message.title && <Toast.Title>{message.title}</Toast.Title>}
            <Toast.Description>{message.message}</Toast.Description>
            <Toast.Close>
              <Text as="span" size="2" className="underline">
                Close
              </Text>
            </Toast.Close>
          </Toast.Root>
          <Toast.Viewport className="fixed top-0 right-0 p-4 w-auto" />
        </Toast.Provider>
      )}
    </FlashMessageContext.Provider>
  )
}

export function useFlashMessage() {
  const context = useContext(FlashMessageContext)
  if (!context) {
    throw new Error(
      'useFlashMessage must be used within a FlashMessageProvider',
    )
  }
  return context
}
