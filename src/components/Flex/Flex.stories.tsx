import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Box } from '../Box';
import { Flex } from './Flex';
import * as FlexReadme from './Flex.readme.md';

storiesOf('Layout', module).add(
  'Flex (Container)',
  () => (
    <Flex>
      <Box width={1 / 2} p={2} color={'black'} bg="aqua">
        flex
      </Box>
      <Box width={1 / 2} p={2} color={'white'} bg="green">
        box
      </Box>
    </Flex>
  ),
  { notes: FlexReadme }
);
