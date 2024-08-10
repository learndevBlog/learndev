import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const PageTemplate = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageTemplate
