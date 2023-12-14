import { NextResponse } from 'next/server'
import { getFormItem } from '@/api/_logics/formItem/getFormItem'

export async function GET() {
  const result = await getFormItem()
  const { categories, varieties } = result
  return NextResponse.json({ categories, varieties })
}
