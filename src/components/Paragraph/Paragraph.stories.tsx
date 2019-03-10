import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Paragraph } from './Paragraph';
import * as ParagraphReadme from './Paragraph.readme.md';

storiesOf('Typography', module).add(
  'Paragraph',
  () => (
    <Paragraph>
      Per imperdiet cras fringilla curae gravida vitae rutrum consectetur a
      eleifend proin urna elit elementum dictum dui. Torquent mi fringilla per
      fringilla lorem cras sem nulla suspendisse tempor ac suspendisse inceptos
      tristique adipiscing parturient dui fusce id a massa. Primis hac fames
      fusce nisl pulvinar nascetur nunc consectetur litora vehicula suspendisse
      vestibulum semper parturient ipsum enim accumsan. Parturient praesent
      euismod vestibulum maecenas semper ultricies sit blandit malesuada
      parturient imperdiet volutpat parturient nec phasellus ad.
    </Paragraph>
  ),
  {
    notes: ParagraphReadme,
  }
);
