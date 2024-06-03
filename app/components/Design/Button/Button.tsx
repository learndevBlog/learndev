
import React from 'react';
import { Icon } from '../Icon/Icon';
import { buttonVariants, iconButtonVariants, labelButtonVariants } from './variants';

interface ButtonProps {
  className?: string;
  label: string;
  heroIcon?: string;
  disabled?: boolean;
  color: 'primary' | 'dark' | 'primary-outlined' | 'dark-outlined' 
}

export const Button: React.FC<ButtonProps> = ({
    label,
    heroIcon,
    disabled = false,
    color
}) => {
  return (
    <button
        disabled={disabled}
        className={buttonVariants({ color, disabled  })}
        >
        {heroIcon && (
            <Icon
                className={`
                    group-hover:bg-inherit 
                    group-focus:bg-inherit
                    ${color == "dark" || color == "primary" ? 
                    'group-disabled:bg-neutral-high-medium' : 'bg-white'}
                `}
                iconClassName={iconButtonVariants({ disabled })}
                heroicon={heroIcon}
                size="sm"
                color={color}
                circle={false}
            />
            )}
        <span className={labelButtonVariants({ disabled, color  })}>{label}</span>
    </button>
  
  );
};
