// iconVariants.js
import { tv } from 'tailwind-variants';

export const contentContainerVariants = tv({
  base: `
    
    `,
  variants: {

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
