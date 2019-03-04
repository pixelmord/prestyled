import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import themeDefault from '../src/theme';

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
import { withThemesProvider } from 'storybook-addon-emotion-theme';

const emotionThemes = [themeDefault];
addDecorator(withThemesProvider(emotionThemes));

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
