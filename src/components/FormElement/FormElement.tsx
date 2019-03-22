import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme';

export interface IFormElementProps extends HTMLProps<HTMLDivElement> {}

export const FormElement: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  IFormElementProps,
  Theme
> = styled('div')``;
