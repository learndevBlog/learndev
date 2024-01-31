import type { Metadata } from 'next'
import { Roboto, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Subscription } from './components/Subscription'


const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <Header />
          <Subscription />
          {children}
      </body>
    </html>
  )
}
