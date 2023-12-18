'use client'
import React from 'react'
import { PaginationType } from '../types'
import { List } from '@chakra-ui/react'
import { Pager } from '@/(private)/wines/_components/Pager'
import { createPagination } from '@/(private)/wines/_components/utils/pagination'

interface Props {
  data: PaginationType
}

export const Pagination: React.FC<Props> = ({ data }) => {
  const { page, perPage, total } = data

  const pagination = createPagination(page, perPage, total)
  console.log(pagination)
  return (
    <List mt={4} display={'flex'}>
      {pagination.map((x) => {
        return (
          <Pager
            key={x.value}
            page={page}
            perPage={perPage}
            pagerValue={x.value}
            pagerType={x.type}
          />
        )
      })}
    </List>
  )
}
