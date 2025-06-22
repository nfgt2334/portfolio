'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ContactSchema, ContactType } from '@/lib/schema/ContactFormSchema'
import { useUtils } from '@/hooks/useUtils'
import { useLoading } from '@/context/LoadingContext'
import { useFlashMessage } from '@/context/FlashMessageContext'

export function ContactForm() {
  const { setLoading } = useLoading()
  const { showMessage } = useFlashMessage()

  const utils = useUtils()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formatError, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: 'onChange',
    resolver: zodResolver(ContactSchema),
  })

  const handleOnSubmit: SubmitHandler<ContactType> = async (
    data: ContactType,
  ) => {
    const body = {
      ...data,
      message: utils.escapeHTML(data.message),
    }

    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
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
    } catch {
      setLoading(false)
      showMessage({
        type: 'error',
        message: '送信に失敗しました。再度お試しください。',
        title: 'エラー',
      })
    }
  }

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <form
          method="post"
          onSubmit={(event) => {
            void handleSubmit(handleOnSubmit)(event)
          }}
          className="space-y-6"
        >
        <label className="block">
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
            お名前<span className="text-red-500 ml-1">*</span>
          </p>
          <input
            type="text"
            {...register('name')}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="山田 太郎"
          />
          {formatError.name && (
            <p className="text-red-500 pl-1 pt-1 text-md">
              {formatError.name.message}
            </p>
          )}
        </label>

        <label className="block">
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
            メールアドレス<span className="text-red-500 ml-1">*</span>
          </p>
          <input
            type="email"
            {...register('email')}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="example@example.com"
          />
          {formatError.email && (
            <p className="text-red-500 pl-1 pt-1 text-md">
              {formatError.email.message}
            </p>
          )}
        </label>

        <label className="block">
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">件名</p>
          <input
            type="text"
            {...register('subject')}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="ポートフォリオを見てのご連絡です"
          />
          {formatError.subject && (
            <p className="text-red-500 pl-1 pt-1 text-md">
              {formatError.subject.message}
            </p>
          )}
        </label>

        <label className="block">
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
            お問い合わせ内容<span className="text-red-500 ml-1">*</span>
          </p>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="ご用件をお聞かせください"
          />
          {formatError.message && (
            <p className="text-red-500 pl-1 pt-1 text-md">
              {formatError.message.message}
            </p>
          )}
        </label>

        <div className="flex flex-col items-center space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              value="true"
              {...register('agree')}
              className="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              個人情報取り扱いに同意する
              <span className="text-red-500 ml-1">*</span>
            </span>
          </label>
          {formatError.agree && (
            <div className="text-red-500 pl-1 pt-1 text-center text-xs">
              {formatError.agree.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl px-6 py-4 text-white font-semibold disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </form>
      </div>
    </div>
  )
}
