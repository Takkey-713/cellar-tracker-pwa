import { z } from 'zod'

export const zWine = z.object({
  id: z.number().int(),
  name: z.string(),
  district: z.string(),
  varietyId: z.number().int(),
  categoryId: z.number().int(),
  userId: z.string(),
  description: z.string(),
  quantityInStock: z.number().int(),
  unitPrice: z.number(),
  sellingPrice: z.number(),
  supplier: z.string(),
  image: z.string(),
  qrcode: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export const zWines = z.array(zWine)

export type Wine = z.infer<typeof zWine>
export type Wines = z.infer<typeof zWines>

export const ApiResultSchema = z.object({
  list: zWines,
  page: z.number(),
  perPage: z.number(),
  total: z.number(),
})

export type ApiResult = z.infer<typeof ApiResultSchema>
