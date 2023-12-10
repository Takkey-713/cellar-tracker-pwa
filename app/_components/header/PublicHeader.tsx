'use client'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Appbar } from '@/_components/header/uiparts/appbar/Appbar'

const PublicHeader: FC = () => {
  return (
    <Box as='header' width='100vw' position={'sticky'} top={'0'}>
      <Container px={4} width='100%' bgColor='gray.100'>
        <Appbar />
      </Container>
    </Box>
  )
}

export default PublicHeader
