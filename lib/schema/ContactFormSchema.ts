import { z } from 'zod'

const name: z.ZodString = z
  .string({ required_error: '名前を入力してください' })
  .min(1, { message: '名前を入力してください' })
  .max(50, { message: '50文字以内で入力してください' })
const email: z.ZodString = z
  .string({ required_error: 'メールアドレスを入力してください' })
  .min(1, { message: 'メールアドレスを入力してください' })
  .max(254, { message: '254文字以内で入力してください' })
  .email({ message: '有効なメールアドレスを入力してください' })
const subject = z
  .string()
  .max(100, { message: '100文字以内で入力してください' })
  .optional()
const message: z.ZodString = z
  .string({ required_error: 'メッセージを入力してください' })
  .min(1, { message: 'メッセージを入力してください' })
  .max(1000, { message: '1000文字以内で入力してください' })
const agree: z.ZodLiteral<string> = z.literal('true', {
  errorMap: () => ({ message: '個人情報の取り扱いへの同意が必要です' }),
})

export const ContactSchema = z.object({
  name: name,
  email: email,
  subject: subject,
  message: message,
  agree: agree,
})
export type ContactType = z.infer<typeof ContactSchema>
