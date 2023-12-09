import { useForm } from 'react-hook-form'
import { signinSchema, SigninSchemaType } from 'schemas/signinSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'

export const useFormLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninSchemaType>({
    resolver: zodResolver(signinSchema),
  })

  const onSubmit = async (data: SigninSchemaType) => {
    try {
      const res = await signIn('credentials', {
        redirect: true,
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      })

      if (!res?.error) {
        console.log(res)
      } else {
        console.log(res.error)
      }
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  }
}
