import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Text } from './Text';
import * as TextReadme from './Text.readme.md';

storiesOf('Typography', module)
  .addDecorator(withReadme([TextReadme as any]))
  .add('Text', () => <Text>This is a text</Text>);
