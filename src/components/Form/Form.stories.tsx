import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Form } from './Form';
import * as FormReadme from './Form.readme.md';

storiesOf('Forms', module).add('Form', () => <Form>form content</Form>, {
  notes: FormReadme,
});
