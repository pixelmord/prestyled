---
to: src/components/<%= Name %>/<%= Name %>.stories.tsx
---
import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { <%= Name %> } from './<%= Name %>';
import * as <%= Name %>Readme from './<%= Name %>.readme.md';

storiesOf('<%= Name %>', module)
  .addDecorator(withReadme([<%= Name %>Readme as any]))
  .add('default', () => <<%= Name %>></<%= Name %>>);
