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
import { useFormLogic } from '@/(private)/wines/[id]/edit/_components/useFormogic'
import { WineSchema } from '@/(private)/wines/types/wine'
import { varieties } from 'const/varieties'
import { categories } from 'const/categories'

interface Props {
  data: WineSchema
  userId: string
}

export const EditForm: React.FC<Props> = ({ data, userId }) => {
  const { wine } = data

  const { register, onSubmit, errors } = useFormLogic(wine.id, userId)
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
              defaultValue={wine.name}
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
              defaultValue={wine.district}
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
              defaultValue={wine.quantityInStock}
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
              defaultValue={wine.unitPrice}
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
              defaultValue={wine.sellingPrice}
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
              {categories.map((category) => (
                <option
                  key={category.id}
                  defaultValue={category.name === wine.category ? wine.category : ''}
                >
                  {category.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.variety} mb={3}>
            <FormLabel htmlFor='variety'>品種</FormLabel>
            <Select id='variety' {...register('variety')} fontSize={{ base: '12px', md: '14px' }}>
              <option value={wine.variety}>{wine.variety}</option>
              {varieties.map((variety) => (
                <option
                  key={variety.id}
                  defaultValue={variety.name === wine.variety ? wine.variety : ''}
                >
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
              defaultValue={wine.supplier}
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
            <Input id='image' {...register('image')} type='hidden' defaultValue={wine.image} />
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
              defaultValue={wine.description}
            />
            <FormErrorMessage fontSize={{ base: '12px', md: '14px' }}>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>

          <Button type={'submit'} colorScheme='teal' width={'100%'}>
            更新
          </Button>
        </form>
      </Flex>
    </Flex>
  )
}
