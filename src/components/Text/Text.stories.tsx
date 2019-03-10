import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Text } from './Text';
import * as TextReadme from './Text.readme.md';

storiesOf('Typography', module).add(
  'Text',
  () => (
    <Text>
      A quam dictum egestas consectetur parturient vestibulum vel a parturient
      quis id litora ullamcorper mi etiam a ultrices a donec vivamus. Ligula
      parturient amet massa habitant id nunc quam laoreet tortor tellus ut nisi
      lectus a nunc adipiscing dignissim mi ullamcorper urna venenatis a
      adipiscing duis. Ad parturient nisi vivamus ullamcorper posuere a montes
      dis integer a varius fermentum ridiculus odio.
    </Text>
  ),
  {
    notes: TextReadme,
  }
);
