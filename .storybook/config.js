import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';

import themeDefault from '../theme';

addDecorator(
  withOptions({
    name: 'Prestyled',
    url: 'https://github.com/pixelmord/prestyled'
  })
);
addDecorator(withInfo());
import { withThemesProvider } from 'storybook-addon-emotion-theme';

const themes = [themeDefault];
addDecorator(withThemesProvider(themes));

// automatically import all files ending in *.stories.tsx
const req = require.context('../components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
