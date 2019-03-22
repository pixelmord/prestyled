import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { FormElement } from './FormElement';
import * as FormElementReadme from './FormElement.readme.md';

storiesOf('FormElement', module).add(
  'default',
  () => <FormElement>@TODO</FormElement>,
  { notes: FormElementReadme }
);
