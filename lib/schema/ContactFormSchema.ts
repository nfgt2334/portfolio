import { z } from 'zod'

const email: z.ZodString = z
  .string({ required_error: '入力が必須の項目です' })
  .min(1, { message: '入力が必須の項目です' })
  .max(255, { message: '255文字以内で入力してください' })
  .email({ message: 'メールアドレスの形式で入力してください' })
const name: z.ZodString = z
  .string({ required_error: '入力が必須の項目です' })
  .min(1, { message: '入力が必須の項目です' })
  .max(20, { message: '入力値が長すぎます' })
const message: z.ZodString = z
  .string({ required_error: '入力が必須の項目です' })
  .min(1, { message: '入力が必須の項目です' })
  .max(4098, { message: '入力値が長すぎます' })
const agree: z.ZodLiteral<string> = z.literal('true', {
  errorMap: () => ({ message: '同意が必須です' }),
})

export const ContactSchema = z.object({
  email: email,
  name: name,
  message: message,
  agree: agree,
})
export type ContactType = z.infer<typeof ContactSchema>
