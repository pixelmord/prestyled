import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import themeDefault from '../src/theme';
import { GlobalStyle } from '../src/components/GlobalStyle';

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'Prestyled',
      brandUrl: 'https://github.com/pixelmord/prestyled',
    }),
  },
});

addDecorator(withA11y);
function withGlobalStyles(storyFn) {
  return (
    <div>
      <GlobalStyle />
      {storyFn()}
    </div>
  );
}

addDecorator(withGlobalStyles);

const emotionThemes = [themeDefault];
addDecorator(withThemesProvider(emotionThemes));

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
