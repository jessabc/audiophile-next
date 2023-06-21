/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        'orange': '#D87D4A',
        'lightOrange': '#e48c59',
        'dark': '#101010',
        'gray': '#F1F1F1',
        'light': '#FAFAFA',
        'black': '#000000',
        'white': '#FFFFFF',
        'pink': '#fbaf85',
        'error': '#CD2C2C'
      },
    },
  },
  plugins: [],
}
