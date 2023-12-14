import { authOptions } from '@/_lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { FormContent } from './_components/FormContent'
import { ApiResultSchema } from './types'

export default async function List() {
  const session = await getServerSession(authOptions)
  if (session && session.user) {
    const formItem = await getFormItem()
    return <FormContent userId={session.user.id} data={formItem} />
  } else {
    redirect('/unauthorized')
  }
}

const getFormItem = async () => {
  const baseUrl = process.env.BASE_URL || ''
  const res = await fetch(`${baseUrl}/api/formItem`)
  const data = await res.json() // eslint-disable-line
  const result = ApiResultSchema.parse(data)
  return result
}
