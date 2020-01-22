import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';

import { PrestyledTheme as Theme } from '../../theme/index';
import { Box, BoxProps } from '../Box/index';

export const Form: StyledComponent<PropsWithoutRef<JSX.IntrinsicElements['form']>, BoxProps, Theme> = styled(
  Box
)``.withComponent('form');
