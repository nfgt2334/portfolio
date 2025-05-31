'use client'

import Link from 'next/link'

type ErrorSheetProps = {
  statusCode: number
  statusText: string
  message: string
}

export default function ErrorSheet({
  statusCode,
  statusText,
  message,
}: ErrorSheetProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 dark:text-red-400 mb-4">
        {statusCode}
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {statusText}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        トップに戻る
      </Link>
    </div>
  )
}
