/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)',
      },
    },
    keyframes: {
      darken: {
        '0%': { opacity: '0%' },
        '100%': { opacity: '50%' },
      },
    },
    animation: {
      darken: 'darken .3s ease-in'
    }
  },
  plugins: [],
};
