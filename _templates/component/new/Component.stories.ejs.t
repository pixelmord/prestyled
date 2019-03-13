---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { <%= name %> } from './<%= name %>';
import * as <%= name %>Readme from './<%= name %>.readme.md';

storiesOf('<%= name %>', module)
  .add('default', () => <<%= name %>></<%= name %>>, {notes: <%= name %>Readme});
