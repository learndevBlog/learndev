'use client'
import { Button } from '@mui/material';
import Image from 'next/image'

import tw from 'tailwind-styled-components';
import { CustomLink } from './CustomLink';
import { CustomDropdown } from './CustomDropdown';
import { useState } from 'react';
import { Logo } from './Design/Logo/Logo';
import { Icon } from './Design/Icon/Icon';
import { InputText } from './Design/Input/Input';



export const Header = () => {
  const [product, setProduct] = useState(null);
  const [resource, setResource] = useState(null);
  const [active, setActive] = useState<string | null>('home');

  const handleActive = (linkName: string) => {
    setActive(linkName);
  }

  return (
    <div className='flex mt-8 gap-4'>
      <Logo mode='dark' labeled='h' />
      <Icon heroicon="HomeIcon" color="dark" size="md" />
      <InputText
        invalid={true}
        disabled={false}
        design='outlined'
        leftHeroicon="BellIcon" 
        placeholder="something to say"
        rightHeroicon="ArrowRightIcon" 
        /></div>
  )
}
   
const HeaderContainer = tw.header`
  w-full
  py-4
  gap-4
`

const Nav = tw.nav`
  flex
  items-center
  justify-between
`

const LogoSection = tw.section`
  flex
  items-center
  flex-1
  gap-4
`

const LogoContainer = tw.div`
  flex
  items-center
  gap-4
`

const MenuContainer = tw.div`
  flex
  flex-1
  items-center
  gap-8
  ml-10
`

const AuthSection = tw.section`
  flex  
  items-center
  gap-4
  mr-24
`