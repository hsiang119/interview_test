/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      objectPosition: {
        '0_0': '0px 0px',
      }
    },
    screens: {
      'mobile': '375px',
      'bk2': '400px',
      'bk3': '570px'
    },
  },
  plugins: [],
}

