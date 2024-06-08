import React from 'react';
import { imageVariants } from './variants';
import { Icon } from '../Icon/Icon';

interface AvatarProps {
  profilePic?: string;
  size?: 'sm' | 'md' | 'lg';
  circle?: boolean;
  userName?: string;
  userTitle?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  userName,
  userTitle,
  size = 'sm',
  profilePic,
}) => {
  return (
    <div className='flex gap-2 items-center w-fit h-fit'>
      {profilePic ? (
        <div
          className={`${imageVariants({ size })} bg-cover bg-center`}
          style={{ backgroundImage: `url(${profilePic})` }}
        />
      ) : (
        <Icon color='primary' size={size} heroicon='UserIcon' />
      )}
      {userName && (
        <div className='flex flex-col w-[133px] h-[25px] justify-center gap-1'>
          <span className='text-neutral-low-pure font-highlight font-regular text-xs'>{userName}</span>
          {userTitle && <span className='text-neutral-low-medium font-base text-xxxs'>{userTitle}</span>}
        </div>
      )}
    </div>
  );
};
