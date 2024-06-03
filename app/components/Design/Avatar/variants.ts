// iconVariants.js
import { tv } from 'tailwind-variants';

export const imageVariants = tv({
  base: `
    rounded-circular
    bg-center
    bg-cover
  `,
  variants: {
    size: {
      sm: 'w-[24px] h-[24px]',
      md: 'w-[40px] h-[40px]',
      lg: 'w-[64px] h-[64px]',
    },
  },
});
