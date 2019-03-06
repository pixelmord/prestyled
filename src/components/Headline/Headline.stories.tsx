import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Headline } from './Headline';
import * as HeadlineReadme from './Headline.readme.md';

storiesOf('Headline', module)
  .addDecorator(withReadme([HeadlineReadme as any]))
  .add('default', () => (
    <div>
      <Headline>This is a headline H1</Headline>
      <Headline as="h2">This is a headline H2</Headline>
      <Headline as="h3">This is a headline H3</Headline>
      <Headline as="h4">This is a headline H4</Headline>
      <Headline as="h5">This is a headline H5</Headline>
      <Headline as="h6">This is a headline H6</Headline>
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
  ));
