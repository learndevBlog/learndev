'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Icon } from '../Design/Icon/Icon'
import { Avatar } from '../Design/Avatar/Avatar'
import Tag from '../Design/Tag/Tag'
import CustomLink from '../Design/Link/Link'
import Pill from '../Design/Pill/Pill'

const FeaturedArticles = [
    {
        username: "João Vitor",
        'bg-image': 'bg-circle-shape',
        category: 'development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/',
        avatar: undefined
    },
    {
        username: "Thiago Bomfim",
        'bg-image': 'bg-square-shape',
        category: 'data science',
        description: 'Algumas letras mudadas sit amet, consectetur adipiscing elit',
        href: '/',
        avatar: '/images/solo-leveling.jpeg',
    },
    {
        username: "João Roque",
        'bg-image': 'bg-triangle-shape',
        category: 'development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/',
        avatar: undefined,
    },
]

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePillClick = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className='h-screen w-full flex z-10 overflow-hidden  
            transition-transform ease-out duration-500 relative'>
            {/* Carrossel card */}
            {FeaturedArticles.map((article, index) => (
                <div 
                    key={index} 
                    className={`
                        h-full w-full
                        flex-shrink-0 flex items-center justify-center 
                        ${article['bg-image']} bg-no-repeat
                    `}  
                    style={{ 
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}>
                    <div className='h-[622px] w-full  max-w-[690px] flex flex-col gap-10 py-16 px-4'>
                        <div className='flex justify-between items-center w-full'>
                            <span className='leading-lg font-base text-xxxs'>FEATURED ARTICLE</span>
                            <Tag>{article.category}</Tag>
                        </div>
                        <div className='h-[368px] overflow-clip'>
                            <span className='font-semibold font-highlight text-display leading-xs'>{article.description}</span>
                        </div>
                        <div className='flex justify-between'>
                            <Avatar profilePic={article.avatar} size='md' userName={article.username} />
                            <CustomLink text='Read more' heroicon='ArrowRightIcon' href={article.href} />
                        </div>
                    </div>
                </div>
            ))}
            {/* Carrossel control */}
            <div className='flex justify-center items-center h-[64px] text-neutral-low-pure gap-4
                bg-transparent absolute bottom-4 w-full px-4 bg-black'>
                {FeaturedArticles.map((item, index) => (
                    <Pill active={currentIndex === index} color='default' onClick={() => handlePillClick(index)} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Banner
