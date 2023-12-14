'use client'

import React from 'react'
import { Box, ListItem } from '@chakra-ui/react'
import Link from 'next/link'

interface Props {
  page: number
  perPage: number
  pagerValue: number
  pagerType: 'page' | 'ellipsis'
}

export const Pager: React.FC<Props> = (props) => {
  const { page, pagerValue, perPage, pagerType } = props

  return (
    <ListItem mr={2}>
      {pagerType === 'page' ? (
        <Box
          px={2}
          cursor='pointer'
          border='1px'
          borderColor='#23729e'
          borderRadius='4px'
          background={page === pagerValue ? '#23729e' : 'white'}
          color={page === pagerValue ? 'white' : '#23729e'}
        >
          <Link href={`/wines?page=${pagerValue}&perPage=${perPage}`}>
            <Box as={'span'}>{pagerValue}</Box>
          </Link>
        </Box>
      ) : (
        <Box>
          <Link href={`/wines?page=${pagerValue}&perPage=${perPage}`}>
            <Box as={'span'}>...</Box>
          </Link>
        </Box>
      )}
    </ListItem>
  )
}
