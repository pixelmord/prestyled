import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { FormFieldMessage } from './FormFieldMessage';
import * as FormFieldMessageReadme from './FormFieldMessage.readme.md';

storiesOf('FormFieldMessage', module).add('default', () => <FormFieldMessage>@TODO</FormFieldMessage>, {
  notes: FormFieldMessageReadme,
});
