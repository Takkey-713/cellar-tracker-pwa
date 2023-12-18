import { z } from 'zod'

export const zWine = z.object({
  id: z.number().int(),
  name: z.string(),
  district: z.string(),
  variety: z.string(),
  category: z.string(),
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

const PaginationSchema = z.object({
  page: z.number(),
  perPage: z.number(),
  total: z.number(),
})

const zWines = z.array(zWine)

export const ApiResultSchema = z.object({
  list: zWines,
  pagination: PaginationSchema,
})

export const WineShema = z.object({
  wine: zWine,
})

export type Wine = z.infer<typeof zWine>
export type Wines = z.infer<typeof zWines>
export type WineSchema = z.infer<typeof WineShema>
export type ApiResult = z.infer<typeof ApiResultSchema>
export type PaginationType = z.infer<typeof PaginationSchema>
