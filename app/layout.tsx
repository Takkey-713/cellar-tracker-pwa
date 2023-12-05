import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from './_provider/provider'
import Header from './_components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png'></link>
        <meta name='theme-color' content='#f69435' />
      </head>
      <body className={inter.className}>
        <Header></Header>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
