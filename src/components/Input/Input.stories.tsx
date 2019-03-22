import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Input } from './Input';
import * as InputReadme from './Input.readme.md';

storiesOf('Input', module).add('default', () => <Input>@TODO</Input>, {
  notes: InputReadme,
});
