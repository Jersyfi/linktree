/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tamarillo': {
          50: '#fff0f0',
          100: '#ffdfde',
          200: '#ffc4c3',
          300: '#ff9b99',
          400: '#ff625f',
          500: '#ff312d',
          600: '#f4120e',
          700: '#ce0a07',
          800: '#aa0d0a',
          900: '#83110f',
        },
        'steam': {
          50: '#f4f7fb',
          100: '#e9eef5',
          200: '#cddaea',
          300: '#a2bcd7',
          400: '#6f98c1',
          500: '#4d7baa',
          600: '#3e6796',
          700: '#314f73',
          800: '#2b4461',
          900: '#283b52',
        },
        'steam2': {
          'light': '#3e6796',
          'dark': '#0f216e',
        },
        'instagram': {
          50: '#fff7eb',
          100: '#fee9c7',
          200: '#fdd18a',
          300: '#fcaf45',
          400: '#fb9724',
          500: '#f5720b',
          600: '#d95006',
          700: '#b43309',
          800: '#92270e',
          900: '#78210f',
        },
        'spotify': {
          50: '#f0fdf4',
          100: '#dbfde7',
          200: '#b9f9ce',
          300: '#82f3aa',
          400: '#45e37d',
          500: '#1ed760',
          600: '#11a847',
          700: '#11843b',
          800: '#136832',
          900: '#12552c',
        },
        'snapchat': {
          50: '#fbffe7',
          100: '#f5ffc1',
          200: '#efff86',
          300: '#eeff41',
          400: '#f5ff0d',
          500: '#fffc00',
          600: '#d1bc00',
          700: '#a68902',
          800: '#896a0a',
          900: '#74560f',
        },
        'youtube': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#ffc9c9',
          300: '#fda5a4',
          400: '#f97170',
          500: '#f14342',
          600: '#cd201f',
          700: '#bb1b1a',
          800: '#9a1b1a',
          900: '#801d1c',
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
