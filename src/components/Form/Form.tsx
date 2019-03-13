import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';

import { Theme } from '../../theme';
import { Box, IBoxProps } from '../Box';

export const Form: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['form']>,
  IBoxProps,
  Theme
> = styled(Box)``.withComponent('form');
