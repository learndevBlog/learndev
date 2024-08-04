import React from 'react'
import { Card } from '../Design/Card/Card'
import { Icon } from '../Design/Icon/Icon'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='w-full max-w-[1440px] h-screen p-16 flex flex-col gap-6
        bg-square-shape bg-neutral-high-light bg-right-bottom-6 bg-no-repeat'>
      <div className='flex flex-col gap-4'>
        <span className='leading-default font-bold font-highlight text-xl'>Categories</span>
        <p className='font-base leading-default text-sm'>About what do you want to read?</p>
      </div>
      <div className='w-full max-w-[776px] flex gap-4 flex-wrap'>
            <Card>
                <div className='w-full flex flex-col gap-16'>
                    <div className='flex justify-between'>
                        <span className='font-base text-xxs'>01</span>
                        <span>Pill</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='font-semibold text-lg text-neutral-low-pure'>Development</span>
                        <p className='font-base text-xxs leading-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <Link className='flex items-center' href="/">
                            See this category
                            <Icon heroicon='ArrowRightIcon' size='sm' circle={false} color='dark-outlined' />
                        </Link>
                    </div>
                </div>
            </Card>
            
            <Card>
                <div className='w-ful max-w-[300px]  flex flex-col gap-16'>
                    <div className='flex justify-between'>
                        <span className='font-base text-xxs'>02</span>
                        <span>Pill</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='font-semibold text-lg text-neutral-low-pure'>Design</span>
                        <p className='font-base text-xxs leading-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <Link className='flex items-center' href="/">
                            See this category
                            <Icon heroicon='ArrowRightIcon' size='sm' circle={false} color='dark-outlined' />
                        </Link>
                    </div>
                </div>
            </Card>
            
            <Card>
                <div className='w-full max-w-[300px]  flex flex-col gap-16'>
                    <div className='flex justify-between'>
                        <span className='font-base text-xxs'>03</span>
                        <span>Pill</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='font-semibold text-lg text-neutral-low-pure'>Customer Suport</span>
                        <p className='font-base text-xxs leading-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <Link className='flex items-center' href="/">
                            See this category
                            <Icon heroicon='ArrowRightIcon' size='sm' circle={false} color='dark-outlined' />
                        </Link>
                    </div>
                </div>
            </Card>
            
            <Card>
                <div className='w-full max-w-[300px]  flex flex-col gap-16'>
                    <div className='flex justify-between'>
                        <span className='font-base text-xxs'>04</span>
                        <span>Pill</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='font-semibold text-lg text-neutral-low-pure'>Leadership</span>
                        <p className='font-base text-xxs leading-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <Link className='flex items-center' href="/">
                            See this category
                            <Icon heroicon='ArrowRightIcon' size='sm' circle={false} color='dark-outlined' />
                        </Link>
                    </div>
                </div>
            </Card>
            
      </div>
    </div>
  )
}

export default Categories
