'use client'
import { Flex } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <>
        トップページです
        {/* このページは基本的にどのユーザーもこれるページでマークアップは再度でOK
          // 簡単な説明を入れるだけでいい ログイン OR サインアップの導線のみ設置する感じで */}
      </>
    </Flex>
  )
}
