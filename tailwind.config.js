/** @type {import('tailwindcss').Config} */
import { tailwindConfigColors } from './src/theme';

module.exports = {
  prefix: 'and-',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: tailwindConfigColors,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
