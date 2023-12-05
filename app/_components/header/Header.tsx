'use client'
import { Box, Flex, Container, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <Box px={4} as='header' bgColor='gray.100' position={'fixed'}>
      <Container maxW='container.lg'>
        <Flex py='4' justifyContent='space-between' alignItems='center'>
          <NextLink href='/' passHref>
            <Heading as='h1' fontSize='2xl' cursor='pointer'>
              ヘッダー
            </Heading>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
