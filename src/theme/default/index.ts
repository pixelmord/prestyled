import { Theme } from 'theme-ui';

import { alerts } from './alerts';
import { badges } from './badges';
import { borders, borderStyles, borderWidths } from './border';
import { buttons } from './buttons';
import { cards } from './cards';
import { colors } from './colors';
import { forms } from './forms';
import { grids } from './grids';
import { images } from './images';
import { links } from './links';
import { landingPage } from './landingPage';
import { mediaQueries } from './mediaQueries';
import { messages } from './messages';
import { opacities } from './opacities';
import { radii } from './radii';
import { shadows } from './shadows';
import { space, sizes } from './sizing';
import { styles, fonts, fontSizes, fontWeights, lineHeights, letterSpacings, text } from './typography';
import { zIndices } from './zIndices';

export interface PrestyledTheme extends Theme {
  name: string;
  [key: string]: any;
}

export const defaultTheme: PrestyledTheme = {
  name: 'Default',
  alerts,
  badges,
  borders,
  borderStyles,
  borderWidths,
  buttons,
  cards,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  forms,
  grids,
  images,
  landingPage,
  letterSpacings,
  lineHeights,
  links,
  mediaQueries,
  messages,
  opacities,
  radii,
  shadows,
  sizes,
  space,
  styles,
  text,
  zIndices,
};

export default defaultTheme;
