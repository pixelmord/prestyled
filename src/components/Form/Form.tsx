import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';

import { Theme } from '../../theme/index';
import { Box, BoxProps } from '../Box';

export const Form: StyledComponent<PropsWithoutRef<JSX.IntrinsicElements['form']>, BoxProps, Theme> = styled(
  Box
)``.withComponent('form');
