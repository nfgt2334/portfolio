import { Suspense } from 'react'
import { ContactForm } from './_components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Portfolio',
  description: 'Contact page.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="font-extrabold text-4xl mb-2 flex justify-center items-center space-x-2">
        <span>
          Contact{' '}
          <span className="text-gray-500 text-sm dark:text-gray-400">
            お問い合わせ
          </span>
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
