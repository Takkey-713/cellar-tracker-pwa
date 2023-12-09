'use client'
import { Box, Flex, Container, Heading } from '@chakra-ui/react'
import { FC } from 'react'

const AuthHeader: FC = () => {
  return (
    <Box px={4} as='header' bgColor='gray.100' width='100vw' position={'fixed'}>
      <Container maxW='container.lg'>
        <Flex py='4' justifyContent='space-between' alignItems='center'>
          <Heading as='h1' fontSize='2xl' cursor='pointer'>
            Cellar Tracker
          </Heading>
        </Flex>
      </Container>
    </Box>
  )
}

export default AuthHeader
