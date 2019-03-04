---
to: src/components/<%= Name %>/<%= Name %>.tsx
---
import styled from '@emotion/styled';
import * as React from 'react';

import { ComponentProps } from '../../types/Component';

export interface <%= Name %>Props extends ComponentProps {

}

export const <%= Name %>: React.SFC<<%= Name %>Props> = styled('div')`

`;
