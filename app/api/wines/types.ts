// schemas/wineSchema.ts
import { z } from 'zod'

export const wineSchema = z.object({
  name: z.string(),
  district: z.string(),
  varietyId: z.number(),
  categoryId: z.number(),
  userId: z.string(),
  description: z.string(),
  quantityInStock: z.number(),
  unitPrice: z.number(),
  sellingPrice: z.number(),
  supplier: z.string(),
  image: z.string(),
})

export type WineData = z.infer<typeof wineSchema>
