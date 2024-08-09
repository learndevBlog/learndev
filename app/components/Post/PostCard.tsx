import React from 'react';
import { Avatar } from '../Design/Avatar/Avatar';
import CustomLink from '../Design/Link/Link';

interface PostCardProps {
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

export const PostCard: React.FC<PostCardProps> = ({
    banner,
    author,
    category,
    post
}) => {
  return (
    <div className='max-w-[380px] w-full border rounded-lg hover:border-primary-pure h-fit hover:shadow-level3'>
        {banner && <div className="bg-no-repeat bg-center bg-cover w-full h-[180px] rounded-t-lg"  style={{ backgroundImage: `url(${banner})` }}></div>}
        <div className='flex flex-col gap-xxs p-4'>
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
                 <CustomLink heroicon='ArrowRightIcon' text="Read more" href={post.link}  />
            </div>
        </div>
    </div>

  );
};