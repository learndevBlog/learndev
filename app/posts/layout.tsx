import { Suspense } from 'react'
import Loading from './loading'

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='px-12'>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  )
}
