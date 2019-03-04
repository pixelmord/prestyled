import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Button from './Button';
import * as ButtonReadme from './Button.readme.md';

storiesOf('Button', module)
  .add(
    'with text',
    withDocs(ButtonReadme as any, () => <Button>Hello Button</Button>)
  )
  .add('with some emoji', () => (
    <Button primary={true}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
