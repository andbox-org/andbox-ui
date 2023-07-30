/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'and-',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
