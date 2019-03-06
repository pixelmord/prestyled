import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Button } from './Button';
import * as ButtonReadme from './Button.readme.md';

storiesOf('Button', module)
  .addDecorator(withReadme([ButtonReadme as any]))
  .add('default', () => <Button>Click the Button</Button>)
  .addDecorator(withReadme([ButtonReadme as any]))
  .add('primary', () => <Button variant="primary">Click the Button</Button>);
