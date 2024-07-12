/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'background' : 'var(--background-color)',
        'font' : 'var(--font-color)'
      },
      fontFamily : {
        'montage' : ['Montage'],
        'urbanist' : ['Urbanist']
      },
      height : {
        '1px' : '1px',
      },
      width : {
        '900' : '1250px',
      },
      fontSize : {
        '250xl' : '250px',
      },
    },
  },
  experimental: {
    applyComplexClasses: true,
  },
  plugins: [],
}