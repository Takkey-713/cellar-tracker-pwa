'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import theme from '../_styles/theme'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <SessionProvider>{children}</SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
