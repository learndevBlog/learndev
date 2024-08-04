import React from 'react'
import { InputText } from '../Design/Input/Input'

const Subscription = () => {
  return (
    <div className='w-full h-[470px] px-4 py-16 bg-losango-shape bg-no-repeat bg-left-top-6 bg-neutral-high-light flex justify-end'>
      <div className='gap-8 w-[658px] flex flex-col justify-center'>
        <span className='w-[300px] font-bold font-highlight text-xl leading-xs'>Subscribe for updates</span>
        <p className='w-[320px] font-base leading-lg font-xs'>We will be rolling out new articles and guides on a regular basis. Sign up to get the latest delivered to you. </p>
        <InputText placeholder="Sign up for updates" rightHeroicon='ArrowRightIcon' design="outlined" />
      </div>
    </div>
  )
}

export default Subscription
