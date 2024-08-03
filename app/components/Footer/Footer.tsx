import React from 'react'
import { Logo } from '../Design/Logo/Logo'

const Footer = () => {
  return (
    <div className='h-60 bg-neutral-low-dark py-12 flex justify-center w-full'>
      <div className='px-4 w-full flex justify-between items-center max-w-[1340px]'>
        <div className='flex flex-col gap-2 text-neutral-high-pure'>
            <span className='font-medium text-sm'>Sitemap | Privacy Policy | Accessibility</span>
            <span className='font-regular text-xxxs'>© 2024 LearnDev. All Rights Reserved.</span>
        </div>
        <Logo labeled='h' mode='light' />
      </div>
    </div>
  )
}

export default Footer
