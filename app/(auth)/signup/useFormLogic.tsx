import { useForm } from 'react-hook-form'
import { signupSchema, SignupSchemaType } from '@/schemas/signupSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useFormLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = (data: SignupSchemaType) => {
    console.log(data)
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  }
}
