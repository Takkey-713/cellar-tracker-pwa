import { authOptions } from '@/_lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { WineShema } from '@/(private)/wines/types/wine'
import { EditForm } from '@/(private)/wines/[id]/edit/_components/EditForm'

export default async function List({ params: { id } }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (session && session.user && id) {
    const result = await getWine(id)
    return <EditForm data={result} />
  } else {
    redirect('/unauthorized')
  }
}

const getWine = async (id: string) => {
  const baseUrl = process.env.BASE_URL || ''
  const res = await fetch(`${baseUrl}/api/wines/${id}`)
  const data = await res.json() // eslint-disable-line
  const result = WineShema.parse(data)
  return result
}
