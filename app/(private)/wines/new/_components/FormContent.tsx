'use client'

import React from 'react'
import {
  Flex,
  Button,
  Heading,
  Input,
  Select,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useFormLogic } from '@/(private)/wines/new/_components/useFormLogic'
import { categories } from 'const/categories'
import { varieties } from 'const/varieties'

interface Props {
  userId: string
}

export const FormContent: React.FC<Props> = ({ userId }) => {
  const { register, onSubmit, errors } = useFormLogic(userId)
  return (
    <Flex as={'section'} alignItems='center' py={8} px={4} justifyContent='center'>
      <Flex
        direction='column'
        py={8}
        px={4}
        border='1px'
        borderColor='gray.300'
        rounded={6}
        width={{ base: '340px', md: '375px' }}
      >
        <Heading mb={6}>在庫登録</Heading>
        <form onSubmit={onSubmit}>
          <FormControl isInvalid={!!errors.name} mb={3}>
            <FormLabel htmlFor={'name'}>商品名</FormLabel>
            <Input
              id='name'
              {...register('name')}
              variant='filled'
              fontSize={{ base: '12px', md: '14px' }}
              focusBorderColor={'transparent'}
              type='text'
              autoComplete='name'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.district} mb={3}>
            <FormLabel htmlFor={'district'}>産地</FormLabel>
            <Input
              id='district'
              {...register('district')}
              variant='filled'
              fontSize={{ base: '12px', md: '14px' }}
              focusBorderColor={'transparent'}
              type='district'
              autoComplete='district'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.district && errors.district.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.quantityInStock} mb={6}>
            <FormLabel htmlFor={'quantityInStock'}>在庫数</FormLabel>
            <Input
              id='quantityInStock'
              {...register('quantityInStock', { valueAsNumber: true })}
              variant='filled'
              fontSize={{ base: '12px', md: '14px' }}
              focusBorderColor={'transparent'}
              type='number'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.quantityInStock && errors.quantityInStock.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.unitPrice} mb={6}>
            <FormLabel htmlFor={'unitPrice'}>仕入値</FormLabel>
            <Input
              id='unitPrice'
              {...register('unitPrice', { valueAsNumber: true })}
              variant='filled'
              fontSize={{ base: '12px', md: '14px' }}
              focusBorderColor={'transparent'}
              type='number'
              autoComplete='unitPrice'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.unitPrice && errors.unitPrice.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.sellingPrice} mb={6}>
            <FormLabel htmlFor={'sellingPrice'}>販売価格</FormLabel>
            <Input
              id='sellingPrice'
              {...register('sellingPrice', { valueAsNumber: true })}
              variant='filled'
              fontSize={{ base: '12px', md: '14px' }}
              focusBorderColor={'transparent'}
              type='number'
              autoComplete='sellingPrice'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.sellingPrice && errors.sellingPrice.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.category} mb={3}>
            <FormLabel htmlFor='category'>カテゴリ</FormLabel>
            <Select id='category' {...register('category')} fontSize={{ base: '12px', md: '14px' }}>
              <option value=''>カテゴリを選択</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.variety} mb={3}>
            <FormLabel htmlFor='variety'>品種</FormLabel>
            <Select id='variety' {...register('variety')} fontSize={{ base: '12px', md: '14px' }}>
              <option value=''>品種を選択</option>
              {varieties.map((variety) => (
                <option key={variety.id} value={variety.name}>
                  {variety.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.variety && errors.variety.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.supplier} mb={6}>
            <FormLabel htmlFor={'supplier'}>仕入先</FormLabel>
            <Input
              id='supplier'
              {...register('supplier')}
              variant='filled'
              fontSize={{ base: '12px', md: '14px' }}
              focusBorderColor={'transparent'}
              type='text'
              autoComplete='supplier'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.supplier && errors.supplier.message}
            </FormErrorMessage>
          </FormControl>

          {/* TODO Google Cloud StorageにFileを保存して画像URLをvalueにすること */}
          <FormControl isInvalid={!!errors.image} mb={6}>
            <FormLabel htmlFor='image'>画像</FormLabel>
            <Input
              id='image'
              {...register('image')}
              type='hidden'
              value={
                'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              }
            />
            {/* <Input id='image' type='file' accept='image/*' display='none' /> */}
            <Button mt={4}>アップロード</Button>

            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.image && errors.image.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description} mb={6}>
            <FormLabel htmlFor={'description'}>商品詳細</FormLabel>
            <Textarea
              id='description'
              {...register('description')}
              variant='filled'
              fontSize={{ base: '12px', md: '14px' }}
              focusBorderColor={'transparent'}
              autoComplete='description'
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>

          <Button type={'submit'} colorScheme='teal' width={'100%'}>
            登録
          </Button>
        </form>
      </Flex>
    </Flex>
  )
}
