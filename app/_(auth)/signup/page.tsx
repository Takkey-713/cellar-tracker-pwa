'use client'
//MEMO 以下のページは使用していませんが要望があればメールパスワード認証を実装します
import {
  Button,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useFormLogic } from '@/_(auth)/signup/useFormLogic'

export default function SignUp() {
  const { register, onSubmit, errors } = useFormLogic()
  console.log(errors)

  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' background='gray.100' p={12} rounded={6}>
        <Heading mb={6}>Sign up</Heading>
        <form onSubmit={onSubmit}>
          <FormControl isInvalid={!!errors.email} mb={3}>
            <FormLabel htmlFor={'email'}>Email</FormLabel>
            <Input
              id='email'
              {...register('email')}
              placeholder='sample@sample.com'
              variant='filled'
              fontSize={{ base: '14px', md: '18px' }}
              focusBorderColor={'transparent'}
              type='email'
              autoComplete='email'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password} mb={3}>
            <FormLabel htmlFor={'password'}>Password</FormLabel>
            <Input
              id='password'
              {...register('password')}
              placeholder='********'
              variant='filled'
              fontSize={{ base: '14px', md: '18px' }}
              focusBorderColor={'transparent'}
              type='password'
              autoComplete='password'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.firstName} mb={3}>
            <FormLabel htmlFor={'firstName'}>First Name</FormLabel>
            <Input
              id='firstName'
              {...register('firstName')}
              placeholder='Your First Name'
              variant='filled'
              fontSize={{ base: '14px', md: '18px' }}
              focusBorderColor={'transparent'}
              type='text'
              autoComplete='firstName'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.lastName} mb={6}>
            <FormLabel htmlFor={'lastName'}>Last Name</FormLabel>
            <Input
              id='lastName'
              {...register('lastName')}
              placeholder='Your Last Name'
              variant='filled'
              fontSize={{ base: '14px', md: '18px' }}
              focusBorderColor={'transparent'}
              type='text'
              autoComplete='lastName'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>

          <Button type={'submit'} colorScheme='teal' width={'100%'}>
            Sign up
          </Button>
        </form>
      </Flex>
    </Flex>
  )
}
