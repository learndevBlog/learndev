import React from 'react'

const Pill = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='rounded-pill px-4 py-1 bg-primary-light text-neutral-low-pure font-base text-xxs'>
      {children}
    </div>
  )
}

export default Pill
