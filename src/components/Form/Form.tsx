import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';

import { Theme } from '../../theme';
import { Box } from '../Box';

export const Form: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['form']>,
  Partial<CSSStyleDeclaration>,
  Theme
> = styled(Box)``.withComponent('form');
