import { z } from 'zod'

export const createWineSchema = z.object({
  name: z.string().min(1, { message: '入力必須です' }),
  district: z.string().min(1, { message: '入力必須です' }),
  varietyId: z
    .number({ invalid_type_error: '選択してください' })
    .min(1, { message: '選択してください' }),
  categoryId: z
    .number({ invalid_type_error: '選択してください' })
    .min(1, { message: '選択してください' }),
  description: z.string(),
  quantityInStock: z
    .number({ invalid_type_error: '数値を入力してください' })
    .min(0, { message: '0以上の数値を入力してください' }),
  unitPrice: z
    .number({ invalid_type_error: '数値を入力してください' })
    .min(0, { message: '0以上の数値を入力してください' }),
  sellingPrice: z
    .number({ invalid_type_error: '数値を入力してください' })
    .min(0, { message: '0以上の数値を入力してください' }),
  supplier: z.string().min(1, { message: '入力必須です' }),
  image: z.string(),
})

export type CreateWineSchema = z.infer<typeof createWineSchema>
