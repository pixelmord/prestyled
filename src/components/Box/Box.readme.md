# Box

```js
import Box from './components/Box';
```

<!-- STORY -->

A `Box` is a base layout primitive that is meant for creating box-like components by extending it.

Most of the props of [styled-system](https://styled-system.com) are already mixed in.

## Example

```js
import styled from '@emotion/styled';
import * as React from 'react';
import {
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
} from 'styled-system';

import { Box, BoxProps } from '../Box';

export interface FlexProps
  extends BoxProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {}

export const Flex: React.SFC<FlexProps> = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;
```
