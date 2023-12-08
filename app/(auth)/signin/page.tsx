'use client'

import {
  Button,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import { useFormLogic } from '@/(auth)/signin/useFormLogic'

export default function SignIn() {
  const { register, onSubmit, errors } = useFormLogic()
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex
        direction='column'
        background='gray.100'
        width={{ base: '300px', md: '375px' }}
        p={12}
        rounded={6}
      >
        <Heading mb={6}>Sign in</Heading>
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

          <Button type={'submit'} mb={6} colorScheme='teal' width={'100%'}>
            <Box as={'span'}>Login</Box>
          </Button>
        </form>

        {/* 以下の遷移先は/dashboardとかにする */}
        <Flex
          onClick={async () => await signIn('google', { callbackUrl: '/' })}
          mb={6}
          cursor={'pointer'}
          alignItems={'center'}
          color='teal'
        >
          <FaGoogle />
          <Box as={'span'} ml={3}>
            Login With Google
          </Box>
        </Flex>

        <Link href='/signup'>
          <Box as={'span'}>Create Account?</Box>
        </Link>
      </Flex>
    </Flex>
  )
}
