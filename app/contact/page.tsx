'use client'

import { Suspense } from 'react'
import { ContactForm } from './_components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <h1 className="font-extrabold text-4xl font-bold flex justify-center items-center space-x-2">
        <span>
          Contact <span className="text-gray-500 text-sm">お問い合わせ</span>
        </span>
      </h1>
      <p className="font-extrabold text-red-500 text-sm text-center">
        ※作成中につき、実際には送信されません。
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  )
}
