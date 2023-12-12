import { authOptions } from '@/_lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ApiResultSchema } from './types'
import { ListContent } from '@/(private)/list/_components/ListContent'

interface Params {
  searchParams: {
    page?: string
    perPage?: string
  }
}

interface ApiFnRequest {
  userId: string
  page: string
  perPage: string
}

export default async function List({ searchParams }: Params) {
  const session = await getServerSession(authOptions)
  if (session && session.user) {
    const userId = session.user.id
    const page = searchParams.page || '1'
    const perPage = searchParams.perPage || '10'
    const result = await getWineList({ userId, page, perPage })
    console.log(result)
    return <ListContent data={result} />
  } else {
    redirect('/unauthorized')
  }
}

const getWineList = async (args: ApiFnRequest) => {
  const { userId, page, perPage } = args
  const baseUrl = process.env.BASE_URL || ''
  const queryParams = new URLSearchParams({ userId, page, perPage }).toString()
  const res = await fetch(`${baseUrl}/api/wines?${queryParams}`)
  const data = await res.json() // eslint-disable-line
  const result = ApiResultSchema.parse(data)
  return result
}
