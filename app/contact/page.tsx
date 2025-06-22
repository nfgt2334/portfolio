'use client'

import { Suspense } from 'react'
import { ContactForm } from './_components/ContactForm'
import { MotionWrapper } from '@/components/MotionWrapper'
import { Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors duration-300">
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <Mail className="w-8 h-8 text-blue-600" />
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
          お気軽にお問い合わせください
        </p>
      </MotionWrapper>
      
      <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </MotionWrapper>
    </div>
  )
}
