/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0a09',
        panel: '#131110',
        emberDark: '#4a1b0c',
        ember: '#8a3416',
        gold: '#c99a52',
        goldBright: '#e8c583',
        parchment: '#d9cdb2',
        muted: '#7a7268',
        line: '#332e28',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
