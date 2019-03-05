import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import React from 'react';

import themeDefault from '../src/theme';
import { GlobalStyle } from '../src/components/GlobalStyle';

addDecorator(
  withOptions({
    name: 'Prestyled',
    url: 'https://github.com/pixelmord/prestyled',
  })
);

addDecorator(
  withInfo({
    inline: true,
  })
);

const emotionThemes = [themeDefault];
addDecorator(withThemesProvider(emotionThemes));

// function withGlobalStyles(storyFn) {
//   return (
//     <div>
//       <GlobalStyle />
//       {storyFn()}
//     </div>
//   );
// }

// addDecorator(withGlobalStyles);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
