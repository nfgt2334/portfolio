'use client'

import { useFlashMessage } from '@/context/FlashMessageContext'
import { useState } from 'react'

export function ContactForm() {
  const { showMessage } = useFlashMessage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API
    console.log('送信内容:', form)
    showMessage({
      title: '送信完了',
      message: 'お問い合わせありがとうございます',
      type: 'success',
    })
  }

  return (
    <div className="w-full max-w-2xl px-4 py-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-3 px-6 rounded-xl hover:bg-gray-800 transition cursor-pointer"
        >
          送信
        </button>
      </form>
    </div>
  )
}
