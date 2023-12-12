'use client'
import React from 'react'
import { ApiResult } from '../types'
import { Box, List } from '@chakra-ui/react'
import { ListCard } from '@/(private)/list/_components/ListCard'
import { Pagination } from '@/(private)/list/_components/Pagination'

interface Props {
  data: ApiResult
}

export const ListContent: React.FC<Props> = ({ data }) => {
  // このページにはカードコンポーネントとpaginationを配置する
  const { list, pagination } = data
  if (list.length === 0)
    return (
      <Box as='section' p={4}>
        <>データ存在しません</>
      </Box>
    )
  return (
    <Box as='section' p={4}>
      <List flexDir={'column'}>
        {list.map((wine) => (
          <ListCard key={wine.id} data={wine} />
        ))}
      </List>
      <Pagination data={pagination} />
    </Box>
  )
}
