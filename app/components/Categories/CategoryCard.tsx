import Link from 'next/link'
import React from 'react'
import { Icon } from '../Design/Icon/Icon'
import Pill from '../Design/Pill/Pill'
import CustomLink from '../Design/Link/Link';

interface CategoryCardProps {
    className?: string;
    onClick?: Function;
    order: string;
    category: string;
    description: string;
    href: string;
    color?: 'primary' | 'dark' | 'primary-outlined' | 'dark-outlined' 
  }

const CategoryCard: React.FC<CategoryCardProps> = ({
    className,
    onClick,
    color,
    order,
    category,
    description,
    href
}) => {
  return (
    <div className='max-w-[380px] w-full border rounded-lg hover:border-primary-pure h-fit hover:shadow-level3 group hover:cursor-pointer'>
        <div className={`rounded-lg p-xxs bg-neutral-high-pure h-full`}>
            <div className='w-full flex flex-col gap-10'>
                <div className='flex justify-between'>
                    <span className='font-base text-xxs'>{order}</span>
                    <Pill color='primary' active={false} />
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='font-semibold text-lg text-neutral-low-pure'>{category}</span>
                </div>
                <div className='flex flex-col gap-2.5 items-end'>
                    <p className='font-base text-xxs leading-xl text-neutral-low-pure'>
                        {description}
                    </p>
                    <CustomLink heroicon='ArrowRightIcon' text='See this category'  href={`${href}`} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard