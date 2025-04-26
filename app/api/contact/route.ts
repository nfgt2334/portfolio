import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { useUtils } from '@/hooks/useUtils'
import { ContactSchema } from '@/lib/schema/ContactFormSchema'

const utils = useUtils()

const resendApiKey = process.env.RESEND_API_KEY
const myEmail = process.env.CONTACT_TO

const resend = new Resend(resendApiKey)

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = ContactSchema.safeParse(body)
  if (!parsed.success) {
    const formatted = parsed.error.format()
    return NextResponse.json(
      { error: 'Validation failed', details: formatted },
      { status: 400 },
    )
  }

  const { name, email, subject, message } = body

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: myEmail!,
      replyTo: email,
      subject: subject?.trim() ? subject : `お問い合わせ：${name}`,
      html: `
        <p><strong>名前：</strong> ${name}</p>
        <p><strong>メールアドレス：</strong> ${email}</p>
        <p><strong>メッセージ：</strong><br/>${utils.escapeHTML(message)}</p>
      `,
    })

    return NextResponse.json({ message: '送信しました' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: '送信に失敗しました' }, { status: 500 })
  }
}
