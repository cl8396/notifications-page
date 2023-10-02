/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      blue: {
        300: 'hsl(219, 14%, 63%)',
        400: 'hsl(219, 12%, 42%)',
        500: 'hsl(219, 85%, 26%)',
        800: 'hsl(224, 21%, 14%)',
      },
      red: 'hsl(1, 90%, 64%)',
      gray: {
        100: 'hsl(210, 60%, 98%)',
        200: 'hsl(211, 68%, 94%)',
        250: 'hsl(205, 33%, 90%)',
      },
    },
    fontFamily: {
      jakarta: 'Jakarta, sans-serif',
    },
    fontWeight: {
      normal: '500',
      bold: '800',
    },
    extend: {},
  },
  plugins: [],
};
