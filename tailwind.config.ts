import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-pure': 'var(--tokens-brand-color-primary-pure)',
        'primary-light': 'var(--tokens-brand-color-primary-light)',
        'primary-medium': 'var(--tokens-brand-color-primary-medium)',
        'primary-dark': 'var(--tokens-brand-color-primary-dark)',
        'secondary-pure': 'var(--tokens-brand-color-secondary-pure)',
        'secondary-light': 'var(--tokens-brand-color-secondary-light)',
        'secondary-medium': 'var(--tokens-brand-color-secondary-medium)',
        'secondary-dark': 'var(--tokens-brand-color-secondary-dark)',
        'feedback-helper-pure': 'var(--tokens-feedback-helper-pure)',
        'feedback-helper-light': 'var(--tokens-feedback-helper-light)',
        'feedback-helper-medium': 'var(--tokens-feedback-helper-medium)',
        'feedback-helper-dark': 'var(--tokens-feedback-helper-dark)',
        'feedback-warning-pure': 'var(--tokens-feedback-warning-pure)',
        'feedback-warning-light': 'var(--tokens-feedback-warning-light)',
        'feedback-warning-medium': 'var(--tokens-feedback-warning-medium)',
        'feedback-warning-dark': 'var(--tokens-feedback-warning-dark)',
        'neutral-high-pure': 'var(--tokens-neutral-high-pure)',
        'neutral-high-light': 'var(--tokens-neutral-high-light)',
        'neutral-high-medium': 'var(--tokens-neutral-high-medium)',
        'neutral-high-dark': 'var(--tokens-neutral-high-dark)',
        'neutral-low-pure': 'var(--tokens-neutral-low-pure)',
        'neutral-low-light': 'var(--tokens-neutral-low-light)',
        'neutral-low-medium': 'var(--tokens-neutral-low-medium)',
        'neutral-low-dark': 'var(--tokens-neutral-low-dark)',
        'highlight-pure': 'var(--tokens-highlight-pure)',
        'highlight-light': 'var(--tokens-highlight-light)',
        'highlight-medium': 'var(--tokens-highlight-medium)',
        'highlight-dark': 'var(--tokens-highlight-dark)',
      },
      fontSize: {
        xxxs: 'var(--font-size-xxxs)',
        xxs: 'var(--font-size-xxs)',
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        md: 'var(--font-size-md)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        xxl: 'var(--font-size-xxl)',
        xxxl: 'var(--font-size-xxxl)',
        display: 'var(--font-size-display)',
        giant: 'var(--font-size-giant)',
      },
      lineHeight: {
        default: 'var(--line-height-default)',
        xs: 'var(--line-height-xs)',
        sm: 'var(--line-height-sm)',
        md: 'var(--line-height-md)',
        lg: 'var(--line-height-lg)',
        xl: 'var(--line-height-xl)',
        xxl: 'var(--line-height-xxl)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        pill: 'var(--border-radius-pill)',
        circular: 'var(--border-radius-circular)',
      },
      borderWidth: {
        none: 'var(--border-width-none)',
        hairline: 'var(--border-width-hairline)',
        thin: 'var(--border-width-thin)',
        thick: 'var(--border-width-thick)',
        heavy: 'var(--border-width-heavy)',
      },
      opacity: {
        semiopaque: 'var(--opacity-level-semiopaque)',
        intense: 'var(--opacity-level-intense)',
        medium: 'var(--opacity-level-medium)',
        light: 'var(--opacity-level-light)',
        semitransparent: 'var(--opacity-level-semitransparent)',
      },
      boxShadow: {
        level1: 'var(--shadow-level-1)',
        level2: 'var(--shadow-level-2)',
        level3: 'var(--shadow-level-3)',
        level4: 'var(--shadow-level-4)',
      },
      spacing: {
        quark: 'var(--spacing-quark)',
        nano: 'var(--spacing-nano)',
        xxs: 'var(--spacing-xxs)',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        xxl: 'var(--spacing-xxl)',
        xxxl: 'var(--spacing-xxxl)',
        huge: 'var(--spacing-huge)',
        giant: 'var(--spacing-giant)',
      },
      padding: {
        'insert-quark': 'var(--spacing-insert-quark)',
        'insert-nano': 'var(--spacing-insert-nano)',
        'insert-xxs': 'var(--spacing-insert-xxs)',
        'insert-xs': 'var(--spacing-insert-xs)',
        'insert-sm': 'var(--spacing-insert-sm)',
        'insert-md': 'var(--spacing-insert-md)',
        'insert-lg': 'var(--spacing-insert-lg)',
      },
      margin: {
        'insert-quark': 'var(--spacing-insert-quark)',
        'insert-nano': 'var(--spacing-insert-nano)',
        'insert-xs': 'var(--spacing-insert-xs)',
        'insert-sm': 'var(--spacing-insert-sm)',
        'insert-md': 'var(--spacing-insert-md)',
        'insert-lg': 'var(--spacing-insert-lg)',
      },
      fontFamily: {
        highlight: ['var(--font-family-highlight)', ...defaultTheme.fontFamily.sans],
        base: ['var(--font-family-base)', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        bold: 'var(--font-weight-bold)',
        medium: 'var(--font-weight-medium)',
        regular: 'var(--font-weight-regular)',
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top-6': 'left top -6rem',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-bottom-6': 'right bottom -6rem',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 1rem',
      },
      backgroundImage: {
        'circle-shape': "url('/images/shapes/circle.svg')",
        'square-shape': "url('/images/shapes/square.svg')",
        'triangle-shape': "url('/images/shapes/circle.svg')",
        'rectangular-shape': "url('/images/shapes/circle.svg')",
        'losango-shape': "url('/images/shapes/losango.svg')",
      }
    },
  },
  plugins: []
};

export default config;
