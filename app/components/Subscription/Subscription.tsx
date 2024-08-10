import React from 'react'
import { InputText } from '../Design/Input/Input'

const Subscription = () => {
  return (
    <div className='w-full h-[470px] px-4 py-16 bg-neutral-high-light flex justify-end relative z-10 bg-shape-losango'>
      {/* <Image className='absolute bottom-0 left-20 z-20 bg-black'
      alt='losango shape' src="/images/shapes/losango.svg" width={520} height={520} /> */}
      <div className='gap-8 w-full max-w-[658px] flex flex-col justify-center'>
        <span className='w-full max-w-[300px] font-bold font-highlight text-xl leading-xs'>Subscribe for updates</span>
        <p className='w-full max-w-[320px] font-base leading-lg font-xs'>We will be rolling out new articles and guides on a regular basis. Sign up to get the latest delivered to you. </p>
        <InputText placeholder="Sign up for updates" rightHeroicon='ArrowRightIcon' design="outlined" />
      </div>
    </div>
  )
}

export default Subscription
