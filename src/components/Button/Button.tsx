import styled from '@emotion/styled';
import * as React from 'react';
import {
  buttonStyle,
  ButtonStyleProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
} from 'styled-system';
import { ComponentProps } from '../../types/Component';
import { Box, BoxProps } from '../Box';

export interface ButtonProps
  extends ComponentProps,
    BoxProps,
    ButtonStyleProps,
    FontSizeProps,
    FontWeightProps {}

export const Button: React.SFC<ButtonProps> = styled(Box)`
  appearance: 'none';
  display: 'inline-block';
  text-align: 'center';
  line-height: 'inherit';
  text-decoration: 'none';
  ${buttonStyle}
  ${fontSize}
  ${fontWeight}
`;

Button.defaultProps = {
  as: 'button',
  bg: 'blue',
  border: 0,
  borderRadius: 4,
  color: 'white',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  type: 'button',
};
