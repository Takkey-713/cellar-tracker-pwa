import { NextRequest, NextResponse } from 'next/server'
import { getWine } from '@/api/logics/wines/getWine'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const wineId = Number(params.id)
  const wine = await getWine(wineId)
  return NextResponse.json({ wine })
}
