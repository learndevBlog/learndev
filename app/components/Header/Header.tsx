import React from 'react'
import { Logo } from '../Design/Logo/Logo'
import { Icon } from '../Design/Icon/Icon'
import { InputText } from '../Design/Input/Input'

const Header = () => {
  return (
    <div className={`bg-transparent w-full flex items-center border-b border-neutral-low-dark border-neutral-pure-low 
        h-20 justify-between p-4 max-w-[1340px] fixed top-0 z-20`}>
        <Logo mode='dark' labeled='h' />
        <p className='w-full max-w-[246px] leading-md font-base text-xs'>Aliquam augue dui, ultrices nec nulla id, laoreet iaculis arcu.</p>
        <div className='flex items-center w-full max-w-[400px] justify-between'>
            <InputText placeholder="Sign up for updates" rightHeroicon='ArrowRightIcon' design="outlined" />
            <Icon heroicon='MenuIcon' color='dark-outlined' size='md'/>
        </div>
    </div>
  )
}

export default Header
