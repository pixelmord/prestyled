/** @jsx jsx */
import { jsx, Card as ThemeUiCard, CardProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<CardProps>>) => <ThemeUiCard {...rest} variant={variant} />;
export default Card;
