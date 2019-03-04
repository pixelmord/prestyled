import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Box } from './Box';
import * as BoxReadme from './Box.readme.md';

storiesOf('Box', module)
  .addDecorator(withReadme([BoxReadme as any]))
  .add('default', () => (
    <Box border="1px solid lightblue" p={5} my={2} bg={'lightgrey'}>
      This is a box
    </Box>
  ));
