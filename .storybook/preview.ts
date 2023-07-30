import type { Preview } from '@storybook/react';


// Noto Sans JP
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';

// Roboto Mono
import '@fontsource/roboto-mono/400.css';

// Inter
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
