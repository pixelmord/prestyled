import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { FormFieldDescription } from './FormFieldDescription';
import * as FormFieldDescriptionReadme from './FormFieldDescription.readme.md';

storiesOf('FormFieldDescription', module).add('default', () => <FormFieldDescription>@TODO</FormFieldDescription>, {
  notes: FormFieldDescriptionReadme,
});
