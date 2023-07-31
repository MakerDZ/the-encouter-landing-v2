/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      screens: {
        'xxs': '200px', // min-width
        'xs' : '400px',
        'sm' : '550px',
        'md' : '806px'
      },
      colors: {
        text_left : '#9116F5',
        text_middle : 'rgba(221, 22, 216, 0.69)',
        text_right : 'rgba(242, 117, 110, 0.69)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated')
  ],
}
