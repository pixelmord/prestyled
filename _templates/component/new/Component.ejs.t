---
to: src/components/<%= name %>/<%= name %>.tsx
---
import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme';

export interface I<%= name %>Props extends HTMLProps<HTMLDivElement> {}

export const <%= name %>: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  I<%= name %>Props,
  Theme
> = styled('div')`

`;
