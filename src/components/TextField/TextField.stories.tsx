import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { TextField } from './TextField';
import * as TextFieldReadme from './TextField.readme.md';

storiesOf('TextField', module).add(
  'default',
  () => <TextField>@TODO</TextField>,
  { notes: TextFieldReadme }
);
