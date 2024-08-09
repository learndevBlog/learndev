'use client'
import React, { useEffect, useState } from 'react'
import { Logo } from '../Design/Logo/Logo'
import { Icon } from '../Design/Icon/Icon'
import { InputText } from '../Design/Input/Input'

const Header = () => {
  const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0)');
  const [opacity, setOpacity] = useState(1);
  const [borderOpacity, setBorderOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const scrollRatio = Math.min(scrollTop / maxScroll, 1);
      
      setBgColor(`rgba(242, 242, 242, ${scrollRatio})`);
      setOpacity(1 - scrollRatio);
      setBorderOpacity(1 - scrollRatio);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`transition-all duration-300 ease-in-out w-full flex 
        items-center h-20 justify-between p-4 max-w-[1440px] fixed top-0 z-20`} 
      style={{ 
        backgroundColor: bgColor,
        borderBottom: `1px solid rgba(128, 128, 128, ${borderOpacity})`
      }}
    >
      <Logo mode='dark' labeled='h' />
      
      <p className={`transition-opacity duration-300 ease-in-out w-full max-w-[246px] 
        leading-md font-base text-xs`} 
        style={{ opacity }}>
        Aliquam augue dui, ultrices nec nulla id, laoreet iaculis arcu.
      </p>
      
      <div className='flex items-center w-full max-w-[400px] justify-between'>
        <InputText placeholder="Sign up for updates" rightHeroicon='ArrowRightIcon' design="outlined" />
        <Icon heroicon='MenuIcon' color='dark-outlined' size='md'/>
      </div>
    </div>
  )
}

export default Header
