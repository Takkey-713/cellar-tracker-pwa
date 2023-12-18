import { NextRequest, NextResponse } from 'next/server'
import { getWine } from '@/api/logics/wines/getWine'
import { wineSchema } from '@/api/wines/types'
import { updateWine } from '@/api/logics/wines/updateWine'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const wineId = Number(params.id)
  const wine = await getWine(wineId)
  return NextResponse.json({ wine })
}

export async function PATCH(_req: NextRequest, { params }: { params: { id: string } }) {
  const requestBody = await _req.json() // eslint-disable-line
  const parsedData = wineSchema.parse(requestBody)
  const wineId = Number(params.id)
  const wine = await updateWine(wineId, parsedData)
  return NextResponse.json({ wine })
}
