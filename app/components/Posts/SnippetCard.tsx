import React, { ReactNode } from 'react';
import { Avatar } from '../Design/Avatar/Avatar';
import Link from 'next/link';
import { Icon } from '../Design/Icon/Icon';
import { Card } from '../Design/Card/Card';



interface snippetCardProps {
  banner: string
  author: {
    name: string
    profilePic: string
    job: string
  }
  category: string
  post: {
    title: string
    summary: string
    created_date: string
    link: string
  }
}

export const SnippetCard: React.FC<snippetCardProps> = ({
    banner,
    author,
    category,
    post
}) => {
  return (
    <Card banner={banner}>
        <div className='flex flex-col gap-xxs'>
            <div className='flex items-center justify-between'>
                <Avatar size='md' userName={author.name} profilePic={author.profilePic} userTitle={author.job} />
                <span className='px-4 py-quark bg-primary-light text-neutral-low-pure font-base font-regular text-xxxs rounded-md'>{category}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-highlight font-medium text-sm text-black leading-xs'>{post.title}</p>
                <p className='font-base leading-xl text-xxs font-regular'>{post.summary}</p>
            </div>
            <div className='flex items-center justify-between'>
                <span className='font-base font-medium text-xxs'>{post.created_date}</span>
                <Link className='flex gap-2 items-center text-neutral-low-pure' href={post.link} >
                    <span>Read more</span>
                 <Icon size='sm' circle={false} heroicon='ArrowRightIcon' color='dark-outlined' /></Link>
            </div>
        </div>
    </Card>
   
  );
};
