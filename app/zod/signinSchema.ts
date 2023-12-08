import { z } from 'zod'

export const signinSchema = z.object({
  email: z
    .string()
    .min(1, { message: '入力必須です' })
    .email({ message: 'メールアドレスの形式ではありません' }),
  password: z
    .string()
    .min(8, { message: '8桁以上のパスワードを入力してください' })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: '英大文字、英小文字、数字で入力してください',
    }),
})

export type SigninSchemaType = z.infer<typeof signinSchema>
