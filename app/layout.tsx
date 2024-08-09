import { Poppins } from 'next/font/google'
import './globals.css'

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
          <main className='flex min-h-screen justify-center'>
            <section className='w-full'>
              {children}
            </section>
          </main>
      </body>
    </html>
  )
}
