import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from './Button';
import * as ButtonReadme from './Button.readme.md';

storiesOf('Button', module)
  .add('default', () => <Button>Click the Button</Button>, {
    notes: ButtonReadme,
  })
  .add('primary', () => <Button variant="primary">Click the Button</Button>, {
    notes: ButtonReadme,
  });
