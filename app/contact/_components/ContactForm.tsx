'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ContactSchema, ContactType } from '@/lib/schema/ContactFormSchema'
import { useLoading } from '@/context/LoadingContext'
import { useFlashMessage } from '@/context/FlashMessageContext'

export function ContactForm() {
  const { setLoading } = useLoading()
  const { showMessage } = useFlashMessage()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formatError, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: 'onChange',
    resolver: zodResolver(ContactSchema),
  })

  const handleOnSubmit: SubmitHandler<ContactType> = async (data) => {
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.status !== 200) {
        const error = await response.json()
        throw new Error(error?.details || '送信に失敗しました')
      }

      setLoading(false)
      showMessage({
        type: 'success',
        message: 'お問い合わせありがとうございました！',
        title: '送信完了',
      })
      reset()
    } catch (error) {
      setLoading(false)
      showMessage({
        type: 'error',
        message: '送信に失敗しました。再度お試しください。',
        title: 'エラー',
      })
    }
  }

  return (
    <div className="w-full max-w-2xl px-4 py-12">
      <form
        method="post"
        onSubmit={(event) => {
          void handleSubmit(handleOnSubmit)(event)
        }}
        className="space-y-6"
      >
        <label className="block font-medium">
          <p className="mb-2">お名前</p>
          <input
            type="text"
            {...register('name')}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="山田 太郎"
          />
          {formatError.name && (
            <p className="text-red-500 pl-1 pt-1 text-md">
              {formatError.name.message}
            </p>
          )}
        </label>

        <label className="block font-medium">
          <p className="mb-2">メールアドレス</p>
          <input
            type="text"
            {...register('email')}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="example@example.com"
          />
          {formatError.email && (
            <p className="text-red-500 pl-1 pt-1 text-md">
              {formatError.email.message}
            </p>
          )}
        </label>

        <label className="block font-medium">
          <p className="mb-2">お問い合わせ内容</p>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
          />
          {formatError.message && (
            <p className="text-red-500 pl-1 pt-1 text-md">
              {formatError.message.message}
            </p>
          )}
        </label>

        <div className="flex flex-col items-center space-y-1">
          <div className="flex flex-row items-center space-x-2">
            <label className="flex flex-row items-center space-x-2">
              <input
                type="checkbox"
                value="true"
                {...register('agree')}
                className="h-5 w-5"
              />
              <p>個人情報取り扱いに同意する</p>
            </label>
          </div>
          {formatError.agree && (
            <div className="text-red-500 pl-1 pt-1 text-center text-xs">
              {formatError.agree.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white disabled:bg-gray-300 md:self-center cursor-pointer"
        >
          送信
        </button>
      </form>
    </div>
  )
}
