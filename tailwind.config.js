const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [
      require('@headlessui/tailwindcss')({ prefix: 'ui' }),
      require('tailwindcss-text-fill-stroke'),
  ],
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  //Any class that is generated dynamically goes here
  safelist: [
    'bg-panel-text-danger',
    'bg-panel-text-important',
    'bg-panel-text-other',
    'bg-panel-text-warning',
    'text-panel-text-other',
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '300ms',
    },
    extend: {
      fontFamily: {
        'sans': ['Sora', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        extralight: 100,
        light: 200,
        normal: 400,
        medium: 400,
        semibold: 500,
        bold: 600,
        extrabold: 700,
        black: 800
      },
      colors: {
        'button-danger': 'var(--button-danger)',
        'button-danger-border': 'var(--button-danger-border)',
        'button-danger-hover': 'var(--button-danger-hover)',
        'button-danger-text': 'var(--button-danger-text)',
        'button-primary': 'var(--button-primary)',
        'button-primary-border': 'var(--button-primary-border)',
        'button-primary-hover': 'var(--button-primary-hover)',
        'button-primary-text': 'var(--button-primary-text)',
        'button-secondary': 'var(--button-secondary)',
        'button-secondary-border': 'var(--button-secondary-border)',
        'button-secondary-hover': 'var(--button-secondary-hover)',
        'button-secondary-text': 'var(--button-secondary-text)',
        'header-background': 'var(--header-background)',
        'header-icon': 'var(--header-icon)',
        'header-icon-primary': 'var(--header-icon-primary)',
        'header-text': 'var(--header-text)',
        'header-text-important': 'var(--header-text-important)',
        'header-user-background': 'var(--header-user-background)',
        'header-user-text': 'var(--header-user-text)',
        'logo-primary': 'var(--logo-primary)',
        'logo-secondary': 'var(--logo-secondary)',
        'panel-background': 'var(--panel-background)',
        'panel-background-alt': 'var(--panel-background-alt)',
        'panel-background-overlay': 'var(--panel-background-overlay)',
        'panel-background-transparent': 'var(--panel-background-transparent)',
        'panel-border': 'var(--panel-border)',
        'panel-icon': 'var(--panel-icon)',
        'panel-icon-action': 'var(--panel-icon-action)',
        'panel-icon-danger': 'var(--panel-icon-danger)',
        'panel-icon-important': 'var(--panel-icon-important)',
        'panel-icon-warning': 'var(--panel-icon-warning)',
        'panel-input': 'var(--panel-input)',
        'panel-menu-item-background': 'var(--panel-menu-item-background)',
        'panel-menu-item-background-hover': 'var(--panel-menu-item-background-hover)',
        'panel-menu-item-text': 'var(--panel-menu-item-text)',
        'panel-tags': 'var(--panel-tags)',
        'panel-text': 'var(--panel-text)',
        'panel-text-danger': 'var(--panel-text-danger)',
        'panel-text-important': 'var(--panel-text-important)',
        'panel-text-other': 'var(--panel-text-other)',
        'panel-text-primary': 'var(--panel-text-primary)',
        'panel-text-warning': 'var(--panel-text-warning)',
        'slider-background': 'var(--slider-background)',
        'slider-background-alt': 'var(--slider-background-alt)',
        'slider-color': 'var(--slider-color)',
        'slider-color-alt': 'var(--slider-color-alt)',
        'topnav-background': 'var(--topnav-background)',
        'topnav-border': 'var(--topnav-border)',
        'topnav-icon': 'var(--topnav-icon)',
        'topnav-icon-important': 'var(--topnav-icon-important)',
        'topnav-icon-primary': 'var(--topnav-icon-primary)',
        'topnav-icon-warning': 'var(--topnav-icon-warning)',
        'topnav-text': 'var(--topnav-text)',
        'topnav-text-primary': 'var(--topnav-text-primary)',
        transparent: 'transparent',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '62.5': '15.625rem',
      },
      width: {
        '400': '25rem',
      },
      opacity: {
        '65': '.65',
        '85': '.85',
      },
      dropShadow: {
        'md': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      borderWidth: {
        '16': '16px',
      },
      screens: {
        '3xl': '1630px',
      },
    },
  },
  variants: {
    margin: ['first'],
  },
}
