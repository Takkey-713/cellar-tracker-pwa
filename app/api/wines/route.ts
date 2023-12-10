import { NextRequest, NextResponse } from 'next/server'
import { listCount } from '@/api/_logics/wines/listCount'
import { getList } from '@/api/_logics/wines/getList'

export async function GET(_req: NextRequest) {
  const params = _req.nextUrl.searchParams
  const userId = params.get('userId') as string
  const page = Number(params.get('page'))
  const perPage = Number(params.get('perPage'))

  const total = await listCount(userId)
  const list = await getList(userId, page, perPage)

  return NextResponse.json({ list, page, perPage, total })
}
