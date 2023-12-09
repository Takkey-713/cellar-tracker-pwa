'use client'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Appbar } from '@/_components/header/uiparts/appbar/Appbar'
import { Navigation } from '@/_components/header/uiparts/navigation/Navigation'

const Header: FC = () => {
  return (
    <Box as='header' width='100vw' position={'fixed'}>
      <Container px={4} width='100%' bgColor='gray.100'>
        <Appbar />
      </Container>

      <Container px={4}>
        <Navigation />
      </Container>
    </Box>
  )
}

export default Header
