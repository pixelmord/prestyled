import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme/index';

export interface IInputLabelProps extends HTMLProps<HTMLLabelElement> {}

export const InputLabel: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['label']>,
  IInputLabelProps,
  Theme
> = styled('label')``;
