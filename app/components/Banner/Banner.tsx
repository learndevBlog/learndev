
import Link from 'next/link'
import React from 'react'
import { Icon } from '../Design/Icon/Icon'
import { Avatar } from '../Design/Avatar/Avatar'
import Pill from '../Design/Pill/Pill'
import Image from 'next/image'

const FeaturedArticles = [
    {
        username: "João Vitor",
        'bg-image': 'bg-circle-shape',
        category: 'development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/',
        avatar: '/'
    },
    {
        username: "Thiago Bomfim",
        'bg-image': 'bg-circle-shape',
        category: 'data science',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/',
        avatar: '/images/solo-leveling.jpeg',
    },
    {
        username: "João Roque",
        'bg-image': 'bg-circle-shape',
        category: 'development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/',
        avatar: '/',
    },
]

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };



    const userName = 'João Roque'
    return (
        <div className='h-[858px] w-full flex flex-col justify-center items-center z-10 '>
            {/* carrousel card */}
            {FeaturedArticles.map((article, index) => (
                <div key={index} className={`h-full w-full flex items-center justify-center ${article['bg-image']} bg-no-repeat relative`}>
                    <div className='h-[622px] w-[690px] flex flex-col gap-10 py-16 px-4'>
                        <div className='flex justify-between items-center w-full'>
                            <span className='leading-lg font-base text-xxxs'>FEATURED ARTICLE</span>
                            <Pill>{article.category}</Pill>
                        </div>
                        <div>
                            <span className='font-semibold font-highlight text-display leading-xs'>{article.description}</span>
                        </div>
                        <div className='flex justify-between'>
                            <Avatar profilePic={article.avatar}  size='md' userName={article.username} />
                            <Link className='flex items-center' href={article.href} >
                                Read more 
                                <Icon heroicon='ArrowRightIcon' size='sm' circle={false} color='dark-outlined'/>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            {/* carrousel control */}
            <div className='carroseu-control h-[64px] text-neutral-low-pure bg-transparent absolute bottom-20'>Carroseu control</div>
        </div>
    )
}

export default Banner
