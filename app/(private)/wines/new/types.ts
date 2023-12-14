import { z } from 'zod'

const zItem = z.object({
  id: z.number().int(),
  name: z.string(),
})

const zItems = z.array(zItem)

export const ApiResultSchema = z.object({
  categories: zItems,
  varieties: zItems,
})

export type ApiResult = z.infer<typeof ApiResultSchema>
