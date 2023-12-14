import { useForm } from 'react-hook-form'
import { createWineSchema, CreateWineSchema } from 'schemas/wine/createWineSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { useRouter } from 'next/navigation'

export const useFormLogic = (userId: string) => {
  const router = useRouter()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateWineSchema>({
    resolver: zodResolver(createWineSchema),
  })

  const onSubmit = async (data: CreateWineSchema) => {
    const baseUrl = process.env.BASE_URL || ''
    const requestData = { ...data, userId }
    try {
      const response = await fetch(`${baseUrl}/api/wines`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        // HTTPエラーを処理する
        const errorData = await response.json() // eslint-disable-line
        console.error('HTTP Error:', response.status, errorData)
        return
      } else {
        router.replace('/list')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Network Error:', error.message)
      } else {
        console.error('An unexpected error occurred:', error)
      }
    }
  }

  return {
    register,
    setValue,
    onSubmit: handleSubmit(onSubmit),
    errors,
  }
}
