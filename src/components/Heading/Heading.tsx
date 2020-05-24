/** @jsx jsx */
import { jsx, Heading as ThemeUiHeading, HeadingProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Heading: React.FC<HeadingProps> = ({
  variant = 'default',
  as = 'h2',
  ...rest
}: PropsWithoutRef<PropsWithChildren<HeadingProps>>) => {
  let computedVariant;

  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      computedVariant = variant;
      break;
    default:
      switch (as) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          computedVariant = as;
          break;
        default:
          computedVariant = variant;
      }
  }

  return <ThemeUiHeading {...rest} variant={computedVariant} as={as} />;
};
export default Heading;
