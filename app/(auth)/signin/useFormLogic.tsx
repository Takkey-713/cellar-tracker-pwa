import { useForm } from 'react-hook-form'
import { signinSchema, SigninSchemaType } from '@/schemas/signinSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useFormLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninSchemaType>({
    resolver: zodResolver(signinSchema),
  })

  const onSubmit = (data: SigninSchemaType) => {
    console.log(data)
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  }
}
