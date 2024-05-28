// variants.js
import { tv } from 'tailwind-variants';

export const inputWrapperVariants = tv({
  base: 'group flex items-center justify-between rounded-md px-2 w-[320px] h-[48px]',
  variants: {
    design: {
        bordered: `
          border
          border-neutral-low-pure
          focus-within:border-primary-pure
          focus-within:hover:border-primary-pure
          hover:border-primary-dark
        `,
        outlined: `
            border 
            border-neutral-high-medium 
            focus-within:border-primary-pure
            focus-within:hover:border-primary-pure
            hover:border-neutral-low-light 
            hover:bg-neutral-high-light
          `,
        pure: 'border-none'
    },
    disabled: {
      true: ""
    },
    invalid:{
      true:`
        border-feedback-warning-pure 
        hover:bg-inherit
        hover:border-feedback-warning-pure
        focus-within:bg-inherit
        focus-within:border-feedback-warning-pure
        focus-within:hover:border-feedback-warning-pure
      `
    }
  },
  compoundVariants: [
    {
      design: 'outlined',
      disabled: true,
      class: `
        bg-neutral-high-medium
        border-neutral-high-dark
        pointer-events-none
        hover:bg-neutral-high-dark
        hover:border-neutral-high-dark
        focus-within:bg-neutral-high-dark
        focus-within:border-neutral-high-dark
      `,
    },
    {
      design: 'bordered',
      disabled: true,
      class: `
        bg-inherit
        border-neutral-high-dark
        pointer-events-none
        hover:bg-neutral-high-medium
        hover:border-neutral-high-medium
        focus-within:bg-neutral-high-medium
        focus-within:border-neutral-high-medium
      `,
    },
  ]
});

export const inputElemVariants = tv({
  base: `
    border-none 
    bg-inherit 
    placeholder:text-neutral-low-high 
    text-neutral-low-pure 
    focus:outline-none 
    focus:text-primary-pure
    group-hover:text-neutral-low-light
    group-focus-within:text-primary-pure
    group-focus-within:hover:text-primary-pure
    `,
  variants: {
    disabled: {
      true: `
        text-neutral-high-dark 
        pointer-events-none
        group-hover:text-neutral-high-dark
        group-focus-within:text-neutral-high-dark
      `
    },
    invalid: {
      true: `
        text-feedback-warning-pure
        group-focus-within:text-feedback-warning-pure
        group-focus-within:group-hover:text-feedback-warning-pure
        group-hover:text-feedback-warning-pure
      `
    }
  },
});


export const iconInputVariants = tv({
  base: 'group-focus-within:text-primary-pure group-focus-within:group-hover:text-primary-pure',
  variants: {
    design: {
      bordered: "group-hover:text-primary-dark",
      outlined: "group-hover:text-neutral-low-pure",
      pure: "group-hover:text-primary-dark"
    },
    disabled: {
      true: `
        text-neutral-high-dark 
        group-focus-within:text-neutral-high-dark
        group-focus-within:group-hover:text-neutral-high-dark
        group-hover:text-neutral-high-dark
      `,
      false: ''
    },
    invalid: {
      true: `
        text-feedback-warning-pure
        group-focus-within:text-feedback-warning-pure
        group-focus-within:group-hover:text-feedback-warning-pure
        group-hover:text-feedback-warning-pure
      `,
      false: ''
    }
  },
});
