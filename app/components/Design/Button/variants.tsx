import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base:  `
    flex
    gap-2
    justify-center
    items-center
    border
    px-xxs
    py-[12px]
    rounded-sm
    h-fit
    group
    `,
  variants: {
    color: {
      primary: `
        bg-primary-pure 
        hover:bg-primary-medium 
        focus:bg-primary-light
        `,
      dark: `
        bg-neutral-low-pure 
        hover:bg-neutral-low-dark 
        focus:bg-neutral-low-medium
        `,
      'primary-outlined': `
        border-primary-pure
        hover:bg-primary-pure hover:border-primary-pure
        focus:bg-primary-medium focus:border-primary-medium
      `,
      'dark-outlined': `
        border-neutral-low-pure 
        hover:bg-neutral-low-pure  hover:border-neutral-low-pure 
        focus:bg-neutral-low-dark focus:border-neutral-low-dark
      `,
    },
    disabled: {true: ''}
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: true,
      class:`
        bg-neutral-high-medium 
        focus:bg-neutral-high-medium 
        hover:bg-neutral-high-medium
        `
    },
    {
      color: 'dark',
      disabled: true,
      class: `
        bg-neutral-high-medium 
        focus:bg-neutral-high-medium 
        hover:bg-neutral-high-medium
        `
    },
    {
      color: 'primary-outlined',
      disabled: true,
      class: `
        bg-white
        hover:bg-inherit
        border-neutral-high-dark
        hover:border-neutral-high-dark
        `
    },
    {
      color: 'dark-outlined',
      disabled: true,
      class: 'bg-white hover:bg-inherit border-neutral-high-dark hover:border-neutral-high-dark'
    }
  ]
});

export const iconButtonVariants = tv({
  base: `
    bg-inherit
    font-bold
    text-neutral-high-pure
    focus:bg-primary-light
    group-hover:text-neutral-high-pure
    group-hover:bg-inherit
    group-focus:bg-inherit
    group-focus:text-neutral-high-pure
  `,
  variants: {
    disabled: {
      true: `
        text-neutral-low-light
        focus:bg-inherit
        group-hover:text-neutral-low-light
        group-hover:bg-inherit
        group-focus:bg-inherit
        group-focus:text-neutral-low-light
      `,
      false: ''
    }
  },
});

export const labelButtonVariants = tv({
  base: 'font-highlight text-xs font-bold',
  variants: {
    color: {
      primary: 'text-neutral-high-pure',
      dark: 'text-neutral-high-pure',
      'primary-outlined': `
        text-primary-pure 
        group-hover:text-neutral-high-pure 
        group-focus:text-neutral-high-pure
      `,
      'dark-outlined': `
        text-neutral-low-pure 
        group-hover:text-neutral-high-pure 
        group-focus:text-neutral-high-pure
      `
    },
    disabled: {
      true: 'text-neutral-low-light group-hover:text-neutral-low-light'
    }
  },
  
});
