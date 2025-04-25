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
        <Toast.Provider swipeDirection="up">
          <Toast.Root
            open={open}
            onOpenChange={setOpen}
            className={`
              p-4 rounded-xl shadow-lg border max-w-md w-full mx-auto flex flex-col space-y-1
              ${message.type === 'success' ? 'bg-green-100 border-green-300' : ''}
              ${message.type === 'error' ? 'bg-red-100 border-red-300' : ''}
              ${message.type === 'info' ? 'bg-blue-100 border-blue-300' : ''}
            `}
          >
            {message.title && (
              <Toast.Title className="text-base font-semibold">
                {message.title}
              </Toast.Title>
            )}
            <Toast.Description className="text-sm">
              {message.message}
            </Toast.Description>
            <Toast.Close className="text-right mt-1">
              <Text as="span" size="2" className="underline cursor-pointer">
                閉じる
              </Text>
            </Toast.Close>
          </Toast.Root>

          <Toast.Viewport className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] w-full max-w-md px-4" />
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
