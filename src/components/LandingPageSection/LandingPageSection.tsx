/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { PropsWithChildren } from 'react';

export const LandingPageSection: React.FC<BoxProps> = ({ variant, as, ...rest }: PropsWithChildren<BoxProps>) => {
  const localVariant = variant ? `landingPage.section.${variant}` : 'landingPage.section.default';
  return <Box {...rest} variant={localVariant} as={as ? as : 'section'} />;
};
export default LandingPageSection;
