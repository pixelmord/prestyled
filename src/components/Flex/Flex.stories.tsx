import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Box } from '../Box';
import { Flex } from './Flex';
import * as FlexReadme from './Flex.readme.md';

storiesOf('Flex', module)
  .addDecorator(withReadme([FlexReadme as any]))
  .add('default', () => (
    <Flex>
      <Box width={1 / 2} p={2} color={'black'} bg="aqua">
        flex
      </Box>
      <Box width={1 / 2} p={2} color={'white'} bg="green">
        box
      </Box>
    </Flex>
  ));
