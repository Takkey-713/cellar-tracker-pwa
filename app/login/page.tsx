'use client'

import { Button, Flex, Heading, Input } from '@chakra-ui/react'

export default function Login() {
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' background='gray.100' p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder='sample@sample.com'
          variant='filled'
          mb={3}
          fontSize={{ base: '14px', md: '18px' }}
          type='email'
        />
        <Input
          placeholder='********'
          variant='filled'
          mb={6}
          fontSize={{ base: '14px', md: '18px' }}
          type='password'
        />
        <Button mb={6} colorScheme='teal'>
          Log in
        </Button>
      </Flex>
    </Flex>
  )
}
