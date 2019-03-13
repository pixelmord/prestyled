---
to: src/components/<%= name %>/<%= name %>.tsx
---
import styled from '@emotion/styled';
import * as React from 'react';

import { ComponentProps } from '../../types/Component';

export interface <%= name %>Props extends ComponentProps {

}

export const <%= name %>: React.SFC<<%= name %>Props> = styled('div')`

`;
