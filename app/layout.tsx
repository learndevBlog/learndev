import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'

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
          <main className='px-12'>
            <Header />
            <section className='mt-5'>
              {children}
            </section>
          </main>
      </body>
    </html>
  )
}
