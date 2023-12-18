import { useForm } from 'react-hook-form'
import { formWineSchema, FormWineSchema } from 'schemas/wine/formWineSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { useRouter } from 'next/navigation'

export const useFormLogic = (wineId: number) => {
  const router = useRouter()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormWineSchema>({
    resolver: zodResolver(formWineSchema),
  })

  const onSubmit = async (data: FormWineSchema) => {
    const baseUrl = process.env.BASE_URL || ''
    try {
      const response = await fetch(`${baseUrl}/api/wines/${wineId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        // HTTPエラーを処理する
        const errorData = await response.json() // eslint-disable-line
        console.error('HTTP Error:', response.status, errorData)
        return
      } else {
        router.replace(`/wines/${wineId}/edit`)
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
