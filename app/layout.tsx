import { Poppins } from 'next/font/google'
import './globals.css'

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            <section className='max-w-[1440px] w-full'>
              {children}
            </section>
          </main>
      </body>
    </html>
  )
}
