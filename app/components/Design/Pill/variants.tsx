import { tv } from 'tailwind-variants';

export const pillVariants = tv({
  base:  `
    bg-primary-light
    rounded-circular
    w-4
    h-4
    transition-all
    duration-300
    ease
    cursor-pointer
    group-hover:rounded-pill
    group-hover:h-4
    group-hover:w-16
  `,
});
