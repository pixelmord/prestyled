import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { GlobalStyle } from './GlobalStyle';
import * as GlobalStyleReadme from './GlobalStyle.readme.md';

storiesOf('GlobalStyle', module).add(
  'default',
  () => (
    <div>
      <GlobalStyle />
      <div>This text is not Times New Roman</div>
    </div>
  ),
  { notes: GlobalStyleReadme }
);
