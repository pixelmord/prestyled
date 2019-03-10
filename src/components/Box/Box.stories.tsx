import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Box } from './Box';
import * as BoxReadme from './Box.readme.md';

storiesOf('Layout', module).add(
  'Box',
  () => (
    <Box border="1px solid lightblue" p={5} my={2} bg={'lightgrey'}>
      This is a box
    </Box>
  ),
  { notes: BoxReadme }
);
