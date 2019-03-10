---
to: src/components/<%= Name %>/<%= Name %>.stories.tsx
---
import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { <%= Name %> } from './<%= Name %>';
import * as <%= Name %>Readme from './<%= Name %>.readme.md';

storiesOf('<%= Name %>', module)
  .add('default', () => <<%= Name %>></<%= Name %>>, {notes: <%= Name %>Readme});
