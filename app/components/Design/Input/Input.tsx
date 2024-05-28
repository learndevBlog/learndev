
import React from 'react';
import { Icon } from '../Icon/Icon';
import { iconInputVariants, inputElemVariants, inputWrapperVariants } from './variants';

interface InputTextProps {
  type?: 'text' | 'password';
  placeholder?: string;
  className?: string;
  label?: string;
  helperText?: string;
  leftHeroicon?: string;
  rightHeroicon?: string;
  disabled?: boolean;
  invalid?: boolean;
  design?: 'bordered' | 'outlined' | 'pure';
}

export const InputText: React.FC<InputTextProps> = ({
  type = 'text',
  placeholder,
  className,
  label,
  helperText,
  leftHeroicon,
  rightHeroicon,
  design = 'pure',
  disabled = false,
  invalid = false,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <span className="font-family-highlight font-bold text-xs">{label}</span>}
      <div className={inputWrapperVariants({ disabled, design, invalid })} tabIndex={0}>
        <div className="flex items-center gap-3">
          {leftHeroicon && (
            <Icon
              className='group-hover:bg-inherit'
              iconClassName={iconInputVariants({ disabled, design, invalid })}
              heroicon={leftHeroicon}
              circle={false}
              size="sm"
              color='dark-outlined'
            />
          )}
          <input
            className={inputElemVariants({ disabled, invalid })}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
          />
        </div>
        {rightHeroicon && (
          <Icon
            className='group-hover:bg-inherit'
            iconClassName={iconInputVariants({ disabled, design, invalid  })}
            heroicon={rightHeroicon}
            circle={false}
            size="sm"
            color='dark-outlined'
          />
        )}
      </div>
      {helperText && <span className="font-family-base font-regular text-xxs">{helperText}</span>}
    </div>
  );
};
