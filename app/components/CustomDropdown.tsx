'use client'
import React from 'react'
import { CustomLink } from './CustomLink'
import { Menu, MenuItem } from '@mui/material'
import { toTitleCase } from '../utils'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export const CustomDropdown = ({
    label,
    state,
    setState,
    children,
    classname,
    onClick
}:{
    children?: React.ReactNode;
    classname?: string;
    label: string,
    state: any,
    onClick?: () => void
    setState: React.Dispatch<React.SetStateAction<any>>
}) => {
    const handleClick = (event: any) => {
        setState(event.currentTarget);
        if (onClick) {
            onClick();
        }
      };

    const handleClose = () => {
        setState(null);
      };

  return (
    <div>
        <CustomLink href="#" onClick={handleClick}>
            <div className='flex items-center gap-2'>
                <span>{toTitleCase(label)}</span>
                <ChevronDownIcon className='w-4 h-4' />
            </div>
        </CustomLink>
        <Menu
            anchorEl={state}
            open={Boolean(state)}
            onClose={handleClose}
        >
        {React.Children.map(children, (child, index) => (
            <MenuItem className={classname} onClick={handleClose} key={index}>
                {child}
            </MenuItem>
        ))}
        </Menu>
    </div>
  )
}