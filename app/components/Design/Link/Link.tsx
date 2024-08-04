import React from 'react'
import Link from 'next/link'
import { Icon } from '../Icon/Icon';

interface LinkProps {
  heroicon?: string;
  href: string;
  text: string;
}


const CustomLink: React.FC<LinkProps> = ({
  href,
  text,
  heroicon
}) => {
  return (
    <Link className='flex items-center group gap-2 hover:gap-3 transition-all ease-out duration-500' href={href}>
        <span className='font-base text-xs leading-default'>{text}</span>
        {heroicon && <Icon heroicon={heroicon} size='sm' circle={ false} color='dark-outlined' />}
    </Link>
  )
}

export default CustomLink
