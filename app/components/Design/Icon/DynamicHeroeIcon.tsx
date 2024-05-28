// components/DynamicHeroIcon.tsx
import React, { FC } from 'react';
import * as HIcons from '@heroicons/react/outline';
import { ClassNames } from '@emotion/react';

interface DynamicHeroIconProps {
  icon: string;
  color: string;
  size: string;
  className?: string;
}

const DynamicHeroIcon: FC<DynamicHeroIconProps> = ({ icon, color, size, className}) => {
  // Dynamically access the correct icon
  const TheIcon = HIcons[icon as keyof typeof HIcons];

  if (!TheIcon) {
    console.error(`Icon "${icon}" does not exist in @heroicons/react/outline`);
    return null;
  }

  return (
    <TheIcon className={`${size} ${color} ${className}`} aria-hidden="true" />
  );
};

export default DynamicHeroIcon;
