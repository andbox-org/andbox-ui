/** @type {import('tailwindcss').Config} */
import { tailwindConfigColors } from './src/theme/colors';

module.exports = {
  prefix: 'and-',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: tailwindConfigColors,
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
      alphanumeric: ['Inter', 'sans-serif'],
    },
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
