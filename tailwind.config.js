// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          move: 'move 3s ease-in-out infinite',
        },
        keyframes: {
          move: {
            '0%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(50px)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        fontFamily: {
          playFont: ['Play', 'sans-serif'],
          playBoldFont: ['Play-Bold', 'sans-serif']
        },
      },
    },
    plugins: [],
  }
  