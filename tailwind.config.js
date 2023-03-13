/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin-sans)', 'sans-serif'],
        ibmPlexMono: ['var(--font-ibm-plex-mono)', 'monospace'],
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        fadeDown: 'fadeDown 1s ease-out',
        leftToRight: 'leftToRight 0.7s ease-out',
      },
      keyframes: {
        fadeDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        leftToRight: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
