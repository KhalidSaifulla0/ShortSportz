/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    '../../packages/ui/**/*.{js, jsx, ts,tsx}',
    './src/**/*.{js, jsx, ts, tsx}',
    '../../packages/ui/src/**/*.{js, jsx, ts, tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
