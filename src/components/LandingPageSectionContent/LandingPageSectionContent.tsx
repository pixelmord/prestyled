/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { PropsWithChildren } from 'react';

export const LandingPageSectionContent: React.FC<BoxProps> = ({ variant, ...rest }: PropsWithChildren<BoxProps>) => {
  const localVariant = variant ? `landingPage.sectionContent.${variant}` : 'landingPage.sectionContent.default';
  return <Box {...rest} variant={localVariant} />;
};
export default LandingPageSectionContent;
