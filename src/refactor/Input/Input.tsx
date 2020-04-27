import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { PrestyledTheme as Theme } from '../../theme/index';

export const Input: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['input']>,
  HTMLProps<HTMLInputElement>,
  Theme
> = styled('input')``;
