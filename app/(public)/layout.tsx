import type { Metadata } from 'next'
import Header from '@/_components/header/Header'
export const metadata: Metadata = {
  title: 'Cellar Tracker Toppage',
  description: 'Cellar Tracker',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  )
}
