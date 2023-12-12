import { NextRequest, NextResponse } from 'next/server'
import { listCount } from '@/api/_logics/wines/listCount'
import { getList } from '@/api/_logics/wines/getList'

import { createWine } from '@/api/_logics/wines/createWine'
import { wineSchema } from '@/api/wines/types'
import { ZodError } from 'zod'

export async function GET(_req: NextRequest) {
  const params = _req.nextUrl.searchParams
  const userId = params.get('userId') as string
  const page = Number(params.get('page'))
  const perPage = Number(params.get('perPage'))
  console.log(page)
  console.log(perPage)

  const total = await listCount(userId)
  const list = await getList(userId, page, perPage)

  const pagination = {
    page,
    perPage,
    total,
  }

  return NextResponse.json({ list, pagination })
}

export async function POST(_req: NextRequest) {
  try {
    const requestBody = await _req.json() // eslint-disable-line
    const parsedData = wineSchema.parse(requestBody)
    console.log(parsedData)

    const result = await createWine(parsedData)

    return NextResponse.json({ result })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
