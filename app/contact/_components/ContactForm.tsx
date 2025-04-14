'use client'

import { useFlashMessage } from '@/context/FlashMessageContext'
import { Mail } from 'lucide-react'
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
    try {
      // TODO: API
      console.log('送信内容:', form)
      showMessage({
        title: '送信完了',
        message: 'お問い合わせありがとうございます',
        type: 'success',
      })
    } catch (error) {
      showMessage({
        title: '送信失敗',
        message: 'お問い合わせに失敗しました',
        type: 'error',
      })
    }
  }

  return (
    <div className="min-h-screen px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 flex items-center space-x-2">
        <Mail className="w-8 h-8" />
        <span>Contact</span>
      </h1>
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
          className="w-full sm:w-auto bg-black text-white font-medium py-3 px-6 rounded-xl hover:bg-gray-800 transition"
        >
          送信
        </button>
      </form>
    </div>
  )
}
