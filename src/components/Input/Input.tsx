import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme';

export interface IInputProps extends HTMLProps<HTMLInputElement> {}

export const Input: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['input']>,
  IInputProps,
  Theme
> = styled('input')``;
