'use client'

import { useEffect, useState } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    if (error.message === 'Not Found') {
      setErrorMessage('ページが見つかりません')
    } else {
      setErrorMessage('予期しないエラーが発生しました')
    }
  }, [error])

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold">{errorMessage}</h1>
      <p className="mt-2">
        {errorMessage === 'ページが見つかりません'
          ? 'URLが間違っているか、ページが削除された可能性があります。'
          : 'しばらくしてから再度お試しください。'}
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        リトライ
      </button>
    </div>
  )
}
