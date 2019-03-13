import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Form } from './Form';
import * as FormReadme from './Form.readme.md';

storiesOf('Form', module).add('default', () => <Form>form content</Form>, {
  notes: FormReadme,
});
