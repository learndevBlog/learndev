import { tv } from 'tailwind-variants';

export const pillVariants = tv({
  base:  `
    rounded-circular
    w-4
    h-4
    transition-all
    duration-300
    ease
    cursor-pointer
    hover:rounded-pill
    focus:rounded-pill
    group-hover:rounded-pill
    relative
  `,
  variants: {
    color: {
      default: `
        hover:w-8
        hover:h-4
        focus:w-8
        focus:h-4
        bg-neutral-high-medium
        border
        border-neutral-high-dark
        `,
      primary: `
        bg-primary-light
        hover:w-8
        group-hover:w-10
      `}
    }
});
