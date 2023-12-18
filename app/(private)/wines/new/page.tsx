import { authOptions } from '@/_lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { FormContent } from './_components/FormContent'

export default async function List() {
  const session = await getServerSession(authOptions)
  if (session && session.user) {
    return <FormContent userId={session.user.id} />
  } else {
    redirect('/unauthorized')
  }
}
