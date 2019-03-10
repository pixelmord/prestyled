import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { H1, H2, H3, H4, H5, H6, Headline } from './Headline';
import * as HeadlineReadme from './Headline.readme.md';

storiesOf('Typography', module).add(
  'Headline',
  () => (
    <div>
      <H1>This is a headline H1</H1>
      <H2>This is a headline H2</H2>
      <H3>This is a headline H3</H3>
      <H4>This is a headline H4</H4>
      <H5>This is a headline H5</H5>
      <H6>This is a headline H6</H6>
      <br />
      <Headline textStyle="h2">This is a headline H1, styled as H2</Headline>
      <Headline as="h2" textStyle="h1">
        This is a headline H2, styled as H1
      </Headline>
      <Headline as="h3" textStyle="h2">
        This is a headline H3, styled as H2
      </Headline>
      <Headline as="h4" textStyle="h3">
        This is a headline H4, styled as H3
      </Headline>
      <Headline as="h5" textStyle="h4">
        This is a headline H5, styled as H4
      </Headline>
      <Headline as="h6" textStyle="h5">
        This is a headline H6, styled as H5
      </Headline>
    </div>
  ),
  { notes: HeadlineReadme }
);
