'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { signIn, signOut, useSession } from 'next-auth/react'

const AuthenticationButton = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return null
  }

  if (session && session.user) {
    return (
      <Box cursor={'pointer'} onClick={() => signOut()}>
        <Box as={'span'}>Sign out</Box>
      </Box>
    )
  }

  if (!session) {
    return (
      <Box cursor={'pointer'} onClick={() => signIn()}>
        <Box as={'span'}>Sign in</Box>
      </Box>
    )
  }
}

export default AuthenticationButton
