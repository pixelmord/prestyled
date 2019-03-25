import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme/index';

export interface ITextFieldProps extends HTMLProps<HTMLDivElement> {}

export const TextField: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  ITextFieldProps,
  Theme
> = styled('div')``;
