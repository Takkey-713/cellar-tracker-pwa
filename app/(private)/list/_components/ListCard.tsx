import React from 'react'
import { Wine } from '../types'
import {
  Box,
  ListItem,
  Heading,
  Image,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  useBreakpointValue,
} from '@chakra-ui/react'
import { formatJpPrice } from './utils/formatJpPrice'

interface Props {
  data: Wine
}

export const ListCard: React.FC<Props> = ({ data }) => {
  const stackWidth = useBreakpointValue({ base: '100%', sm: 'calc(100% - 150px)' })
  // TODO 編集ページ作ったらそのリンクを作る
  return (
    <ListItem>
      <Card direction={{ base: 'column', sm: 'row' }} mt={4} overflow='hidden' cursor={'pointer'}>
        {/* 仮の画像 */}
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '150px' }}
          src={data.image}
          alt='Caffe Latte'
        />
        <Stack w={stackWidth} p={4}>
          <CardHeader p={0}>
            <Heading fontSize={{ base: '14px', md: '18px' }}>{data.name}</Heading>
          </CardHeader>
          <CardBody p={0}>
            <Text fontSize={{ base: '12px', md: '14px' }}>
              <Box as='span' fontWeight={'bold'} mr={2}>
                在庫数:
              </Box>
              {data.quantityInStock}
              <Box as='span'>本</Box>
            </Text>
            <Text fontSize={{ base: '12px', md: '14px' }}>
              <Box as='span' fontWeight={'bold'} mr={2}>
                仕入れ値:
              </Box>
              {formatJpPrice(data.unitPrice)}
              <Box as='span'>円</Box>
            </Text>
            <Text fontSize={{ base: '12px', md: '14px' }}>
              <Box as='span' fontWeight={'bold'} mr={2}>
                販売価格:
              </Box>
              {formatJpPrice(data.sellingPrice)}
              <Box as='span'>円</Box>
            </Text>
            <Text fontSize={{ base: '12px', md: '14px' }}>
              <Box as='span' fontWeight={'bold'} mr={2}>
                仕入れ先:
              </Box>
              {data.supplier}
            </Text>
          </CardBody>
        </Stack>
      </Card>
      {/* </Stack> */}
    </ListItem>
  )
}
