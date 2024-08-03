import React from 'react';
import DynamicHeroIcon from './DynamicHeroeIcon';
import { dynamicHeroIconVariants, iconCircleVariants } from './variants';

// The heroicon name should be something like ArrowRightIcon, MenuIcon
// in order for it to be download from heroicon repo

interface IconProps {
  color?: 'primary' | 'secondary' | 'warning' | 'dark' | 'white' | 
          'primary-outlined' | 'secondary-outlined' | 'warning-outlined' | 
          'dark-outlined' | 'white-outlined'
  size?: 'sm' | 'md' | 'lg';
  circle?: boolean;
  className?: string;
  iconClassName?: string;
  heroicon: string;
}

export const Icon: React.FC<IconProps> = ({
  heroicon,
  iconClassName,
  className,
  size = 'sm',
  circle = true,
  color = 'primary',
}) => {
  return (
    <div className={`${iconCircleVariants({ size, circle, color })} ${className}`}>
      <DynamicHeroIcon
        icon={heroicon}
        color={`${dynamicHeroIconVariants({ color })}`}
        size={`${dynamicHeroIconVariants({ size })}`}
        className={ iconClassName }
      />
    </div>
  );
};
