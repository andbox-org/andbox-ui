import { Config } from 'tailwindcss';

import { colors } from './colors';

export const theme: Config['theme'] = {
  colors,
  fontFamily: {
    sans: ['Noto Sans JP', 'sans-serif'],
    mono: ['Roboto Mono', 'monospace'],
    alphanumeric: ['Inter', 'sans-serif'],
  },
};
