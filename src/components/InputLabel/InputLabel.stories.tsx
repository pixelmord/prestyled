import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { InputLabel } from './InputLabel';
import * as InputLabelReadme from './InputLabel.readme.md';

storiesOf('InputLabel', module).add(
  'default',
  () => <InputLabel>@TODO</InputLabel>,
  { notes: InputLabelReadme }
);
