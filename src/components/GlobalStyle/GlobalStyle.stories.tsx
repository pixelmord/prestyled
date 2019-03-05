import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { GlobalStyle } from './GlobalStyle';
import * as GlobalStyleReadme from './GlobalStyle.readme.md';

storiesOf('GlobalStyle', module)
  .addDecorator(withReadme([GlobalStyleReadme as any]))
  .add('default', () => (
    <React.Fragment>
      <GlobalStyle />
      <div>This text is not Times New Roman</div>
    </React.Fragment>
  ));
