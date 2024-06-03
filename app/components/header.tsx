'use client'

import tw from 'tailwind-styled-components';
import { useState } from 'react';
import { Logo } from './Design/Logo/Logo';
import { Icon } from './Design/Icon/Icon';
import { InputText } from './Design/Input/Input';
import { Avatar } from './Design/Avatar/Avatar';



export const Header = () => {
  const [product, setProduct] = useState(null);
  const [resource, setResource] = useState(null);
  const [active, setActive] = useState<string | null>('home');

  const handleActive = (linkName: string) => {
    setActive(linkName);
  }

  return (
    <div className='flex mt-8 gap-4'>
      <Logo mode='dark' labeled='none' />
      <Logo mode='dark' labeled='h' />
      <Logo mode='light' labeled='v' />
  
      <Icon heroicon="HomeIcon" color="white" size="sm" />
      <Icon heroicon="HomeIcon" color="warning-outlined" size="md" />
      <Icon heroicon="HomeIcon" color="secondary" size="lg" />
      <Icon heroicon="HomeIcon" color="dark-outlined" size="md" />
      <Icon heroicon="HomeIcon" color="primary" size="sm" />

      <div className='flex flex-col gap-2'>
        <InputText
          invalid={false}
          disabled={false}
          design='bordered'
          leftHeroicon="BellIcon" 
          placeholder="something to say"
          rightHeroicon="ArrowRightIcon" 
          />
        <InputText
          invalid={false}
          disabled={false}
          design='outlined'
          placeholder="something to say"
          rightHeroicon="ArrowRightIcon" 
          />
        <InputText
          invalid={false}
          disabled={false}
          design='pure'
          leftHeroicon="BellIcon" 
          placeholder="something to say"
          />
        <InputText
          invalid={false}
          disabled={true}
          design='pure'
          leftHeroicon="BellIcon" 
          placeholder="something to say"
          />
        <InputText
          invalid={false}
          disabled={true}
          design='bordered'
          leftHeroicon="BellIcon" 
          placeholder="something to say"
          />
        <InputText
          invalid={false}
          disabled={true}
          design='outlined'
          leftHeroicon="BellIcon" 
          placeholder="something to say"
          />
      </div>
    </div>
     
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