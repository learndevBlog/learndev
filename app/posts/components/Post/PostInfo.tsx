import React from 'react'
import tw from 'tailwind-styled-components';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { CardContent } from '@mui/material';
import Image from 'next/image'
import { PostType } from '@/app/posts/post';

export const PostInfo = ({post}: {post: PostType}) => {
  const authorName = post.author.name.length > 25 ? post.author.name.substring(0, 25) + '...' : post.author.name;
  return (
    <Container>
        <div className='flex gap-2'>
            {post.author.image ? 
                <Image 
                    className='rounded-full' 
                    width={40} 
                    height={40} 
                    src={post.author.image} 
                    alt={post.author.name} 
                /> : 
                <UserCircleIcon className='w-10 h-10'/>
            }
            <div className='flex flex-col'>
                <span className='font-semibold'>
                    {authorName}
                </span>
                <span className='text-gray-500'>Software Engineer</span>
            </div>
        </div>
        <div>
            <div>
                <span>{post.category.name}</span>
            </div>
            <div className='text-gray-500 flex gap-1 items-center'>
                <span>Published</span>
                <span>{post.publishDate}</span>
            </div>
        </div>
    </Container>
  )
}

const Container = tw(CardContent)`
    flex
    justify-between
    text-sm
    border-t
`;
