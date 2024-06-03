// iconVariants.js
import { tv } from 'tailwind-variants';

export const iconCircleVariants = tv({
  base: 'flex items-center justify-center',
  variants: {
    size: {
      sm: 'w-[24px] h-[24px]',
      md: 'w-[40px] h-[40px]',
      lg: 'w-[64px] h-[64px]',
    },
    circle: {
      true: 'rounded-circular',
      false: 'border-none',
    },
    color: {
      primary: 'bg-primary-pure border',
      warning: 'bg-feedback-warning-pure text-feedback-warning-light',
      secondary: 'bg-secondary-pure text-secondary-dark',
      dark: 'bg-neutral-low-pure text-neutral-high-pure',
      white: 'bg-neutral-high-pure border-neutral-high-light border text-neutral-low-pure',
      'primary-outlined': 'border border-primary-pure text-primary-pure ',
      'warning-outlined': 'border  border-feedback-warning-pure text-feedback-warning-pure',
      'secondary-outlined': ' border border-feedback-helper-dark text-feedback-helper-dark',
      'dark-outlined': ' border border-neutral-low-pure text-neutral-low-pure',
      'white-outlined': ' border border-neutral-high-light text-neutral-high-light',
    },
  },
});

export const dynamicHeroIconVariants = tv({
  base: '',
  variants: {
    size: {
      sm: 'h-[16px] w-[16px]',
      md: 'h-[24px] w-[24px]',
      lg: 'h-[32px] w-[32px]',
    },
    color: {
        primary: 'text-highlight-light',
        warning: 'text-feedback-warning-light',
        secondary: 'text-secondary-dark',
        dark: 'text-neutral-high-pure',
        white: 'text-neutrla-low-pure',
        'primary-outlined': 'text-primary-pure bg-white',
        'warning-outlined': 'text-feedback-warning-pure',
        'secondary-outlined': 'text-feedback-helper-dark',
        'dark-outlined': 'text-neutral-low-pure',
        'white-outlined': 'text-neutral-high-light',
      },
  },
});
