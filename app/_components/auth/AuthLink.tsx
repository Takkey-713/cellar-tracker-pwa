'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

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
      <Box cursor={'pointer'}>
        <Link href='/signin'>
          <Box as={'span'}>Sign in</Box>
        </Link>
      </Box>
    )
  }
}

export default AuthenticationButton
