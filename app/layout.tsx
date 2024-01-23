import type { Metadata } from 'next'
import { Roboto, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'



const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: 'Learndev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <Header />
          {children}
      </body>
    </html>
  )
}
