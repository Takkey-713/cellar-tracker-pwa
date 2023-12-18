import { z } from 'zod'

const zItem = z.object({
  id: z.number().int(),
  name: z.string(),
})

const zFormItems = z.array(zItem)

export type FormItem = z.infer<typeof zFormItems>
